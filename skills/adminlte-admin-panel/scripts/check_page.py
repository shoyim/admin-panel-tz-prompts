#!/usr/bin/env python3
"""
Admin sahifani headless Chrome/Edge da ochib, JS xatolari va AdminLTE/plaginlar holatini tekshiradi.

Foydalanish:
    python check_page.py http://localhost:8000/admin            # bitta sahifa
    python check_page.py URL1 URL2 ... --cookie "session=abc"   # login talab qiladigan sahifalar

Chiqish kodi: 0 — xato yo'q, 1 — xato topildi, 2 — brauzer topilmadi.

Faqat Python standart kutubxonasi kerak. Brauzer: Chrome, Chromium yoki Edge (CHROME_PATH bilan ham berish mumkin).
"""
import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse

CANDIDATES = [
    os.environ.get("CHROME_PATH", ""),
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    shutil.which("google-chrome") or "",
    shutil.which("chromium") or "",
    shutil.which("chromium-browser") or "",
    shutil.which("microsoft-edge") or "",
]

# Brauzer o'zi chiqaradigan, sahifaga aloqasi yo'q xabarlar
NOISE = re.compile(r"Tracking Prevention|DevTools|favicon\.ico|Third-party cookie|chrome-extension://|extension://", re.I)
ERROR = re.compile(r"\[admin\]|Uncaught|exception|is not a function|is not defined|Cannot read|Failed to load|net::ERR", re.I)

def find_browser():
    for path in CANDIDATES:
        if path and os.path.isfile(path):
            return path
    return None


def run(browser, url, cookie, profile):
    args = [
        browser, "--headless=new", "--disable-gpu", "--no-first-run",
        "--user-data-dir=" + profile, "--enable-logging=stderr", "--v=0",
        "--virtual-time-budget=15000", "--window-size=1366,900",
        "--run-all-compositor-stages-before-draw", "--dump-dom", url,
    ]
    env = dict(os.environ)
    if cookie:
        # headless rejimda cookie berishning eng oddiy yo'li — extra header
        args.insert(1, "--extra-http-headers=Cookie: " + cookie)
    proc = subprocess.run(args, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=120, env=env)
    return proc.stdout, proc.stderr


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("urls", nargs="+")
    ap.add_argument("--cookie", default="")
    opts = ap.parse_args()

    browser = find_browser()
    if not browser:
        print("Brauzer topilmadi. CHROME_PATH muhit o'zgaruvchisini bering.")
        return 2

    failed = False
    profile = tempfile.mkdtemp(prefix="admin-check-")
    try:
        for url in opts.urls:
            # Konsol xatolari brauzer logidan olinadi. admin.js o'zi ham "[admin]" bilan
            # boshlanuvchi xatolar chiqaradi (masalan plagin skripti ulanmagan bo'lsa).
            dom, log = run(browser, url, opts.cookie, profile)
            problems = []
            for line in log.splitlines():
                if ":CONSOLE" not in line or NOISE.search(line):
                    continue
                # Eslatma: ":CONSOLE:<n>" dagi n — qator raqami, xato darajasi emas
                if ERROR.search(line):
                    problems.append(re.sub(r"^\[[^\]]*\]\s*", "", line).strip())

            title = re.search(r"<title>(.*?)</title>", dom, re.S)
            print("=" * 70)
            print("URL:   ", url)
            print("Title: ", title.group(1).strip() if title else "(yo'q)")
            if "login-page" in dom and "login" not in urllib.parse.urlparse(url).path:
                print("DIQQAT: login sahifasiga yo'naltirildi — --cookie bering")
            if problems:
                failed = True
                print("XATOLAR:")
                for p in dict.fromkeys(problems):
                    print("  -", p[:400])
            else:
                print("JS xatolari: yo'q")
    finally:
        shutil.rmtree(profile, ignore_errors=True)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

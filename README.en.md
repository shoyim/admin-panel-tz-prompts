# Admin Panel Spec Prompts (based on AdminLTE 2.4.18)

A collection of ready-to-use **technical specification (TZ) prompts** for building an admin panel on top of the **AdminLTE 2.4.18** template in any project — Laravel, Django, FastAPI, Node.js, Next.js, Yii2 or plain PHP.

The prompts are written to be pasted directly into an AI assistant (Claude, ChatGPT, Cursor, etc.): fill in the `{{...}}` placeholders for your project, copy, and send.

> The prompts themselves are written in Uzbek (Latin script). 🇺🇿 Uzbek README: [README.md](README.md)

## ⚡ Fastest path

| Your AI | What to do |
|---|---|
| **Claude Code** | Install the [`skills/adminlte-admin-panel`](skills/adminlte-admin-panel) skill ([instructions](ADMIN-PROMPT.md#claude-code-uchun-skill-sifatida-ornatish)), then in any project say *"build an admin panel for this project"* |
| **ChatGPT, Cursor, Copilot, Windsurf** | Send the single prompt from [`ADMIN-PROMPT.md`](ADMIN-PROMPT.md) with your project open |

The AI inspects your project (stack, models, auth), builds layout, login, RBAC, CRUD, dashboard, settings and audit log
in the AdminLTE 2.4.18 style from a tested kit (`admin.js` / `admin.css` / markup catalog), and checks every page for
JS errors in a headless browser. Style reference: [`assets/demo.html`](skills/adminlte-admin-panel/assets/demo.html).

## Contents

| Path | What it is |
|---|---|
| `00-MASTER-TZ.md` | Universal master spec prompt — start here |
| `01-UMUMIY-TALABLAR.md` | Shared standards: UI/UX, validation, code quality, security, performance |
| `02-ADMINLTE-KOMPONENTLAR.md` | Map of AdminLTE pages/plugins to admin features |
| `03-QABUL-CHECKLIST.md` | Acceptance checklist to verify each stage |
| `prompts/modules/` | 16 module prompts: auth, dashboard, CRUD, users & roles (RBAC), settings, media, notifications, reports & export, audit log, profile, payments (Payme/Click), SMS & Telegram, Excel import, multilingual content, API keys & webhooks, backup & system health |
| `prompts/stacks/` | 9 stack adapters: Laravel + Blade, Laravel API + SPA, Django, FastAPI, Node/Express, Next.js, Yii2, plain PHP, static HTML prototype |
| `examples/` | 6 filled-in examples: e-commerce store, library, quiz platform, training-center CRM, food delivery, clinic |

## How to use

1. Open `00-MASTER-TZ.md` and fill in `{{LOYIHA_NOMI}}` (project name), `{{STACK}}`, `{{ROLLAR}}` (roles), `{{ENTITYLAR}}` (entities), etc.
2. Append the matching file from `prompts/stacks/`.
3. Send module prompts from `prompts/modules/` **one at a time** — quality is much better than sending everything at once.
4. After each stage, ask the AI to self-check against `03-QABUL-CHECKLIST.md`.
5. Use `examples/` as a reference for how a complete spec looks.

## Recommended order

Layout → Auth → Users & roles → CRUD sections → Dashboard → Settings & media → Reports, audit log, notifications → Integrations (payments, SMS, import, i18n, API) → Backup & monitoring → Final checklist.

## Contributing

Open an [issue](../../issues/new/choose) to suggest a new module, stack or example, or send a pull request.

## License

MIT. AdminLTE — [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) (MIT).

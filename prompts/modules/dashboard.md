# Modul: Dashboard

```text
Admin panel bosh sahifasini (dashboard) yoz. Namuna: AdminLTE index.html va index2.html.

1-qator — small-box kartalar (col-lg-3 col-xs-6), har biri o'z bo'limiga havola:
{{KARTALAR}}
Misol: Bugungi buyurtmalar (bg-aqua, fa-shopping-cart), Yangi foydalanuvchilar (bg-green, fa-users),
Bugungi tushum (bg-yellow, fa-money), Ko'rib chiqilmagan arizalar (bg-red, fa-exclamation).

2-qator — grafiklar (Chart.js):
- Chiziqli grafik: oxirgi 30 kun bo'yicha {{ASOSIY_METRIKA}}, daterangepicker bilan davr tanlash
- Doughnut: {{TAQSIMOT}} bo'yicha ulush (masalan, statuslar yoki kategoriyalar)

3-qator:
- "Oxirgi yozuvlar" jadvali (box, 10 ta, status label bilan, "Hammasini ko'rish" havolasi)
- "Oxirgi faollik" — audit logdan timeline (UI/timeline.html uslubida)

Talablar:
- Kartalar va grafiklar foydalanuvchi ruxsatiga qarab ko'rsatiladi.
- Grafik ma'lumotlari alohida JSON endpoint orqali AJAX bilan yuklanadi.
- Statistika {{KESH_MINUT}} daqiqa keshlanadi; "Yangilash" tugmasi keshni tozalaydi.
- So'rovlar optimallashtirilgan (agregat SQL, indekslar), sahifa < 500ms.
- Raqamlar formatlangan (1 234 567), foiz o'zgarish (o'tgan davrga nisbatan) yashil/qizil strelka bilan.
```

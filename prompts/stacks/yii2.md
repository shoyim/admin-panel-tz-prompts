# Stack: Yii2

```text
STACK TALABLARI (Yii2 Advanced Template):
- Admin qismi `backend/` ilovasida, sayt — `frontend/`, umumiy modellar — `common/models`
- Layout: backend/views/layouts/main.php (starter.html asosida), header.php, left.php (sidebar), content.php
  (tayyor integratsiya kerak bo'lsa: hail812/yii2-adminlte3 emas, AdminLTE 2.4.18 assetlari AssetBundle orqali)
- AdminLteAsset: dist/css/AdminLTE.min.css, skins, dist/js/adminlte.min.js; plaginlar alohida AssetBundle'larda
- CRUD: Gii bilan generatsiya, keyin AdminLTE box'lariga moslashtirish; GridView + ActiveForm
- Ruxsatlar: Yii2 RBAC (DbManager), rollar va permissionlar migratsiya orqali
- Sidebar: yii\widgets\Menu yoki o'z widget, `visible` => Yii::$app->user->can('...')
- Select2: kartik-v/yii2-widget-select2, sana: kartik-v/yii2-widget-datepicker
- Export: kartik-v/yii2-export yoki phpoffice/phpspreadsheet
- Tarjima: common/messages/uz, ru
- Testlar: Codeception
```

# Stack: Django

```text
STACK TALABLARI (Django {{VERSIYA}}):
- Alohida app: `dashboard` (yoki `adminpanel`), standart django.contrib.admin dan mustaqil
- URL: path('{{ADMIN_PREFIX}}/', include('adminpanel.urls', namespace='adminpanel'))
- Shablonlar: templates/adminpanel/base.html (starter.html asosida), {% block content %},
  {% block extra_css %}, {% block extra_js %}; include: _header, _sidebar, _footer, _messages
- Class-based views: LoginRequiredMixin + PermissionRequiredMixin; ListView/CreateView/UpdateView/DeleteView
- Formalar: ModelForm, widget'larga AdminLTE klasslari (form-control) mixin orqali
- Ruxsatlar: Django Groups/Permissions (rollar = Group)
- DataTables: django-ajax-datatable yoki o'z JSON view
- Export: django-import-export yoki openpyxl
- Audit: django-auditlog
- Static: static/adminpanel/ ga AdminLTE assetlari, collectstatic
- Tarjima: gettext, locale/uz, locale/ru
- Testlar: pytest-django
```

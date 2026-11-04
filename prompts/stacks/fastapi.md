# Stack: FastAPI (Python)

```text
STACK TALABLARI (FastAPI + Jinja2, server-rendered admin):
- Struktura: app/admin/{routers,services,schemas,templates}, app/models, app/core (config, security)
- ORM: SQLAlchemy 2 (async) + Alembic migratsiyalar
- Shablonlar: Jinja2, templates/admin/base.html (starter.html asosida), {% block content %}
- Static: app.mount('/admin/static', StaticFiles(...)) — AdminLTE assetlari
- Auth: sessiya cookie (itsdangerous / starlette SessionMiddleware), passlib[bcrypt]
- CSRF: starlette-csrf yoki o'z middleware
- Formalar: Pydantic schema bilan validatsiya, xatolar shablonga qaytariladi
- RBAC: Depends(require_permission("products.update"))
- DataTables: JSON endpoint (offset/limit, search, order)
- Export: openpyxl; fon vazifalar: Celery yoki arq
- Tarjima: Babel / gettext
- Testlar: pytest + httpx AsyncClient
```

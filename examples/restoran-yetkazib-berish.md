# Misol: Restoran va yetkazib berish admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga "TezOsh" ovqat yetkazib berish xizmati uchun
AdminLTE 2.4.18 asosida admin panel qurib ber.

Stack: Laravel 11 + Blade, MySQL, Redis (navbat va kesh). Prefiks: /admin. Tillar: uz, ru.

Rollar: super_admin, branch_manager (faqat o'z filiali), operator (buyurtmalarni qabul qilish),
courier_manager (kuryerlar), content.

Entitylar:
- Branch (filial): name, address, lat/lng, phone, working_hours (JSON, kunlar bo'yicha), delivery_radius_km, is_open
- MenuCategory: name (uz/ru), image, sort_order
- Dish: name (uz/ru), category_id, image, price, weight_g, description, is_available, branches (qaysi filialda bor)
- Modifier: guruh (masalan "Sous"), variantlar va qo'shimcha narx
- Order: number, customer, branch_id, items (dish, modifiers, qty, price), subtotal, delivery_fee,
  discount, total, address + lat/lng, payment (cash|payme|click), status
  (new|accepted|cooking|ready|on_the_way|delivered|cancelled), courier_id, timestamps har status uchun
- Courier: name, phone, vehicle, status (offline|free|busy), current_lat/lng
- PromoCode: code, type (percent|fixed), value, min_order, usage_limit, valid_from/to

Maxsus talablar:
- Operator ekrani: yangi buyurtmalar real-time (ovozli signal), Kanban ustunlar status bo'yicha
- Buyurtmaga kuryer biriktirish: bo'sh kuryerlar masofa bo'yicha tartiblangan
- Xarita (Yandex yoki Leaflet): filiallar zonasi, faol buyurtmalar va kuryerlar
- Taom "stop-list": filialda tugagan taomni bir bosishda o'chirish
- Dashboard: bugungi buyurtmalar, o'rtacha yetkazish vaqti, bekor qilinganlar %, filiallar reytingi
- Hisobot: filial / kuryer / taom bo'yicha, soatlar kesimida yuklama (heatmap)
- Chek chop etish (80mm termoprinter formati)
```

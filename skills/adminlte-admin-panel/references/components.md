# Komponentlar katalogi (nusxa olish uchun tayyor markup)

Har bir blok `assets/demo.html` da sinovdan o'tgan va AdminLTE 2.4.18 asl markup'iga mos.
`[[...]]` — o'zgaruvchi qiymat. Loyihaning shablonizatoriga moslab ko'chiring va **qayta komponent qiling**
(Blade `<x-admin.box>`, Django `{% include %}`, Jinja macro, EJS partial). Markup'ni har sahifada qo'lda
takrorlash keyinchalik stil farqlariga olib keladi.

## Mundarija
1. Ro'yxat sahifasi (filtr + DataTables + ommaviy amallar)
2. Forma sahifasi (yaratish / tahrirlash)
3. Forma maydonlari
4. Ko'rish (show) sahifasi
5. Dashboard (small-box, info-box, Chart.js)
6. Tablar (sozlamalar)
7. Profil
8. Timeline (tarix / faollik)
9. Modal forma
10. Xato sahifasi (403 / 404 / 500)
11. Kichik bloklar: empty state, callout, label, progress

---

## 1. Ro'yxat sahifasi

```html
<!-- Filtrlar (ixtiyoriy). data-dt-filter jadval id siga bog'lanadi: submit/reset jadvalni qayta yuklaydi -->
<div class="box box-default filters-box">
  <div class="box-header with-border">
    <h3 class="box-title"><i class="fa fa-filter"></i> Filtrlar</h3>
    <div class="box-tools pull-right">
      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
    </div>
  </div>
  <div class="box-body">
    <form data-dt-filter="#[[ENTITY]]-table">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label>[[FILTER_LABEL]]</label>
            <select name="[[FILTER_NAME]]" class="form-control" data-ui="select2" data-placeholder="Barchasi" data-allow-clear="true">
              <option></option>
              <!-- options -->
            </select>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Sana</label>
            <input type="text" name="date" class="form-control" data-ui="date" placeholder="dd.mm.yyyy">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>&nbsp;</label>
            <div>
              <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> Qidirish</button>
              <button type="reset" class="btn btn-default">Tozalash</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

<div class="box box-primary">
  <div class="box-header with-border">
    <h3 class="box-title">[[TITLE]]</h3>
    <div class="box-tools pull-right">
      <!-- har bir tugma ruxsatga qarab chiqariladi -->
      <button type="button" class="btn btn-danger btn-sm" data-bulk-action="delete" data-url="[[BULK_URL]]" data-table="#[[ENTITY]]-table">
        <i class="fa fa-trash"></i> Tanlanganlarni o'chirish
      </button>
      <a href="[[EXPORT_URL]]" class="btn btn-default btn-sm"><i class="fa fa-file-excel-o"></i> Excel</a>
      <a href="[[CREATE_URL]]" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Qo'shish</a>
    </div>
  </div>
  <div class="box-body">
    <!-- Server-side: data-ajax-url. Har <th data-data="..."> — JSON dagi kalit.
         data-html — server tayyor HTML qaytaradigan ustunlar (status label, amallar). Qolganlari matn sifatida escape qilinadi.
         data-order='[[1,"desc"]]' — bu placeholder EMAS, DataTables uchun haqiqiy JSON (1-ustun bo'yicha kamayish). -->
    <table id="[[ENTITY]]-table" class="table table-bordered table-striped table-hover"
           data-ui="datatable" data-ajax-url="[[DATA_URL]]" data-order='[[1,"desc"]]'>
      <thead>
        <tr>
          <th class="col-check" data-data="check" data-html data-orderable="false" data-searchable="false"><input type="checkbox" data-check-all></th>
          <th class="col-id" data-data="id">ID</th>
          <th data-data="title">Nomi</th>
          <th data-data="status" data-html data-searchable="false">Holati</th>
          <th data-data="created_at" data-searchable="false">Yaratilgan</th>
          <th class="col-actions" data-data="actions" data-html data-orderable="false" data-searchable="false">Amallar</th>
        </tr>
      </thead>
    </table>
  </div>
</div>
```

Server qaytaradigan `check` va `actions` ustunlari HTML'i:

```html
<input type="checkbox" name="ids[]" value="[[ID]]">

<a href="[[SHOW_URL]]" class="btn btn-default btn-xs" title="Ko'rish"><i class="fa fa-eye"></i></a>
<a href="[[EDIT_URL]]" class="btn btn-primary btn-xs" title="Tahrirlash"><i class="fa fa-pencil"></i></a>
<button type="button" class="btn btn-danger btn-xs" title="O'chirish" data-delete data-url="[[DELETE_URL]]"><i class="fa fa-trash"></i></button>
```

Kichik ro'yxatlar (< 200 yozuv, server-side kerak emas) uchun `data-ajax-url` qo'yilmaydi: `<tbody>` serverda
render qilinadi, DataTables mijoz tomonda saralaydi. Bunda `<th data-data>` ham kerak emas.

## 2. Forma sahifasi

```html
<form action="[[ACTION_URL]]" method="post" enctype="multipart/form-data">
  [[CSRF_FIELD]]
  <!-- tahrirlashda: [[METHOD_FIELD PUT]] -->
  <div class="row">
    <div class="col-md-8">
      <div class="box box-primary">
        <div class="box-header with-border"><h3 class="box-title">Asosiy ma'lumotlar</h3></div>
        <div class="box-body">
          <!-- 3-bo'limdagi maydonlar -->
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="box box-default">
        <div class="box-header with-border"><h3 class="box-title">Nashr</h3></div>
        <div class="box-body">
          <!-- status, sana, rasm, checkboxlar -->
        </div>
        <div class="box-footer">
          <a href="[[INDEX_URL]]" class="btn btn-default">Bekor qilish</a>
          <button type="submit" class="btn btn-primary pull-right"><i class="fa fa-save"></i> Saqlash</button>
        </div>
      </div>
    </div>
  </div>
</form>
```

Yuborishda `admin.js` Saqlash tugmasini bloklab, spinner qo'yadi (ikki marta yuborishdan himoya).
AJAX bilan yuborish kerak bo'lsa: `<form data-ajax-form ...>`. Server 422 da `{"errors": {"field": ["..."]}}`,
muvaffaqiyatda `{"message": "...", "redirect": "..."}` qaytaradi.

## 3. Forma maydonlari

Har bir maydon bitta `form-group`. Xato bo'lsa `has-error` va `help-block` qo'shiladi.
Old qiymat (validatsiyadan keyin) har doim qayta to'ldiriladi.

```html
<!-- Matn -->
<div class="form-group [[has-error]]">
  <label for="title" class="required">Nomi</label>
  <input type="text" id="title" name="title" class="form-control" value="[[OLD]]" required maxlength="255">
  <span class="help-block">[[ERROR]]</span>   <!-- faqat xato bo'lsa -->
</div>

<!-- Pul -->
<div class="form-group">
  <label for="price" class="required">Narxi</label>
  <div class="input-group">
    <input type="number" id="price" name="price" class="form-control" min="0" step="1" value="[[OLD]]" required>
    <span class="input-group-addon">so'm</span>
  </div>
</div>

<!-- Telefon -->
<div class="form-group">
  <label for="phone">Telefon</label>
  <div class="input-group">
    <span class="input-group-addon"><i class="fa fa-phone"></i></span>
    <input type="text" id="phone" name="phone" class="form-control" data-ui="phone" value="[[OLD]]">
  </div>
</div>

<!-- Select (oddiy, ≤ 10 variant) -->
<div class="form-group">
  <label for="status">Holati</label>
  <select id="status" name="status" class="form-control">
    <option value="draft">Qoralama</option>
  </select>
</div>

<!-- Select2 (ko'p variant yoki qidiruv kerak) -->
<select name="category_id" class="form-control" data-ui="select2" data-placeholder="Tanlang">...</select>

<!-- Select2 AJAX (katta jadval: foydalanuvchilar, mahsulotlar).
     Server javobi: {"results":[{"id":1,"text":"..."}],"pagination":{"more":false}}.
     Tahrirlashda tanlangan qiymat <option selected> sifatida serverda chiqariladi. -->
<select name="user_id" class="form-control" data-ui="select2" data-ajax-url="[[SEARCH_URL]]" data-placeholder="Qidiring...">
  <option value="[[ID]]" selected>[[TEXT]]</option>
</select>

<!-- Ko'p tanlov / teglar -->
<select name="tags[]" class="form-control" multiple data-ui="select2" data-tags="true"></select>

<!-- Sana -->
<input type="text" name="published_at" class="form-control" data-ui="date" value="[[dd.mm.yyyy]]">

<!-- Matn muharriri -->
<textarea id="body" name="body" class="form-control" data-ui="editor" rows="10">[[OLD]]</textarea>

<!-- Checkbox -->
<div class="form-group">
  <div class="checkbox">
    <label><input type="checkbox" name="is_active" value="1" class="icheck" [[checked]]> Faol</label>
  </div>
</div>
<!-- Diqqat: belgilanmagan checkbox yuborilmaydi — backend yo'q qiymatni false deb qabul qiladi
     (yoki oldiga <input type="hidden" name="is_active" value="0"> qo'yiladi). -->

<!-- Rasm (preview bilan) -->
<div class="form-group">
  <label for="image">Rasm</label>
  <div><img src="[[CURRENT_IMAGE_URL]]" class="img-preview" alt=""></div>  <!-- faqat rasm bo'lsa -->
  <input type="file" id="image" name="image" accept="image/jpeg,image/png,image/webp">
  <p class="help-block">JPG, PNG yoki WEBP, 2 MB gacha.</p>
</div>
```

## 4. Ko'rish (show) sahifasi

```html
<div class="row">
  <div class="col-md-8">
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">[[TITLE]]</h3>
        <div class="box-tools pull-right">
          <a href="[[EDIT_URL]]" class="btn btn-primary btn-sm"><i class="fa fa-pencil"></i> Tahrirlash</a>
        </div>
      </div>
      <div class="box-body">
        <dl class="dl-horizontal dl-admin">
          <dt>Nomi</dt><dd>[[VALUE]]</dd>
          <dt>Holati</dt><dd><span class="label label-success">Faol</span></dd>
          <dt>Yaratilgan</dt><dd>[[dd.mm.yyyy HH:mm]]</dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="box box-default">
      <div class="box-header with-border"><h3 class="box-title"><i class="fa fa-history"></i> O'zgarishlar tarixi</h3></div>
      <div class="box-body"><!-- 8-bo'lim: timeline --></div>
    </div>
  </div>
</div>
```

## 5. Dashboard

```html
<div class="row">
  <div class="col-lg-3 col-xs-6">
    <div class="small-box bg-aqua">
      <div class="inner"><h3>[[NUMBER]]</h3><p>[[LABEL]]</p></div>
      <div class="icon"><i class="fa fa-shopping-cart"></i></div>
      <a href="[[URL]]" class="small-box-footer">Batafsil <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- bg-green, bg-yellow, bg-red ... -->
</div>

<div class="row">
  <div class="col-md-8">
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">[[CHART_TITLE]]</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
        </div>
      </div>
      <div class="box-body">
        <div style="position: relative; height: 280px;"><canvas id="sales-chart"></canvas></div>
      </div>
      <!-- yuklanayotganda: <div class="overlay"><i class="fa fa-refresh fa-spin"></i></div> -->
    </div>
  </div>
  <div class="col-md-4">
    <div class="info-box">
      <span class="info-box-icon bg-green"><i class="fa fa-money"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">[[LABEL]]</span>
        <span class="info-box-number">[[NUMBER]]</span>
      </div>
    </div>
  </div>
</div>
```

Chart.js (sahifa skripti; ma'lumot JSON endpoint'dan, ranglar palitradan):

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<script>
$(function () {
  $.getJSON('[[STATS_URL]]', function (d) {      // {"labels": [...], "values": [...]}
    new Chart(document.getElementById('sales-chart'), {
      type: 'line',
      data: { labels: d.labels, datasets: [{ label: '[[LABEL]]', data: d.values,
        borderColor: '#3c8dbc', backgroundColor: 'rgba(60,141,188,.15)', fill: true, tension: .3 }] },
      options: { maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
  });
});
</script>
```

Grafik palitrasi (ketma-ketlik): `#3c8dbc`, `#00a65a`, `#f39c12`, `#dd4b39`, `#00c0ef`, `#605ca8`, `#d2d6de`.

## 6. Tablar (sozlamalar)

```html
<div class="nav-tabs-custom">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#tab-general" data-toggle="tab">Umumiy</a></li>
    <li><a href="#tab-contacts" data-toggle="tab">Kontaktlar</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tab-general"><!-- form-group lar --></div>
    <div class="tab-pane" id="tab-contacts"></div>
  </div>
</div>
```

Formada xato bo'lsa, xatoli maydon joylashgan tab ochiq holda render qilinadi.

## 7. Profil

```html
<div class="row">
  <div class="col-md-3">
    <div class="box box-primary">
      <div class="box-body box-profile">
        <img class="profile-user-img img-responsive img-circle" src="[[AVATAR]]" alt="">
        <h3 class="profile-username text-center">[[NAME]]</h3>
        <p class="text-muted text-center">[[ROLE]]</p>
        <ul class="list-group list-group-unbordered">
          <li class="list-group-item"><b>Ro'yxatdan o'tgan</b> <span class="pull-right">[[DATE]]</span></li>
          <li class="list-group-item"><b>Oxirgi kirish</b> <span class="pull-right">[[DATE]]</span></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-9"><!-- 6-bo'lim: nav-tabs-custom --></div>
</div>
```

## 8. Timeline

```html
<ul class="timeline">
  <li class="time-label"><span class="bg-light-blue">[[dd.mm.yyyy]]</span></li>
  <li>
    <i class="fa fa-pencil bg-yellow"></i>   <!-- created: fa-plus bg-green, updated: fa-pencil bg-yellow, deleted: fa-trash bg-red -->
    <div class="timeline-item">
      <span class="time"><i class="fa fa-clock-o"></i> [[HH:mm]]</span>
      <h3 class="timeline-header"><a href="#">[[USER]]</a> [[ACTION]]</h3>
      <div class="timeline-body">[[DETAILS]]</div>
    </div>
  </li>
  <li><i class="fa fa-clock-o bg-gray"></i></li>
</ul>
```

## 9. Modal forma

```html
<div class="modal fade" id="[[ID]]-modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <form class="modal-content" action="[[URL]]" method="post" data-ajax-form>
      [[CSRF_FIELD]]
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Yopish"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">[[TITLE]]</h4>
      </div>
      <div class="modal-body"><!-- form-group lar; Select2 modal ichida avtomatik dropdownParent oladi --></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Bekor qilish</button>
        <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Saqlash</button>
      </div>
    </form>
  </div>
</div>
```

## 10. Xato sahifasi (layout ichida)

```html
<div class="error-page">
  <h2 class="headline text-yellow">404</h2>    <!-- 403: text-red, 500: text-red -->
  <div class="error-content">
    <h3><i class="fa fa-warning text-yellow"></i> Sahifa topilmadi.</h3>
    <p>So'ralgan sahifa mavjud emas yoki ko'chirilgan. <a href="[[DASHBOARD_URL]]">Bosh sahifaga qaytish</a>.</p>
  </div>
</div>
```

## 11. Kichik bloklar

```html
<!-- Bo'sh holat (ro'yxatda yozuv yo'q, filtr qo'llanmagan) -->
<div class="empty-state">
  <i class="fa fa-inbox"></i>
  Hozircha [[ENTITY_PLURAL]] yo'q
  <p><a href="[[CREATE_URL]]" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Qo'shish</a></p>
</div>

<!-- Doimiy izoh -->
<div class="callout callout-info"><h4>Eslatma</h4><p>[[TEXT]]</p></div>

<!-- Status -->
<span class="label label-success">Faol</span>

<!-- Progress -->
<div class="progress progress-xs"><div class="progress-bar progress-bar-green" style="width: 70%"></div></div>
```

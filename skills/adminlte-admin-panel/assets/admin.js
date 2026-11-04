/*!
 * admin.js — AdminLTE 2.4.18 asosidagi admin panel uchun umumiy skript.
 * Bog'liqlik: jQuery 3, Bootstrap 3, AdminLTE 2.4.18.
 * Plaginlar (Select2, DataTables, datepicker, iCheck, inputmask, CKEditor 4) ixtiyoriy:
 * qaysi biri sahifaga ulangan bo'lsa, faqat o'shasi ishga tushadi.
 *
 * Diqqat: plagin nomi bilan bir xil data-atribut (data-select2, data-datepicker) ISHLATILMAYDI —
 * plaginlar o'z instansini shu kalitda saqlaydi va to'qnashuv xato beradi. Shuning uchun data-ui.
 *
 * Hamma narsa data-* atributlar orqali boshqariladi, sahifalarga alohida JS yozish shart emas:
 *   select[data-ui="select2"]            — Select2 (data-ajax-url, data-tags, data-placeholder)
 *   input[data-ui="date"]                — sana (dd.mm.yyyy)
 *   input.icheck                         — iCheck checkbox/radio (faqat formalarda)
 *   input[data-ui="phone"]               — +998 (99) 999-99-99
 *   textarea[data-ui="editor"]           — CKEditor 4
 *   table[data-ui="datatable"]           — DataTables (data-ajax-url bo'lsa server-side)
 *   [data-delete]                        — AJAX o'chirish tasdiqlash modali bilan (data-url)
 *   form[data-confirm]                   — oddiy forma, yuborishdan oldin tasdiqlash
 *   form[data-ajax-form]                 — AJAX forma, 422 xatolarni maydonlar ostida ko'rsatadi
 *   [data-check-all] / [data-bulk-action] — ommaviy amallar
 */
(function ($, window, document) {
  'use strict';

  if (!$) { return; }

  var LANG = (document.documentElement.lang || 'uz').slice(0, 2);

  var I18N = {
    uz: {
      confirmTitle: 'Tasdiqlang',
      confirmDelete: "Rostdan ham o'chirmoqchimisiz?",
      confirmBulk: 'Tanlangan yozuvlar uchun amalni bajarasizmi?',
      yes: 'Ha',
      cancel: 'Bekor qilish',
      saving: 'Saqlanmoqda...',
      deleted: "O'chirildi",
      saved: 'Saqlandi',
      nothingSelected: 'Hech narsa tanlanmagan',
      error: "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
      forbidden: "Bu amal uchun ruxsatingiz yo'q.",
      sessionExpired: 'Sessiya muddati tugadi, sahifa yangilanadi.',
      noResults: 'Hech narsa topilmadi',
      searching: 'Qidirilmoqda...',
      dt: {
        processing: 'Yuklanmoqda...',
        search: 'Qidirish:',
        lengthMenu: "_MENU_ ta ko'rsatish",
        info: '_TOTAL_ tadan _START_–_END_',
        infoEmpty: "0 ta yozuv",
        infoFiltered: '(jami _MAX_ tadan)',
        zeroRecords: "Ma'lumot topilmadi",
        emptyTable: "Ma'lumot yo'q",
        paginate: { first: 'Birinchi', last: 'Oxirgi', next: 'Keyingi', previous: 'Oldingi' }
      }
    },
    ru: {
      confirmTitle: 'Подтвердите',
      confirmDelete: 'Вы действительно хотите удалить?',
      confirmBulk: 'Выполнить действие для выбранных записей?',
      yes: 'Да',
      cancel: 'Отмена',
      saving: 'Сохранение...',
      deleted: 'Удалено',
      saved: 'Сохранено',
      nothingSelected: 'Ничего не выбрано',
      error: 'Произошла ошибка. Попробуйте ещё раз.',
      forbidden: 'У вас нет прав на это действие.',
      sessionExpired: 'Сессия истекла, страница будет обновлена.',
      noResults: 'Ничего не найдено',
      searching: 'Поиск...',
      dt: {
        processing: 'Загрузка...',
        search: 'Поиск:',
        lengthMenu: 'Показать _MENU_',
        info: '_START_–_END_ из _TOTAL_',
        infoEmpty: '0 записей',
        infoFiltered: '(из _MAX_)',
        zeroRecords: 'Ничего не найдено',
        emptyTable: 'Нет данных',
        paginate: { first: 'Первая', last: 'Последняя', next: 'Следующая', previous: 'Предыдущая' }
      }
    }
  };

  var T = I18N[LANG] || I18N.uz;

  // ---------------------------------------------------------------- CSRF
  var csrf = $('meta[name="csrf-token"]').attr('content');
  if (csrf) {
    // Laravel: X-CSRF-TOKEN, Django: X-CSRFToken, Express (csrf-csrf): X-CSRF-Token
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': csrf, 'X-CSRFToken': csrf, 'X-Requested-With': 'XMLHttpRequest' } });
  }

  // ---------------------------------------------------------------- Xabarlar
  function notify(type, message) {
    var $box = $('#flash-container');
    if (!$box.length) { $box = $('<div id="flash-container"></div>').prependTo('.content-wrapper > .content'); }
    var icons = { success: 'fa-check', danger: 'fa-ban', warning: 'fa-warning', info: 'fa-info' };
    var $alert = $('<div class="alert alert-dismissible"></div>').addClass('alert-' + type);
    $alert.append('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>');
    $alert.append($('<i class="icon fa"></i>').addClass(icons[type] || 'fa-info'));
    $alert.append(document.createTextNode(String(message)));
    $box.append($alert);
    autoDismiss($alert);
  }

  function autoDismiss($alerts) {
    $alerts.each(function () {
      var $a = $(this);
      if ($a.is('.alert-danger')) { return; } // xatolar o'zi yopilmaydi
      setTimeout(function () { $a.fadeOut(400, function () { $a.remove(); }); }, 5000);
    });
  }

  // ---------------------------------------------------------------- Tasdiqlash modali
  function confirmModal(message, onConfirm, okText) {
    var $m = $('#confirm-modal');
    if (!$m.length || !$.fn.modal) {
      if (window.confirm(message)) { onConfirm(); }
      return;
    }
    $m.find('[data-confirm-text]').text(message);
    $m.find('[data-confirm-ok]').text(okText || T.yes)
      .off('click.admin').on('click.admin', function () {
        $m.modal('hide');
        onConfirm();
      });
    $m.modal('show');
  }

  // ---------------------------------------------------------------- Plaginlar
  function select2Language() {
    if (LANG === 'ru' && $.fn.select2 && $.fn.select2.amd) {
      try { return $.fn.select2.amd.require('select2/i18n/ru'); } catch (e) { /* ru tarjima ulanmagan */ }
    }
    return {
      noResults: function () { return T.noResults; },
      searching: function () { return T.searching; }
    };
  }

  function initPlugins(scope) {
    var $s = $(scope || document);

    if ($.fn.select2) {
      $s.find('select[data-ui="select2"]').not('.select2-hidden-accessible').each(function () {
        var $el = $(this);
        var $modal = $el.closest('.modal');
        var opts = {
          width: '100%',
          language: select2Language(),
          placeholder: $el.data('placeholder') || '',
          allowClear: !!$el.data('allow-clear'),
          tags: !!$el.data('tags'),
          // modal ichida dropdown modal ortida qolib ketmasligi uchun
          dropdownParent: $modal.length ? $modal : $(document.body)
        };
        var url = $el.data('ajax-url');
        if (url) {
          opts.minimumInputLength = $el.data('min-length') || 0;
          // Javob formati: { "results": [{ "id": 1, "text": "..." }], "pagination": { "more": false } }
          opts.ajax = {
            url: url,
            dataType: 'json',
            delay: 250,
            cache: true,
            data: function (p) { return { q: p.term || '', page: p.page || 1 }; }
          };
        }
        $el.select2(opts);
      });
    }

    if ($.fn.datepicker) {
      $s.find('input[data-ui="date"]').each(function () {
        var $el = $(this);
        if ($el.data('datepicker')) { return; } // allaqachon ishga tushgan
        $el.attr('autocomplete', 'off').datepicker({
          format: $el.data('format') || 'dd.mm.yyyy',
          language: LANG === 'ru' ? 'ru' : 'uz-latn',
          weekStart: 1,
          autoclose: true,
          todayHighlight: true,
          clearBtn: !$el.prop('required')
        });
      });
    }

    if ($.fn.iCheck) {
      $s.find('input.icheck').not('.icheck-ready').addClass('icheck-ready').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
      }).on('ifChanged', function () {
        // iCheck oddiy 'change' hodisasini chiqarmaydi — boshqa skriptlar uni eshitishi uchun
        $(this).trigger('change');
      });
    }

    if ($.fn.inputmask) {
      $s.find('input[data-ui="phone"]').inputmask('+998 (99) 999-99-99');
      $s.find('input[data-inputmask]').inputmask();
    }

    if (window.CKEDITOR) {
      window.CKEDITOR.config.versionCheck = false;
      $s.find('textarea[data-ui="editor"]').each(function () {
        if (!this.id) { this.id = 'editor-' + Math.random().toString(36).slice(2); }
        if (window.CKEDITOR.instances[this.id]) { return; }
        window.CKEDITOR.replace(this.id, {
          language: LANG === 'ru' ? 'ru' : 'uz',
          height: $(this).data('height') || 300,
          removePlugins: 'elementspath',
          resize_enabled: false
        });
      });
    }

    if ($.fn.DataTable) {
      $s.find('table[data-ui="datatable"]').each(function () { initDataTable(this); });
    }
  }

  // ---------------------------------------------------------------- DataTables
  if ($.fn.dataTable) {
    $.extend(true, $.fn.dataTable.defaults, {
      language: T.dt,
      autoWidth: false,
      pageLength: 25,
      lengthMenu: [10, 25, 50, 100],
      processing: true,
      stateSave: true,
      stateDuration: 60 * 60 * 24
    });
  }

  function initDataTable(table) {
    var $t = $(table);
    if ($.fn.dataTable.isDataTable(table)) { return; }
    var url = $t.data('ajax-url');
    var opts = {};
    var order = $t.data('order'); // masalan data-order='[[0,"desc"]]'
    if (order) { opts.order = order; }

    if (url) {
      // Ustunlar <th data-data="name"> dan olinadi.
      // data-html bo'lmagan ustunlar matn sifatida chiqadi (XSS dan himoya).
      opts.serverSide = true;
      opts.ajax = {
        url: url,
        data: function (d) {
          // filtr formasi: <form data-dt-filter="#products-table">
          $('form[data-dt-filter="#' + table.id + '"]').serializeArray().forEach(function (f) {
            d[f.name] = f.value;
          });
        }
      };
      opts.columns = $t.find('thead th').map(function () {
        var $th = $(this);
        var col = {
          data: $th.data('data') !== undefined ? $th.data('data') : null,
          orderable: $th.data('orderable') !== false,
          searchable: $th.data('searchable') !== false,
          className: $th.data('class') || ''
        };
        if ($th.is('[data-html]')) {
          col.render = function (v) { return v === null || v === undefined ? '' : v; };
        } else {
          col.render = $.fn.dataTable.render.text();
        }
        return col;
      }).get();
    }

    var dt = $t.DataTable(opts);
    // Mobilda faqat jadval suriladi, butun sahifa emas
    if (!$t.parent().hasClass('table-responsive')) { $t.wrap('<div class="table-responsive"></div>'); }
    $t.on('draw.dt', function () {
      $t.find('[data-check-all]').prop('checked', false);
    });

    $('form[data-dt-filter="#' + table.id + '"]').on('submit', function (e) {
      e.preventDefault();
      dt.ajax.reload();
    }).on('reset', function () {
      var $f = $(this);
      setTimeout(function () {
        $f.find('select[data-ui="select2"]').trigger('change.select2');
        dt.ajax.reload();
      }, 0);
    });
  }

  function reloadTableOf(el) {
    var table = $(el).closest('table').get(0) || $('table[data-ui="datatable"]').get(0);
    if (table && $.fn.dataTable && $.fn.dataTable.isDataTable(table) && $(table).data('ajax-url')) {
      $(table).DataTable().ajax.reload(null, false);
      return true;
    }
    return false;
  }

  // ---------------------------------------------------------------- O'chirish
  $(document).on('click', '[data-delete]', function (e) {
    e.preventDefault();
    var $btn = $(this);
    confirmModal($btn.data('message') || T.confirmDelete, function () {
      $.ajax({ url: $btn.data('url') || $btn.attr('href'), type: $btn.data('method') || 'DELETE', dataType: 'json' })
        .done(function (res) {
          notify('success', (res && res.message) || T.deleted);
          if (!reloadTableOf($btn)) {
            var $row = $btn.closest('tr');
            if ($row.length) { $row.fadeOut(300, function () { $row.remove(); }); } else { window.location.reload(); }
          }
        });
    });
  });

  $(document).on('submit', 'form[data-confirm]', function (e) {
    var form = this;
    if ($(form).data('confirmed')) { return; }
    e.preventDefault();
    confirmModal($(form).data('confirm') || T.confirmDelete, function () {
      $(form).data('confirmed', true);
      form.submit();
    });
  });

  // ---------------------------------------------------------------- Ommaviy amallar
  $(document).on('change', '[data-check-all]', function () {
    $(this).closest('table').find('input[name="ids[]"]').prop('checked', this.checked);
  });

  $(document).on('click', '[data-bulk-action]', function (e) {
    e.preventDefault();
    var $btn = $(this);
    var $table = $($btn.data('table') || 'table[data-ui="datatable"]');
    var ids = $table.find('input[name="ids[]"]:checked').map(function () { return this.value; }).get();
    if (!ids.length) { notify('warning', T.nothingSelected); return; }
    confirmModal($btn.data('message') || T.confirmBulk, function () {
      $.ajax({
        url: $btn.data('url'),
        type: 'POST',
        dataType: 'json',
        data: { ids: ids, action: $btn.data('bulk-action') }
      }).done(function (res) {
        notify('success', (res && res.message) || T.saved);
        if (!reloadTableOf($table.find('tbody').get(0))) { window.location.reload(); }
      });
    });
  });

  // ---------------------------------------------------------------- Formalar
  function lockForm($form) {
    $form.find('[type="submit"]').each(function () {
      var $b = $(this);
      if ($b.prop('disabled')) { return; }
      $b.data('original-html', $b.html()).prop('disabled', true)
        .html('<i class="fa fa-spinner fa-spin"></i> ' + T.saving);
    });
  }

  function unlockForm($form) {
    $form.find('[type="submit"]').each(function () {
      var $b = $(this);
      if ($b.data('original-html')) { $b.html($b.data('original-html')); }
      $b.prop('disabled', false);
    });
  }

  function clearErrors($form) {
    $form.find('.has-error').removeClass('has-error');
    $form.find('.help-block.js-error').remove();
  }

  function showErrors($form, errors) {
    $.each(errors || {}, function (key, messages) {
      // "items.0.name" -> "items[0][name]", "tags.0" -> "tags[]" yoki "tags"
      var parts = key.split('.');
      var name = parts[0] + parts.slice(1).map(function (p) { return '[' + p + ']'; }).join('');
      var $field = $form.find('[name="' + name + '"], [name="' + parts[0] + '[]"], [name="' + parts[0] + '"]').first();
      var $group = $field.closest('.form-group');
      if (!$group.length) { return; }
      $group.addClass('has-error');
      $('<span class="help-block js-error"></span>').text([].concat(messages)[0]).appendTo($group);
    });
    var $first = $form.find('.has-error').first();
    if ($first.length) { $('html, body').animate({ scrollTop: $first.offset().top - 80 }, 200); }
  }

  $(document).on('submit', 'form', function (e) {
    var $form = $(this);
    if ($form.is('[data-no-lock]') || $form.is('[data-dt-filter]') || e.isDefaultPrevented()) { return; }

    if (window.CKEDITOR) {
      $.each(window.CKEDITOR.instances, function (_, ed) { ed.updateElement(); });
    }

    if (!$form.is('[data-ajax-form]')) {
      lockForm($form);
      return;
    }

    e.preventDefault();
    clearErrors($form);
    lockForm($form);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method') || 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false,
      dataType: 'json'
    }).done(function (res) {
      if (res && res.redirect) { window.location.href = res.redirect; return; }
      notify('success', (res && res.message) || T.saved);
      unlockForm($form);
    }).fail(function (xhr) {
      if (xhr.status === 422 && xhr.responseJSON) {
        showErrors($form, xhr.responseJSON.errors);
      }
      unlockForm($form);
    });
  });

  // Orqaga qaytilganda (bfcache) tugmalar bloklangan qolmasin
  $(window).on('pageshow', function () {
    $('form').each(function () { unlockForm($(this)); });
  });

  // ---------------------------------------------------------------- Global AJAX xatolar
  $(document).ajaxError(function (event, xhr, settings) {
    if (settings.suppressErrors || xhr.statusText === 'abort') { return; }
    switch (xhr.status) {
      case 422: return; // forma o'zi ko'rsatadi
      case 401:
      case 419:
        notify('warning', T.sessionExpired);
        setTimeout(function () { window.location.reload(); }, 1500);
        return;
      case 403:
        notify('danger', (xhr.responseJSON && xhr.responseJSON.message) || T.forbidden);
        return;
      default:
        notify('danger', (xhr.responseJSON && xhr.responseJSON.message) || T.error);
    }
  });

  // ---------------------------------------------------------------- Sidebar
  // Server "active" klassini qo'ymagan bo'lsa — URL bo'yicha eng mos menyuni belgilaydi
  function markActiveMenu() {
    var $menu = $('.sidebar-menu');
    if (!$menu.length || $menu.find('li.active').length) { return; }
    var path = window.location.pathname.replace(/\/+$/, '');
    var best = null;
    var bestLen = 0;
    $menu.find('a[href]').each(function () {
      var href = this.pathname ? this.pathname.replace(/\/+$/, '') : '';
      if (!href || href === '/' && path !== '') { return; }
      if ((path === href || path.indexOf(href + '/') === 0) && href.length > bestLen) {
        best = this;
        bestLen = href.length;
      }
    });
    if (best) {
      $(best).parent('li').addClass('active');
      $(best).parents('li.treeview').addClass('active menu-open');
    }
  }

  // ---------------------------------------------------------------- O'z-o'zini tekshirish
  // Sahifada plagin kerak, lekin skripti ulanmagan bo'lsa — konsolga aniq xato chiqaradi.
  function selfCheck() {
    var need = [
      ['[data-ui="select2"]', $.fn.select2, 'select2.min.js'],
      ['[data-ui="date"]', $.fn.datepicker, 'bootstrap-datepicker.min.js'],
      ['[data-ui="datatable"]', $.fn.DataTable, 'jquery.dataTables.min.js + dataTables.bootstrap.min.js'],
      ['input.icheck', $.fn.iCheck, 'icheck.min.js'],
      ['[data-ui="phone"]', $.fn.inputmask, 'jquery.inputmask.min.js'],
      ['[data-ui="editor"]', window.CKEDITOR, 'ckeditor.js']
    ];
    $.each(need, function (_, n) {
      if ($(n[0]).length && !n[1]) { console.error('[admin] ' + n[0] + ' bor, lekin ' + n[2] + ' ulanmagan'); }
    });
    if (!$.fn.tree || !$.fn.pushMenu) { console.error('[admin] adminlte.min.js ulanmagan yoki admin.js dan keyin ulangan'); }
    if (!$.fn.modal) { console.error('[admin] bootstrap.min.js (3.x) ulanmagan'); }
    if ($('.sidebar-menu').length && !$('#confirm-modal').length) { console.error("[admin] #confirm-modal layoutda yo'q"); }
  }

  // ---------------------------------------------------------------- Start
  $(function () {
    selfCheck();
    markActiveMenu();
    autoDismiss($('#flash-container .alert'));
    initPlugins(document);
    // Modal ichidagi plaginlar modal ochilganda ishga tushadi
    $(document).on('shown.bs.modal', '.modal', function () { initPlugins(this); });
  });

  window.Admin = {
    t: T,
    notify: notify,
    confirm: confirmModal,
    initPlugins: initPlugins,
    reloadTable: reloadTableOf
  };
})(window.jQuery, window, document);

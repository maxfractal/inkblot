// Generated by CoffeeScript 1.9.2
(function() {
  jQuery(function($) {
    var templates;
    templates = ['template/contributors.php', 'template/full-width.php', 'template/webcomic-archive.php', 'template/webcomic-homepage.php', 'template/webcomic-infinite.php'];
    $('#inkblot-template-options h3').append('<span class="inkblot-template-title"></span>');
    return $('#page_template').on('change', function() {
      $('[data-inkblot-template-options], [data-inkblot-template-options] h4').hide();
      if (-1 !== $.inArray($(this).val(), templates)) {
        $('#inkblot-template-options .inkblot-template-title').text(' - ' + $('[data-inkblot-template-options="' + $(this).val() + '"] h4').text());
        $('[data-inkblot-template-options="' + $(this).val() + '"]').show();
        $('[data-inkblot-template-options]').not('[data-inkblot-template-options="' + $(this).val() + '"]').find('input,select,textarea').prop('disabled', true);
        return $('[data-inkblot-template-options="' + $(this).val() + '"]').find('input,select,textarea').prop('disabled', false);
      } else {
        $('#inkblot-template-options h3 .inkblot-template-title').text('');
        $('#inkblot-template-options').find('input,select,textarea').prop('disabled', true);
        return $('[data-inkblot-template-options="none"]').show();
      }
    }).trigger('change');
  });

}).call(this);

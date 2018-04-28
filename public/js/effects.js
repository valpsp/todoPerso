(function () {
  $('body').on('click', '[data-editable]', function () {

    var $el = $(this);

    var $input = $('<input/>').val($el.text());
    $el.replaceWith($input);

    var save = function () {
      var $p = $('<p data-editable />').text($input.val());
      if($p.text() == '')
        $p.text('Ecrivez une tâche !');
      $input.replaceWith($p);
    };
    $input.one('blur', save).focus();

  });
})();

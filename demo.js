var unfilteredConverter = new showdown.Converter();
var filteredConverter = new showdown.Converter({ extensions: ['xssfilter'] });

$('textarea').val(
  "[test](javascript:alert('xss'))" +
  "\n\n" +
  '> hello <a name="n"\n> href="javascript:alert(\'xss\')">*you*</a>' +
  "\n\n" +
  "<script>alert('xss')</script>"
);

$('#example1 .btn').on('click', function () {
  $('#example1 .results').html(
    unfilteredConverter.makeHtml($('#example1 textarea').val())
  );
});

$('#example2 .btn').on('click', function () {
  $('#example2 .results').html(
    filteredConverter.makeHtml($('#example2 textarea').val())
  );
});

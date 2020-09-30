
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxkQTckRrhz28MCfHHbJ3bWpRADf9Qzggf13Opb7VYpSql1Jzo/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
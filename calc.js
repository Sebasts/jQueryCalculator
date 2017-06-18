$('Document').ready(function() {
  console.log('Loaded');


  setUp();
});

function setUp() {

  var val1 = 0;
  var val2 = 0;
  var op = "";
  var calcd = true;

  $('#display').attr("width", "200").attr("height", "50").text("");

  $.each($('.number'), function() {
    $(this).click(event, function(e) {
      console.log($(this).attr("id"));

      $('#display').text($('#display').text() + $(this).attr("id"));
    });
  });

  $.each($('.operator'), function() {
    $(this).click(event, function(e) {
      console.log($(this).val());
      if ($(this).text() === '=') {
          console.log("calc'd");
          val2=Number($('#display').text());
          $('#display').text(doMath(val1, op, val2));
          val1=Number($('#display').text());
        return;
      }

      op = $(this).text();
      if (val1 === 0) {
        val1 = Number($('#display').text());
      }
      $('#div').text($('#display').text());
      $('#display').text("");
    });
  });



  $('#clear').click(function() {
    $('#display').text("");
    $('#div').text("");
    val1 = 0;
    val2 = 0;
    op = "";
    calcd=true;
  });

  $('#clearCurrVal').click(function() {
    $('#display').text("");
    val2 = 0;
  });

}


function doMath(val1, op, val2) {

  switch (op) {
    case 'X':
      return val1 * val2;
    case '-':
      return val1 - val2;
    case '/':
      return val1 / val2;
    case '+':
      return val1 + val2;
    case '%':
      return val1 / 100 * val2;
  }
}

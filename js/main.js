var $html = $('html');
var $div = $('div');
var $pick = $('form');
var $input = $('#pick-color');

$pick.on('change', function () {
  console.log('works');
  $div.css('background-color', $input.val());
});

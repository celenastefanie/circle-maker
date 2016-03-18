$('html').on('keydown', function (e) {
  var $newDiv = $('<div>');
  var randTop = Math.random() * 1000;
  var randLeft = Math.random() * 1000;
  var $body = $('body');

  $body.append($newDiv);
  $newDiv.addClass('ball');
  $newDiv.css('top', randTop);
  $newDiv.css('left', randLeft);
});

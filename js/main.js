$('html').on('keydown', function (e) {
  var $newDiv = $('<div>');
  var randTop = Math.random() * 1000;
  var randLeft = Math.random() * 1000;
  var $body = $('body');

  $newDiv.addClass('ball');

  $body.append($newDiv);

  $newDiv.css({
    top: (randTop),
    left: (randLeft)
  });
});

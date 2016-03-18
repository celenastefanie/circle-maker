$('html').on('keydown', function (e) {
  var $newDiv = $('<div>');
  var randTop = Math.random() * 256;
  var randLeft = Math.random() * 256;
  var $body = $('body');

  $newDiv.addClass('ball');

  $body.append($newDiv).css({
    top: (randTop),
    left: (randLeft)
  })
};

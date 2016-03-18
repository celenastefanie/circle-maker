$('html').on('keydown', function (e) {
  var $newDiv = $('<div>');
  $newDiv.addClass('ball');

  var $body = $('body');
  $body.append($newDiv);

  var top = Math.random() * 256;
  var left = Math.random() * 256;

  $('.ball').css({
    top: top,
    left: left
  });
});

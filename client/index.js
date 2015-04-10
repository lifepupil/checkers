'use strict';

$(document).ready(init);

function init() {
  $('#reset').click(reset);
  $('#start').click(start);

}

function reset() {
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', 'white');
}

function start() {
  $('#players').show();
  var p1 = $('#p1-choose').val();
  var p2 = $('#p2-choose').val();
  $('#p1').css('background-color', p1);
  $('#p2').css('background-color', p2);
  $('#chooser').hide();

  var rnd = Math.floor(Math.random() *2) + 1;
  $('.player').removeClass('active');
  $('#p' + rnd).addClass('active');
}

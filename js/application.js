$(document).ready(function() {

  new App.keyboardView({keyString: 'c,d,e,f,g,a,b', el: '.keyboard'});
  new App.logger({el: '.log'});


  $('button.play').click(function() {
    App.trigger('play-notes', $('.player-input').val());
    console.log('should play', $('.player-input').html());
  });

});

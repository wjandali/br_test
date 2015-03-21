$(document).ready(function() {

  new App.keyboardView({keyString: 'C,D,E,F,G,A,B', el: '.keyboard'});
  new App.logger({el: '.log'});


  $('button.play').click(function() {
    App.trigger('play-notes', $('.player-input').val().replace(/ /g,''));
  });

});

App.logger = Backbone.View.extend({

  initialize: function() {
    App.on('keypress', this.log, this);
  },

  log: function(params) {
    var current_log = this.$el.html();
    var new_log;
    var letter = params.get('letter');
    if (current_log) {
      new_log = current_log.split(' ').concat(letter).join(' ');
    } else {
      new_log = letter;
    }
    this.$el.html(new_log);
  }

});

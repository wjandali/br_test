App.keyboardView = Backbone.View.extend({
  initialize: function(options) {
    this.$el = $(options.el);
    this.setKeyString(options.keyString);
    this.makeKeys();
    this.render();
    App.on('play-notes', this.play, this);
  },

  makeKeys: function() {
    var keys = new Backbone.Collection;
    _.each(this.keyString.split(','), function(letter) {
      keys.add(new App.key({letter: letter}));
    });
    this.keys = keys;
  },

  setKeyString: function(keyString) {
    this.keyString = keyString;
  },

  render: function() {
    var keyViews = [];
    var el = this.$el;
    var key;
    this.$el.html('');
    this.keys.each(function(key) {
      var kv = new App.keyView({key: key, parent_el: el});
      keyViews = keyViews.concat(kv);
      kv.render();
    });
    this.keyViews = keyViews;
  },

  play: function(noteString, context) {
      if (!context) { context = this; }
      if (!noteString) { return; }
      var kv = context.getViewForNote(noteString.split(',')[0]);
      if (!kv) {
        alert('invalid keys submission');
        return;
      }
      kv.play();
      setTimeout(function() {
        kv.end();
        context.play(noteString.split(',').slice(1).join(','));
      }, 1000);
  },

  getViewForNote: function(note) {
    var view = _.find(this.keyViews, function(kv) {
      return kv.key.get('letter') == note;
    });
    return view;
  }
});

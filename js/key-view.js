App.keyView = Backbone.View.extend({
  initialize: function(options) {
    this.key = options.key;
    this.$parent_el = $(options.parent_el);
    this.template = new EJS({url: 'templates/key.ejs'})
  },
  
  events: {
    'click': 'log',
  },

  log: function() {
    App.trigger('keypress', this.key);
    this.light();
  },

  render: function() {
    this.$parent_el.append(this.template.render(this.key.attributes));
    this.setElement(this.$parent_el.find('.key-container').last());
  },

  play: function() {
    this.$el.addClass('playing');
  },

  light: function() {
    this.$el.addClass('playing');
    var context = this;
    setTimeout(function() {
      context.$el.removeClass('playing');
    }, 500);
  },

  end: function() {
    this.$el.removeClass('playing');
  }
});

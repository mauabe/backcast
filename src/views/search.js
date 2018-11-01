var SearchView = Backbone.View.extend({
  
  initialize: function() {},

  events: {
    'click .btn': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    let input = $('.form-control').val();
    this.collection.fetch(input);
  },

  template: templateURL('src/templates/search.html')

});
var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // if (this.model.attributes) { //check for model attributes
    this.$el.html(this.template(this.model.attributes));
    // } else {
    //   this.$el.html(this.template())
    // }
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

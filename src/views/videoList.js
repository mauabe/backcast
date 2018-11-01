var VideoListView = Backbone.View.extend({
  model: '.list',

  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log(this.collection)
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.forEach(video => {
    //   this.$el.children().append(new VideoListEntryView({model: video}).el);
    // });
    this.collection.each(this.renderVideo);
    return this;
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );
  },
  template: templateURL('src/templates/videoList.html')

});


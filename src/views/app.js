var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },
  
  render: function() {
    
    this.$el.html(this.template());
    new SearchView({
      el: $('.search'), 
      collection: this.videos,
    }).render();

    new VideoPlayerView({
      el: $('.player'), 
      collection: this.videos,
      model: this.videos.at(0),
    }).render();
  
    new VideoListView({
      el: $('.list'), 
      model: this.videos.at(0),
      collection: this.videos,
    }).render(); 
    return this;
  },
  template: templateURL('src/templates/app.html')

});

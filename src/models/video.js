var Video = Backbone.Model.extend({

  initialize: function(video) {
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});

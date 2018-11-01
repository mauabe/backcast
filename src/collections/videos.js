var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function() {
    // this.fetch();
  },


  fetch: function(input) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?',
      data: {
        key: YOUTUBE_API_KEY,
        q: input,
        part: 'snippet',
        maxResults: 10,
      },
      type: 'GET',
      success: function(data) {
        console.log(data);
      const collection = new Videos(data.items);

        new VideoListView({el: $('.list'), 
          model: data.items[0], 
          collection: collection}).render();

        // const collection = new Videos(data.items);
        // collection.forEach((video) => {
        //   $('.video-list').append(
        //     new VideoListEntryView({model: video}).render().el
        //   );
        // });
      
        // data.items.forEach(function(item) {
        //   $('.player').append(new VideoListEntryView(new Video(item)));
       // });
      },
    });
  },



});

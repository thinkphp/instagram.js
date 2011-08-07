Instagram.implement({

     getMedia: function(media_id){
             this.request('media/' + media_id,'mediaData');
     },

     searchMedia: function(lat, lng, distance, min_time, max_time) {
             var parameters = new Object();
                 parameters.lat = lat;
                 parameters.lng = lng;

                 if(distance) {
                    parameters.distance = distance; 
                 }

                 if(min_time) {
                    parameters.min_time = min_time
                 }

                 if(max_time) {
                    parameters.max_time = max_time
                 }

             this.request('media/search','searchMedia',parameters); 
     },

     getPopularMedia: function() {
             this.request('media/popular','popularMedia');
     }   
});

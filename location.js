Instagram.implement({
 
          getLocation: function(location_id) {

                 this.request('locations/' + location_id, 'locationData');
          },
           
          getLocationMedia: function(location_id, min_time, max_time) {
           
                 var params = {};
                 if(min_time) {
                    params.min_timestamp = min_time;
                 } 
                 if(max_time) {
                    params.max_timestamp = max_time;
                 } 

                 this.request('locations/' + location_id + '/media/recent','locationMedia', params); 
          },

          searchLocation: function(lat, lng, foursquare_id, distance) {

                 var params = {};
                 if(lat) {
                    params.lat = lat;
                 } 

                 if(lat) {
                    params.lat = lat;
                 } 

                 if(foursquare_id) {
                    params.foursquare_id = foursquare_id;
                 } 

                 if(distance) {
                    params.distance = distance;
                 } 

                 this.request('locations/search','locationSearch', params);  
          }
});
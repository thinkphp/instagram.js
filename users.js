Instagram.implement({

          getUser: function(user_id) {

                   var user_id = user_id || 'self';

                   this.request('users/' + user_id, 'singleUser', null, true); 
          },

          getFeed: function(count) {

                   var param = {};

                   if(count) {
                      param.count = count;
                   }
                   this.request('users/self/feed', 'userFeed', param, true); 

          },
  
          getUserMedia: function(user_id, count, min_time, max_time) {

                   var user_id = user_id || 'self';
                   var params = {};

                   if(count) {
                      params.count = count;
                   }
                   if(min_time) {
                      params.min_time = min_time;
                   }
                   if(max_time) {
                      params.max_time = max_time;
                   }

                   this.request('users/' + user_id + '/media/recent', 'userMedia', params, true); 
          },

          getLikeMedia: function() {

          },

          searchUser: function(input) {
                 if(input.length < 3) {
                    return; 
                 }
                 this.request('users/search','searchUser',{'q': input});  
          }  
 
});
Instagram.implement({
 
          getFollows: function(user_id) {

                   user_id = user_id || 'self';

                   this.request('users/' + user_id + '/follows', 'follows', null, true);

          },

          getFollowedBy: function(user_id) {

                   user_id = user_id || 'self';

                   this.request('users/' + user_id + '/followed-by', 'followedBy', null, true);
          },

          getRelationship: function(user_id) {

                   this.request('users/' + user_id + '/relationship', 'relationshipData', null, true);
          },

          getRequestBy: function() {

                   this.request('users/self/requested-by', 'userData', null, true);
          } 
});
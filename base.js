var Instagram = new Class({

    Implements: [Options,Events],

    options: {
           'client_id': null,
           'redirect_uri': null,
           'scope': ['basic'] 
    },

    initialize: function(options) {

           this.setOptions(options);
           this.apiEndpoint = "https://api.instagram.com/v1/";
           this.accessToken = null; 

    },

    request: function(endpoint, dataEvents, reqParameter, accessRequired) {

          reqParameter = reqParameter || {};

          if(!accessRequired) {

              reqParameter.client_id = this.options.client_id;

          } else {

              if(!this.accessToken) {

                  this.fireEvent('error','Please authorize on Instagram'); 
                  return; 
              }

              reqParameter.access_token = this.accessToken; 
          }

          var self = this;

          var req = new Request.JSONP({
                  url: self.apiEndpoint + endpoint + '?' + Object.toQueryString(reqParameter),
                  onFailure: function() {
                       self.fireEvent('error','Connection to Instragram API failed');
                  },
                  onComplete: function(data) {

                       if(data.meta.code !== 200) {
                               self.fireEvent('error',data.meta.error_message); 
                               return;
                       } 

                       if(typeof(dataEvents) == 'array') {

                              dataEvents.each(function(item){
                                 this.fireEvent(item, [data]); 
                              }, self); 

                       } else {

                              self.fireEvent(dataEvents, [data]);
                       }
                  }
          }); 

          req.send();          
    },
 
    getAuthURL: function() {

       return "https://instagram.com/oauth/authorize/?client_id=" + this.options.client_id + "&redirect_uri=" + this.options.redirect_uri + "&response_type=token&scope=relationships";
    },

    setAccessToken: function(token) {
       this.accessToken = token;  
    },

    checkAuthentication: function() {
 
       if(this.accessToken) {
          return;
       }

       var hash = window.location.hash.substring(1),
           hashArr = hash.split("=");

           if(hashArr[0] == 'access_token') {
                  this.setAccessToken(hashArr[1]);
                  this.fireEvent('authorization');
           }    
    }
})
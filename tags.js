Instagram.implement({

     getTagInformation: function(tag){
             this.request('tags/' + tag, 'tagInfo');
     },

     getTagMedia: function(tag) {

             this.request('tags/' + tag + '/media/recent','tagMedia'); 
     },

     searchTag: function(input) {

             if(input.length < 3) {
                return;
             }
             this.request('tags/search','tagSearch',{q: input});
     }   
});

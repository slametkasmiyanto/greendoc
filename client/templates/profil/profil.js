/*Template.profil.events({
    'change .myFileInput':function(event,tmpl){
        FS.Utility.eachFile(event,function(file){
            Images.insert(file,function(err,fileObj){
                if(!err){
                    var userId = Meteor.userId();
                    var imageurl = {
                        'profile.avatar':'/cfs/files/images/' + fileObj._id
                    };
                    setTimeout(function(){
                        Meteor.users.update(userId,{$set:imageurl});
                    },2000);
                }
            })
        })
    }
});
*/

Meteor.methods({
    'tambahGrup':function(grup){
        var exists = Grup.findOne({nama:grup.nama});
        if(!exists){
            return Grup.insert(grup);
        }
    },
    'Grup.remove':function(id){
        return Grup.remove({_id:id});
    }

});

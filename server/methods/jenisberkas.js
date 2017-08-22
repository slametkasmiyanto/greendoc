Meteor.methods({
    'tambahJenisBerkas':function(jenis){
        var exists = JenisBerkas.findOne({nama:jenis.nama});
        if(!exists){
            return JenisBerkas.insert(jenis);
        }
    },
    'JenisBerkas.remove':function(id){
        return JenisBerkas.remove({_id:id});
    }

});

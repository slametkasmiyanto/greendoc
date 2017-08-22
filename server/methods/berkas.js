Meteor.methods({
    'unggahBerkas':function(berkas){
        var exists = Berkas.findOne({nomor:berkas.nomor});
        if(!exists){
            return Berkas.insert(berkas);
        }
    },
    'Berkas.remove':function(id){
        return Berkas.remove({_id:id});
    }

});

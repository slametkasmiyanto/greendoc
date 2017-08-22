Meteor.methods({
    'tambahSifatBerkas':function(sifat){
        var exists = SifatBerkas.findOne({nama:sifat.nama});
        if(!exists){
            return SifatBerkas.insert(sifat);
        }
    },
    'SifatBerkas.remove':function(id){
        return SifatBerkas.remove({_id:id});
    }

});

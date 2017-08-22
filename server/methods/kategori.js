Meteor.methods({
    'addCategory':function(kategori){
        var exists = Kategori.findOne({nama:kategori.nama});
        if(!exists){
            return Kategori.insert(kategori);
        }
    },
    'Kategori.remove':function(id){
        return Kategori.remove({_id:id});
    }
    
});

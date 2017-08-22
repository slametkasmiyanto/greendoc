Meteor.methods({
    'tambahStatusBerkas':function(status){
        var exists = StatusBerkas.findOne({nama:status.nama});
        if(!exists){
            return StatusBerkas.insert(status);
        }
    },
    'StatusBerkas.remove':function(id){
        return StatusBerkas.remove({_id:id});
    }

});

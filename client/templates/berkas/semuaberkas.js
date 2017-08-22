Template.semuaberkas.helpers({
    berkas2:function(){
        return Berkas.find({});
    },
});

Template.semuaberkas.events({
  'click .hapusBerkas':function(evt,tmpl){
      Meteor.call('Berkas.remove',this._id);
  },
});

Template.berkasmasuk.helpers({
  myBerkas: function(){
    return Berkas.find({tujuan: Meteor.user().profile.nama});
  },
});

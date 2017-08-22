Template.atursifatberkas.helpers({
    sifat:function(){
        return SifatBerkas.find({});
    },
});

Template.atursifatberkas.events({
  'click .hapusSifatBerkas':function(evt,tmpl){
      Meteor.call('SifatBerkas.remove',this._id);
  },
  'click .tambahSifatBerkas':function(event,template){
      event.preventDefault();
      var sifat = {};
      sifat.nama = template.find('#tambahSifatBerkasId').value;
      Meteor.call('tambahSifatBerkas', sifat);
    }
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

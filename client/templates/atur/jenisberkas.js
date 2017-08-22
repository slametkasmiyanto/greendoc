Template.aturjenisberkas.helpers({
    jenis:function(){
        return JenisBerkas.find({});
    },
});

Template.aturjenisberkas.events({
  'click .hapusJenisBerkas':function(evt,tmpl){
      Meteor.call('JenisBerkas.remove',this._id);
  },
  'click .tambahJenisBerkas':function(event,template){
      event.preventDefault();
      var jenis = {};
      jenis.nama = template.find('#tambahJenisBerkasId').value;
      Meteor.call('tambahJenisBerkas', jenis);
    }
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

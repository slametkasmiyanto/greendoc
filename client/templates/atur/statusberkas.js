Template.aturstatusberkas.helpers({
    status:function(){
        return StatusBerkas.find({});
    },
});

Template.aturstatusberkas.events({
  'click .hapusStatusBerkas':function(evt,tmpl){
      Meteor.call('StatusBerkas.remove',this._id);
  },
  'click .tambahStatusBerkas':function(event,template){
      event.preventDefault();
      var status = {};
      status.nama = template.find('#tambahStatusBerkasId').value;
      Meteor.call('tambahStatusBerkas', status);
    },
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

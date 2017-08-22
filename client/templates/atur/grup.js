Template.aturgrup.helpers({
    grups:function(){
        return Grup.find({});
    },
});

Template.aturgrup.events({
  'click .hapusGrup':function(evt,tmpl){
      Meteor.call('Grup.remove',this._id);
  },
  'click .tambahGrup':function(event,template){
      event.preventDefault();
      var grup = {};
      grup.nama = capStr(template.find('#tambahGrupId').value);
      Meteor.call('tambahGrup', grup);
    }
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

var capStr = function(val) {
  return val.toUpperCase();
}

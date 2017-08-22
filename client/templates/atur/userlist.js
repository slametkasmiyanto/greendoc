Template.aturuser.helpers({
    daftarUser:function(){
        return Meteor.users.find({});
    },
    daftarEmail: function(){
      return this.emails[0].address;
    },
    grupRoles:function(){
        return Grup.find({});
    },

});

Template.aturuser.events({
  'click .hapusAkun':function(evt,tmpl){
      var res = Meteor.call('userList.remove',this._id);
  },

  'click .tambahAkun':function(event,template){
      event.preventDefault();
      var akun = {};
      akun.email = template.find(trimInput('#emailAkun')).value;
      akun.password = template.find(trimInput('#passwordAkun')).value;
      akun.password2 = template.find(trimInput('#password2Akun')).value;
      akun.nama = template.find(trimInput('#namaAkun')).value;
      akun.grup = template.find(trimInput('#grupAkun')).value;
      akun.alamat = template.find(trimInput('#alamatAkun')).value;
      if (akun.password === akun.password2) {
        Meteor.call('tambahAkun', akun);
      }
    },

});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

Template.admin.helpers({
    kategoris:function(){
        return Kategori.find({});
    },
    grups:function(){
        return Grup.find({});
    },
    jenis:function(){
        return JenisBerkas.find({});
    },
    status:function(){
        return StatusBerkas.find({});
    },
    sifat:function(){
        return SifatBerkas.find({});
    },
    daftarUser:function(){
        return Meteor.users.find({});
    },
    daftarEmail: function(){
      return this.emails[0].address;
    },

});

Template.admin.events({
  'click .hapusKategori':function(evt,tmpl){
      Meteor.call('Kategori.remove',this._id);
  }
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

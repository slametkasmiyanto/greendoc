Template.unggahberkas.helpers({
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

Template.unggahberkas.events({
//  'click .hapusStatusBerkas':function(evt,tmpl){
//      Meteor.call('StatusBerkas.remove',this._id);
//  },
'click .unggahBerkasBtn':function(event,template){
    event.preventDefault();
    var berkas = {};
    berkas.tanggal = template.find(trimInput('#tanggalId')).value;
    berkas.nomor = template.find(trimInput('#nomorId')).value;
    berkas.tujuan = template.find(trimInput('#tujuanId')).value;
    berkas.perihal = template.find(trimInput('#perihalId')).value;
    berkas.jenis = template.find(trimInput('#jenisId')).value;
    berkas.sifat = template.find(trimInput('#sifatId')).value;
    berkas.status = template.find(trimInput('#statusId')).value;
    berkas.pesan = template.find(trimInput('#pesanId')).value;
    berkas.lampiran = imageurl;
    if (berkas.tujuan === '') {
      berkas.tujuan = 'UPTD'
    }

    Meteor.call('unggahBerkas', berkas);
    template.find('#unggahBerkasFormId').reset();

  },

  'change .lampiran':function(event,tmpl){
        FS.Utility.eachFile(event,function(file){
            Images.insert(file,function(err,fileObj){
                if(!err){
                    var userId = Meteor.userId();
                    imageurl = {
                        'lampiran':'/cfs/files/images/' + fileObj._id
                    };
//                    setTimeout(function(){
//                        Meteor.users.update(userId,{$set:imageurl});
//                    },2000);
                }
            })
        })
    }
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

var imageurl = {};
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

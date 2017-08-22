Template.kategori.helpers({
    postData:function(){
        var jenisAtur = FlowRouter.getParam('namaKategori');
        return jenisAtur;
    },
    grups:function(){
        return Grup.find({});
    },
});

Template.categoryAdmin.events({
  'click .addCategory':function(event,template){
      event.preventDefault();
      var kategori = {};
      kategori.nama = template.find('#categoryName').value;
      Meteor.call('addCategory', kategori);
    }
});

Template.sidebaradmin.helpers({
    kategoris:function(){
        return Kategori.find({});
    },
    classAktif:function(){
        return FlowRouter.getParam('namaKategori');
    }
});

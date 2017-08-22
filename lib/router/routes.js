FlowRouter.route('/berkas/berkasmasuk', {
  subscriptions:function(params){
    Meteor.subscribe('berkas')
  },
  action: function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'berkasmasuk'});
  },
});

FlowRouter.route('/home', {
  subscriptions:function(params){
    Meteor.subscribe('berkas')
  },
  action: function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'semuaberkas'});
  },
});

FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render('loginlayout', {loginmain: 'login'});
  },
});

FlowRouter.route('/logout', {
  action: function(){
    Meteor.logout(function(err){
      if (!err) {
        FlowRouter.go('/');
      }
    });
  },
});


FlowRouter.route('/lengkong', {
  action: function(){
    BlazeLayout.render('layout', {sidebar: '', main: 'register_ORIG'});
  },
});

FlowRouter.route('/profil', {
  action: function(){
    BlazeLayout.render('layout', {sidebar: '', main: 'profil'});
  },
});

FlowRouter.route('/berkas/detilberkas/:berkasId', {
  subscriptions:function(params){
    Meteor.subscribe('berkas')
  },
  action: function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'detilberkas'});
  },
});


FlowRouter.route('/berkas/semuaberkas', {
  subscriptions:function(params){
    Meteor.subscribe('userlist'),
    Meteor.subscribe('grup'),
    Meteor.subscribe('jenisberkas'),
    Meteor.subscribe('statusberkas'),
    Meteor.subscribe('sifatberkas'),
    Meteor.subscribe('berkas')
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'semuaberkas'});
      } else{
          BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'semuaberkas'});
      }
  }
});

FlowRouter.route('/berkas/unggahberkas', {
  subscriptions:function(params){
    Meteor.subscribe('userlist'),
    Meteor.subscribe('grup'),
    Meteor.subscribe('jenisberkas'),
    Meteor.subscribe('statusberkas'),
    Meteor.subscribe('sifatberkas'),
    Meteor.subscribe('berkas')
  },
  action:function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'unggahberkas'});
  }
});




FlowRouter.route('/admin', {
  subscriptions:function(params){
    Meteor.subscribe('userlist'),
    Meteor.subscribe('grup'),
    Meteor.subscribe('jenisberkas'),
    Meteor.subscribe('statusberkas'),
    Meteor.subscribe('sifatberkas')
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'admin'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

FlowRouter.route('/kategori/aturgrup', {
  subscriptions:function(params){
      Meteor.subscribe('grup');
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'aturgrup'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

FlowRouter.route('/kategori/aturjenisberkas', {
  subscriptions:function(params){
      Meteor.subscribe('jenisberkas');
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'aturjenisberkas'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

FlowRouter.route('/kategori/aturstatusberkas', {
  subscriptions:function(params){
      Meteor.subscribe('statusberkas');
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'aturstatusberkas'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

FlowRouter.route('/kategori/atursifatberkas', {
  subscriptions:function(params){
      Meteor.subscribe('sifatberkas');
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'atursifatberkas'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

FlowRouter.route('/kategori/aturuser', {
  subscriptions:function(params){
      Meteor.subscribe('userlist'),
      Meteor.subscribe('grup')
  },
  action:function(){
      if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('layout', {sidebar: 'sidebaradmin', main: 'aturuser'});
      } else{
          BlazeLayout.render('layout', {sidebar: '', main: 'unauthorized'});
      }
  }
});

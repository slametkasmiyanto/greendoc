Meteor.methods({
    'tambahAkun':function(akun){
      var newUser = Accounts.createUser({
          email : akun.email,
          password : akun.password,
          //roles : akun.grup,
          profile  : {
            nama: akun.nama,
            usertype: akun.grup,
            alamat: akun.alamat
          }
      });
      Roles.addUsersToRoles(newUser, [akun.grup]);
    },

    'userList.remove':function(id){
      var jmlAkun = Meteor.users.find().count();
      if (jmlAkun === 1) {
        return false;
      } else {
        return Meteor.users.remove({_id:id});
      }
    }

});

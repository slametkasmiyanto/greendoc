Template.register_ORIG.events({
  'submit .form-signup': function(event) {
    event.preventDefault();
    var email = trimInput(event.target.email.value);
    var password = trimInput(event.target.password.value);
    var password2 = trimInput(event.target.password2.value);
    var nama = trimInput(event.target.nama.value);
    var grup = trimInput(event.target.grup.value);

    if (password === password2) {
      Accounts.createUser({
        email: email,
        password: password,
        profile: {
          nama: nama,
          usertype: grup
        }
      }, function(err) {
        if (err) {
          FlashMessages.sendError(err.reason)
        } else {
          FlashMessages.sendSuccess("Pembuatan Akun berhasil.")
          FlowRouter.go('/');
        }
      });
    } else {
      FlashMessages.sendError("Kata Sandi tidak sama.");
    }
    return false;
  }
});

var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

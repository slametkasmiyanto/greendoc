Meteor.publish('berkas', function () {
  return Berkas.find({});
});

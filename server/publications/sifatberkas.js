Meteor.publish('sifatberkas', function () {
  return SifatBerkas.find({});
});

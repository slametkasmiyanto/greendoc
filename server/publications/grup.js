Meteor.publish('grup', function () {
  return Grup.find({});
});

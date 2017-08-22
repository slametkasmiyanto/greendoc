Meteor.publish('statusberkas', function () {
  return StatusBerkas.find({});
});

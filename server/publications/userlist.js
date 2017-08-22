Meteor.publish('userlist', function () {
  return Meteor.users.find({}, {
    fields: {
      'username': 1,
      'emails': 1,
      'profile': 1,
      'roles': 1,
    }
  });
});

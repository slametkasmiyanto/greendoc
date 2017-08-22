Meteor.publish('kategori', function () {
  return Kategori.find({});
});

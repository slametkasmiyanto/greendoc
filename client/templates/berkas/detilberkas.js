Template.detilberkas.helpers({
  detilBerkasData:function(){
      var currentBerkas = FlowRouter.getParam('berkasId');
      return Berkas.findOne({_id: currentBerkas});
      //return FlowRouter.getParam('berkasId');
  },
});

Template.detilberkas.events({
	'submit .add-reply': function(event){
		var reply = event.target.reply.value;


		if(Meteor.user().profile.usertype == 'admin'){
			usertype = 'admin';
		}
    if(Meteor.user().profile.usertype == 'UPTD'){
			usertype = 'UPTD';
    }
    if(Meteor.user().profile.usertype == 'sekolah'){
  		usertype = 'sekolah';
    }
    if(Meteor.user().profile.usertype == 'DISDIK'){
  		usertype = 'DISDIK';
    }


		Berkas.update({
			_id: this._id
		}, {
			$push: {
				replies: {
					reply: reply,
					usertype: usertype,
					user: Meteor.userId(),
					replyDate: new Date()
				}
			}
		});

		event.target.reply.value = '';


		return false;
	}
});

// Format The Date Using Moment.js
Template.registerHelper('formatDate', function (date) {
    return moment(date).format('DD-MM-YYYY, hh:mm:ss');
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    fields: [
      { text: "This is field 1" },
      { text: "This is field 2" },
      { text: "This is field 3" }
    ]
  });
}   
  
/*  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
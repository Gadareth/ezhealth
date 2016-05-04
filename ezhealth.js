Tasks = new Mongo.Collection("fields");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    fields: function () {
      return Fields.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-field": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Fields.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });
}   

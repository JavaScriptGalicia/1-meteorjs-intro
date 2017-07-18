import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
  Meteor.publish('mensajes', function() {
    return Mensajes.find({});
  });

});

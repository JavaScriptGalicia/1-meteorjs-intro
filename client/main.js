import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.contenido.onCreated(function () {
  Meteor.subscribe('mensajes');
});

Template.contenido.helpers({
  datos: () => {
    return Mensajes.find({}, {sort: {date: -1}})
  }
});
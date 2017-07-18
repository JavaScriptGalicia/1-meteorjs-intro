import SimpleSchema from 'simpl-schema'
SimpleSchema.extendOptions(['autoform'])

Mensajes = new Mongo.Collection("mensajes")
Mensajes.attachSchema(new SimpleSchema({
  usuario: {
    type: String,
    label: "Usuario",
    max: 20,
    optional: false,
    autoValue: function() {
      if (!this.isSet) {
        return Meteor.userId()
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  mensaje: {
    type: String,
    optional: false,
    label: "Mensaje"
  },
  likes: {
    type: SimpleSchema.Integer,
    autoValue: function() {
      if (!this.isSet) {
        return 0
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  date: {
    type: Date,
    autoValue: function() {
      if (!this.isSet) {
        return new Date()
      }
    },
    autoform: {
      type: 'hidden'
    }
  }
}))


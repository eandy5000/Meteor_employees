import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  var randomName = faker.name.findName();

  console.log(randomName)
});

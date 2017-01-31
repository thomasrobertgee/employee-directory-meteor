// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { image, helpers } from 'faker';

import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // Great place to generate some data

  // Check to see if data already exists in the collection
  // See if the collection has any records
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
    // Generate some data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
});

/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create({
      firstName: 'Paddy',
      lastName: 'Flynn',
      email:'thepmyster@hotmail.com'
    }, {
      firstName: 'Niall',
      lastName: 'Kennedy',
      email:'niall@canada.com'
    }, {
      firstName: 'Ger',
      lastName: 'Dempsey',
      email:'ger@grinder_lover.com'
    }, {
      firstName: 'Test',
      lastName: 'Account',
      email:'notReal@hotmail.com'
    });
  });


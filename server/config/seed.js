/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'List Creation',
    info : 'Create a new signup list whenever you want, let other people see it, or make it invite only'
  }, {
    name : 'List Integration',
    info : 'Simple, powerful search queries to check all past and present lists'
  }, {
    name : 'User Management',
    info : 'Send invites to your friends and alter user permissions as needed'
  },  {
    name : 'Earn Points',
    info : 'See who attends every week and give rewards based on their score!'
  },  {
    name : 'Event Alerts',
    info : 'Everyone can see the list and recieve alerts when they\'re up next'
  },{
    name : 'Data Export',
    info : 'Export your event data to show venue owners and promoters!'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
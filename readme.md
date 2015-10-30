Open Mic Manager
==========

Open Mic Manager is a MEAN stack CRUD app designed to help open mic hosts organize
their mic.

## Features
* Regular users, Admin users, and an Admin Dashboard
* Login through google or create a secure account with local oAuth
* Create and reorder lists, save old lists, set lists as private or public
* Socket.io support for instant updates to tell someone they're up next

## Motivation
Gaining experience using and modifying a yeoman generator and gaining experience with
Grunt as well as Bower were the three main goals, Socket.io and auth were just bonuses.

## Installation
Clone or fork, npm install, create a db folder, run mongod to the db path, run
grunt, then grunt serve from the terminal for a dev build.

## Tests
Run grunt test from the terminal for Mocha REST tests.

## License
Released in 2015 under the MIT License.
# Ride-My-Way
[![Build Status](https://travis-ci.org/valentineezeh/Ride-My-Way.svg?branch=develop)](https://travis-ci.org/valentineezeh/Ride-My-Way)
[![Coverage Status](https://coveralls.io/repos/github/valentineezeh/Ride-My-Way/badge.svg?branch=develop)](https://coveralls.io/github/valentineezeh/Ride-My-Way?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/e0beaf954e76afd5de40/maintainability)](https://codeclimate.com/github/valentineezeh/Ride-My-Way/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e0beaf954e76afd5de40/test_coverage)](https://codeclimate.com/github/valentineezeh/Ride-My-Way/test_coverage)

This is a Car Pooling Web Application that connects users who are willing to offer a ride to other users who are going to the same destination.

# Technologies Used
- Front-end: Html and css
- Backend: Node/Express
- Postgres
- Libaries: Es6, Babel-CLI, eslint, Mocha/Chai, express

# Features
- Users can create an account and log in
- Authenticated User should be able to offer a ride.
- Authenticated User should be able to request to join a ride.
- Authenticated User should be able to see all rides.
- Authenticated User should be able to get a specific ride

## API Endpoints

| Endpoint                                         | Functionality                      |
| ------------------------------------------------ | ---------------------------------- |
| POST /auth/signup                                | Register a user                    |
| POST /auth/login                                 | Login a user                       |
| GET /rides                                       | Fetch all available rides          |
| GET /rides/\<rideId>                             | Fetch the details of a single ride |
| POST /users/rides                                | Create a Ride offer                |
| POST /rides/\<rideId>/requests                   | Make a ride request                |
| GET /users/rides/\<rideId>/requests              | Feth all ride requests             |
| PUT /users/rides/\<rideId>/requests/\<requestId> | Accept or Reject a ride request    |

[Ride My Way API Documentation](https://app.apiary.io/ridemyway12/editor)

# To Install
- Download or clone
- Open terminal inside the root directory of clone folder
- Type npm install to install all dependencies
- npm start to run the app
- npm run start:dev to run development environment
- npm test to run the test suits on the app

##
API Endpoint: https://frozen-mesa-95948.herokuapp.com/api/v1

## AUTHOR
[Valentine Ezeh](https://github.com/valentineezeh/Ride-My-Way)

<!-- @format -->

# Description of Application:

This project is an implementation of a real time chat service. The features implemented are as follow:

- User registration
- Upon registration the user will be shown a list of conversations
- The user is able to create new conversations
- The user is able to post messages within the new conversations they create
- The user is able to delete messages as long as they are the creator of those messages
- Users are able to navigate back to the conversations view as is the nature of the 'split-screen' design
- Conversation and Messages are updated at an interval of 1.5s so that new conversations and replies are shown quickly

Additional Features:

- Users have the ability to sign out which discards the user token from localStorage
- localStorage is used to maintain the current users token and relevant conversation ID's

# A Real-Time Chat Service

This repository is the starter kit for the COMP3120 Individual Project
for 2022: a real time chat service. The back-end implementation is
in the `server` subdirectory. The front-end project is homed in the
main directory (with sources in `src`).

Note that you can make any changes you deem necessary to this code including
fixing bugs and adding features. That includes changing this file which should document
your personal project.

## Configuration

Copy the file `.env.dist` to `.env` and edit the file with your own
settings - in particular your MongoDB settings if you are doing server
side development. Note that these settings are only relevant to the
server implementation, not the front-end.

## Frontend Project

The `src` folder contains a template front-end React project to get you
started.

To install React and all the required packages, run:

```bash
npm install
```

To run the front-end development server:

```bash
npm run start
```

This will run the server on port 3000.

You can run the front-end tests as usual with:

```bash
npm run test
```

Which will run any tests you have added to the front-end project under `src`. Currently it
runs one dummy test.

## Backend Server

The backend server is documented in [Backend Server](doc/backend.md).

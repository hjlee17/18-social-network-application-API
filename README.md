# 18-Social-Network-Application-API
![License badge.](https://img.shields.io/badge/License-MIT-yellow.svg) 

## Description
This is a test API built for a social network application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Resources](#Resources)
- [Questions](#questions)

## Installation
1. Clone this [repository](https://github.com/hjlee17/18-social-network-application-API.git).
2. Install [Node.js](https://nodejs.org/).
3. Install the dependencies using the ```npm i``` command. 
   - [express v.4.18.2](https://www.npmjs.com/package/express/v/4.18.2)
   - [mongoose v.8.0.3](https://www.npmjs.com/package/mongoose/v/8.0.3)
   - [nodemon v.3.0.2](https://www.npmjs.com/package/nodemon/v/3.0.2)

4. Install [Insomnia](https://insomnia.rest/download) or another similar tool for accessing backend frameworks to access and test the backend. 

## Usage
Start the server using the ```npm start``` command.

### WalkThrough Video
The [video](https://drive.google.com/file/d/12EQQpFyDkk4yKJ_uAMVusOA5HDpVf0dg/view?usp=drive_link) demonstrates the following:
1. GET requests for all Users and all Thoughts.
2. GET requests for a single User and a single Thought. 
3. POST requests to create new Users (and the database does not allow for duplicate emails).
4. PUT request to update a User's username or email.
5. POST requests to create new Thoughts.
6. PUT requests to update Thoughts.
7. DELETE request to delete a one Thought (video demonstrates the deleted Thought no longer present in a GET request for all Thoughts).
8. DELETE request to delete User (video demonstrates that the User is gone, as well as all of their associated Thoughts, even if the Thought was not deleted).
9. POST request to add a User as a Friend to another User.
10. DELETE reuqest to remove a User as a Friend.
11. POST request to add a Reaction to a Thought.
12. DELETE request to remove a Reaction from a Thought.

## License
[The MIT License](https://opensource.org/licenses/MIT/)

## Resources
- [MDN Web Docs](developer.mozilla.org)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

## Questions
- Github: [hjlee17](https://github.com/hjlee17)
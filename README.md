# Project Title

Backend

---
## Requirements

For development, you will only need Node.js and a node  package, npm, installed in npm environement.

## Install
    $ packege.json or npm init
    $ git clone 
    $ cd backend
    $ npm install

## Configure db

create db with the name `Inzale` when you execute de "npm start":

- Model - users;
- Model - post;


## Running the project

    $ npm run dev

## Simple build for production

    $ npm start

## Overview:
This project involves the development of a complete backend social network application. Users can seamlessly register, log in, post messages, explore the feed, search for messages and manage their profiles.

Technologies Used:

Backend: ExpressJS
Database: MongoDB

Main Features:

1. Registration and Login:

Implemented a robust registration and login system utilizing JWT authentication for enhanced security.

2. Main Feed:

The application showcases a dynamic main feed, displaying user-generated posts.
Users have the ability to post messages with a specified title and content.
Posts seamlessly integrate into the post menu, appearing at the bottom immediately after sharing.

3. Message Search:

Developed a sophisticated search filter enabling users to efficiently search for messages within the feed.

Details:

1. Applied SOLID principles to enhance code readability and maintainability.

2. Introduced a 'like' feature for posts, displaying the quantity of likes.

3. Implemented a robust architectural design, MVC.

4. Ensured effective error handling.

5. Integrated soft delete functionality in the data models.

6. Enabled pagination in post queries for improved performance.

Models: 

## User
o FullName
o Age
o Email
o Password
o posts (relación con los posts del usuario) o createdAt
o updatedAt
o deletedAt

## Post
o Title
o Content
o Likes
o CreatedAt
o UpdatedAt
o DeletedAt
o userId (relación con el usuario)
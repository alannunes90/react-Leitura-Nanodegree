# Project of Reading

This is a project of the course Udacity Nanodegree of the Redux module.

## Installation / Rum the project

To do the installation of the project is necessary to have the nodejs installed, with this make the clone of the repository and run the command:

* open folder front-end `cd front-end`
* install all project dependencies with `npm install`
* start the development server with `npm start`

To make the application work we should leave the server running to use the system features. <a href="https://github.com/alannunes90/react-Leitura-Nanodegree/tree/master/server">Server Repository</a>.

To do the installation of the project back-end perform the following steps:

* open folder front-end `cd server`
* open folder front-end `cd api-server` and run the command:
* install all project dependencies with `npm install`
* start the development server with `node server`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # Actions are payloads of information that send data from your application to your store. 
    │   ├── ActionsTypes.js
    │   ├── PostActions.js
    │   ├── PostDetailActions.js
    │   └── RootActions.js
    ├── components # Components of the application
    │   ├── index.js
    │   ├── Categories.js
    │   ├── Commentary.js
    │   ├── Post.js
    │   ├── Sort.js
    │   ├── ListPosts.js
    │   └── Top.js
    │   └── Votacao.js
    ├── entities # Entities of the application
    │   ├── index.js
    │   ├── CategoryEntity.js
    │   ├── CommentEntity.js
    │   └── PostEntity.js
    ├── icons # Icons of the application
    │   ├── arrow-back.svg
    │   ├── cancel.svg
    │   ├── person-add.svg
    │   ├── person.svg
    │   ├── search.svg
    │   ├── seta-down.png
    │   └── seta-up.png
    ├── reducers # Reducers of the application
    │   ├── index.js
    │   ├── PostDetailReducer.js
    │   ├── PostReducer.js
    │   └── RootReducer.js
    ├── router # Router of the application
    │   └── index.js
    ├── store # Store (Redux) of the application
    │   └── index.js
    ├── utils # Generic folder
    │   └── LeituraAPI.js # A JavaScript API for the provided Udacity backend.
    ├── views # Views of the application
    │   ├── comment
    │   │   └── CommentFormView.js    
    │   ├── error
    │   │   └── Error404.js    
    │   ├── post
    │   │   ├── PostDetailView.js
    │   │   └── PostFormView.js
    │   └── root
    │       └── RootView.js      
    ├── App.js # Render the homepage
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Backend Server

To simplify your development process, Udacity provides a backend server for application development that contains the methods needed to perform operations on the backend

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Project Requirements:

The design requirements were made by Udacity for the nanodegree program. See the <a href="https://review.udacity.com/#!/rubrics/1081/view">requirements here</a>.



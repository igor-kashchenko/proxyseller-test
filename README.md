# ReactJS Program with JSONPlaceholder API

[DEMO](https://igor-kashchenko.github.io/proxyseller-test/)

This is a ReactJS program that utilizes the JSONPlaceholder API (https://jsonplaceholder.typicode.com/) to perform the following tasks:

Fetches and displays a list of users using the /users endpoint.
Allows the user to perform actions on each user:
Clicking the "Posts" button displays the user's posts on a separate page (/posts).
Clicking the "Albums" button opens a modal window displaying the user's albums (/albums).

## Technologies Used
- ReactJS
- Redux Toolkit
- Typescript
- React Router Dom
- MUI

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Installation
To run this program locally, follow these steps:

- Clone the repository to your local machine.
- Navigate to the project's root directory.
- Run `npm install` to install the dependencies.
- Run `npm start` to start the development server.
- Open your web browser and access the program at `http://localhost:3000`.

## Usage
Once the program is running, it will fetch and display a list of users. Each user will have two buttons: "Posts" and "Albums". Clicking the "Posts" button will navigate to a separate page where the user's posts will be displayed. Clicking the "Albums" button will open a modal window showing the user's albums.

## API Integration
This program integrates with the JSONPlaceholder API to fetch user data. The following API endpoints are used:

- /users: Fetches a list of users.
- /posts: Fetches the posts for a specific user.
- /albums: Fetches the albums for a specific user.

# User Dashboard Project

## Overview

This project is a **React.js** application that displays user data fetched from a REST API, including basic user information and a list of activities (posts). The app is responsive and includes key features such as a dynamic navbar, user profile pages, and activity feeds.

## Features

### 1. Navbar
- A responsive navigation bar with a hamburger menu for mobile users.
- The mobile menu shows a list of **friends** fetched from the API.
- Clicking on a friend's name routes the user to their profile page.

### 2. Home Page
- Displays a randomized feed of **posts** from different users under the "For You" section.
- Shows a **Friends** section and a **Suggested Users** section.
- Posts are fetched from the REST API and displayed along with user information.

### 3. User Profiles
- Clicking on a user's name (from the navbar or homepage) directs the user to the **user profile page**.
- Each profile shows basic user details such as **name**, **email**, and **phone**.
- A feed of the user's activities (posts) is also displayed.

### 4. User Activities
- Displays a list of activities (posts) by each user.
- Posts include a title and body, with the user's profile picture and name displayed above the post.

## Technologies Used
- **React.js** for building the frontend.
- **Axios** for making HTTP requests to the REST API.
- **React Router** for handling routing between pages.
- **SCSS** for styling the components.
- **JSONPlaceholder** as the mock REST API for users and posts data.

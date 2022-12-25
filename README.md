# IRIS_201ME249_1_Node

## Description
A site to help College Clubs in maintining multiple files for social media presence:

* Club Admin can add tasks, and assign subtasks to differnet members in the club.
* Users can submit the tasks assigned by their club admins.
* Admins manage and control the entire store components.

## Demo
https://user-images.githubusercontent.com/84263946/209482411-a9cc6dfe-259d-4a92-bf0d-21f5d1617803.mp4


## Installation instructions to set up the project from scratch

commands to initialize backend server:

```
$ git clone https://github.com/SaikiranPatil/IRIS_201ME249_1_Node.git
$ npm install
```

commands for frontend:

```
$ cd frontend
$ npm install
```
Note: As of now Admin Dashboard is not hence we need to change roles to admin, cadmin manually to claim their acess.

## Complete steps to run the project

Create .env file at the root of th folder that include:

```
  * PORT (not mandatory)
  * MONGO_URI 
  * JWT_SECRET & JWT_EXPIRE
  * COOKIE_EXPIRE
  * SMTP_SERVICE_PROVIDER => Ex:"gmail"
  * SMTP_EMAIL_ADRESS => Ex:"username@mail.com"
  * SMTP_CLIENT_ID & SMTP_CLEINT_SECRET & SMTP_REFRESH_TOKEN => Google API Configurations
```

for server

```
$ nodemon
```
for frontend

```
$ cs frontend
$ npm start
```

## List of implemented features
* JSON Web Token for authentication of users.
* Using bcrypt to encrytp passwords.
* Users are notified about assigning of subtasks, when assigned by mail.
* Changing password by recovery email.
* login, logout, register of users.
* Creating, managing of tasks.
* Creating subtasks.

## List of non-implemented/planned features
* Providing complete acess and Admin dashboard.
* Updating response of subtasks including files and storing them on Google Drive using the Google Drive API.
* Dividing views based on the social media platform.
* Adding task/subtask deadline to Google Calender.

## List of known bugs
* Sometimes, proper responses from server are not displayed.
* Improper redirecting for some pages.

## References used
* [E-Commerce Website by 6 Pack Programmer](https://www.youtube.com/watch?v=AN3t-OmdyKA&t)
* [ShopGrids – Free Bootstrap 5 eCommerce UI Kit Template](https://graygrids.com/templates/shopgrids-bootstrap-ecommerce)

<p align='center'>
  <img src='./readme-assets/images/logo.jpg' height='200px'>
</p>

# jovero
jovero is a short description of the app. It is a fullstack React App made with a Redux state manager and a backend using SQL-Alchemy, and PostgresSQL.

* View the <a href='https://jovero-app.herokuapp.com/'>jovero</a> App Live

<!-- * Reference to the jovero <a href='https://www.github.com/jomix-13/jovero/wiki'>Wiki Docs</a> -->

| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Future Features](#future-features) |
| 4. [Contact](#contact) |
<!-- | 3. [Technical Implementation Details](#technical-implementation-details) | -->
<!-- | 6. [Special Thanks](#special-thanks) | -->


## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL&logoColor=white" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
<!-- * <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" /></a> -->
<!-- * <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a> -->
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>


## Features

### Sign In and Sign Up
![Sign Up](./readme-assets/images/signup.jpg)
![Login](./readme-assets/images/login.jpg)

### Feed Page
jovero feed displays all Businesses
Discover and search for new Businesses
![Feed Page](./readme-assets/images/feed.jpg)

### View Business
Single Business of name, photos, Reviews
![Business Page](./readme-assets/images/Business-page.jpg)

### Add Business
Add a new Business to the database
![Add Business](./readme-assets/images/Business-add.jpg)
<!-- Cancel adding Business -->
<!-- ![Cancel Add Business](./readme-assets/images/Business-add-cancel.jpg) -->

### Create, Read, Update, Delete Business Reviews
View Reviews
![Reviews](./readme-assets/images/Reviews.png)
Edit and Add Reviews in the database
![Edit Reviews](./readme-assets/images/Reviews-edit.png)
![Add Reviews](./readme-assets/images/Reviews-add.png)

<!-- * Add any more features here -->

## Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/jomix-13/jovero.git
```
<!-- 
2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
``` -->

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings

4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file

<!-- 5. Before running any flask commands, confirm you are in the pipenv virtual env. If not, run the command:
```shell
pipenv shell
``` -->

5. In the backend folder, create the database by running in the terminal:
```
npx dotenv sequelize db:create
```

6. In the root folder, migrate tables to the database by running in the terminal:
```
npx dotenv sequelize db:migrate
```

7. In the root folder, seed the database by running in the terminal:
```shell
npx dotenv sequelize db:seed:all
```

8. Start the flask backend in the `/` root directory
```javascript
npm start
```

9. Start the frontend in the `/react-app` directory

```javascript
npm start
```


<!-- ## Technical Implementation Details

### {Detail 1}
Description 1

Part of code is shown below:

```python
print('add code snippet 1 here')
```

Description 2

```javascript
print('add code snippet 2 here')
```

### {Detail 2}
Description 1

Code snippet is shown here:

```javascript
print('add code snippet 1 here')
``` -->


## Future Features

1. __Search__ - search Businesses

2. __Rating Average display__ - Rating Average display details


## Contact

### John Wanis
<a href="https://www.linkedin.com/in/john-wanis-764957138/"><img src="./readme-assets/logos/linkedin-logo.png" height="28" align="middle" /></a>
<a href="https://angel.co/u/john-wanis-1"><img src="./readme-assets/logos/angellist-logo.png" height="28" align="middle" /></a>
<a href="https://github.com/jomix-13"><img src="./readme-assets/logos/github-logo.png" height="38" align="middle" /></a>

john.wanis@yahoo.com


<!-- ## Special Thanks
* Fellow peers who have given me support and community: [Andrew](https://github.com/andru17urdna), [Henry](https://github.com/hnrywltn), [Pierre](https://github.com/TheGuilbotine), [Lema](https://github.com/lemlooma), [Meagan](https://github.com/meagan13), [Simon](https://github.com/Simonvargas), [Michelle](https://github.com/michellekontoff), [Nico](https://github.com/nicopierson), [John](https://github.com/Jomix-13), [Manna](https://github.com/makon57), and [Monte](https://github.com/theflaggship)
* Mentors who have given me their time and effort: [Zach](https://github.com/zdwatts), [Olivia](https://github.com/OByrnes), [Ed](https://github.com/edherm), and [Javier](https://github.com/javiermortiz)  -->

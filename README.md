# CatCorn APP <img src="/img readme/logo-modified.png" width="50">

---

## Introduction

CatCorn is a simulation of an app with a suscription available to watch series and movies. The back-end side is in this next repository:
https://github.com/MartaAguilarTaverner/Tic-Tac-Toe-Proyecto-3.git

You will be able to register and navigate in the options of the movies and series that you have in this app, with a rating and description of the media (genre, director, year...), even you have two views one with the top rating movies and the other with the top rating series. All responsive.

Two types of user, admin and normal, the navbar is modified to show the items depending in each situation, even when the user is not registered the navbar will not show the part of movies or series, and without being admin it will not show the administration part.

---

## Tecnologies

**- CSS3**
**- JavaScript**
**- React**
**- PrimeReact**
**- PrimeFlex**

---

## Views of the App and Functionality

### `Before Login`

Before login or register you will be able to see the screen of home, that os simple, just a background with presentation of the films, and you will be able to access to the user part, and the screen of Login and register

<center><img src="/img readme/Home.png" height="300"></center>
<center><img src="/img readme/Register.png" width="300"> <img src="/img readme/Login.png" width="230"></center>

The part of login compare the data that the user puts with the data that is saved in the back, and if it's the same then you will be able to enter and see all the web, with the register part the data will be saved in the back and you will be able to login with your new user.

---

### `After Login`

You will be able to see all the things that the app offers, movies and series, and you will have the new option in user of logout and profile, the others will disappear. You will have as well the movies with the option of movies and top movies, and series with the option of series and top series.

<center><img src="/img readme/moviesnavbar.png" width="200"> <img src="/img readme/seriesnavbar.png" width="135"> <img src="/img readme/userOption.png" width="200"></center>

When you enter to movies you will have a view aof all the movies in the data base and with two options of view, in line(one for one all the movies in vertical) or the option of table with three in every column(in pc view in phone just one), you have a paginator in the final of each view to charge new movies in each page.

<center><img src="/img readme/movies lined.png" width="300"> <img src="/img readme/moviesscreen.png" width="290"></center>
<center><img src="/img readme/paginator.png" width="300"></center>

Pressing the button info you will acces to a new page with all the info of that movie and with another buuton of watch that will register that in the data base to be able to see what user has accessed each movie, the same functionality in the series screen

<center><img src="/img readme/description.png" width="700"></center>

---

### `Admin Access`

The admin will be able to have acces to a new view of administration, which has a submenubar with two options user and userorders, and will be able to modify or delete the info of the users and the orders. This tables canbe ordered by email Datebirth, name... by putting it in an ascendent or descendent order, to make it easy for the user to access to the information that is searching faster and easier.

<center><img src="/img readme/adminscreen.png" width="900"> </center>

---

## DB Structure

<center><img src="/img readme/DB.png" width="700"></center>

---

#### Expecting new uploads and improvements in few parts of the project

In the future I will like to improve the part of the admin with a search field, to improve the info view with a better style and another screen when the movie or serie can be watched, more info in the series part with all the episodes and be able to access each one, and improve the profile to be able to change few fields, and charge a profile pict and description.

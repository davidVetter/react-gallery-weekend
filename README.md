# Likeable Photo Gallery

## Description

_Duration: 20 Hours_

This is a basic photo gallery with a "like" feature. This application is connected to a database so photos are stored even when the page is left or the server turned off. There is a form to quickly add new photos by a url, title and description of the photo. Each photo may be clicked on to show the description of the photo contained in the database. Clicking again will re-display the photo again. Below each photo is the number of likes each photo has, a heart shaped button to add a new like, and a trash can button to delete that photo. The background color will slowly change over time and the photos themselves will grow and shrink a bit for a fun "breathing" effect. The layout will respond to a variety of screen sizes. Buttons have colored indicators to aid in user experience.

<!-- To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) -->

## Screen Shot

<img src='./public/images/Screen Shot 2022-09-25 at 9.04.11 PM.jpg'>
<img src='./public/images/Screen Shot 2022-09-25 at 9.04.25 PM.jpg'>
<img src='./public/images/Screen Shot 2022-09-25 at 9.04.46 PM.jpg'>
<img src='./public/images/Screen Shot 2022-09-25 at 9.05.10 PM.jpg'>

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org)

## Installation

1. Clone Repo
2. Create database called 'react_gallery' in [PostgreSQL](https://www.postgresql.org)
3. Use SQL in database.sql from Repo to create required tables ([Postico](https://eggerapps.at/postico/))recommended to setup table)
4. Run 'npm install'
5. Run 'npm run server'
6. Run 'npm run client'
7. App should open in your browser

## Usage

1. If database is setup and app running in browser, start adding photos!
2. Use the Add Button to display the "Add Photo" inputs.
3. Add as many photos as you would like.
4. Use the "like" button to increase the likes of a photo.
5. Use the Delete button associated with each photo to remove from the app and database (cannot be undone).
6. Click on a photo to have the photo's description displayed.
7. Re-click the description to have to photo re-displayed.


## Built With

 - HTML
 - CSS
 - Javascript
 - React.js
 - PG.js
 - Express.js
 - PostgresSQL
 - Postico
 - Postman
 - Sweet Alerts
 - Git
 - GitHub
 - VScode

## License

- Free to use

## Acknowledgement
 - Thank you to [Emerging Digital Academy](http://emergingacademy.org/) for the skills to make this calculator!
 - Thanks to [express.js](https://expressjs.com) for the ability to create a server and run the calculator.
 - Thanks to [pg.js](https://www.npmjs.com/package/pg) for being able to connect my database to the server.
 - Thanks to [Coolors.co](https://coolors.co/) for the color palette used.
 - Thanks to [W3 SChools](https://www.w3schools.com) for the refernce material on HTML, Javascript and CSS.
 - Thanks to [Mozilla](https://developer.mozilla.org/en-US/) for the in-depth reference material when a deeper understanding is need.

## Support
If you have suggestions or issues, please email [me!](ddvetter23@gmail.com)

# E-commerce

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description of App

This application uses api routes to retrieve data for Products, Categories, and Tags to organize an E-Commerce shop's inventory and putting the Items for sale with labels like Products, categories, and tags to make all the data easily retrievable by unique id's for all the products, categories, and tags. This makes creating new products, tags, and categories easy. As well as updating and deleting these items are equally as easy. Using `Insomnia` you can GET categories, products, and tags by all and by id for one item at a time. You can also POST to create a new product, category, or tag. Using PUT you can update the name and other information by id, and DELETE deletes the item by id.

## Installation

1. **Install Dependencies**

   - After downloading the GitHub files, navigate to the `server.js` file.
   - Right-click and select "Open Integrated Terminal."
   - Run `npm install` in the terminal to install the necessary npm packages.
   - If user does not have `Insomnia` installed they need to install it. Here is the link to install [Insomnia](https://insomnia.rest/download).

2. **Set Up the Database**

   - Right click the `db` folder and "Open Integrated Terminal".
   - In the terminal, input `\i schema.sql` to create the database schema.
   - After the tables are created, input `\i seeds/index.js` to populate them with example data.
   - Once the data is populated, type `\q` to exit the database environment and return to the integrated terminal.

3. **Start the Application**
   - In the terminal `server.js`, run `npm start` or `node server.js` to start the server and application.
   - Navigate to Insomnia application.

## How to Use the Application

## Video Example of how to use

## Tools and languages used

- vsCode
- github
- node.js
- javaScript
- package.json
- package-lock.json
- pg npm package (https://www.npmjs.com/package/pg)
- dotenv npm package (https://www.npmjs.com/package/dotenv)
- sequelize npm package (https://www.npmjs.com/package/sequelize)
- express npm package (https://www.npmjs.com/search?q=express)
- .gitignore
- Insomnia (https://insomnia.rest/download)

## Code source

- I got help from learning xpert tool
- I got help from stack overflow
- I got help from chatGpt
- I got help from google
- I got help from the bootcamp activities modules

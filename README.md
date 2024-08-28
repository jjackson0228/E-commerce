# E-commerce

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description of App

This application provides a comprehensive solution for managing an e-commerce shop’s inventory. It leverages API routes to handle **Products**, **Categories**, and **Tags**, allowing you to organize and manage your inventory efficiently.

Key features include:

- **Retrieval of Data**: Fetch information about Products, Categories, and Tags using unique IDs. This ensures easy access and organization of inventory items.
- **CRUD Operations**: Seamlessly create, update, and delete items.
  - **Create**: Add new Products, Categories, or Tags with ease.
  - **Read**: Retrieve detailed information about all items or a specific item by its ID using GET requests.
  - **Update**: Modify existing items’ details, such as names and attributes, with PUT requests.
  - **Delete**: Remove items from the inventory by ID using DELETE requests.

Testing and interacting with the API is straightforward using **Insomnia**. You can:

- **GET**: Retrieve lists of all items or individual items by ID.
- **POST**: Create new Products, Categories, or Tags.
- **PUT**: Update details of existing items by ID.
- **DELETE**: Remove items by ID.

This application simplifies inventory management for e-commerce stores, providing an intuitive interface for maintaining and organizing products and related data.

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

## How to Use the App

1. **Start the Server**: Run `npm start` to launch the application.

2. **Interact with the API**: Use a tool like **Insomnia** to make API requests. Here’s how:
   - **GET** `/api/products`, `/api/categories`, `/api/tags`: Retrieve lists of products, categories, or tags.
   - **GET** `/api/products/:id`, `/api/categories/:id`, `/api/tags/:id`: Retrieve a specific item by ID.
   - **POST** `/api/products`, `/api/categories`, `/api/tags`: Create new items by providing details in the request body.
   - **PUT** `/api/products/:id`, `/api/categories/:id`, `/api/tags/:id`: Update existing items by ID with new details.
   - **DELETE** `/api/products/:id`, `/api/categories/:id`, `/api/tags/:id`: Delete items by ID.

This app allows you to manage your inventory efficiently through these API endpoints.

## Video Example of how to use

[Walkthrough video link](https://drive.google.com/file/d/1sSF7vCYZKHgtlnmiDK9YEil8za7zidZV/preview)

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

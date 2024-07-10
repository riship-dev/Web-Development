### Importing Modules

```javascript
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
```
- **`import express from "express";`**: Imports the Express.js module, a web application framework for Node.js.
- **`import bodyParser from "body-parser";`**: Imports the body-parser middleware, which is used to parse incoming request bodies.
- **`import { dirname } from "path";`**: Imports the `dirname` function from the `path` module, which is used to get the directory name of a path.
- **`import { fileURLToPath } from "url";`**: Imports the `fileURLToPath` function from the `url` module, which is used to convert a file URL to a path.

### Setting Up Directory Name

```javascript
const __dirname = dirname(fileURLToPath(import.meta.url));
```
- **`const __dirname = dirname(fileURLToPath(import.meta.url));`**: This line determines the directory name of the current module file. `fileURLToPath(import.meta.url)` converts the module URL to a file path, and `dirname` gets the directory name of that path.

### Initializing Express Application

```javascript
const app = express();
const port = 3000;
var bandName = "";
```
- **`const app = express();`**: Initializes an Express application.
- **`const port = 3000;`**: Sets the port number where the server will listen for requests.
- **`var bandName = "";`**: Declares a variable to store the generated band name.

### Middleware

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```
- **`app.use(bodyParser.urlencoded({ extended: true }));`**: Uses the body-parser middleware to parse URL-encoded data from the request body. The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format.

### Custom Middleware Function

```javascript
function bandNameGenerator(req, res, next) {
    bandName = req.body["street"] + req.body["pet"];
    next();
}
app.use(bandNameGenerator);
```
- **`function bandNameGenerator(req, res, next) { ... }`**: Defines a middleware function that generates a band name by concatenating `street` and `pet` values from the request body.
- **`bandName = req.body["street"] + req.body["pet"];`**: Sets the `bandName` variable using values from the request body.
- **`next();`**: Calls the `next` function to pass control to the next middleware function.
- **`app.use(bandNameGenerator);`**: Registers the `bandNameGenerator` middleware function with the Express application.

### Route Handlers

```javascript
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
```
- **`app.get("/", (req, res) => { ... });`**: Defines a route handler for GET requests to the root URL (`/`).
- **`res.sendFile(__dirname + "/public/index.html");`**: Sends the `index.html` file located in the `public` directory as the response.

```javascript
app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is: ${bandName}</h1>`);
});
```
- **`app.post("/submit", (req, res) => { ... });`**: Defines a route handler for POST requests to the `/submit` URL.
- **`res.send(`<h1>Your band name is: ${bandName}</h1>`);`**: Sends an HTML response with the generated band name.

### Starting the Server

```javascript
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
```
- **`app.listen(port, () => { ... });`**: Starts the Express application and listens for incoming connections on the specified port (`3000`).
- **`console.log(`Listening on port ${port}`);`**: Logs a message to the console indicating that the server is running and listening on the specified port.

### Summary
- The script sets up an Express server with a middleware to parse URL-encoded data.
- A custom middleware function generates a band name from the request body.
- The server serves an HTML file for the root URL and handles form submissions on the `/submit` URL, responding with the generated band name.
- Finally, the server listens on port `3000` for incoming requests.
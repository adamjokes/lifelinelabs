# Lifeline Labs Assessment

A repository for the Lifeline Labs assessment

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the dependecies required for assessment.

```bash
npm i
```

## Additional Information

This project utilizes Express.js and MongoDB. The app is run locally and has already been set to listen to port 3000 (you can change this to your liking). As for the database, you can choose to install MongoDB locally [MongoDB](https://www.mongodb.com/try/download/community) or use mLab to create cloud Mongo database [mLab](https://mlab.com/). To connect to the database, simply insert your database connection information in this line of code at the app.js file.

```js
mongoose.connect({insert_connection_info_here},
{useNewUrlParser:true})
```

The mongoose package was utilized to validate the schema and to interface with the database.

To see the endpoints in action, you can choose to run the test suites as follows

```bash
npm test
```

Or call the endpoints using a HTTP client like [Postman](https://www.postman.com/downloads/).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

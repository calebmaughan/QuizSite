# Live-Poll Documentation


## Setting Things Up
After pulling this down to your local repository, there are two main things
you need to do to get up and running.

* Inside of both the client and server directories, run `npm install`. This will install
    all of the dependencies required by the `package.json` files in each directory.

* Test to make sure that everything is working correctly.

  * Inside of the client directory, run `npm start`. This will spin up a react server
        which you should be able to reach at `localhost:3000`

  * Inside of the server directory, run `npm start`. This will spin up a very simple
        server that outputs to the console and renders a blank webpage at `localhost:3001`

## Testing Our API
There are several simple API calls that have been implemented (these by no means will
be in the final product). Here is how you test them:

1. Make sure that your local repo is up to date... duh
2. Make sure you have [Postman](https://www.getpostman.com/) installed... It's a beautiful program :')
3. Spin up the Express server (ie. `npm start` in the server directory)
4. In Postman, select the type of CRUD action you'd like to perform and the
URL `localhost:3001/users`. When performing a POST or PUT, ensure that in
Postman Body>x-www-form-urlencoded is selected. Oh, and don't forget to enter key value
pairs that you want to POST or PUT. This is important!! Now you can POST, PUT, GET
and DELETE away!!

Note: You are performing CRUD operations on my mLab database. Go ahead and make your own
database and include it in line 4 of `db.js`.

Let's add a bit of API and model documentation for quick reference.

## API Documentation
### API Construction
When developing APIs for this project, there are several things to keep in mind. We want
all router module (API calls at different routes) to be stored in `/server/src/routes`.
Their name should be descriptive (ex. `userRouter.js` or `quizRouter.js`). Make sure
that you've required the proper models in each router module. Also make sure that
you've required the router module in server.js. Try to make them reusable and extensible,
it might be useful to call router modules from inside other router modules. We'll
have to look into this though.

## Model Documentation
### Model Construction

## Committing Rules
1. When committing your code, do not include the `node_modules` files in either directory. These
are installed when running the `npm install` command. However, when you add a new node modules,
make sure you run `npm install <module name> --save`. This will save the module name in the `package.json`
file and allow us to easily keep track of dependencies.


## Resources

#### Express:
* http://expressjs.com/
* https://hackernoon.com/how-to-combine-a-nodejs-back-end-with-a-reactjs-front-end-app-ea9b24715032

#### React:
* https://reactjs.org/
* https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/

#### API Building:
* [Look at this!!](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4#toc-want-more-mean-setting-up-a-mean-stack-single-page-application-build-a-restful-api-using-node-and-express-4-using-gruntjs-in-a-mean-stack-application-authenticate-a-node-api-with-tokens)
* [A useful API testing tool](https://www.getpostman.com/)

#### Database:
* https://mlab.com

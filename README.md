# Live-Poll Documentation


## Setting Things Up
After pulling this down to your local repository, there are two main things
you need to do to get up and running.

* Inside of both the client and server directories, run `npm install`. This will install
    all of the dependencies required by the package.json files in each directory.

* Test to make sure that everything is working correctly.

  * Inside of the client directory, run `npm start`. This will spin up a react server
        which you should be able to reach at "localhost:3000"

  * Inside of the server directory, run `npm start`. This will spin up a very simple
        server that outputs to the console and renders a blank webpage at "localhost:3001"


## Committing Rules
1. When committing your code, do not include the "node_modules" files in either directory. These
are installed when running the `npm install` command. However, when you add a new node modules,
make sure you run `npm install <module name> --save`. This will save the module name in the package.json
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

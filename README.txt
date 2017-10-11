After forking and pulling this down to your local repository, there are two main things
you need to do to get up and running. 

1) Inside of both the client and server directories, run "npm install". This will install
    all of the dependencies required by the package.json files in each directory.
    (Commands might differ for windows... I don't know what they are)
    
2) Test to make sure that everything is working correctly.

    a) Inside of the client directory, run "npm start". This will spin up a react server
        which you should be able to reach at "localhost:3000"
        
    b) Inside of the server directory, run "node app.js" (this command will change soon). This will 
        spin up a very siple server that outputs to the consol and renders a blank webpage at "localhost:4200"
        
I have writen some other code that might be helpful for the back end. I'll try to add it soon.

When commiting your code, do not include the "node_modules" files in either directory. These
are installed when running the "npm install" command. 

If and when you add a new node modules, make sure you run "npm install <module name> --save".
This will save the module name in the package.json file and allow us to easily keep track of
dependencies. 

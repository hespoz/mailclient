# mailclient
This is an small prototype of an email client created with ReactJS. I used nodejs just to serve the messages_sample.json file and the main html page. 

# TODO - add/modify/approach

 - More color and more CSS styles.
 - Cool responsive functionality.
 - Put all the onClick methods in the index.jsx component and then pass the references as part of the component properties to all the child components. This will let the users of the Component(Other developers) to pass to the components their own action methods. 
 - More validations in the EmailStore, just to ensure the structure of the responses that the server will return.


#Install

```sh
$ npm mailclient 
$ npm install 
$ node server.js
```
In other command tab, run the following command this will rebuild the offuscated js from the react code.

```sh 
$ npm run webpack-dev
```

#Execute

After starting the server, put the following url in your browser

```sh 
http://localhost:3000/
```
If everything went fine, you should see the following screen:




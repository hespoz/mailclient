# mailclient
This is an small prototype of an email client created with ReactJS. I used nodejs just to serve the messages_sample.json file and the index HTML page. 

# Approach
I create a parent component (Index), and then inside it, I add the EmailList -> EmailItem components and the EmailContent component. The Index component is listening for EmailStore changes, this store contains the _EmailList and _EmailSelected attributes(DataSources). So each time that the EmailItem component change the _EmailList (Removing or selecting emails) or the _EmailSelected(Selecting emails) the Index component will render again those EmailStore attributes.

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

![captura de pantalla 2016-10-06 a las 1 19 12 a m](https://cloud.githubusercontent.com/assets/5234775/19143727/f98416b8-8b62-11e6-898d-1371bd44c07c.png)



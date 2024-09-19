# PWA Text Editor Application

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
- [Credits](#credits)
- [Author](#Author)
- [Images](#Images)
- [LINKS](#links)

## Description 
This Progressive Web Application (PWA) was designed to run in the browser to create notes or code snippets with or without an internet connection so that you can reliably retrieve them for later use. You will see a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. This is to ensure proper functionality for the user.  

## Installation
When you open the application in the editor, you should see a client server folder structure. Execute the commands "npm install", "npm run build" and "npm run start" from the root directory in your terminal. 

Running the application from the terminal will allow the Javascript files to bundle using webpack. The webpack plugins will generate the HTML file, [service worker](./md-images/service-workers.png), and the [manifest](./md-images/manifest.png) file, which allows the app to function in the browser without errors, using next-gen Javascript.

The [IndexedDB](./md-images/indexedDB.png) will immediately create a database storage, so any content added by the user, will be stored here. 

## Usage
 The user should click the [install](./md-images/text-editor-page.png) button at the top of the page, a [window](./md-images/install-editor.png) will pop up to allow the user to install and the web application to the desktop as an [icon](/client/src/images/logo.png). Upon loading the application from the desktop, there will be a registered service worker using workbox. When the user registers the service worker, static assets are pre cached upon loading along with subsequent pages and static assets. Deploying on Render should properly build scripts for a webpack application.

## Credits
Collaborators: Anthony Harper

## Author
Stacy Herbert 

## LINKS
- GitHub Repository: https://github.com/JLH-Owner/text-editor-pwa

- Deployed on Render: https://text-editor-pwa-penh.onrender.com



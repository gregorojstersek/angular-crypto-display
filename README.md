# CryptoDisplay

A web application that finds top 100 cryptocurrencies and displays them.

## Preview

![alt text](https://user-images.githubusercontent.com/9784551/53544448-53aaa880-3b26-11e9-9cd7-b89b2e518d81.gif)

## Install 

Navigate to the root of the project and run:

```sh
npm install
```
API key:
* Get your api key here: https://coinmarketcap.com/api/ 
* Go to the /server/config folder, rename config.example.json to config.json.
* Copy your api key to the API_KEY property inside config.json
 
Let's start the app.

```sh
npm start 
```

That will start the express server on localhost:3000 and client app on localhost:4200.

## Client side

Built with Angular 7, using Angular CLI.

### Functionalities

* displays top 100 cryptocurrencies
* displays details of a cryptocurrency
* dynamically displays some parameters in the correct currency

## Server side 

* [express](http://expressjs.com/) for providing endpoints and middleware.
* [request](https://www.npmjs.com/package/request) for http request to the API.
* [build-url](https://www.npmjs.com/package/build-url) for making correct parameters for the call.

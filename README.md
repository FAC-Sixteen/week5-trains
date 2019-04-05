# Week 5 README
## :train:  Train Departure App

[![Build Status](https://travis-ci.org/FAC-Sixteen/week5-trains.svg?branch=master)](https://travis-ci.org/FAC-Sixteen/week5-trains)

![flying cat](https://media.giphy.com/media/WxcfdEjMmA2GjONFPA/giphy-downsized-medium.gif)


---

## 🤹‍♀️Team

Rohan [@RohanSSS](https://github.com/RohanSSS)

Sam [@starsuit](https://github.com/starsuit)

Sylvia [@seabasshoang](https://github.com/seabasshoang)

Anna B [@aniablaziak](https://github.com/aniablaziak)



## 🚇 Overview 

### Tagline: Citymapper is *so* over

![underground](https://media.giphy.com/media/hN1mnEpV1O1qg/giphy.gif)

**🎉Our app is on Heroku:** https://shrouded-sands-99034.herokuapp.com/
An app that allows the user to search and check next train departure times from any underground station.

**🎉 Our app is also a progressive web app 🎉**
Save it the heroku link to your homepage!

![](https://i.imgur.com/njiuSLt.jpg) ![](https://i.imgur.com/XeqNCCM.jpg)  ![](https://i.imgur.com/C6J9pY0.png)



---

## 🛠 Built with:
- HTML
- CSS
- JavaScript
- NodeJS
- TFL API
- Travis
- Heroku

---

## 🏡 How to set up this project?

1. clone the project with `git clone https://github.com/FAC-Sixteen/week5-trains.git`
2. install node `npm i`
3. you can run tests with `npm test`
4. launch it locally with `npm start` (or `npm run dev` to use nodemon)

---

## 🎯 Goals 

- [x] fetch data from TFL API 
- [x] app will show live departure times from Finsbury Park
- [x] deploy the app to Heroku
- [x] CI with Travis
- [x] backend testing and test coverage

---

### 🎳 Stretch Goals
- [ ] continous updates (refreshes every x seconds)
- [x] refresh button
- [x] adding a clock to our GUI
- [x] dropdown menu to search for departures from more stations
- [x] line status updates
- [x] progressive mobile app!
- [x] display last update on load and on click
- [ ] clear input button 
- [ ] add overground trains 

---

## 📝 Planning 

Initial idea design:

![initial idea](https://files.gitter.im/foundersandcoders/week5-nodeproject/gvUQ/IMG_20190402_144323.jpg)

User journey whiteboard:

![user journey](https://files.gitter.im/foundersandcoders/week5-nodeproject/HLcY/IMG_20190403_121212.jpg)

---

## Process

### Day 1

- Deploy on Heroku
- Set up initial server
- Set up Travis CI 
- Basic CSSing
- Improved server & added our own `request` module

 ↓ Accidentally searched for a 'fetch' gif before realising we meant 'request'...

![so fetch](https://media.giphy.com/media/3oKIPkMhoaMlhtarF6/giphy.gif)

### Day 2

- DOM manipulation to render train info
- Filter & format API data in the backend
- Fixed Heroku deployment
- Better CSS styling (more responsive)
- Working on stretch goals!

---

## 💡 What we've learned (and problems)

![](https://media.giphy.com/media/129NVCr1UfsGTS/giphy.gif)

- Heroku can update automatically if you link it with GitHub master branch
- We tried GitHub Projects (frickin awesome!)
![GitHub Projects](https://files.gitter.im/foundersandcoders/week5-nodeproject/rrHn/Screenshot-2019-04-04-at-16.07.58.png)
- properly naming GitHub branches (/feature and /fix)

---


### Problems:
What problems?
![no problems](https://media.giphy.com/media/JLBT3PV3tOvIY/giphy.gif)
- we didn't write out Procfile properly and had problems with deployment 
`web: src/scripts/server.js` vs `web: node src/scripts/server.js`
- The TFL API - matching up station names with IDs
- Data cleansing - if user enters a station that doesn't exist!


# :dancer: FIN :dancer:   
![](https://i.imgur.com/6JGLzBc.jpg)
---

# NOTES

- [x] DOM manipulation
- [x] Input list to search
- [x] Filter API data


API data needed:
- [x] Inbound/outbound
- [x] Line
- [x] Destination
- [x] Time to station

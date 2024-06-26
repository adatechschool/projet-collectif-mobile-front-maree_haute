# Mobile app " Marée Haute 🌊 " ("High Tide")

badges
made with Expo Go
made with React Native

## Context

In a first time :
We've created an Android app that references the world's best surf spots 🏄.
The aim is to discover the mobile and its approach. It was completed in 7 days by a team of 4 people in an agile environment.


<img src="https://github.com/adatechschool/projet-collectif-mobile-front-maree_haute/assets/146881805/86693df9-4d32-41a3-a53d-36e12be99804" alt="listSpots" width="200">

<img src="https://github.com/adatechschool/projet-collectif-mobile-front-maree_haute/assets/146881805/aac9c9c9-65bb-43c4-9a44-1b2bdcbb289a" alt="detailSpot" width="200">

<img src="https://github.com/adatechschool/projet-collectif-mobile-front-maree_haute/assets/146881805/2c065d27-32c8-4aa2-a6f2-7300bb709ba6"
width="200">


In a second time :
We focused on the back of the app during the same amount of time.
(GIF)

## Topics covered

- Android and IOS environment
- Mobile-oriented design
- TypeScript object language
- UI design
- Mobile navigation
- Data parsing
- API calls

## Stacks used

front :

- ReactNative + Expo

back :

- Nest.js

database :

- PostgreSQL + PgAdmin 4

visualization :

- Expo Go

## How to set up and run the project

- install Expo Go on your phone
- fork the project on your computer
- open it in your IDE
- create 2 ".env" files : one in "maree-haute" folder, the other "maree-haute-api" folder.
  in ".env" in "maree-haute" folder : insert localhost adress EXPO_PUBLIC_POSTGRESS_URL="http://[IP adress]:3000/spot"
  in ".env" in "maree-haute-api" folder : insert database connection details

- navigate to "maree-haute" folder and run the command : `npm install`
- then : `npx expo start`
- navigate to "maree-haute-api" folder and run the command : `npm install`
- then : `npm run start:dev`

- scan the QR code with your phone then open it with Expo Go

## Areas for improvement

- animation
- transition
- haptic
- weather API
- mapview
- accessibility
- image hosting

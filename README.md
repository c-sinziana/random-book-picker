# Random Book Picker

A responsive web application used to randomly pick a book from a local JSON file.

Used technologies were React with JavaScript, Axios, HTML and CSS (SCSS).

## Live site:

App link: 

## Setup guide:

`node` and `npm` are needed to be installed globally on the machine with the cloned project.  

Installation:

`npm install`  

To start the server:

`npm start`   

## Personal notes:

Realizing this project helped me understand how to get external data using Axios.

In order to be able to show the book covers and the descriptions, I've fetched the data from a local JSON file using Axios. 

The style of the application was created with SCSS, which introduced me to CSS preprocessors.

What was difficult at this project was managing to render randomly the data and I solved this problem by using Math.random() to pick a random index of the available books and I also used conditional rendering to show the randomized book.
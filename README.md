# Async-Day5-Task3

# Find the ultimate Gaming Deals

## Description

We created an app where People can Discover a treasure trove of your favorite games at unbeatable prices. Dive into a world where gaming dreams meet affordability, all in the palm of your hand.

## Tech Stack

**Client:** HTML, CSS, Bootstrap, Javascript

## Features

- Live previews
- Cross platform

## Demo

https://game-zone-one.vercel.app/

## Documentation

The script.js file contains two main functions: getOffers and fetchGameData. The getOffers function is responsible for handling the user input and making an API call to fetch game offers. The fetchGameData function is responsible for processing the API response and displaying the game data on the page.

1.  The getOffers function is called when the user clicks the "Get Offers" button. It first disables the spinner and hides any existing alerts. Then, it constructs the API URL using the user input from the gameName input field. A new Promise is created to handle the API call, and the fetchGameData function is called with the Promise.
2.  The fetchGameData function takes the Promise as an argument and processes the API response. It first checks if the Promise is resolved or rejected. If the Promise is resolved, it fetches the game data and displays it on the page. If the Promise is rejected, it handles the error and displays an appropriate message.

The game data is displayed in a series of div elements, each representing a game offer. Each div contains an image, title, store ID, game ID, normal price, sale price, and rating. The game data is fetched from the API and displayed on the page in a grid layout.

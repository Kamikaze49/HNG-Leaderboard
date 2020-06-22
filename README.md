# HNG-Leaderboard
Leaderboard project for stage 3 of HNGi7

## Description
This project is comprised of a form containing a leaderboard with filters based on the different categories. A JSON file is uploaded to the backend the JSON data is served to the frontend to be displayed in the table on the leaderboard.

## Setting up the project
* Fork this repo
* Clone to your local device
* Run npm install
* Make necessary edits
* Make a Pull Request

## Dependencies
* Express
* Formidable
* Pug

## Routes
### POST /boards
This route is used to upload JSON files to the server so that their data can be displayed on the leaderboard.

### GET /boards
Parameters: File\\
This route is used to retrieve the JSON data which would be displayed on the leaderboard


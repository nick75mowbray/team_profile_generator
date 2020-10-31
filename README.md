# Team Profile Generator
![screen shot of desktop](/assets/desktop.jpg)
## Description
This application takes input from the user through the command line using inquirer npm and creates a dynamically generated and styled html file based on the users input.
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Features](#Features)
* [Testing](#Testing)
* [Screenshots](#Screenshots)
* [Questions](#Questions)
## Installation
```
npm install
npm install inquirer
npm install fs
```
## Features
The user can enter a team name and it will be rendered to the html file.  
The ID for each person can be entered manually or it can take a default value which is 1 higher than the previous id entered.  
After entering the details for the team and manager profile the user can choose to create a profile for an engineer or intern or stop creating profiles by selecting done. This selection prompt will appear after creating each profile until 'done' is selected.  
The program uses fs npm and html templates to generate a html file based on the user inputs.
I changed the html template and htmlRenderer.js files to create profile cards that look more like a table and each role appears under the proper heading eg all the engineers appear under the 'ENGINEERS' heading. This required rendering each type of employee object separetly rather than adding them to the same '{{ placeholder }}' in main.html. The only issue was commas ',' appeared in the html file, so I created a js file that removed them.

## Testing
```
npm run test
```

## Screenshots
![screenshot on mobile](/assets/mobile.jpg)
![screenshot on tablet](/assets/tablet.jpg)

## Questions
[github](https://github.com/nick75mowbray)
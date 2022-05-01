# On-the-Code-Blog-Site
Module 14 Challenge

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

        

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)  
        



## Description

AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

On The Code is a blog site that allows a user to create a username and password and post information and comments regarding anything tech-related. This challenge is the first entiely full-stack web application built from scratch on my own. Thus, it combines all the skills learned so far, including my newly acquired knowledge regarding handlebars, password handling, and sessions. Most importantly, it will reflect my ability to organize code in a proper and scalable order so that others can read and contribute to it and so that all the many parts of the program can communicate effectively with one another. 

Once complete, the program should operate so that:

GIVEN a CMS-style blog site

WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option

THEN I am taken to the homepage

WHEN I click on any other links in the navigation

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in

THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation

THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post

THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post

THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard

THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

WHEN I am idle on the site for more than a set time

THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

The final product should allow the user to make a username and password to sign in and then keep the session open as they navigate various, previously inaccessible pages. By being signed in, the user can create posts and comment on their own and others' posts. The passwords should be safely stored, and posts should be deletable and editable. 

I began this project on the backend, installing all the dependencies I knew I'd need and adding the file paths I'd rely on. I then focused on the models, to make sure the data collected is correctly organized and connected to one another. Once the models were how I wanted them, I created the API routes and tested them using Insomnia and MySql to make sure they worked. I went ahead and added the necessary middleware for authenticating users so that there'd be only tinkering left for the routes once I was done. 

Afterwards, I added the handlebars and partials so that I could see a front end. For much of this project, I used the Just-Tech-News app built throughout Modules 13 and 14 as a guide for organizing and blueprinting this app. Once a front end was accessible, I focused on the public javascript, creating a way to create a user and log in online, confirming the paths I created work. I hooked up the buttons and double-checked the functionality of adding, editing, and deleting to ensure there were no mistakes in the setup. 

Once the functionality was confirmed, I moved on to the aesthetics, making the page look better through CSS, adding additional comments, and creating the README. 




## Installation

Links to the repository and the deployed page can be found at [Questions](#questions).

While this project's repository is available on Github, the site it deployed to Heroku. If you clone the repo you must run the command "npm install" on the Terminal/Command Line and download the dependencies, all of which are mentioned in [Credits](#credits).




## Usage

Once the project is cloned and the dependencies downloaded, type "npm start" to run the program. 

A screenshot of the program in action is shown below, logged out and logged in;

![screenshot of Active Site, Logged Out](/images/screenshot-logout.png)
![screenshot of Active Site, Logged In](/images/screenshot-login.png)


Screenshots of the views/login.handlebars, public/login.js file and the dashboard-routes file are below: 

![screenshot of Login Handlebars](/images/screenshot-login-handlebars.png)
![screenshot of Login Public](/images/screenshot-login-public.png)
![screenshot of Dashboard Routes](/images/screenshot-dashboard-routes.png)


## Credits

The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. Most influence was taken from Just-Tech-News of Modules 13 and 14. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. MySql, Node.js, Insomnia, NPM, Express.js, express-session, Handlebars, Sequelize, bcrypt, and dotenv were used. 




## Contributing

Voting ability, expanding the number of characters a user can post, adding the ability to include screenshots and images to elaborate on tech developments and code, would all be great additions. If voting ability is implemented, there can be a page devoted to saved or liked posts, and posts could also be arranged according to likes, giving it a kind of reddit setup where the organization of posts can be tailored to user preferences. Profile pictures, a user account settings page, and more would also go a long way. If you make changes, test it locally on a branch before pushing to main. 



## Tests

No Jest tests written were made for this challenge, but Insomnia is a critical tool in letting you test the program's GET, POST, PUT, and DELETE methods. If you want to run tests, download Insomnia or some similar program, activate the program in Terminal using "npm start", and then use the Localhost URL to try the different methods.  



## Questions

My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The github repository to this project is below:

[https://github.com/willjduncan/On-the-Code-Blog-Site.git](https://github.com/willjduncan/On-the-Code-Blog-Site.git)


The application is deployed on Heroku. The site is below:

[https://willjduncan-on-the-code.herokuapp.com/](https://willjduncan-on-the-code.herokuapp.com/)



For any additional questions, I can be reached at willdunc12@gmail.com.




## License

[view license link here](https://choosealicense.com/licenses/mit/)

        
MIT License

Copyright (c) [2022] [willjduncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

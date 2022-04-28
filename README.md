# On-the-Code-Blog-Site
Module 14 Challenge


# workforce-assembler
Module 12 Challenge

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

<!-- Workforce Assembler is a program that allows a user to organize and store his/her organization's employee data. The challene is meant to combine everything I've learned about the back end so far, from earlier modules involving inquirer to the ability to create and fetch from databases using SQL. It will take good googling skills to assemble what I've learned into one cohesive program as well.  -->

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

<!-- The final product should allow the user to make changes to employees, jobs, and departments, while also viewing the data in informative ways. It should also provide some protections to make sure the data is safe and consistent.

I found this challenge to be particularly difficult. After setting up my sql files according to the outline provided, I began to work on the MySql requests. I had to ask for some help from a friend of mine involved in coding to begin to understand better the ins and outs of the syntax. I still have not found a way to send an alert if the request, say, for a manager's employee's returns an empty table because the id chosen is not that of a manager.

After I finally got the routes set up, I began to focus on the inquirer. Unfortunately, this also turned out to be much more challenging than anticipated. I tried to set up the inquirer so that, based on a user's choices and input, it would send fetch requests to the server. However, the terminal did not recognize my fetch function, so after much delving, I discovered I needed to download the node-fetch npm module, but then that wasn't registering, so I added "type":"module" to my package.json, and altered the prompter file to mjs from js. I then had to alter all of my imports and exports because the new system I set up didn't recognize the term "require".

Once that was sorted, writing the functions went smoothly. I had decided at the beginning of the project to include the following bonus functionality:

Update employee managers.

View employees by manager.

View employees by department.

View the total utilized budget of each department.

Adding them at the beginning made the coding easier, because it meant I could finish and test all routes before focusing on trying to get inquirer to work. Once the basic functionality was complete, I refactored the inquirer code, placing it into separate files.  -->




## Installation
<!-- 
Links to the repository can be found at [Questions](#questions).

While this project's repository is available on Github, but it does not have a front end and cannot be deployed. You must first clone the repo, then run the command "npm install" on the Terminal/Command Line in order to download the dependencies. Make sure to also download inquirer, express, console.table, and node-fetch using "npm install %package%" for each respective package. Double check to make sure package.json includes "type":"module". From there, you can fill out and edit your team. If you want to run tests, you also have to install mysql2. -->




## Usage

<!-- Once the project is cloned and the dependencies downloaded, type "npm start" to run the program. 

A screenshot of the program in action is shown below;

![screenshot of Active Site](/images/screenshot-active.png)

Screenshots of the Employee.mjs file and the employeeRoutes.js file are below: 

![screenshot of Employee.mjs](/images/screenshot-emp-mjs.png)
![screenshot of employeeRoutes](/images/screenshot-emp-routes.png)

A video explaining and demonstrating the app's functionality is below:

[https://drive.google.com/file/d/1JNGO7VeioG-pQlIhTpD2w3Q7CdHCPZYn/view](https://drive.google.com/file/d/1JNGO7VeioG-pQlIhTpD2w3Q7CdHCPZYn/view) -->


## Credits

<!-- The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. I did enlist the help of an old friend who is also learning SQL at this time, Logan Kirkland, to achieve the table that shows all employees, but for all other methods I relied on myself and my googling skills. Most influence was taken particularly from U-Develop-It of Module 12 for coding related to SQL and my Team Profile Generator from the Module 10 Challenge for coding related to Inquirer. All employee names are book characters. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. MySql, Node.js, Insomnia, Express.js, npm, and npm's inquirer, express, console.table, and node-fetch packages were also used. -->



## Contributing

<!-- Other items to be added can be more employee information such as email, address, a timestamp, years with the company. We could add another table involving locations if workers are based in multiple cities. Adding a front end to this would also be a big step. Most pressing would be adding more protections to make sure the information we request gets properly vetted and the responses the user receives are informative. Setting Inquirer up so that the user can choose from department names, manager names, and employee names rather than type a user id would also help this program's functionality. -->



## Tests

<!-- No Jest tests written were made for this challenge, but Insomnia is a critical tool in letting you test the program's GET, POST, PUT, and DELETE methods. If you want to run tests, download Insomnia or some similar program, activate the program in Terminal using "npm start", and then use the Localhost URL to try the different methods.  -->



## Questions

My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The github repository to this project is below:

[https://github.com/willjduncan/On-the-Code-Blog-Site.git](https://github.com/willjduncan/On-the-Code-Blog-Site.git)


For any additional questions, I can be reached at willdunc12@gmail.com.

<!-- ADD HEROKU -->



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


<!-- Change email to username for login route-->

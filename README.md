# Full-Stack-Application-1
This focuses on that basics of using REACT and EXPRESS JS as front end and back ends effectively. This is a simplified version of an E-Commerce.

This does invlove the usage of basic js skills.

INSTRUCTIONS FOR INSTALLING PACKAGES
Run "npm i express mongoose dotenv" on the root of the node project to install necessary dependencies

Run "npm init -y" at the root of the project with files Back End and Front End already in there to start a node project.

Create GITIGNORE with ren gitignore.txt .gitignore in the root folder.

package.json desribes the project details. It is a config file. package-lock.json is used to ensure consistency when installing the application at different computers when running "npm install"

-- Added a filed "type" in package.json and change its value to "module" to allow me to import other packages using ESM (more flexible as it can allow imports by objects or like c programming) rather using tradition methods of import other js files COMMON JS (CJS).

-- Installed nodemon (a dev dependency for automatically updating the state of the app without refreshing) by running "npm i nodemon -D"

-- Added Script ""dev": "nodemon BackEnd/server.js"" for convinience of running the application

-- Registered MongoDB, created a project + a cluster

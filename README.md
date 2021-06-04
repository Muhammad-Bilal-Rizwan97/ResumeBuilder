# ResumeBuilder

A Resume Builder app built on React native running on a NODEJs server with MongoDb database. Express is used to create REST APIs.
You can create your resume by simply input your credentials, also select the layout of your choice.

Pre Requirements:

1: need to install mongodb locally on the device from : https://www.mongodb.com/try/download/community 

2: need to have node js installed : https://nodejs.org/en/

3: need to have expo installed : npm install --global expo-cli

Installation & usage
Follow the steps below

1: Clone the project

2: open root folder in the terminal and install the node modules by writing "npm install"

3: now run the command expo start --android

4: open another terminal in the root folder and than write "cd Server" and install the node modules here also by writing "npm install" 

5: now run the command "npm start" to start the server

Note: 

Make sure change the IP address from these files components/Register.js, components/Login.js, components/Form.js to your IP address, port remain the same 8088.

Testing:

For testing, open terminal in the root folder and than write "npm test".

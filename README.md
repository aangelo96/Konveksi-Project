# Konveksi-Project

Mobile App created using React Native

Made by:
* Arnold Angelo - aangelo@student.unimelb.edu.au
* Richard Aldrich Siem - richardaldrich.siem@gmail.com

How to run / test the App :
1. Run the server, in "konveksi-server" folder use command = npm run dev
2. Run Ngrok, in "konveksi-server" folder use command = ngrok http 3000
3. Copy the ngrok link, e.g : "http://67d87759.ngrok.io" to baseUrl in tracker.js which is located in "Konveksi-Project/Konveksi/src/api" 
4. Run the app, in "konveksi" folder use command = npm start -c

This application is made using :
1. React native as the client side application
2. Express.js for the server 
3. MongoDB for the database (with mongoose library)
4. Ngrok to run the server (for now)


The basic features that we want to implement :
1. Login & Signup
2. User/Customer Side
* Be able to create a request for creating clothings
* Be able to track current requests
* Be able to view past requests
3. Konveksi Side
* Be able to submit price bid
* Be able to accept request
* Be able to update customer along the process






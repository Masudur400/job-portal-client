## Well Come To NextGen :(Service Site)

* live link : https://job-portal-18a73.web.app/
* client site github : https://github.com/Masudur400/job-portal-client
* server site github : https://github.com/Masudur400/job-portal-server 

## Technologies
* Html,
* CSS,
* Tailwind Css,
* JavaScript,
* React,
* Node.js,
* Express.js,
* MongoDB,
* Firebase, 
* emailjs

## Run Locally
 * npm i 
 * npm run dev


## impotent for server
{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "index.js",
        "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
      }
    ]
  }
## Well Come To NextGen :(Service Site)

## OverView
* Users will be able to view our services, job posts, our employees, completed projects, and can also contact us.
* Users can apply to job posts according to their qualifications, and they will be able to see their applications on their profile page.
* The admin dashboard is beautifully designed and includes excellent features.
* On the admin homepage, total users, total employees, total completed projects, total job posts, total applications, and a chart have been implemented. 
* The admin can manage all user roles, jobs, employees, and projects.

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
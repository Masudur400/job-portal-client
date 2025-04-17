## Well Come To NextGen :(Service Site)

## OverView
This project is a complete platform where users can explore the company's services, job postings, employees, and completed projects, as well as contact the company directly. Users have the ability to apply for jobs based on their qualifications and view their submitted applications from their personal profile page. The admin dashboard is beautifully designed with powerful features, allowing seamless management of all aspects of the platform. The admin homepage displays key statistics, including total users, employees, completed projects, job posts, and applications, along with a visual chart for better insights. Overall, the system ensures smooth and efficient management by giving admins full control over user roles, job listings, employees, and project data.

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
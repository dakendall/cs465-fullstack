# CS-465 Full Stack Development with MEAN
## **Scenario**
You are a software developer working for a software development company. Your supervisor assigned you to build a travel booking website for a new client, Travlr Getaways. The marketing department at Travlr Getaways has provided the specs and a wireframe to guide the development of the website. Your role as a software developer is to produce a fully functional travel web application that meets Travlr Getaways’ requirements:

“We are looking to create a travel booking site for our customers to book travel packages. Our customers must be able to create an account, search for travel packages by location and price point, and book reservations with our travel agency. Customers must also be able to visit our website regularly before their trip to see their itineraries. We are also seeking to have an admin-only site where Travlr Getaways administrators can maintain a customer base, available trip packages, and pricing for each item and package.”

### Architecture
The development for the frontend for the admin SPA website was for more complex compared to the client-side website. There were more moving parts since everything was in different components. The client-side was simplier side each page was built seperate. MongoDB was a great resource to use for storing, querying, and managing data on the backend. MongoDB is flexabile and reliable with a highly scalable database.

### Functionality
JavaScript is a programming language while JSON is a data format. JSON is derived from JavaScript. JSON is a lightweight format and easy to read and understand. It can be used to store and transport data mostly used to send data from a server to a webpage. Javascript objects are dependent on JavaScript while JSON is supported by multiple programming languages. We refractored the header and footer on the client-side pages. There are reusable functions that can be called multiple times such as searching for a all trips or a specific trip.

### Testing
There were several ways that I tested the API endpoints. When it came to the client-side, there was a method to retrieve all of the trips and another to retrieve one trip. I was able to test this why checking my localhost:3000 site and see if I was able to see all of the trips or just one. With the admin website, we added more functions such as adding, updating, and deleting a trip. For this, I used an application called Postman as well as testing using the site localhost:4200. If I ran into any issues, I would check the console log. When it came to adding security, I used Postman to check if the website worked as intended. If I tried to make a change without certain credentials, I would receive a message such as "UnauthorizedError: No authorization token was found."

### Reflection
I have learned more about the different ways to build a website, such as the traditional way and SPA. I have more knowledge about building different components and how they connect together. This course has help me understand ways to improve my code and keep it organized when I refactored the code. I was able to learn more about adding security to the website such as only an admin that is logged in can add, update, or delete a trip.

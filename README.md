# Ping!nGo

<img src="https://user-images.githubusercontent.com/17644847/29082092-6e10b294-7c5c-11e7-9843-04a23182861f.png">

This is an events program which searches a user's location and returns a list of the closest event with the cheapest tickets.
 
*Techonologies used: Node.js, Express, Mocha*

### Program scenario

- This program randomly generates seed data 
- This program operates in a world that ranges from -10 to +10 (Y axis), and -10 to +10 (X axis)
- Each co-ordinate can hold a maximum of one event
- Event event has a unique numeric identifier
- Each event has zero or more tickets
- Each ticket has a non-zero price ($)
- The distance between two points should be computed as the Manhattan distance

### How to get started

<code> git clone https://github.com/Linh91/ping-n-go.git </code> <br>
<code> npm install </code><br>
<code> node app.js </code><br>
<code>$ Example app listening on port 3000! </code><br>
Direct to: http://localhost:3000/

### How to run test 

### Example of program run

- Program accepts user location co-ordinates
- Program returns a list of five closest event with ticket price

<strong> User inputs 1,1:</strong>
<img src="https://user-images.githubusercontent.com/17644847/29082432-67f81a68-7c5d-11e7-8073-c1a41cd78895.png">

### Features
- Location must be between -10 to +10 (Y axis), and -10 to +10 (X axis)
<img src="https://user-images.githubusercontent.com/17644847/29082166-9d01563a-7c5c-11e7-876f-2e19059c2fab.png">

- Can not "Submit" if location input is empty
<img src="https://user-images.githubusercontent.com/17644847/29082170-9fa5941e-7c5c-11e7-9773-de24437d9be3.png">




### How might you change your program if you needed to support multiple events at the same location?

### How would you change your program if you were working with a much larger world size?

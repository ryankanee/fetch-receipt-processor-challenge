# Receipt Processor Challenge

Hello Fetch Engineers! I am Ryan Kane, I had fun with this challenge. I just wanted to say thank
you for doing a take home assignment rather than a leetcode style interview. I feel like I could showcase
some of my strengths.

## Structure

### index.js

This is the entrance to the application, if I had more endpoints I would add these here

### routes

This defines the routes for the endpoint, in this case it will be all the routes for the /receipts endpoints

### controller

In the controller I take the request and process it. Then return the response back.

### model

Model is just I am storing the receipts and generating an UUID for each receipt

### service

In the service this is where the receipt is passed and where the total points are being calculated.
I separated each calculation into its own function, and had a top level function to calculate the total points.

## Running the app

You can run this project locally using **Docker** or  **Node.js**.

---

## Option 1: Run with Docker

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/ryankanee/fetch-receipt-processor-challenge.git
cd receipt-processor

# 2. Build the Docker image
docker build -t fetch-receipt-processor-challenge .

# 3. Run the container
docker run -p 3000:3000 fetch-receipt-processor-challenge
```

## Option 2: Run with Node

### Prerequisites

- [Node.js](https://nodejs.org/en) version 18 or higher
  
```bash

# 1. Clone the repo
git clone https://github.com/ryankanee/fetch-receipt-processor-challenge.git
cd receipt-processor

# 2. Install dependencies
npm install

# 3. Start the server
node index.js
```

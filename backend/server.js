import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express(); //Initialize server


//Middleware
app.use(cors());
app.use(express.json());

//Main url - api/(version number)/api type
app.use("/api/v1/restaurants", restaurants);
//* means a route that doesn't exist
app.use("*", (request, response) => response.status(404).json({error: "Page not found"}));

export default app;
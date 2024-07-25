import express from 'express';
import router from './routes/index.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use the router for all routes
app.use('/', router);

const port = 1245;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Export the app
export default app;


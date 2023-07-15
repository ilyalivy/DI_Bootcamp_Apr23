import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __dirname = path.resolve();
app.use("/", express.static(__dirname + "/public"));

app.use(userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
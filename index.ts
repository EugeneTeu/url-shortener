require('dotenv').config();
import express from 'express';
import cors from 'cors';


const app = express();
// Setup server port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;

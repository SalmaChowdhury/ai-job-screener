

// server/index.js

import express from 'express';
import cors from 'cors';
import screenerRoutes from './routes/screenerRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/screener', screenerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

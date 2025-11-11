import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import candidateRoutes from './routes/candidateRoutes';
import cors from 'cors';

dotenv.config();
const prisma = new PrismaClient();

export const app = express();
export { prisma };

const port = 3010;

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hola LTI!');
});

// Use candidate routes
app.use('/api', candidateRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.type('text/plain'); 
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

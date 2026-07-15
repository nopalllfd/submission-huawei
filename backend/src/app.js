import express from 'express';
import formRoutes from './routes/formRoutes.js';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);
app.use('/api/forms', formRoutes);

app.get('/', (req, res) => {
  res.send('Huawei Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

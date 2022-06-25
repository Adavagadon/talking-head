import cors from 'cors';
import express from 'express';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PATH_TO_CLIENT = path.join(__dirname, 'build');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.use(express.static(PATH_TO_CLIENT));
app.get('/*', (req, res) => {
  res.sendFile(path.join(PATH_TO_CLIENT, 'index.html'));
});
app.listen(5000, (err) => {
  if (err) console.error(err);

  console.log('Server started at http://localhost:5000');
});

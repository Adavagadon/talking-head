import cors from 'cors';
import express from 'express';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PATH_TO_HEAD = path.join(__dirname, 'head');
const PATH_TO_CHAT = path.join(__dirname, 'chat');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.use(express.static(PATH_TO_HEAD));
app.use(express.static(PATH_TO_CHAT));

app.get('/head', (req, res) => {
  res.sendFile(path.join(PATH_TO_HEAD, 'index.html'));
});
app.get('/chat', (req, res) => {
  res.sendFile(path.join(PATH_TO_CHAT, 'index.html'));
});

app.listen(5000, (err) => {
  if (err) console.error(err);

  console.log('Server started at http://localhost:5000');
});

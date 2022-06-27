import './debug/index.js';
import './blink-n-speak/blink.js';
import './blink-n-speak/mouth.js';
import './chat-listener/index.js';
import { faceSize } from './config.js';

const face = document.querySelector('.face');

face.style.width = faceSize;
face.style.height = faceSize;

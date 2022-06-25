import { isDebug } from '../config.js';

// Main container
const debugWrapper = document.querySelector('.debug__wrapper');

debugWrapper.style.display = isDebug ? 'block' : 'none';

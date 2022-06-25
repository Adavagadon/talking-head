import { sensitivity, noiseSuppression, echoCancellation } from '../config.js';
import { getMouthId, switchMouth } from './utils.js';
import sendMessage from '../notification.js';
import Volume from '../debug/Volume.js';

// Audio Setup
const context = new AudioContext();
const analyser = context.createAnalyser();
let stream, source, volumeInterval, volumes;

// DOM Elements
const mouths = document.querySelectorAll('.face__mth');

// Setup Mic
(async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { noiseSuppression, echoCancellation },
    });

    source = context.createMediaStreamSource(stream);

    analyser.fftSize = 512;
    analyser.minDecibels = -127;
    analyser.maxDecibels = 0;
    analyser.smoothingTimeConstant = 0.4;

    source.connect(analyser);

    volumes = new Uint8Array(analyser.frequencyBinCount);
  } catch (err) {
    console.error(err);
  }
})();

const volumeCallback = () => {
  analyser.getByteFrequencyData(volumes);

  let volumeSum = 0;

  for (const volume of volumes) volumeSum += volume;

  const avrVolume = volumeSum / volumes.length;
  const volume = Math.floor((avrVolume * 100) / sensitivity);

  Volume.addVolume(volume);

  const index = getMouthId(volume);
  switchMouth(index, mouths);
};

window.addEventListener('click', () => {
  sendMessage('Activated');
  context.resume();
  volumeInterval = setInterval(volumeCallback, 10);
});

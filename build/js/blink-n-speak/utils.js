import { lowVolume, midVolume, highVolume } from '../config.js';

export const getMouthId = (loudness) => {
  if (loudness >= highVolume) return Math.round(Math.random() * (5 - 4) + 4);
  if (loudness >= midVolume) return Math.round(Math.random() * (3 - 2) + 2);
  if (loudness >= lowVolume) return Math.round(Math.random() * (1 - 0) + 0);
  return -1;
};

export const switchMouth = (index, mouths) => {
  mouths.forEach((mouth) => {
    mouth.style.display = 'none';
  });
  if (index !== -1) mouths[index].style.display = 'block';
};

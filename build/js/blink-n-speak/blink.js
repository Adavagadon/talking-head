const MIN_BLINK_INTERVAL = 500;
const MAX_BLINK_INTERVAL = 5000;

const eyes = document.querySelector('.face__eyes');

const blink = () => {
  eyes.style.display = 'block';

  setTimeout(() => {
    eyes.style.display = 'none';
    const delay =
      Math.random() * (MAX_BLINK_INTERVAL - MIN_BLINK_INTERVAL) +
      MIN_BLINK_INTERVAL;
    setTimeout(blink, delay);
  }, 100);
};

blink();

export default blink;

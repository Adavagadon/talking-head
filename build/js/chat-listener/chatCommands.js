const assets = document.querySelector('.face__assets');
const audio = document.querySelector('audio');

const love = () => {
  if (assets.classList.contains('face__assets_hearts-play'))
    assets.classList.remove('face__assets_hearts-play');

  assets.classList.add('face__assets_hearts-play');

  setTimeout(() => {
    assets.classList.remove('face__assets_hearts-play');
  }, 1700);
};

const damage = () => {
  audio.src = 'assets/audio/hurt.wav';
  audio.play();

  if (assets.classList.contains('face__assets_damage-play'))
    assets.classList.remove('face__assets_damage-play');

  assets.classList.add('face__assets_damage-play');

  setTimeout(() => {
    assets.classList.remove('face__assets_damage-play');

    if (assets.classList.contains('face__assets_cloud-play'))
      assets.classList.remove('face__assets_cloud-play');

    assets.classList.add('face__assets_cloud-play');

    setTimeout(() => {
      assets.classList.remove('face__assets_cloud-play');
    }, 2000);
  }, 200);
};

const confused = () => {
  if (assets.classList.contains('face__assets_confuse-play'))
    assets.classList.remove('face__assets_confuse-play');

  assets.classList.add('face__assets_confuse-play');

  setTimeout(() => {
    assets.classList.remove('face__assets_confuse-play');
  }, 650);
};

const stars = () => {
  if (assets.classList.contains('face__assets_stars-play'))
    assets.classList.remove('face__assets_stars-play');

  assets.classList.add('face__assets_stars-play');

  setTimeout(() => {
    assets.classList.remove('face__assets_stars-play');
  }, 1700);
};

export default { love, damage, confused, stars };

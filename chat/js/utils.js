const EMOTES_URL = 'https://static-cdn.jtvnw.net/emoticons/v1/';

const chat = document.querySelector('.chat');
const lBr = document.createElement('span');
const rBr = document.createElement('span');

lBr.innerHTML = '<';
rBr.innerHTML = '>';

export const replaceEmotes = (emotes, msg) => {
  Object.entries(emotes).forEach((entry) => {
    const id = entry[0];
    const range = entry[1][0].split('-');

    const emote = msg.slice(range[0], +range[1] + 1);
    const img = `<img src="${EMOTES_URL}${id}/1.0">`;

    msg = msg.replace(new RegExp(emote, 'g'), img);
  });

  return msg;
};

export const appendMessage = (sender, text, color) => {
  const msg = document.createElement('div');
  msg.classList.add('chat__message');

  const time = getTime();
  const message = `[${time}] <<b style="color: ${color}">${sender}</b>> ${text}`;

  msg.innerHTML = message;

  chat.appendChild(msg);
};

export const setOpacity = (opacity) => {
  chat.style.opacity = opacity;
};

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const h = hours.toString().length > 1 ? hours : '0' + hours;
  const minutes = date.getMinutes();
  const m = minutes.toString().length > 1 ? minutes : '0' + minutes;
  return h + ':' + m;
};

const EMOTES_URL = 'https://static-cdn.jtvnw.net/emoticons/v1/';

const chat = document.querySelector('.chat');
const lBr = document.createElement('span');
const rBr = document.createElement('span');

lBr.innerHTML = '<';
rBr.innerHTML = '>';

export const replaceEmotes = (emotes, message) => {
  if (!emotes) return message;

  const stringReplacements = [];

  Object.entries(emotes).forEach(([id, positions]) => {
    const position = positions[0];
    const [start, end] = position.split('-');
    const stringToReplace = message.substring(
      parseInt(start, 10),
      parseInt(end, 10) + 1
    );

    stringReplacements.push({
      stringToReplace: stringToReplace,
      replacement: `<img src="${EMOTES_URL}${id}/1.0">`,
    });
  });

  const messageHTML = stringReplacements.reduce(
    (acc, { stringToReplace, replacement }) => {
      // obs browser doesn't seam to know about replaceAll
      return acc.split(stringToReplace).join(replacement);
    },
    message
  );

  return messageHTML;
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

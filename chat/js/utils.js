const chat = document.querySelector('.chat');
const lBr = document.createElement('span');
const rBr = document.createElement('span');

lBr.innerHTML = '<';
rBr.innerHTML = '>';

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

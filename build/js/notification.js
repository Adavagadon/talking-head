const messageBox = document.createElement('div');

messageBox.classList.add('message');
messageBox.classList.add('message_show');

const sendMessage = (text) => {
  const prev = document.querySelector('.message');
  if (prev) prev.remove();

  const el = document.body.appendChild(messageBox);
  el.innerHTML = text;

  setTimeout(() => {
    el.remove();
  }, 3000);
};

export default sendMessage;

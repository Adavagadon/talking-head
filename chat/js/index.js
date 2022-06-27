import { channelName, idleDelay, idleOpacity } from './config.js';
import { appendMessage, setOpacity } from './utils.js';

let timeStamp = Date.now();

const client = new tmi.Client({ channels: [channelName] });

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect().catch((err) => {});

function onMessageHandler(target, context, msg, self) {
  appendMessage(context['display-name'], msg, context.color);
  timeStamp = Date.now();
  setOpacity(1);
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

setInterval(() => {
  if (Date.now() - timeStamp > idleDelay) setOpacity(idleOpacity);
}, 1000);

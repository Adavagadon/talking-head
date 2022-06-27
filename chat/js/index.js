import { channelName, idleDelay, idleOpacity } from './config.js';
import { replaceEmotes, appendMessage, setOpacity } from './utils.js';

let timeStamp = Date.now();

const client = new tmi.Client({ channels: [channelName] });

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect().catch((err) => {});

function onMessageHandler(target, context, msg, self) {
  if (context.emotes) msg = replaceEmotes(context.emotes, msg);

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

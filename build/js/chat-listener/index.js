import { channelName } from '../config.js';
import animations from './chatCommands.js';

const client = new tmi.Client({ channels: [channelName] });

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect().catch((err) => {});

function onMessageHandler(target, context, msg, self) {
  if (self) return;

  if (msg.match(/^![a-zA-Z]+/i)) {
    const command = msg.replace('!', '');
    if (animations.hasOwnProperty(command)) animations[command]();
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

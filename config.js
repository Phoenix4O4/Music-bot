module.exports = {
    app: {
        px: '!',
        token: 'ODk1NTI0Mzg3MDUzMjQ4NTUz.YV50Ew.sSgw-DNC8QwHMTiqL2BC3zs15V8',
        playing: 'Cobold Dungeon'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', // Fix for EPIPE error
                highWaterMark: 1 << 25 // Fix for Aborted error
            }
        }

    }
};
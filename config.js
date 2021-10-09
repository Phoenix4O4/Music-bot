module.exports = {
    app: {
        px: '!',
        token: '',
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

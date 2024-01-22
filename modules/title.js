function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / smsbomber - discord.gg/zara";
    } else {
        process.stdout.write('\x1b]2;' + x + " / Sms Bomber v2.0 - illegalplatform.com" + '\x1b\x5c');
    }
}

module.exports = console_title;

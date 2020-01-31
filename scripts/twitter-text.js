const { parseTweet } = require('twitter-text');

module.exports = robot => {
  robot.respond(/```[\s\S^`]+```/gi, res => {
    console.log(res);
    const text = /```([\s\S^`]+)```/gi.exec(res.match)[1].trim();
    const parsed = parseTweet(text);
    let response = parsed.valid ? 'ツイートできます。' : '文字数オーバーです。';
    res.reply(`${response}${parsed.weightedLength}文字です。`);
  });
};

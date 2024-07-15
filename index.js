const TelegramBot = require("node-telegram-bot-api")

const token = "7406327164:AAF5Z3SZu66sQV25Sn1o9WVeTsdllg2o4Fc"

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async (msg) => {
    console.log(msg);

    const text = msg.text
    const chatId = msg.chat.id

    if (text === "/start") {
        return bot.sendMessage(chatId, `Assalomu alaykum ${msg.from?.first_name+ " " + msg.from?.last_name}. Hisoblagich botga hush kelibsiz :) \n \n Agar botga tushunmasangiz => \n \n 1) Menu tugmasini bosing \n 2) help sozini boshing`)
        // const a = text.typeof == Number
    }
    if (text === "/help") {
        return bot.sendMessage(chatId, `Bu botga \n  \n 1-(raqam), \n 2 -(Ishora (+, -, *, /)) \n 3-(raqam), \n \n Namuna: (num) (+,-,*,/) (num) \n \n 4) Sizga javob keladi`)
    }



    if (!msg.text.startsWith('/')) {
        try {
            const expression = msg.text;
            const result = eval(expression);
            bot.sendMessage(chatId, `Natija: ${result}`);
        } catch (e) {
            bot.sendMessage(chatId, 'Xato! Iltimos, to\'g\'ri ifoda kiriting.');
        }
    }
})
const TelegramBot = require('node-telegram-bot-api');

// Твой токен
const token = '8396923977:AAGqA7D0bGaPduSpZ7SRFwNUE9cewdlpbT8';

// Создаём бота
const bot = new TelegramBot(token, { polling: true });

// Ответ на любое сообщение
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Привет! Ты написал: ${msg.text}`);
});

console.log('Бот запущен...');

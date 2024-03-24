const { createLogger, format, transports } = require("winston");
const path = require("path");
require('winston-daily-rotate-file');
const logDir = `${__dirname}../../logs`;

const timezoned = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
};

module.exports = createLogger({

  
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf((info) => ` [${timezoned()}] ${info.level}${info.message}`)
  ),
  transports: [
    new transports.DailyRotateFile({
      level:'info',
      format: format.combine(
        format.timestamp({ format: timezoned }),
        
      ),
    filename: path.resolve(`${logDir}/${new 
   Date().getFullYear().toString()} - ${new Date().getMonth()+1}/%DATE%.log`),
        datePattern: 'YYYY-MM-DD',
        timestamp: new Date()
    }),
    new transports.Console({
      level: "info",
    })
  ],
  exitOnError: false,
});
import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'graphy_error.log', level: 'error' }),
      new winston.transports.File({ filename: 'graphy_info.log', level: 'info' }),
    ],
  });

export default logger;


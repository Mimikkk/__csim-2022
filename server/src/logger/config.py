from pydantic import BaseModel

class LogConfig(BaseModel):
  LOGGER_NAME: str = "mycoolapp"
  LOG_FORMAT: str = "%(levelprefix)s | %(asctime)s | %(message)s"
  LOG_LEVEL: str = "DEBUG"

  # Logging config
  version = 1
  disable_existing_loggers = False
  formatters = {
    "default": {
      "()": "uvicorn.logging.DefaultFormatter",
      "fmt": LOG_FORMAT,
      "datefmt": "%Y-%m-%d %H:%M:%S",
    },
  }
  handlers = {
    "default": {
      "formatter": "default",
      "class": "logging.StreamHandler",
      "stream": "ext://sys.stdout",
    },
  }
  loggers = {
    "app": {"handlers": ["default"], "level": LOG_LEVEL},
  }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from logging.config import dictConfig
import logging

from src.logger import LogConfig

dictConfig(LogConfig().dict())
logger = logging.getLogger("app")

app = FastAPI(debug=True)
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_methods=["*"],
  allow_headers=["*"],
  allow_credentials=True
)

import uvicorn

if __name__ == '__main__':
  uvicorn.run("src:app", host="127.0.0.1", port=3001, reload=True, workers=4)

from dataclasses import dataclass

from src import app

@dataclass
class CreateSinogramRequest(object):
  original: str
  detectors: int
  spread: int
  scans: int

@app.post("/api/tomography/sinogram/create")
async def create_sinogram_post(item: CreateSinogramRequest):
  print(f"Parameters : {item.scans=} {item.detectors=} {item.spread=}")

  return {}

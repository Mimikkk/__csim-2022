from dataclasses import dataclass

@dataclass
class Patient(object):
  comments: str
  name: str
  id: str

from io import BytesIO

from pydicom import dcmwrite, FileDataset

def dicom_to_bytes(dicom: FileDataset):
  dcmwrite(buffered := BytesIO(), dicom)
  return buffered.getvalue()

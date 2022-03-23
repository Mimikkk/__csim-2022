from pydicom.dataset import Dataset, FileDataset
from pydicom.uid import ExplicitVRLittleEndian
import pydicom._storage_sopclass_uids

from skimage.util import img_as_ubyte
from skimage.exposure import rescale_intensity

def convert_image_to_ubyte(image):
  return img_as_ubyte(rescale_intensity(image, out_range=(0.0, 1.0)))

def save_as_dicom(filename, image, patient):
  img_converted = convert_image_to_ubyte(image)
  meta = Dataset()
  meta.MediaStorageSOPClassUID = pydicom._storage_sopclass_uids.CTImageStorage
  meta.MediaStorageSOPInstanceUID = pydicom.uid.generate_uid()
  meta.TransferSyntaxUID = pydicom.uid.ExplicitVRLittleEndian

  ds = FileDataset(None, {}, preamble=b"\0" * 128)
  ds.file_meta = meta

  ds.is_little_endian = True
  ds.is_implicit_VR = False

  ds.SOPClassUID = pydicom._storage_sopclass_uids.CTImageStorage
  ds.SOPInstanceUID = meta.MediaStorageSOPInstanceUID

  ds.PatientName = patient["PatientName"]
  ds.PatientID = patient["PatientID"]
  ds.ImageComments = patient["ImageComments"]

  ds.Modality = "CT"
  ds.SeriesInstanceUID = pydicom.uid.generate_uid()
  ds.StudyInstanceUID = pydicom.uid.generate_uid()
  ds.FrameOfReferenceUID = pydicom.uid.generate_uid()

  ds.BitsStored = 8
  ds.BitsAllocated = 8
  ds.SamplesPerPixel = 1
  ds.HighBit = 7

  ds.ImagesInAcquisition = 1
  ds.InstanceNumber = 1

  ds.Rows, ds.Columns = img_converted.shape

  ds.ImageType = r"ORIGINAL\PRIMARY\AXIAL"

  ds.PhotometricInterpretation = "MONOCHROME2"
  ds.PixelRepresentation = 0

  pydicom.dataset.validate_file_meta(ds.file_meta, enforce_standard=True)

  ds.PixelData = img_converted.tobytes()

  ds.save_as(filename, write_like_original=False)

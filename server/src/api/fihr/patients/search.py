from src import fihr, app
from src.utils import omit
from fhirpy.base import SyncSearchSet

@app.post("/api/fihr/patients/search")
async def patients_search_get(request):
  searchset: SyncSearchSet = fihr.resources("Patient")

  patients = searchset.search(**omit(request, 'limit')).limit(request.limit or -1).fetch()

  return patients

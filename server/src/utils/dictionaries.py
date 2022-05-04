def omit(dictionary, keys):
  return {key: dictionary[key] for key in dictionary if key not in keys}

def pick(dictionary, keys):
  return {key: dictionary[key] for key in dictionary if key in keys}

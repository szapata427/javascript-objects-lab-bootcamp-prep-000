var recipes = {};

 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdteObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  return object
}

destructivelyUpdteObjectWithKeyAndValue(object, 'test', 'pass')

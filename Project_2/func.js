function fp(origin, repeat) {
  return origin.filter(item => !repeat.includes(item))
}

function hashMapUnique(origin, repeat) {
  let map = {};
  repeat.map(item => map[item] = true)
  return origin.filter(item => !map[item])
}


exports.fp = fp;
exports.hashMapUnique = hashMapUnique
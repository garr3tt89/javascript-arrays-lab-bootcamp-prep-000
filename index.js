function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
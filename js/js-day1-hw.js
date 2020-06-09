// Exercise 1
let dog_string = "Hello Bianca, my name is Dog, and I have purple eyes!"
let dog_name = ["Max", "HAS", "PuRple", "dog", "Bianca"]
function findWords() {
  dog_name.forEach(function (item, index) {
  if (dog_string.includes(item)){
    return "Matched " + item
  } else {
    return "No Matches"
}
})
}
console.log(findWords())


// Exercise 2
groupname = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
for (let i = 0; i < groupname.length; i++) {
    if (i % 2 == 0) {
        groupname.splice(i, 1, "even index")
    }
}
console.log(groupname)
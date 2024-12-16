let saveEl = document.getElementById ("save-el")
let saveInc = document.getElementById("count-el")
let count = 0 
let saveRemove =  document.getElementById("save-remove")

function increment(){
  count += 1
  saveInc.textContent = count 
  console.log(count)
}
function save(){
  entries = count + " - "
  saveEl.textContent += entries
  saveInc.textContent = 0
  count = 0

}
function remove(){
  saveEl.textContent = "Laps Finished: "
}
let saveBtn = document.querySelector("#saveDictation")

saveBtn.addEventListener("click", function(){

let text = document.querySelector("#originalText").value

localStorage.setItem("dictationText", text)

alert("Диктант сохранён")

})
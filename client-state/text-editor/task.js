const textArea = document.getElementById("editor");
const storedText = localStorage.getItem("text");

if (storedText) {
  textArea.value = storedText;
} 

textArea.addEventListener("input", () => {
  localStorage.setItem("text", textArea.value);
})


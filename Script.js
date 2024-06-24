const submitbtn = document.getElementById("submitbtn");
const nameError = document.getElementById("nameError");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateName()) {
    alert("Form submitted successfully");
  }
});
function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  return true;
}

function checkBirthday() {
  let name = document.getElementById("name").value;
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  let birthdate = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age = today.getFullYear() - dob.getFullYear();

  if (birthdate > today) {
    birthdate.setFullYear(birthdate.getFullYear() - 1);
    age = age - 1;
  }

  if (birthdate.getMonth() === today.getMonth() && birthdate.getDate() === today.getDate()) {
    document.getElementById("result").innerHTML = `Hello ${name}, we wish you happy birthday on ${dob.toLocaleDateString()}!`;
    document.getElementById("result").style.display = "block";
  } else {
    alert(`Sorry ${name}, your birthday is on ${dob.toLocaleDateString()}. Please come back on your birthday.`);
  }
}

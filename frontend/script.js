// Fetch data from api
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Driver function
const getData = async () => {
  const data = await apiFetch('http://localhost:8080/contacts');
  // console.log(data)
  displayAllData(data);
}

// Display data to table
function displayAllData(data) {
  let displayTable = "<table><tr><th>Name</th><th>Email</th><th>Favorite Color</th><th>Birthday</th></tr>";
  data.forEach(doc => {
    let contactName = doc.firstName + " " + doc.lastName;
    let birthday = doc.birthday.slice(0, 10);
    displayTable += `<tr><td>${contactName}</td><td>${doc.email}</td><td>${doc.favoriteColor}</td><td>${birthday}</td></tr>`;
  });
  displayTable += "</table>";

  document.getElementById('contact').innerHTML = displayTable;
}

getData();
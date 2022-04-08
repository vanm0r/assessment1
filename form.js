function contact(name) {
    let table = document.getElementById("table");

    let row = table.insertRow(1);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);

    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let phonenumber = document.getElementById("pnumber").value;
    let city = document.getElementById("city").value;

    cell0.innerHTML = firstname;
    cell1.innerHTML = lastname;
    cell2.innerHTML = phonenumber;
    cell3.innerHTML = city;
}
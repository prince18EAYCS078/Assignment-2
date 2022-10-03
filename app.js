let data = [
    {
      firstName: "prince",
      middleName: "kumar",
      lastName: "mishra",
      email: "mishraprince9430@gmai.com",
      phone: "6203571750",
      role: "full stack",
      address: "Bihar",
      id: 1,
    },
    {
      firstName: "monu",
      middleName: "kumar",
      lastName: "mishra",
      email: "mishra.monu@gmail.com",
      phone: "6206692226",
      role: "student",
      address: "Bihar",
      id: 2,
    },
    {
      firstName: "sonu",
      middleName: "kumar",
      lastName: "mishra",
      email: "mishra.sonu@gmail.com",
      phone: "9430901629",
      role: "student",
      address: "Bihar",
      id: 3,
    },
    {
      firstName: "raju",
      middleName: "kumar",
      lastName: "mishra",
      email: "mishra.raju@gmail.com",
      phone: "8405570046",
      role: "student",
      address: "Bihar",
      id: 4,
    },
  ];
  function loadData() {
    const table = document.getElementById("datatable");
    let rowCount = table.rows.length;
  
    for (let employeeData of data) {
      let row = table.insertRow(rowCount);
      let cellNum = 0;
      for (let j in employeeData) {
        let newCell = row.insertCell(cellNum);
        if (cellNum != 7) {
          newCell.innerHTML = `<p class=\"info-row-${row.rowIndex}\">${employeeData[j]}</p>
                                      <input type="text" class=\"edit-info-row-${row.rowIndex}\" name=\"${j}\" style="display:none" value=\"${employeeData[j]}\">`;
          cellNum += 1;
        } else {
          newCell.innerHTML = `
                                <div id=\"normal-action-${row.rowIndex}\">
                                    <button id=\"del-row-${employeeData[j]}\" onclick=\"deleteRow(${row.rowIndex})\">Delete</button>
                                    <button id=\"edit-row-${employeeData[j]}\" onclick=\"editRow(${row.rowIndex})\">Edit</button>
                                </div>
                                <div id=\"edit-action-${row.rowIndex}\" style=\"display:none\">
                                    <button id=\"save-row-${employeeData[j]}\" onclick=\"save(${row.rowIndex})\">save</button>
                                    <button id=\"cancel-row-${employeeData[j]}\" onclick=\"cancel(${row.rowIndex})\">cancel</button>
                                </div>
                                `;
        }
      }
  
      rowCount++;
    }
    document.getElementById("reload").style.display = "inline";
    document.getElementById("load").style.display = "none";
  }
  
  function save(n) {
    let editableRowInput = document.getElementsByClassName(`edit-info-row-${n}`);
    Array.from(editableRowInput).forEach((input) => {
      data[n - 1][input.name] = input.value;
    });
    reloadData();
  }
  
  function cancel(n) {
    let editableRowInput = document.getElementsByClassName(`edit-info-row-${n}`);
    let staticCellData = document.getElementsByClassName(`info-row-${n}`);
  
    Array.from(editableRowInput).forEach((input) => {
      input.style.display = "none";
    });
    Array.from(staticCellData).forEach((input) => {
      input.style.display = "inline";
    });
    document.getElementById(`normal-action-${n}`).style.display = "inline";
    document.getElementById(`edit-action-${n}`).style.display = "none";
  }
  
  function editRow(n) {
    let editableRowInput = document.getElementsByClassName(`edit-info-row-${n}`);
    let staticCellData = document.getElementsByClassName(`info-row-${n}`);
    Array.from(editableRowInput).forEach((input) => {
      input.style.display = "inline";
    });
    Array.from(staticCellData).forEach((input) => {
      input.style.display = "none";
    });
    document.getElementById(`normal-action-${n}`).style.display = "none";
    document.getElementById(`edit-action-${n}`).style.display = "inline";
  }
  
  function deleteRow(n) {
    data = [...data.slice(0, n - 1), ...data.slice(n)];
    reloadData();
  }
  
  function reloadData() {
    const table = document.getElementById("datatable");
    let rowCount = table.rows.length;
    for (let i = 1; i < rowCount; i++) {
      table.deleteRow(1);
    }
    loadData();
  }
// Sample data
let employees = [
    { name: "John Doe", position: "Manager" },
    { name: "Jane Smith", position: "Developer" }
];
let departments = [
    { name: "Human Resources" },
    { name: "Engineering" }
];

let currentEditIndex = null;
let isEditingEmployee = true;

// Load initial data
window.onload = () => {
    loadEmployees();
    loadDepartments();
};

// Load employee data into table
function loadEmployees() {
    const table = document.getElementById("employee-table");
    table.innerHTML = `<tr><th>Name</th><th>Position</th><th>Actions</th></tr>`;
    employees.forEach((employee, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>
                <button onclick="openEmployeeModal(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
    });
}

// Load department data into table
function loadDepartments() {
    const table = document.getElementById("department-table");
    table.innerHTML = `<tr><th>Department Name</th><th>Actions</th></tr>`;
    departments.forEach((department, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${department.name}</td>
            <td>
                <button onclick="openDepartmentModal(${index})">Edit</button>
                <button onclick="deleteDepartment(${index})">Delete</button>
            </td>
        `;
    });
}

// Open modal for employee
function openEmployeeModal(index = null) {
    currentEditIndex = index;
    isEditingEmployee = true;
    document.getElementById("modal-title").textContent = index === null ? "Add Employee" : "Edit Employee";
    document.getElementById("modal-position").style.display = "block";
    document.getElementById("modal-name").value = index !== null ? employees[index].name : "";
    document.getElementById("modal-position").value = index !== null ? employees[index].position : "";
    document.getElementById("modal").style.display = "flex";
}

// Open modal for department
function openDepartmentModal(index = null) {
    currentEditIndex = index;
    isEditingEmployee = false;
    document.getElementById("modal-title").textContent = index === null ? "Add Department" : "Edit Department";
    document.getElementById("modal-position").style.display = "none";
    document.getElementById("modal-name").value = index !== null ? departments[index].name : "";
    document.getElementById("modal").style.display = "flex";
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Save data from modal
function saveModal() {
    const name = document.getElementById("modal-name").value;
    const position = document.getElementById("modal-position").value;

    if (isEditingEmployee) {
        if (currentEditIndex === null) {
            employees.push({ name, position });
        } else {
            employees[currentEditIndex] = { name, position };
        }
        loadEmployees();
    } else {
        if (currentEditIndex === null) {
            departments.push({ name });
        } else {
            departments[currentEditIndex] = { name };
        }
        loadDepartments();
    }

    closeModal();
}

// Delete an employee
function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        loadEmployees();
    }
}

// Delete a department
function deleteDepartment(index) {
    if (confirm("Are you sure you want to delete this department?")) {
        departments.splice(index, 1);
        loadDepartments();
    }
}

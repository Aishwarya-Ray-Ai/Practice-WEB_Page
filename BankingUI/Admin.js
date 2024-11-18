// Function to fetch and display current date and time
function displayDateTime() {
    const date = new Date();
    document.getElementById('currentDateTime').innerText = 
        `Date: ${date.toLocaleDateString()} Time: ${date.toLocaleTimeString()}`;
}

// Automatically set the account creation date (example date)
function setAccountCreationDate() {
    const creationDate = new Date('2024-01-01'); // Example date
    document.getElementById('accountDate').innerText = creationDate.toLocaleDateString();
}

// Toggle visibility of customer details
function toggleCustomerDetails() {
    const customerDetails = document.getElementById('customerDetails');
    customerDetails.classList.toggle('hidden');
}

function showAccountDetails() {
    // Hide the customer details table and show the account details table
    document.getElementById('customerDetails').style.display = 'none';
    document.getElementById('accountDetails').style.display = 'block';
}

function closeAccountDetails() {
    // Hide the account details table and revert back to the customer details table
    document.getElementById('accountDetails').style.display = 'none';
    document.getElementById('customerDetails').style.display = 'block';
}

function showTransactionDetails() {
    // Hide the account details table and show the transaction details table
    document.getElementById('accountDetails').style.display = 'none';
    document.getElementById('transactionDetails').style.display = 'block';
}

function closeTransactionDetails() {
    // Hide the transaction details table and revert back to the account details table
    document.getElementById('transactionDetails').style.display = 'none';
    document.getElementById('accountDetails').style.display = 'block';
}


// // account details
// function showAccountDetails() {
//     document.querySelector('.account-details-container').style.display = 'block';
// }
// // trasaction history
// function showTransactionDetails() {
//     document.querySelector('.transaction-details-container').style.display = 'block';
// }

// Deactivate customer account function
function deactivateCustomer(customerName) {
    alert(`Customer account for ${customerName} deactivated.`);
}

// Toggle visibility of loan applications
function toggleLoanApplications() {
    const loanApplications = document.getElementById('loan-applications');
    loanApplications.classList.toggle('hidden');
}

// Approve loan function
function approveLoan(applicantName) {
    alert(`Loan approved for ${applicantName}.`);
}

// Call functions on page load
window.onload = function() {
    displayDateTime();
    setAccountCreationDate();
};

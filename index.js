// Write your solution in this file!
var customerName = "bob";
var bestcustomer;
const leastFavoriteCustomer = "";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "none";
}

//objects lab

let employee = {
  name: "Cody",
  address: "1630 SE Rural St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

console.log(updateEmployeeWithKeyAndValue(employee, "name", "Mike"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "John")
);
console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
  let updatedEmployee = { ...employee };
  delete updatedEmployee[key];
  return updatedEmployee;
}

// console.log(deleteFromEmployeeByKey(employee, "name"));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
console.log(employee);

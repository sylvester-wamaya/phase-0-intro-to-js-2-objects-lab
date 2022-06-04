// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value){
    updateEmployeeWithKeyAndValue = {...employee};
updateEmployeeWithKeyAndValue[key] = value;
return updateEmployeeWithKeyAndValue;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}
const EmployeeID = 2738419
let EmployeeName = "Ayush"
var EmployeeDepartment = "IT"
baseLocation = "Hyderabad"
let baseState
//EmployeeID = 9818922l ; change to const value is not allowed

console.log(EmployeeID)
EmployeeName = "Aayush"
EmployeeDepartment = "Support"
baseLocation = "Bengaluru" // this is allowed for declaring variable in js but not a recommended practice to code

console.table([EmployeeID,EmployeeDepartment,EmployeeName,baseLocation,baseState])

/*
js initially had var used as way to declare variables but
it didn't have any scope like local variables have and are limited
within the {} but variables declared using 'var' had somewhat
global scope, thus a change to it will change it everywhere,
not used anymore in modern code but still there to support
some legacy code, note removed from js, but we will use only
const and let !!! 
*/

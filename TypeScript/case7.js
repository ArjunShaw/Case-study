var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Nurse"] = 2] = "Nurse";
})(Role || (Role = {}));
;
// Array of Staff
var array = [];
// Adding staff members
array.push({
    id: 1,
    name: "Ravi",
    role: Role.Doctor
});
array.push({
    id: 2,
    name: "Sri",
    role: Role.Nurse
});
// Function to print staff details
function printer(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var staff = array_1[_i];
        console.log("I am ".concat(staff.name, " and my role is ").concat(Role[staff.role]));
    }
}
// Function call
printer(array);

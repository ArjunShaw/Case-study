enum Role {Doctor, Admin, Nurse};
interface Staff {
    id : number;
    name : string;
    role : Role;
}

// Array of Staff
let array: Staff[] = [];

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
function printer(array: Staff[]): void {
  for (let staff of array) {
    console.log(`I am ${staff.name} and my role is ${Role[staff.role]}`);
  }
}

// Function call
printer(array);
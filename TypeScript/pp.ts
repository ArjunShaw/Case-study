enum PatientStatus { Admitted, Discharged, UnderObservation }

interface Patient {
  id: number;
  name: string;
  age: number;
  status: PatientStatus;
  vitals: [number, number];
}

let patents : Patient[] = [
    { id: 1, name: "Alice", age: 30, status: PatientStatus.Admitted, vitals: [120, 80] },
  { id: 2, name: "Bob", age: 45, status: PatientStatus.UnderObservation, vitals: [130, 85] }

]

class Nurse{
    constructor(public name : string) {

    }

    takeVital(patient : Patient, vital : [number, number]) : void {
        patient.vitals = vital;
        console.log(`${this.name} updated vitals for ${patient.name}`);
    }
}

let newVitals: [number, number] = [118, 76];
let nurse = new Nurse("Carol");
nurse.takeVital(patents[0], newVitals);

type A = { a: number };
type B = { b: string };
type AB = A & B; // { a: number; b: string }

const obj5: AB = { a: 1, b: "hi" }; // OK
console.log(obj5)
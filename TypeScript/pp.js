var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["Admitted"] = 0] = "Admitted";
    PatientStatus[PatientStatus["Discharged"] = 1] = "Discharged";
    PatientStatus[PatientStatus["UnderObservation"] = 2] = "UnderObservation";
})(PatientStatus || (PatientStatus = {}));
var patents = [
    { id: 1, name: "Alice", age: 30, status: PatientStatus.Admitted, vitals: [120, 80] },
    { id: 2, name: "Bob", age: 45, status: PatientStatus.UnderObservation, vitals: [130, 85] }
];
var Nurse = /** @class */ (function () {
    function Nurse(name) {
        this.name = name;
    }
    Nurse.prototype.takeVital = function (patient, vital) {
        patient.vitals = vital;
        console.log("".concat(this.name, " updated vitals for ").concat(patient.name));
    };
    return Nurse;
}());
var newVitals = [118, 76];
var nurse = new Nurse("Carol");
nurse.takeVital(patents[0], newVitals);
var obj = { a: 1, b: "hi" }; // OK
console.log(obj);

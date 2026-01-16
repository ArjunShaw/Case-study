const express = require("express");
const app = express();

const logDischargeRequest = require("./middleware/logDischarge");
const doctorSignoffCheck = require("./middleware/doctorCheck");
const pharmacyReview = require("./middleware/pharmacyCheck");
const followupCheck = require("./middleware/followupCheck");
const insuranceCheck = require("./middleware/insuranceCheck");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logDischargeRequest);

app.get("/", (req, res) => {
  res.send("Hospital Discharge System is running.");
});

app.post("/discharge",doctorSignoffCheck,pharmacyReview,insuranceCheck,followupCheck,(req, res) => {
    req.dischargeLog.push({
      step: "dischargeComplete",
      time: new Date().toISOString(),
    });

    res.json({
      status: "Discharge completed successfully",
      patient: req.body.patientName,
      log: req.dischargeLog,
    });
  }
);

app.use(errorHandler);
const port = 5000;
app.listen(port, () => {
  console.log("nnn is running on port 5000");
});

// for output
// {
//   "patientName": "Arjun",
//   "doctorSigned": true,
//   "pharmacyChecked": true,
//   "insuranceApproved": true,
//   "followupScheduled": true
// }

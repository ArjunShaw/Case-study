use("NEWDB");

// db.case3.insertMany([
//     {
//         name : "Arjun",
//         balance : 500
//     },
//     {
//         name : "Prem",
//         balance : 500
//     }
// ])

// db.case3.find()



// db.trans.insertOne({
//   from: ObjectId("69647c99e90350b5c4ed42c0"), // Arjun
//   to: ObjectId("69647c99e90350b5c4ed42c1"),   // Prem
//   amount: 100,
//   date: new Date(),
//   status: "completed"
// })

// db.trans.find()



// 1️⃣ Start session
const session = db.getMongo().startSession();

// 2️⃣ Start transaction
session.startTransaction();

try {
  const senderId = ObjectId("69647c99e90350b5c4ed42c0");    // Arjun
  const receiverId = ObjectId("69647c99e90350b5c4ed42c1");  // Prem
  const refundAmount = 100;

  // ✅ FIXED LINE
  const receiver = db.case3.findOne(
    { _id: receiverId },
    null,
    { session }
  );

  if (receiver.balance < refundAmount) {
    throw new Error("Receiver does not have enough balance for refund");
  }

  db.case3.updateOne(
    { _id: senderId },
    { $inc: { balance: 100 } },
    { session }
  );

  db.case3.updateOne(
    { _id: receiverId },
    { $inc: { balance: -100 } },
    { session }
  );

  db.trans.updateOne(
    { from: senderId, to: receiverId, amount: refundAmount, status: "completed" },
    { $set: { status: "refunded" } },
    { session }
  );

  db.trans.insertOne(
    {
      from: receiverId,
      to: senderId,
      amount: refundAmount,
      date: new Date(),
      status: "refund"
    },
    { session }
  );

  session.commitTransaction();
  print("✅ Refund successful");

} catch (error) {
  session.abortTransaction();
  print("❌ Refund failed:", error.message);
} finally {
  session.endSession();
}

use("NEWDB");

// ----------------------
// Sample Data (Optional)
// ----------------------

// db.case3.insertMany([
//   { name: "Arjun", balance: 500 },
//   { name: "Prem", balance: 500 }
// ])

// db.trans.insertOne({
//   from: ObjectId("69647c99e90350b5c4ed42c0"),
//   to: ObjectId("69647c99e90350b5c4ed42c1"),
//   amount: 100,
//   date: new Date(),
//   status: "completed"
// })


// ----------------------
// TRANSACTION START
// ----------------------

// Start session
const session = db.getMongo().startSession();

// IMPORTANT: get DB from session
const txDb = session.getDatabase("NEWDB");

//  Start transaction
session.startTransaction();

try {
  const senderId = ObjectId("69647c99e90350b5c4ed42c0");    // Arjun
  const receiverId = ObjectId("69647c99e90350b5c4ed42c1");  // Prem
  const refundAmount = 100;

  //  Find receiver (inside transaction)
  const receiver = txDb.case3.findOne(
    { _id: receiverId },
    null,
    { session }
  );

  if (!receiver) {
    throw new Error("Receiver not found");
  }

  if (receiver.balance < refundAmount) {
    throw new Error("Receiver does not have enough balance for refund");
  }

  //  Add money back to sender
  txDb.case3.updateOne(
    { _id: senderId },
    { $inc: { balance: refundAmount } },
    { session }
  );

  // Deduct money from receiver
  txDb.case3.updateOne(
    { _id: receiverId },
    { $inc: { balance: -refundAmount } },
    { session }
  );

  // Update old transaction status
  txDb.trans.updateOne(
    {
      from: senderId,
      to: receiverId,
      amount: refundAmount,
      status: "completed"
    },
    { $set: { status: "refunded" } },
    { session }
  );

  // Insert refund transaction record
  txDb.trans.insertOne(
    {
      from: receiverId,
      to: senderId,
      amount: refundAmount,
      date: new Date(),
      status: "refund"
    },
    { session }
  );

  //  Commit transaction
  session.commitTransaction();
  print("Refund successful");

} catch (error) {
  //Rollback if anything fails
  session.abortTransaction();
  print("Refund failed:", error.message);
} finally {
  // End session
  session.endSession();
}

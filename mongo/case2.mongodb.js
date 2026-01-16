use("NEWDB")


// insert Data ==> Create 
// db.case2.insertOne({
//   name: "Tofu Buddha Bowl",
//   cuisine: "Asian",
//   price: 9.50,
//   tags: ["vegan", "gluten-free"],
//   available: true
// })

//insert another data
// db.case2.insertOne({
//   name: "Kadai Panner",
//   cuisine: "India",
//   price: 15.20,
//   tags: ["vegan", "Testy"],
//   available: true
// })

// Read data

// db.case2.find();

// Find all available vegan dishes under $12
// db.case2.find(
//     {
//     available: true,
//     tags: "vegan",
//     price: { $lt: 12 }
//   },
//   {
//     _id : 0,
//     name : 1,
//     price : 1
//   }

// )


// update the price and push the new tag
// db.case2.updateOne(
//   { name: "Tofu Buddha Bowl" },
//   {
//     $set: { price: 10.00 },
//     $push: { tags: "popular" }
//   }
// )

// db.case2.find();


//Delete the one data
// db.case2.deleteOne({
//     name : "Kadai Panner"
// })

// db.case2.find()




use("NEWDB");

// db.case1.insertMany([
//      {
//     movie: "Edge of Tomorrow",
//     genre: "Sci-Fi",
//     country: "USA",
//     views: 15000,
//     rating: 8.2,
//     year: 2024
//   },
//   {
//     movie: "Interstellar",
//     genre: "Sci-Fi",
//     country: "USA",
//     views: 22000,
//     rating: 8.6,
//     year: 2024
//   },
//   {
//     movie: "Inception",
//     genre: "Sci-Fi",
//     country: "USA",
//     views: 18000,
//     rating: 8.8,
//     year: 2024
//   },
//   {
//     movie: "The Dark Knight",
//     genre: "Action",
//     country: "USA",
//     views: 30000,
//     rating: 9.0,
//     year: 2024
//   },
//   {
//     movie: "Avengers: Endgame",
//     genre: "Action",
//     country: "USA",
//     views: 35000,
//     rating: 8.4,
//     year: 2024
//   },
//   {
//     movie: "Parasite",
//     genre: "Thriller",
//     country: "South Korea",
//     views: 12000,
//     rating: 8.6,
//     year: 2024
//   },
//   {
//     movie: "Joker",
//     genre: "Drama",
//     country: "USA",
//     views: 16000,
//     rating: 8.5,
//     year: 2024
//   },
//   {
//     movie: "Forrest Gump",
//     genre: "Drama",
//     country: "USA",
//     views: 14000,
//     rating: 8.8,
//     year: 2024
//   },
//   {
//     movie: "Dangal",
//     genre: "Drama",
//     country: "India",
//     views: 20000,
//     rating: 8.3,
//     year: 2024
//   },
//   {
//     movie: "KGF Chapter 2",
//     genre: "Action",
//     country: "India",
//     views: 25000,
//     rating: 8.1,
//     year: 2024
//   }
// ]);



// print all data
// db.case1.find();


// only print views and movie
// db.case1.aggregate([
//   { $match: { year: 2024 } },
//   { $sort: { views: -1 } },
//   { $limit: 5 },
//   { $project: { _id: 0, movie: 1, views: 1 } }
// ])



//  find the average rating for each genre in 2024, but only include genres with more than 10,000 total views.

// db.case1.aggregate([
//   { $match: { year: 2024 } },
//   {
//     $group: {
//       _id: "$genre",
//       totalViews: { $sum: "$views" },
//       avgRating: { $avg: "$rating" }
//     }
//   },
//   { $match: { totalViews: { $gt: 10000 } } },
//   {
//     $project: {
//       _id: 0,
//       genre: "$_id",
//       totalViews: 1,
//       avgRating: { $round: ["$avgRating", 1] }
//     }
//   }
// ])


//output


// [
//   {
//     "totalViews": 100000,
//     "genre": "Drama",
//     "avgRating": 8.5
//   },
//   {
//     "totalViews": 24000,
//     "genre": "Thriller",
//     "avgRating": 8.6
//   },
//   {
//     "totalViews": 110000,
//     "genre": "Sci-Fi",
//     "avgRating": 8.5
//   },
//   {
//     "totalViews": 180000,
//     "genre": "Action",
//     "avgRating": 8.5
//   }
// ]
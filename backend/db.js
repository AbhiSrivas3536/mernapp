const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://DeliGo:Ruleabhi12@cluster0.1ysyi.mongodb.net/DeliGo?retryWrites=true&w=majority&appName=Cluster0';
//add DeliGo after .mongodb.net/ and before ?
const mongoDB = async () => {
  try {
    // Establishing connection with MongoDB
    await mongoose.connect(mongoURI, {
      // No need for these options if using Mongoose 6+
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      //modified to catch try and catch form
    });

    console.log(' MongoDB connected successfully');

    // Fetching the "food_items" collection data

    const fetched_data = mongoose.connection.db.collection("food_items");

    // Use async/await to fetch the data
    const data = await fetched_data.find({}).toArray();

    //console.log(' Food Items:', data); //display food items to check connection to db
    global.food_items = data;
    // fetching food category
    const foodCategory=mongoose.connection.db.collection("foodCategory");

    const catData = await foodCategory.find({}).toArray();

    global.foodCategory=catData;
    

    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = mongoDB;

const blogData = require("./blogData.json");
const userData = require("./userData.json");
const sequelize = require("../config/connection");
const User = require("../models/User");
const Post = require("../models/Post");


const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
    await Post.bulkCreate(blogData, {
      individualHooks: true,
      returning: true,
    });


    process.exit(0);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

seedDatabase();

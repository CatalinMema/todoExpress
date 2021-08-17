const mangoose = require("mongoose");
const { SUCCES_MONGODB, FAIL_MONGODB } = require("./constants");
const connectDb = async () => {
  try {
    await mangoose.connect("mongodb://mongo:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(SUCCES_MONGODB);
  } catch (error) {
    console.log(FAIL_MONGODB);
    console.log(error);
  }
};

module.exports = connectDb;

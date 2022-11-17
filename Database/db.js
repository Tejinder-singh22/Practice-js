
const mongoose  = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Test_3',
{
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

const db = mongoose.connection;
module.exports = db;

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Rushikesh:Rvn*2002@schooldb.qtgi3pj.mongodb.net/?retryWrites=true&w=majority")


const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected to MongoDB");
  });

  
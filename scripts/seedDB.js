const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the zipcodes collection and inserts the objects below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ispyourself",
  {
    useMongoClient: true
  }
);

const zipSeed = [
  {
    zipCode: 60601,
    hasCommunityISP: true,
  },
  {
    zipCode: 60602,
    hasCommunityISP: false,
  },
  {
    zipCode: 60603,
    hasCommunityISP: false,
  },
  {
    zipCode: 60604,
    hasCommunityISP: false,
  },
  {
    zipCode: 60605,
    hasCommunityISP: false,
  },
  {
    zipCode: 60606,
    hasCommunityISP: true,
  },
  {
    zipCode: 60607,
    hasCommunityISP: false,
  },
  {
    zipCode: 60608,
    hasCommunityISP: true,
  },
  {
    zipCode: 60609,
    hasCommunityISP: true,
  },
  {
    zipCode: 60610,
    hasCommunityISP: false,
  },
  {
    zipCode: 60611,
    hasCommunityISP: false,
  },
  {
    zipCode: 60612,
    hasCommunityISP: false,
  },
  {
    zipCode: 60613,
    hasCommunityISP: false,
  },
  {
    zipCode: 60614,
    hasCommunityISP: false,
  },
  {
    zipCode: 60615,
    hasCommunityISP: true,
  }
];

const messageSeed = [
  { id: 1, author: 'Admin', text: 'Wow this is neat!'},
  { id: 2, author: 'Me', text: 'Testing'}
];

db.ZipCode
  .remove({})
  .then(() => db.ZipCode.collection.insertMany(zipSeed))
  .then(data => {
    // why did this return "undefined records inserted"?
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Comment
  .remove({})
  .then(() => db.Comment.collection.insertMany(messageSeed))
  .then(data => {
    // why did this return "undefined records inserted"?
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

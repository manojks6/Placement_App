const mongoose = require("mongoose");

const Aptitude = new mongoose.Schema({
     Topic: {
        type: String,
        required: true,
     },
     QA: [
        {
           question: {
              type: String,
              required: true,
           },
           answer: {
              type: String,
              required: true,
           },
        },
     ],
  });

const Dsa = new mongoose.Schema({
   Topic: {
      type: String,
      required: true,
   },
   QA: [
      {
         question: {
            type: String,
            required: true,
         },
         answer: {
            type: String,
            required: true,
         },
      },
   ],
});

const AptitudeModel = mongoose.model('AptitudeModel', Aptitude);
const DsaModel = mongoose.model('DsaModel', Dsa);
module.exports = {
   AptitudeModel,
   DsaModel
};
  
// const apti = new mongoose.Schema({
//    qustion: {
//       type: String,
//       required: true,
//    },
//    answer: {
//       type: String,
//       required: true,
//    },
// });
// const listOfAptiTopics = new mongoose.Schema({
//    type: {
//       type: String,
//       required: true,
//    },
//    name: {
//       type: String,
//       required: true,
//    },
// });


// const aptiModel = mongoose.model("aptiModel", apti);
// const listOfAptiTopicsModel = mongoose.model(
//    "listOfAptiTopicsModel",
//    listOfAptiTopics
// );
// module.exports =;





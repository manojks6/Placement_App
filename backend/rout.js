const express = require("express");
const expressHandler = require("express-async-handler");
const router = express.Router();
const {AptitudeModel,DsaModel}=require('./Mongo/MongoModels')
router.route("/dsa").get(
   expressHandler(async (req, res) => {
      const x = await DsaModel.find({});
      res.json(x);
      // res.json({ msg: "DsaPage" });
   })
);
router.route("/aptitude").get(
   expressHandler(async (req, res) => {
      const x = await AptitudeModel.find({});
      res.json(x);
   })
)
router.route("/").get(
   expressHandler(async (req, res) => {
      res.json({ msg: "HomePage" });
   })
);
module.exports = router;

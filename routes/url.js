//Require
const router = require("express").Router();
const shortid = require("shortid");
const validUrl = require("valid-url");
const config = require("config");

// Load URL Model
const Url = require("../models/Url");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// @route     POST /api/url/shorten
// @desc      Create short URL
router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get("baseUrl");

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortid.generate();

  if (validUrl.isUri(longUrl)) {
    const shortUrl = baseUrl + "/" + urlCode;

    url = new Url({
      longUrl,
      shortUrl,
      urlCode,
      date: new Date()
    });

    url
      .save()
      .then(() => res.json(url))
      .catch(err => res.status(400).json("Error: " + err));
  }
});

module.exports = router;

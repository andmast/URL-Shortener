//Require
const router = require("express").Router();
const shortid = require("shortid");
const validUrl = require("valid-url");
const config = require("config");
// const metaget = require("metaget");

// Load URL Model
const Url = require("../models/Url");

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// @route     GET /api/urls/
// @desc      Get urls list
router.get("/", (req, res) => {
  Url.find().then(doc => res.json(doc));
});

// @route     POST /api/urls/shorten
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
    // metaget.fetch(longUrl, (err, meta_response) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(meta_response["og:image"]);
    //   }
    // });

    url = new Url({
      longUrl,
      shortUrl,
      urlCode,
      date: new Date().toLocaleDateString("en-US", dateOptions)
    });

    url
      .save()
      .then(() => res.json(url))
      .catch(err => res.status(400).json("Error: " + err));
  }
});

module.exports = router;

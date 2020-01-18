const router = require("express").Router();

const Url = require("../models/Url");

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get("/:code", (req, res) => {
  Url.findOne({ urlCode: req.params.code })
    .then(doc => {
      doc.visits = doc.visits + 1;
      doc.save();
      return res.redirect(doc.longUrl);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "Sorry this link may have expired ", err });
    });
});

module.exports = router;

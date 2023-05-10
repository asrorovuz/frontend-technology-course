const { Router } = require("express");
const router = Router();
// moduls
const Documention = require("../modals/Documention");

router.post("/post_documentation", async (req, res) => {
  try {
    const { title, text, url } = req.body;

    const findDoc = await Documention.find({ title });

    if (findDoc.length) {
      return res
        .status(400)
        .json({ err: "This documentation is already exicts" });
    }

    const documention = new Documention({
      title,
      text,
      url,
    });

    documention.save((errSave, sucsSave) => {
      if (errSave)
        return res.status(400).json({
          err: "Error with save new documention",
        });
      if (sucsSave)
        return res.status(200).json({
          sucs: `New is saved successfully`,
          msg: sucsSave,
        });
    });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with post document" });
  }
});

router.get("/get_documentation", async (req, res) => {
  try {
    const documents = await Documention.find();
    res.status(200).json({ documents });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with get documents" });
  }
});

router.delete("/delete_documentation:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const documents = await Documention.findOneAndDelete({ title: id });
    console.log(documents);
    res.send(documents);
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with delete document" });
  }
});

module.exports = router;

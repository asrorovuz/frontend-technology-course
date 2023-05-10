const { Router } = require("express");
const router = Router();

// modules
const Courses = require("../modals/Courses");

router.get("/get_course", async (req, res) => {
  try {
    const courses = await Courses.find();
    res.json({ msg: courses });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with GET Courses" });
  }
});

router.post("/post_course", async (req, res) => {
  try {
    const newObj = {
      // image: req.file.path,
      videos: [],
    };

    const course = Object.assign(req.body, newObj);

    const new_course = new Courses(course);

    const { title } = req.body;

    const findCourse = await Courses.find({ title });

    if (findCourse.length) {
      return res.status(400).json({ err: "This Course is already exicts" });
    }

    new_course.save((errSave, sucsSave) => {
      if (errSave)
        return res.status(400).json({
          err: "Error with save new Course",
        });
      if (sucsSave)
        return res.status(200).json({
          sucs: `New Course is created successfully`,
          msg: sucsSave,
        });
    });
  } catch (e) {
    return res
      .status(400)
      .json({ err: e + "Something went wrong with POST new Course" });
  }
});

router.delete("/delete_course:id", async (req, res) => {
  try {
    const { id } = req.params;

    Courses.findByIdAndDelete(id, (errDelete, sucsDelete) => {
      if (errDelete)
        return res.status(400).json({
          err: "Error with delete this Course",
        });

      if (sucsDelete) {
        return res.status(200).json({
          sucs: "This course is deleted successfully",
        });
      }
    });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with DELETE this Course" });
  }
});

router.put("/add_new_video:id", async (req, res) => {
  try {
    const { name } = req.body;
    // req.body.url = req.file.path;

    const { id } = req.params;

    const findVideo = await Courses.findById(id).select("videos");

    if (findVideo.videos.filter((item) => item.name === name).length > 0) {
      return res.status(400).json({ err: "This Video is already exicts" });
    }

    Courses.findByIdAndUpdate(
      id,
      {
        $push: { videos: req.body },
      },
      { new: true }
    ).exec((err, result) => {
      if (err) {
        res.status(422).json({ err: "Error in uploading video" });
      } else if (result) {
        res.json({ msg: result, sucs: "New video is Uploded successfully" });
      } else {
        res.status(422).json({ err: "This course is not found" });
      }
    });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with UPLOAD new Video" });
  }
});

router.put("/delete_video:id", async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const findVideo = await Courses.findById(id).select("videos");

    if (findVideo.videos.filter((item) => item.name === name).length === 0) {
      return res.status(400).json({ err: "This Video is not found" });
    }

    Courses.findByIdAndUpdate(
      id,
      {
        $pull: { videos: { name } },
      },
      { new: true }
    ).exec((err, result) => {
      if (err) {
        res.status(422).json({ err: "Error in delete video" });
      } else if (result) {
        res.json({ msg: result, sucs: "This video is Deleted successfully" });
      } else {
        res.status(422).json({ err: "This course is not found" });
      }
    });
  } catch (e) {
    return res
      .status(400)
      .json({ err: "Something went wrong with DELETE this Video" });
  }
});

module.exports = router;
// 645b6ae788c6d01e02b45e4f
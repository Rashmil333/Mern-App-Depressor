const mongoose = require("mongoose");

const storiesSchema = new mongoose.Schema({
  story_id: { type: String },
  // Comments: [
  //   comment: { type: String }
  // ]
  Comments: [
    {
      Date: {
        type: String
      },
      comment: {
        type: String
      },
      commentor: {
        type: {
          String
        }
      },
      commentor_img: {
        type: { String }
      }
    }
  ]
});

const AllStories = new mongoose.model("Stories", storiesSchema);

module.exports = AllStories;
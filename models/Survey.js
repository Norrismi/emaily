const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  reipients: [RecipientSchema], //sub document collection
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  //underscore denotes that it is a reference field
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema);

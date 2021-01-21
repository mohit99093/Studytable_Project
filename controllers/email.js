const Contact = require("../models/contact");
const Email = require("../models/emails");
const use = require("../utils/emails");

//contact
exports.postContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.json({
      status: 201,
      message:
        "Thank you for taking interest in us. Our Team will have coffee with you soon !!",
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};

exports.postEmail = async (req, res) => {
  const email = new Email(req.body);
  try {
    await email.save();
    let text = `Hello ${email.email}, We got your email! Will back to you soon.`;
    let subject = "StudyTable";
    use.sentMail(email, subject, text);
    res.json({
      status: 201,
      message: "We got your email. Will update you soon !!",
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};

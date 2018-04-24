const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  //requireLogin is a reference to a function that express will run
  //The only requirement of Express is: only one of the functions (below) has to process the request and send back a response to the user
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //console.log(req.body)

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user); // send data back to the browser
  });
};

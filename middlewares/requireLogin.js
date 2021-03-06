//if exporting a function or a snipit of code first letter is lowercase
//if exporting a component class or a model class first letter needs to be capitalized.

//this function helps to secure any route of the app

//sole purpose of this middleware is to make sure the user is logged in before route handler is excuted
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }
  next();
};

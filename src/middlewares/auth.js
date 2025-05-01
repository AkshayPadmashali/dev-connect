const adminAuth = (req, res, next) => {
  let isAuthorisedAdmin = false;
  if (isAuthorisedAdmin) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  adminAuth,
};

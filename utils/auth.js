//double-check to make sure the user is signed in before allowing certain fetches
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;
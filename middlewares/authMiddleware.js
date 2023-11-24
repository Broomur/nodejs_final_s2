const AuthMiddleware = (req, res, next) => {
if (req.session && req.session.auth){
    next();
}else{
    res.redirect('/login');
}
};

export default AuthMiddleware
import express from 'express';
import session from 'express-session';


export const protectedDashboard = (req, res, next) => {
if (req.session && req.session.user){
    next();
}else{
    res.redirect('/login');
}
};

export const auth = (req,res,next) => {
    if (req.session.auth) {
        req.session.message = "Vous êtes connecté";
        return next()
    }

    req.session.message = "Accès refusée";
    res.redirect('/login')
}

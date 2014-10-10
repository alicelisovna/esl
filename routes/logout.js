module.exports = function(req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            return next(err);
        }
        res.writeHead(204);
        res.end();
    });
};

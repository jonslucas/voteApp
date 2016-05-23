module.exports = (app)=>{
    app.route('/admin')
        .get((req, res)=>{
            res.send('Admin - Some placeholder text');
        });
};
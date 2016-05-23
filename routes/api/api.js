module.exports = (app)=>{
    app.route('/api')
        .get((req, res)=>{
            res.send('API - Some placeholder text');
        });
};
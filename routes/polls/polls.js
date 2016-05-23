module.exports = (app)=>{
    app.route('/polls')
        .get((req, res)=>{
            res.send('Polls - Some placeholder text');
        });
};
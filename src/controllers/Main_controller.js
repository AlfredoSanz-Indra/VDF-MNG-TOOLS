/*
* @script: Main_controller.js -> Controlador de la vista principal.
*
* @author:Alfredo Sanz
* @date:Noviembre 2019
*/



module.exports = {
    load : function(req, res){
        console.log('Requested Main view.');

        res.render('main', {
        });
    }
}
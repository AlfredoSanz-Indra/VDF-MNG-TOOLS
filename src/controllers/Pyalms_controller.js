/*
* @script: Pyalms_controller.js -> Controller for alms python scripts manage.
*
* @author:Alfredo Sanz
* @date:Noviembre 2019
*/

var pyalmsModuleService = require('../services/Pyalms_module_service');

module.exports = {
    main : function(req, res){
        console.log('Pyalms - main Controller INIT');

        res.render('pyalms', { });

        console.log('Pyalms - main Controller ENDS');
    },
    module : function(req, res){
        console.log('Pyalms - module Controller INIT');

        res.render('pyalms_module', { });

        console.log('Pyalms - module Controller ENDS');
    },
    moduleStart : function(req, res){
        console.log('Pyalms - moduleStart Controller INIT');

        const result = pyalmsModuleService.op_launch();

        res.render('pyalms_moduleOut', {'result':result});

        console.log('Pyalms - moduleStart Controller ENDS');
    }
}
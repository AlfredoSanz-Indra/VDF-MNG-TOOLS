/*
* @script: routes.js -> Contiene los enrutamientos de la app hacia los controladores.
*
* @author:Alfredo Sanz
* @date:Noviembre 2019
*/

//Libraries
const express = require('express');
const router = express.Router();

//Controllers
var mainController = require('../controllers/Main_controller');
var pyalms_controller = require('../controllers/Pyalms_controller');
var tasks_controller = require('../controllers/Tasks_controller');

//Routes
router.route('/').get(mainController.load);
router.route('/pyalms').get(pyalms_controller.main);
router.route('/pyalms/module').get(pyalms_controller.module);
router.route('/pyalms/moduleStart').get(pyalms_controller.moduleStart);

router.route('/tasks').get(tasks_controller.main);
router.route('/tasks/thetasks').get(tasks_controller.thetasks);
router.route('/tasks/members').get(tasks_controller.members);
router.route('/tasks/requirements').get(tasks_controller.requirements);
router.route('/tasks/types').get(tasks_controller.types);
router.route('/tasks/states').get(tasks_controller.states);
router.route('/tasks/states').post(tasks_controller.statesAdd);


module.exports = router;
/*
* @script: addTask_controller.js -> Controlador para realizar la tarea de añadir nueva task.
*
* @author:Alfredo Sanz
* @date:Agosto 2019
*/


const taskBD = require('../models/Task');

var taskService = require('../services/Task_service');

module.exports = {
    addNewTask : function(req, res){
       console.log('You got the Controller');

       const r = taskService.op_addNewTask();
       console.log(`task service returns ${r}`);
       
       res.render('addTask');
    }
}
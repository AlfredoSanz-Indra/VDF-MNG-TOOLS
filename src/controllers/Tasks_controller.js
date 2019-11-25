/*
* @script: Tasks_controller.js -> Controlador Principal para Tasks.
*
* @author:Alfredo Sanz
* @date:Noviembre 2019
*/

const tasksService = require('../services/Tasks_service');

module.exports = {
    main : function(req, res){
       console.log('Tasks - main Controller INIT');
             
       res.render('tasks');
       
       console.log('Tasks - main Controller ENDS');
    },
    thetasks : function(req, res){
        console.log('Tasks - thetasks Controller INIT');
              
        res.render('tasks');
        
        console.log('Tasks - thetasks Controller ENDS');
    },
    members : function(req, res){
        console.log('Tasks - members Controller INIT');
              
        res.render('tasks');
        
        console.log('Tasks - members Controller ENDS');
    },
    requirements : function(req, res){
        console.log('Tasks - requirements Controller INIT');
              
        res.render('tasks');
        
        console.log('Tasks - requirements Controller ENDS');
    },
    types : function(req, res){
        console.log('Tasks - types Controller INIT');
              
        res.render('tasks');
        
        console.log('Tasks - types Controller ENDS');
    },
    states : async function(req, res){
        console.log('Tasks - states Controller INIT');
             
        const stateList = await tasksService.op_getTasksStates();

        res.render('tasks_states', {stateList});
        
        console.log('Tasks - states Controller ENDS');
    },
    statesAdd : function(req, res){
        console.log('Tasks - statesAdd Controller INIT');
              
        res.render('tasks_states');
        
        console.log('Tasks - statesAdd Controller ENDS');
    }
}
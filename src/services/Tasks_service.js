/*
* @script: Tasks_service.js -> Servicio para las operaciones de Tareas.
*
* @author:Alfredo Sanz
* @date:Noviembre 2019
*/

const TaskStateBean = require('../models/TaskStateBean');

module.exports = {
    op_getTasksStates : () => {
        console.log('Tasks_service - op_getTasksStates INIT');

        const t1 = new TaskStateBean('open','Open');
        const t2 = new TaskStateBean('paused','Paused');
        const t3 = new TaskStateBean('closed','Closed');

        let result = [];
        result.push(t1);
        result.push(t2);
        result.push(t3);

        console.log('Tasks_service - op_getTasksStates ENDS');
        return result;
    }
}
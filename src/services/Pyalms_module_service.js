/*
* @script: Pyalms_module_service.js -> Servicio para lanzar el script Module.
*
* @author:Alfredo Sanz
* @date: Noviembre 2019
*/

const path = require('path')
const {spawn} = require('child_process')

module.exports = {
    op_launch : () => {
        console.log('op_launch service operation INIT');

        let result = "";
        const subprocess = runScript();
        

        // print output of script
        subprocess.stdout.on('data', (data) => {
            console.log(`data:${data}`);
            result += `data:${data}`;
            result += '\n';
        });
        subprocess.stderr.on('data', (data) => {
            result += `error:${data}`;
            result += '\n';
        });
        subprocess.on('close', () => {
            console.log('Closed')
            result += 'Closed';
            result += '\n';
        });

        console.log('op_launch service operation ENDS');
        return result;
    }
}


function runScript(){
    return spawn('D:\\DEV\\python3\\python', [
        "-u", 
        path.join("D:\\DEV\\workspace\\py_alms\\main.py"),
        "-o", 
        "module",
    ]);
  }
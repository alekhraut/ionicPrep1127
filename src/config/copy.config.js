// var envDirectory = process.env.NODE_ENV || "default";
var envAWS = process.env.NODE_ENV;
// console.log("process env ", process.env);

var envDirectory="local";
if(process.argv.length > 3){
  var envDirectory = process.argv[process.argv.length-1];
}

console.log('process.argv->',process.argv)
envDirectory = envDirectory.trim()

console.log('process.argv>>'+envDirectory.trim()+ "<<");
// var envDirectory = process.env.env || "default";
const existingConfig = require('../../node_modules/@ionic/app-scripts/config/copy.config');

console.log("envDir -> " + envDirectory + ": env -> "+ envAWS);

module.exports = Object.assign(existingConfig,{
    copySettings: {
      src: ['{{ROOT}}/environments/' + envDirectory + '/settings.json'],
      dest: '{{WWW}}/assets'
    }
});

console.log("existingConfig ->",existingConfig);
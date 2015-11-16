#!/usr/bin/env node
var uname2 = require('uname2')
var child_process = require('child_process');
var cmd = 'nautilus';

var argv = process.argv;
argv.shift();
argv.shift();

var v = uname2.version();

// v = "Linux ubuntu 3.13.0-66-generic #108-Ubuntu SMP Wed Oct 7 15:20:27 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux"

var ubuntu_re=/ubuntu/i;
var mac_re=/darwin/i;
if(ubuntu_re.test(v)){
  console.log('os =  ubuntu');
  cmd = 'nautilus';
  
  if(argv.length == 0){
    argv.push('-w');
    argv.push('.');
  }
}else if(mac_re.test(v)){
  console.log('os = mac');
  cmd = 'open';
  
  if(argv.length == 0){
    argv.push('.');
  }
}else{
  console.log('only support mac && ubuntu');
}


console.log(cmd + ' ' + argv.join(' '));
// execFile: executes a file with the specified arguments
child_process.execFile(cmd, argv, function (error, stdout, stderr) {
	console.log(stdout);
});
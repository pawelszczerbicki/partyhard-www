var sys = require('sys')
var exec = require('child_process').exec;

var githubhook = require('githubhook');
var github = githubhook({
  port: 9002,
  path: '/'
});

github.listen();

github.on('partyhard-www:refs/heads/master', function (event, data) {
  console.log('Change on master');
  exec('git pull --rebase', function(error, stdout, stderr) {
    if (error) console.error(error);
    console.log('Hook.sh completed');
  });
});


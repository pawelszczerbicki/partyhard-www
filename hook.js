var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
  port: 9002,
  path: '/'
});

github.listen();

github.on('partyhard-www:refs/heads/master', function (event, data) {
  console.log('Change on master');
  execFile('sh hook.sh', function(error, stdout, stderr) {
    if (error) console.error(error);
    console.log('Hook.sh completed');
  });
});


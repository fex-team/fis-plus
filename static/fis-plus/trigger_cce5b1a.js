var http = require('http');

var Serv = http.createServer(function (req, res ) {
    console.log('ACESS %s', req.url);
    if (req.url.indexOf('hook/github') != -1) {
        var postData = '';
        req.on('data', function (c) {
            postData += c.toString();
        });

        req.on('end', function () {
            if (postData.trim().length == 0) {
                return;
            }
            console.log(req.headers);
            console.log(obj);
            var event = req.headers['X-GitHub-Event'] || req.headers['x-github-event'];
            if (event === 'gollum') {
                var obj = JSON.parse(postData);
                updateFisDocRepos(obj);
            } else {
                console.log('Can\'t process EVENT %s', event, '!!!');
            }
        });
    }
    res.end('DONE');
});

Serv.listen(9000, function () {
    console.log('Listen to port: %s', 9000);
});

function updateFisDocRepos(obj) {
    var GithubApi = require('github');
    var github = new GithubApi({
        version: '3.0.0',
        timeout: 50000,
        headers: {
            'user-agent': 'Github AUTO Update'
        }
    });

    github.authenticate({
        type: 'token',
        token: '<GH_TOKEN>'
    });
    
    var msg = {
        user: 'fis-dev',
        repo: 'fis-doc',
        path: 'changelog' + '/' + obj['repository']['name'] + '.txt'
    };

    github.repos.getContent(msg, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        var content = (new Buffer(data.content, data.encoding)).toString('utf-8');

        obj['pages'].forEach(function (page) {
            content = content + 'WIKI ' + page.page_name + '.md ' + page.html_url + ' ' + (new Date).getTime() + '\n';
        });

        var updateData = {
            message: ':smile:',
            content: (new Buffer(content, 'utf-8')).toString(data.encoding),
            sha: data.sha,
            branch: "master"
        };

        github.repos.updateFile(mergeObj(msg, updateData), function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    });
}

function sha(content) {
    var crypto = require('crypto');
    var shasum = crypto.createHash('sha1');
    shasum.update(content);
    return shasum.digest('hex');
}

function mergeObj(a, b) {
    for (var i in b) {
        if (b.hasOwnProperty(i)) {
            a[i] = b[i];
        }
    }
    return a;
}

var http = require("http");
var https = require("https");
var querystring = require('querystring');

const host = "private-anon-217accbeb-note10.apiary-mock.com";

const _get = function(options, onResult)
{
    var prot = options.port == 443 ? https : http;
    options.host = options.host || host;
    options.method = "GET";
    options.headers = {};

    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

const _post = function(options, onResult)
{
    var prot = options.port == 443 ? https : http;
    options.host = options.host || host;
    options.method = "POST";
    options.headers = {
        "Content-Type": "application/json",
        // "Content-Length": options.body.length
    };

    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.write(querystring.stringify(options.body));
    req.end();
};

exports.getNotes = (done, err) => {
    _get({
        path: '/notes'
    }, done);
};

exports.createNode = (body, done, err) => {
    "use strict";
    var options = {};
    options.body = body;
    _post({
        path: '/notes'
    }, done);
};
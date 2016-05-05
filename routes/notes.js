/**
 * Created by yellow on 5/5/16.
 */
var express = require('express');
var router = express.Router();
var rest = require('../rest');


router.get('/', (req, res) => {
    rest.getNotes((statusCode, obj) => {
        "use strict";
        res.render('notes', {notes: obj});
    });
});

router.post('/', (req, res) => {
    "use strict";
    console.log(req);
    rest.createNode(req.body, (statusCode, obj) => {
        "use strict";
        console.log(statusCode);
        console.log(1);
    });
    console.log(req);

})

module.exports = router;
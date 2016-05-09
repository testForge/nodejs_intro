/**
 * Created by yellow on 5/5/16.
 */
var express = require('express');
var router = express.Router();
var rest = require('../rest');


router.get('/', (req, res) => {
    rest.getNotes((statusCode, obj) => {
        "use strict";
        res.json({notes: obj});
    });
});

router.post('/', (req, res) => {
    "use strict";
    console.log(req);
    rest.createNote(req.body, (statusCode, obj) => {
        "use strict";
        console.log(statusCode);
        console.log(1);
    });
    console.log(req);

});

router.put('/', (req, res) => {
    "use strict";
    console.log(req);
    rest.editNote(req.body, (statusCode, obj) => {
        console.log(statusCode);
        console.log(2);
    });
    console.log(req);
});

module.exports = router;
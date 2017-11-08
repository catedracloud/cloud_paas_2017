function create(req, resp) {
    console.log(req.body);
    resp.send({});
}


function update(req, resp) {
    resp.sendStatus(200);
}


function get(req, resp) {
    resp.sendStatus(404);
}


function list(req, resp) {
    resp.send([]);
}


function remove(req, resp) {
    resp.sendStatus(204);  // No Content
}

// Make controllers public
module.exports = {
    create: create,
    update: update,
    get: get,
    list: list,
    remove: remove
};

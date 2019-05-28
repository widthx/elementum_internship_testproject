//validateInput(["username", "password"], "body" or "params")

const validate = (required, payload) => {
    const keys = Object.keys(payload);
    let stringPass = true;

    if (required[0] && keys[0]) {
        for (var a in keys) {
            if (typeof payload[keys[a]] == 'string' && payload[keys[a]].length == 0) stringPass = false;

            for (var b in required) {                
                if (keys[a] && keys[a] == required[b] && stringPass) required.splice(b, 1);
            }
        }
    }
    return required; //strips all matching values, unprovided required keys are returned
}

module.exports = (required, context, req, res) => { //arr
        let validated;

        if (context == 'body') validated = validate(required, req.body);
        if (context == 'params') validated = validate(required, req.params);

        return validated;
}
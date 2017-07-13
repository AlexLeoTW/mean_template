function Echo (req) {
  this.msg = {
    from: req.ip.toString(),
    method: req.method.toString(),
    path: req.route.path.toString(),
    protocol: req.protocol.toString(),
    host: req.hostname.toString(),
    xhr: req.xhr,
    query: req.query,
    body: req.body
  };
}

Echo.prototype.trimNull = function () {
  for (let key in this.msg) {
    if (this.msg[key] == null) {
      delete this.msg[key];
    }
  }

  return this;
};

Echo.prototype.nullEmpty = function () {
  for (let key in this.msg) {

    switch (typeof this.msg[key]) {
      case "string":
        this.msg[key] = this.msg[key] === "" ? null : this.msg[key];
        break;
      case "object":
        this.msg[key] = isEmptyObject(this.msg[key]) ? null : this.msg[key];
        break;
      case "undefined":
        this.msg[key] = null;
        break;
    }
  }

  return this;
};

Echo.prototype.get = function () {
   return this.msg;
};

function isEmptyObject (object) {
  if (typeof object !== "object") return true;

  if (object == null) { return true; }
  if (object.length > 0) { return false; }
  if (object.length === 0) { return true; }

  for (var key in object) {
    if (hasOwnProperty.call(object, key)) { return false; }
  }

  return true;
}

exports.res = function (req, res) {
  res.json((new Echo(req)).nullEmpty().trimNull().get());
};

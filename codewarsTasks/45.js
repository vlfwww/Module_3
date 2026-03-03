Boolean.prototype.toString = function () {
  return this.valueOf() ? "true" : "false";
};

Number.prototype.toString = function () {
  return JSON.stringify(this);
};

Array.prototype.toString = function () {
  return "[" + this.map((item) => item.toString()).join(", ") + "]";
};

Object.prototype.toString = function () {
  return "[object Object]";
};
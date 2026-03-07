Plugboard = function(wires) {
  this.wires = (wires || "").toUpperCase();

  if (this.wires.length % 2 !== 0) throw new Error("Invalid number of wires");
  if (this.wires.length > 20) throw new Error("Too many wires");

  let seen = new Set();
  for (let char of this.wires) {
    if (seen.has(char)) throw new Error("Duplicate characters in wires");
    seen.add(char);
  }

  this.process = function(wire) {
    for (let i = 0; i < this.wires.length; i += 2) {
      let char1 = this.wires[i];
      let char2 = this.wires[i + 1];

      if (wire === char1) return char2;
      if (wire === char2) return char1;
    }
    return wire;
  };
}
class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    const parts = fullName.split(".");
    this._extension = parts.pop();
    this._filename = parts.join(".");
    this.contents = contents || "";
    this.lines = contents ? contents.split("\n") : [];
    this.lineIndex = 0;
    this.charIndex = 0;
  }

  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._filename;
  }
  get extension() {
    return this._extension;
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents += (this.contents ? "\n" : "") + str;
    this.lines.push(str);
  }

  gets() {
    if (this.lineIndex < this.lines.length) {
      return this.lines[this.lineIndex++];
    }
    return undefined;
  }

  getc() {
    if (this.charIndex < this.contents.length) {
      return this.contents[this.charIndex++];
    }
    return undefined;
  }
}
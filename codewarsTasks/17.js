class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}
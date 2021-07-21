class Cuboid {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    get surfaceArea() {
        const {length: l, width: w, height: h} = this
        return 2 * (l*w + l*h + w*h)
    }
    get volume () {
        const {length: l, width: w, height: h} = this
        return l*w*h
    }
  }
  class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
  }
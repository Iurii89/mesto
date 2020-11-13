class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = containerSelector;
  }

  renderItems(arrServer) {
    arrServer.forEach((item) => this._renderer(item));
  }

  addItem(nextElementContainer) {
    this._container.prepend(nextElementContainer);
  }
}

export default Section;

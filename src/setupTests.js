// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe() {
    this.callback([
      { isIntersecting: true, intersectionRatio: 1, target: document.body },
    ]);
  }
  unobserve() {}
  disconnect() {}
};

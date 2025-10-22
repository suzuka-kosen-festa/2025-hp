// IntersectionObserverのモック
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// IntersectionObserverEntryのモック
globalThis.IntersectionObserverEntry = class IntersectionObserverEntry {
  constructor() {}
};

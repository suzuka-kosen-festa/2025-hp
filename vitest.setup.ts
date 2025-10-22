// IntersectionObserverのモック
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// IntersectionObserverEntryのモック
global.IntersectionObserverEntry = class IntersectionObserverEntry {
  constructor() {}
};

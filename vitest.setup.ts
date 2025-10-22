// IntersectionObserverのモック
globalThis.IntersectionObserver = class IntersectionObserver {
  root: Element | Document | null = null;
  rootMargin: string = "0px";
  thresholds: ReadonlyArray<number> = [0];

  constructor(
    public callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    if (options) {
      this.root = options.root || null;
      this.rootMargin = options.rootMargin || "0px";
      this.thresholds = options.threshold ? (Array.isArray(options.threshold) ? options.threshold : [options.threshold]) : [0];
    }
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};

// IntersectionObserverEntryのモック
globalThis.IntersectionObserverEntry = class IntersectionObserverEntry {
  boundingClientRect: DOMRectReadOnly = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  };

  intersectionRatio: number = 0;
  intersectionRect: DOMRectReadOnly = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  };

  isIntersecting: boolean = false;
  rootBounds: DOMRectReadOnly | null = null;
  target: Element = document.createElement('div');
  time: number = 0;

  constructor() {
    // 引数なしのコンストラクタ
  }
};

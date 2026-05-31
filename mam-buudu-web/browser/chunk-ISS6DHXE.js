import {
  BehaviorSubject,
  Injectable,
  RendererFactory2,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LT3K6Q74.js";

// src/app/core/loading.service.ts
var LoadingService = class _LoadingService {
  _count = 0;
  _subject = new BehaviorSubject(false);
  isLoading$ = this._subject.asObservable();
  start() {
    this._count++;
    this._subject.next(true);
  }
  stop() {
    this._count = Math.max(0, this._count - 1);
    if (this._count === 0)
      this._subject.next(false);
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  renderer;
  themes = [
    { name: "blanc", label: "Blanc", color: "#E2E8F0" },
    { name: "bleu", label: "Bleu", color: "#2563EB" },
    { name: "rose", label: "Rose", color: "#DB2777" },
    { name: "vert", label: "Vert", color: "#059669" },
    { name: "orange", label: "Orange", color: "#EA580C" },
    { name: "violet", label: "Violet", color: "#7C3AED" }
  ];
  current;
  constructor(factory) {
    this.renderer = factory.createRenderer(null, null);
    const saved = localStorage.getItem("mb_color") ?? "blanc";
    this.current = saved;
    this.applyColor(saved);
  }
  applyColor(name) {
    this.current = name;
    this.renderer.setAttribute(document.body, "data-color", name);
    localStorage.setItem("mb_color", name);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(RendererFactory2));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: RendererFactory2 }], null);
})();

export {
  LoadingService,
  ThemeService
};
//# sourceMappingURL=chunk-ISS6DHXE.js.map

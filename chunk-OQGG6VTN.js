import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-UZMMFXAY.js";

// src/app/core/toast.service.ts
var ToastService = class _ToastService {
  nextId = 1;
  _subject = new BehaviorSubject([]);
  toasts$ = this._subject.asObservable();
  push(type, message, durationMs) {
    const toast = { id: this.nextId++, type, message };
    this._subject.next([...this._subject.value, toast]);
    setTimeout(() => this.dismiss(toast.id), durationMs);
  }
  success(message, durationMs = 4e3) {
    this.push("success", message, durationMs);
  }
  error(message, durationMs = 5e3) {
    this.push("error", message, durationMs);
  }
  info(message, durationMs = 4e3) {
    this.push("info", message, durationMs);
  }
  dismiss(id) {
    this._subject.next(this._subject.value.filter((t) => t.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-OQGG6VTN.js.map

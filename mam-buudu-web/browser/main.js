import {
  roleGuard
} from "./chunk-DBSPYNLN.js";
import {
  LoadingService,
  ThemeService
} from "./chunk-IWM4FSC5.js";
import {
  AuthService
} from "./chunk-VLIH72YP.js";
import {
  ApplicationRef,
  BrowserModule,
  Component,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Subject,
  filter,
  finalize,
  formatRuntimeError,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  platformBrowser,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  switchMap,
  take,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WU2I6PFW.js";
import {
  __spreadValues
} from "./chunk-YP43Q66R.js";

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  /**
   * Emits the payloads of the received push notification messages.
   */
  messages;
  /**
   * Emits the payloads of the received push notification messages as well as the action the user
   * interacted with. If no action was used the `action` property contains an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   *
   * @see [Notification click handling](ecosystem/service-workers/push-notifications#notification-click-handling)
   *
   */
  notificationClicks;
  /**
   * Emits the payloads of notifications that were closed, along with the action (if any)
   * associated with the close event. If no action was used, the `action` property contains
   * an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   */
  notificationCloses;
  /**
   * Emits updates to the push subscription, including both the previous (`oldSubscription`)
   * and current (`newSubscription`) values. Either subscription may be `null`, depending on
   * the context:
   *
   * - `oldSubscription` is `null` if no previous subscription existed.
   * - `newSubscription` is `null` if the subscription was invalidated and not replaced.
   *
   * This stream allows clients to react to automatic changes in push subscriptions,
   * such as those triggered by browser expiration or key rotation.
   *
   * [Push API]: https://w3c.github.io/push-api
   */
  pushSubscriptionChanges;
  /**
   * Emits the currently active
   * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
   * associated to the Service Worker registration or `null` if there is no subscription.
   */
  subscription;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  /**
   * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
   *
   * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
   * version fails.
   *
   * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
   * activation.
   *
   * @see [Version updates](ecosystem/service-workers/communications#version-updates)
   *
   */
  versionUpdates;
  /**
   * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
   * worker to serve this client is in a broken state that cannot be recovered from without a full
   * page reload.
   */
  unrecoverable;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="docs-alert docs-alert-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory(opts, injector) {
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  /**
   * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
   * `SwUpdate`) will attempt to communicate and interact with it.
   *
   * Default: true
   */
  enabled;
  /**
   * The value of the setting used to determine the circumstances in which the browser
   * will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via importScripts().
   * [ServiceWorkerRegistration.updateViaCache](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
   */
  updateViaCache;
  /**
   * The type of the ServiceWorker script to register.
   * [ServiceWorkerRegistration#type](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#type)
   * - `classic`: Registers the script as a classic worker. ES module features such as `import` and `export` are NOT allowed in the script.
   * - `module`: Registers the script as an ES module. Allows use of `import`/`export` syntax and module features.
   *
   * @default 'classic'
   */
  type;
  /**
   * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
   * control. It will be used when calling
   * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
   */
  scope;
  /**
   * Defines the ServiceWorker registration strategy, which determines when it will be registered
   * with the browser.
   *
   * The default behavior of registering once the application stabilizes (i.e. as soon as there are
   * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
   * possible but without affecting the application's first time load.
   *
   * Still, there might be cases where you want more control over when the ServiceWorker is
   * registered (for example, there might be a long-running timeout or polling interval, preventing
   * the app from stabilizing). The available option are:
   *
   * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
   *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
   *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
   *     task), the ServiceWorker will be registered anyway.
   *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
   *     stabilizes.
   * - `registerImmediately`: Register immediately.
   * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
   *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
   *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
   *     as possible but still asynchronously, once all pending micro-tasks are completed.
   * - An Observable factory function: A function that returns an `Observable`.
   *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
   *     ServiceWorker will be registered as soon as the first value is emitted.
   *
   * Default: 'registerWhenStable:30000'
   */
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, Injector]
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/core/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn())
    return true;
  inject(Router).navigate(["/auth/login"]);
  return false;
};

// src/app/landing/landing.component.ts
function LandingComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 116)(2, "span", 16);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 117)(6, "span", 16);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 118)(2, "span", 16);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 119);
    \u0275\u0275listener("click", function LandingComponent_ng_container_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Se d\xE9connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
  }
}
function LandingComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function LandingComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 121);
    \u0275\u0275listener("click", function LandingComponent_ng_container_54_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 122);
    \u0275\u0275listener("click", function LandingComponent_ng_container_54_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 123);
    \u0275\u0275listener("click", function LandingComponent_ng_container_55_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 124);
    \u0275\u0275listener("click", function LandingComponent_ng_container_55_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Se d\xE9connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
  }
}
function LandingComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 125)(2, "div", 126)(3, "span", 16);
    \u0275\u0275text(4, "family_restroom");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 127)(6, "strong");
    \u0275\u0275text(7, "Espace Famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Pour les membres de la famille");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 128);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 129)(13, "div", 130)(14, "span", 16);
    \u0275\u0275text(15, "admin_panel_settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 127)(17, "strong");
    \u0275\u0275text(18, "Espace Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Pour les gestionnaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 128);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 131)(2, "div", 126)(3, "span", 16);
    \u0275\u0275text(4, "dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 127)(6, "strong");
    \u0275\u0275text(7, "Retour \xE0 mon espace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 128);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 132);
    \u0275\u0275listener("click", function LandingComponent_ng_container_82_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(13, "div", 130)(14, "span", 16);
    \u0275\u0275text(15, "logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 127)(17, "strong");
    \u0275\u0275text(18, "Se d\xE9connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Quitter la session");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 128);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.userName);
  }
}
function LandingComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r7.color + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", f_r7.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r7.desc);
  }
}
function LandingComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "div", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 138);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 139)(8, "span", 16);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 140)(12, "div", 141)(13, "span", 142);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 143);
    \u0275\u0275text(16, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 141)(18, "span", 142);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 143);
    \u0275\u0275text(21, "G\xE9n\xE9rations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 141)(23, "span", 142);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 143);
    \u0275\u0275text(26, "Unions");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", f_r8.color + "22")("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.initiale);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Famille ", f_r8.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r8.origine);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.membres);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.generations);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.unions);
  }
}
function LandingComponent_div_213_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 154);
    \u0275\u0275listener("click", function LandingComponent_div_213_button_15_Template_button_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSlide(i_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r10 === ctx_r1.currentSlide);
  }
}
function LandingComponent_div_213_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145)(2, "span", 146);
    \u0275\u0275text(3, "format_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 147);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 148)(7, "div", 149);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "div", 150);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 151);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 152);
    \u0275\u0275template(15, LandingComponent_div_213_button_15_Template, 1, 2, "button", 153);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r11 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r11.texte);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r11.color + "33")("color", t_r11.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r11.initiale);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r11.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r11.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.testimonials);
  }
}
var LandingComponent = class _LandingComponent {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  /* ---- Stats animés ---- */
  stats = { familles: 0, membres: 0, unions: 0, stories: 0 };
  targets = { familles: 420, membres: 18500, unions: 6200, stories: 34e3 };
  interval = null;
  /* ---- Carousel témoignages ---- */
  currentSlide = 0;
  slideTimer = null;
  familles = [
    { nom: "Diallo", initiale: "D", membres: 127, generations: 5, unions: 38, origine: "Guin\xE9e", color: "#3B82F6" },
    { nom: "Konat\xE9", initiale: "K", membres: 83, generations: 4, unions: 25, origine: "Mali", color: "#8B5CF6" },
    { nom: "Bald\xE9", initiale: "B", membres: 61, generations: 3, unions: 18, origine: "S\xE9n\xE9gal", color: "#EC4899" },
    { nom: "Traor\xE9", initiale: "T", membres: 204, generations: 6, unions: 61, origine: "C\xF4te d'Ivoire", color: "#F59E0B" },
    { nom: "Coulibaly", initiale: "C", membres: 95, generations: 4, unions: 29, origine: "Burkina", color: "#10B981" },
    { nom: "Camara", initiale: "C", membres: 48, generations: 3, unions: 14, origine: "Sierra Leone", color: "#6366F1" }
  ];
  testimonials = [
    {
      nom: "Ibrahim Diallo",
      initiale: "ID",
      color: "#3B82F6",
      role: "P\xE8re de famille, Conakry",
      texte: "Mam Buudu a r\xE9volutionn\xE9 la fa\xE7on dont notre famille pr\xE9serve son histoire. En quelques clics, mes enfants peuvent explorer cinq g\xE9n\xE9rations d'anc\xEAtres. C'est un cadeau extraordinaire."
    },
    {
      nom: "Fatoumata Konat\xE9",
      initiale: "FK",
      color: "#EC4899",
      role: "Enseignante, Bamako",
      texte: "L'arbre g\xE9n\xE9alogique est tellement beau et intuitif ! Toute la famille a \xE9t\xE9 \xE9merveill\xE9e lors de notre r\xE9union annuelle. Mes tantes de 80 ans ont retrouv\xE9 des cousins perdus de vue depuis 30 ans."
    },
    {
      nom: "Oumar Bald\xE9",
      initiale: "OB",
      color: "#8B5CF6",
      role: "Ing\xE9nieur, Dakar",
      texte: "La fonctionnalit\xE9 de synchronisation est parfaite. Mon fr\xE8re \xE0 Paris, ma s\u0153ur \xE0 Montr\xE9al et moi \xE0 Dakar \u2014 on met tous \xE0 jour l'arbre en temps r\xE9el. Notre famille est plus connect\xE9e que jamais."
    },
    {
      nom: "Mariama Traor\xE9",
      initiale: "MT",
      color: "#F59E0B",
      role: "M\xE9decin, Abidjan",
      texte: "Les stories familiales sont une fonctionnalit\xE9 magnifique. Grand-m\xE8re a pu partager ses souvenirs et recettes traditionnelles. Ces moments sont d\xE9sormais pr\xE9serv\xE9s pour nos petits-enfants."
    }
  ];
  features = [
    { icon: "account_tree", title: "Arbre g\xE9n\xE9alogique", desc: "Visualisez votre famille sur plusieurs g\xE9n\xE9rations avec un arbre interactif et \xE9l\xE9gant.", color: "#3B82F6" },
    { icon: "auto_stories", title: "Stories familiales", desc: "Partagez photos, anecdotes et traditions. Vos souvenirs racont\xE9s et pr\xE9serv\xE9s pour toujours.", color: "#8B5CF6" },
    { icon: "timeline", title: "Ligne du temps", desc: "Revivez les grands moments : naissances, mariages, accomplissements. Une histoire vivante.", color: "#EC4899" },
    { icon: "lock", title: "Priv\xE9 & S\xE9curis\xE9", desc: "Vos donn\xE9es familiales sont chiffr\xE9es et accessibles uniquement aux membres invit\xE9s.", color: "#10B981" },
    { icon: "phone_android", title: "Application mobile", desc: "Disponible sur Android et iOS. Votre famille dans votre poche, o\xF9 que vous soyez.", color: "#F59E0B" },
    { icon: "group_add", title: "Multi-r\xF4les", desc: "Administrateurs, gestionnaires, membres \u2014 chaque r\xF4le adapt\xE9 \xE0 ses besoins.", color: "#6366F1" }
  ];
  navOpen = false;
  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  get dashboardRoute() {
    const role = this.auth.getUser()?.role ?? "";
    return role === "admin" || role === "gestionnaire" ? "/app/home" : "/famille";
  }
  get userName() {
    const u = this.auth.getUser();
    return u ? `${u.prenom} ${u.nom}` : "";
  }
  logout() {
    this.auth.logout();
  }
  ngOnInit() {
    this.animateCounters();
    this.startSlideTimer();
  }
  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
    if (this.slideTimer)
      clearInterval(this.slideTimer);
  }
  animateCounters() {
    const duration = 2e3;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    this.interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.familles = Math.round(this.targets.familles * eased);
      this.stats.membres = Math.round(this.targets.membres * eased);
      this.stats.unions = Math.round(this.targets.unions * eased);
      this.stats.stories = Math.round(this.targets.stories * eased);
      if (step >= steps) {
        this.stats = __spreadValues({}, this.targets);
        clearInterval(this.interval);
      }
    }, stepTime);
  }
  startSlideTimer() {
    this.slideTimer = setInterval(() => {
      this.nextSlide();
    }, 5e3);
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }
  goToSlide(i) {
    this.currentSlide = i;
  }
  formatStat(n) {
    if (n >= 1e3)
      return (n / 1e3).toFixed(1).replace(".0", "") + "k";
    return n.toString();
  }
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: false, decls: 255, vars: 17, consts: [[1, "landing-nav"], ["routerLink", "/", 1, "nav-logo"], ["width", "26", "height", "26", "viewBox", "0 0 120 120", "fill", "none"], ["x", "50", "y", "60", "width", "20", "height", "40", "fill", "#8B4513", "rx", "2"], ["d", "M60 60 L40 40", "stroke", "#8B4513", "stroke-width", "6", "stroke-linecap", "round"], ["d", "M60 60 L80 40", "stroke", "#8B4513", "stroke-width", "6", "stroke-linecap", "round"], ["cx", "35", "cy", "35", "r", "10", "fill", "#2E7D32"], ["cx", "85", "cy", "35", "r", "10", "fill", "#2E7D32"], ["cx", "60", "cy", "25", "r", "10", "fill", "#81C784"], [1, "nav-links"], ["href", "#features", 1, "nav-link"], ["href", "#familles", 1, "nav-link"], ["href", "#temoignages", 1, "nav-link"], [1, "nav-actions"], [4, "ngIf"], ["aria-label", "Menu", 1, "nav-hamburger", 3, "click"], [1, "material-icons-round"], ["class", "nav-mobile-overlay", 3, "click", 4, "ngIf"], [1, "nav-mobile-sheet"], [1, "nms-header"], [1, "nav-logo", "nms-logo"], ["width", "24", "height", "24", "viewBox", "0 0 120 120", "fill", "none"], [1, "nms-close", 3, "click"], [1, "nms-links"], ["href", "#features", 1, "nms-link", 3, "click"], ["href", "#familles", 1, "nms-link", 3, "click"], ["href", "#temoignages", 1, "nms-link", 3, "click"], [1, "nms-actions"], [1, "hero"], [1, "hero-sparks"], [1, "spark", 2, "left", "12%", "animation-delay", "0s"], [1, "spark", 2, "left", "24%", "animation-delay", "1.4s", "width", "4px", "height", "4px"], [1, "spark", 2, "left", "38%", "animation-delay", "2.6s"], [1, "spark", 2, "left", "55%", "animation-delay", "0.7s", "width", "4px", "height", "4px"], [1, "spark", 2, "left", "68%", "animation-delay", "3.4s"], [1, "spark", 2, "left", "81%", "animation-delay", "1.9s", "width", "4px", "height", "4px"], [1, "hero-inner"], [1, "hero-badge", "fade-up-1"], [1, "hero-title", "fade-up-2"], [1, "accent"], [1, "hero-sub", "fade-up-3"], [1, "hero-entries", "fade-up-4"], [1, "hero-tree-wrap"], ["width", "480", "height", "560", "viewBox", "0 0 480 560", "fill", "none"], ["d", "M240 520 C 220 500, 200 495, 175 505", "stroke", "#8B4513", "stroke-width", "3", "fill", "none", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 C 260 500, 280 495, 305 505", "stroke", "#8B4513", "stroke-width", "3", "fill", "none", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 L 240 545", "stroke", "#8B4513", "stroke-width", "4", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 L 240 400", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 C 210 380, 180 365, 150 340", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 C 270 380, 300 365, 330 340", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 L 240 330", "stroke", "#8B4513", "stroke-width", "5", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M150 340 C 130 315, 115 300, 95 280", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M150 340 C 155 310, 150 290, 140 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M330 340 C 350 315, 365 300, 385 280", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M330 340 C 325 310, 330 290, 340 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M240 330 C 225 305, 225 290, 235 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M240 330 C 255 305, 255 290, 245 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M95 280 C 85 260, 82 245, 88 225", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M140 265 C 135 245, 138 230, 148 210", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M385 280 C 395 260, 398 245, 392 225", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M340 265 C 345 245, 342 230, 332 210", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M235 265 C 225 240, 228 222, 220 200", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M245 265 C 255 240, 252 222, 260 200", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["cx", "88", "cy", "220", "r", "16", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.4s, 1.9s"], ["cx", "148", "cy", "205", "r", "14", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.5s, 2.1s"], ["cx", "220", "cy", "196", "r", "16", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.6s, 1.7s"], ["cx", "260", "cy", "196", "r", "14", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.65s, 2.4s"], ["cx", "332", "cy", "205", "r", "14", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.55s, 2.0s"], ["cx", "392", "cy", "220", "r", "16", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.45s, 1.85s"], ["cx", "95", "cy", "280", "r", "9", "fill", "#3B82F6", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.0s, 2.6s"], ["cx", "140", "cy", "265", "r", "8", "fill", "#EC4899", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.05s, 2.2s"], ["cx", "240", "cy", "330", "r", "9", "fill", "#F59E0B", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "0.75s, 2.8s"], ["cx", "340", "cy", "265", "r", "8", "fill", "#EC4899", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.05s, 2.35s"], ["cx", "385", "cy", "280", "r", "9", "fill", "#3B82F6", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.0s, 1.95s"], ["cx", "150", "cy", "340", "r", "10", "fill", "#8B5CF6", "opacity", "0.9", 1, "leaf", 2, "animation-delay", "0.65s, 3.0s"], ["cx", "330", "cy", "340", "r", "10", "fill", "#8B5CF6", "opacity", "0.9", 1, "leaf", 2, "animation-delay", "0.65s, 2.5s"], [1, "stats-section"], [1, "container", "stats-grid"], [1, "stat-box"], [1, "stat-icon"], [1, "stat-number"], [1, "stat-label"], [1, "solution"], [1, "container"], [1, "sec-head"], [1, "sec-tag"], [1, "sol-grid"], [1, "sol-card"], [1, "sol-icon"], ["id", "features", 1, "features"], [1, "feat-layout"], [1, "feat-left"], [1, "feat-grid"], ["class", "feat-card", 4, "ngFor", "ngForOf"], ["id", "familles", 1, "familles"], [1, "fam-grid"], ["class", "fam-card", 4, "ngFor", "ngForOf"], ["id", "temoignages", 1, "testimonials"], [1, "sec-tag", "sec-tag-dark"], ["class", "testi-wrap", 4, "ngIf"], [1, "cta"], [1, "cta-box"], [1, "cta-actions"], ["routerLink", "/famille/login", 1, "cta-btn", "cta-btn-primary"], ["routerLink", "/auth/login", 1, "cta-btn", "cta-btn-ghost"], [1, "landing-footer"], [1, "container", "footer-inner"], [1, "footer-brand"], ["width", "18", "height", "18", "viewBox", "0 0 120 120", "fill", "none"], [1, "footer-sep"], [1, "footer-by"], [1, "footer-links"], ["routerLink", "/famille/login"], ["routerLink", "/auth/login"], ["routerLink", "/auth/register"], [1, "footer-copy"], ["routerLink", "/famille/login", 1, "btn-nav-famille"], ["routerLink", "/auth/login", 1, "btn-nav-admin"], [1, "btn-nav-famille", 3, "routerLink"], [1, "btn-nav-logout", 3, "click"], [1, "nav-mobile-overlay", 3, "click"], ["routerLink", "/famille/login", 1, "nms-btn", "nms-btn-famille", 3, "click"], ["routerLink", "/auth/login", 1, "nms-btn", "nms-btn-admin", 3, "click"], [1, "nms-btn", "nms-btn-famille", 3, "click", "routerLink"], [1, "nms-btn", "nms-btn-logout", 3, "click"], ["routerLink", "/famille/login", 1, "entry-card"], [1, "entry-icon", "famille"], [1, "entry-info"], [1, "material-icons-round", "arrow"], ["routerLink", "/auth/login", 1, "entry-card"], [1, "entry-icon", "admin"], [1, "entry-card", 3, "routerLink"], [1, "entry-card", 3, "click"], [1, "feat-card"], [1, "feat-icon"], [1, "fam-card"], [1, "fam-head"], [1, "fam-avatar"], [1, "fam-name"], [1, "fam-origin"], [1, "fam-stats"], [1, "fam-stat"], [1, "fam-stat-val"], [1, "fam-stat-label"], [1, "testi-wrap"], [1, "testi-card"], [1, "material-icons-round", "testi-quote-icon"], [1, "testi-text"], [1, "testi-author"], [1, "testi-avatar"], [1, "testi-name"], [1, "testi-role"], [1, "testi-dots"], ["class", "testi-dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "testi-dot", 3, "click"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "rect", 3)(4, "path", 4)(5, "path", 5)(6, "circle", 6)(7, "circle", 7)(8, "circle", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275text(13, "Fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 11);
      \u0275\u0275text(15, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 12);
      \u0275\u0275text(17, "T\xE9moignages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275template(19, LandingComponent_ng_container_19_Template, 9, 0, "ng-container", 14)(20, LandingComponent_ng_container_20_Template, 9, 1, "ng-container", 14);
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_21_listener() {
        return ctx.navOpen = !ctx.navOpen;
      });
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, LandingComponent_div_24_Template, 1, 0, "div", 17);
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 21);
      \u0275\u0275element(29, "rect", 3)(30, "path", 4)(31, "path", 5)(32, "circle", 6)(33, "circle", 7)(34, "circle", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 22);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_37_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(38, "span", 16);
      \u0275\u0275text(39, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 23)(41, "a", 24);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_41_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(42, "span", 16);
      \u0275\u0275text(43, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, "Fonctionnalit\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "a", 25);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_45_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(46, "span", 16);
      \u0275\u0275text(47, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, "Familles ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 26);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_49_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(50, "span", 16);
      \u0275\u0275text(51, "format_quote");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, "T\xE9moignages ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275template(54, LandingComponent_ng_container_54_Template, 9, 0, "ng-container", 14)(55, LandingComponent_ng_container_55_Template, 9, 1, "ng-container", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "section", 28)(57, "div", 29);
      \u0275\u0275element(58, "div", 30)(59, "div", 31)(60, "div", 32)(61, "div", 33)(62, "div", 34)(63, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 36)(65, "div")(66, "span", 37)(67, "span", 16);
      \u0275\u0275text(68, "auto_awesome");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " Application g\xE9n\xE9alogique africaine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "h1", 38);
      \u0275\u0275text(71, " L'histoire de votre");
      \u0275\u0275element(72, "br");
      \u0275\u0275elementStart(73, "span", 39);
      \u0275\u0275text(74, "famille");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, ",");
      \u0275\u0275element(76, "br");
      \u0275\u0275text(77, " pr\xE9serv\xE9e pour toujours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 40);
      \u0275\u0275text(79, " Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 41);
      \u0275\u0275template(81, LandingComponent_ng_container_81_Template, 23, 0, "ng-container", 14)(82, LandingComponent_ng_container_82_Template, 23, 2, "ng-container", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 42);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 43);
      \u0275\u0275element(85, "path", 44)(86, "path", 45)(87, "path", 46)(88, "path", 47)(89, "path", 48)(90, "path", 49)(91, "path", 50)(92, "path", 51)(93, "path", 52)(94, "path", 53)(95, "path", 54)(96, "path", 55)(97, "path", 56)(98, "path", 57)(99, "path", 58)(100, "path", 59)(101, "path", 60)(102, "path", 61)(103, "path", 62)(104, "circle", 63)(105, "circle", 64)(106, "circle", 65)(107, "circle", 66)(108, "circle", 67)(109, "circle", 68)(110, "circle", 69)(111, "circle", 70)(112, "circle", 71)(113, "circle", 72)(114, "circle", 73)(115, "circle", 74)(116, "circle", 75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(117, "section", 76)(118, "div", 77)(119, "div", 78)(120, "div", 79)(121, "span", 16);
      \u0275\u0275text(122, "family_restroom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div")(124, "div", 80);
      \u0275\u0275text(125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 81);
      \u0275\u0275text(127, "Familles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 78)(129, "div", 79)(130, "span", 16);
      \u0275\u0275text(131, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div")(133, "div", 80);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 81);
      \u0275\u0275text(136, "Membres");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 78)(138, "div", 79)(139, "span", 16);
      \u0275\u0275text(140, "favorite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div")(142, "div", 80);
      \u0275\u0275text(143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 81);
      \u0275\u0275text(145, "Unions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 78)(147, "div", 79)(148, "span", 16);
      \u0275\u0275text(149, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div")(151, "div", 80);
      \u0275\u0275text(152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 81);
      \u0275\u0275text(154, "Stories");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "section", 82)(156, "div", 83)(157, "div", 84)(158, "span", 85);
      \u0275\u0275text(159, "Notre solution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "h2");
      \u0275\u0275text(161, "Mam Buudu simplifie la g\xE9n\xE9alogie, pour toutes les familles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p");
      \u0275\u0275text(163, "De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 86)(165, "div", 87)(166, "div", 88)(167, "span", 16);
      \u0275\u0275text(168, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "h3");
      \u0275\u0275text(170, "Sans code, sans effort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, "Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 87)(174, "div", 88)(175, "span", 16);
      \u0275\u0275text(176, "share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "h3");
      \u0275\u0275text(178, "Partage en famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180, "Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(181, "section", 89)(182, "div", 83)(183, "div", 90)(184, "div", 91)(185, "span", 85);
      \u0275\u0275text(186, "Bienvenue sur Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "h2");
      \u0275\u0275text(188, "G\xE9n\xE9alogie nouvelle g\xE9n\xE9ration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p");
      \u0275\u0275text(190, "Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire. Nous rempla\xE7ons les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 92);
      \u0275\u0275template(192, LandingComponent_div_192_Template, 8, 7, "div", 93);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(193, "section", 94)(194, "div", 83)(195, "div", 84)(196, "span", 85);
      \u0275\u0275text(197, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "h2");
      \u0275\u0275text(199, "Des familles qui nous font confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 95);
      \u0275\u0275template(203, LandingComponent_div_203_Template, 27, 16, "div", 96);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "section", 97)(205, "div", 83)(206, "div", 84)(207, "span", 98);
      \u0275\u0275text(208, "T\xE9moignages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "h2");
      \u0275\u0275text(210, "Ce que disent nos utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(213, LandingComponent_div_213_Template, 16, 9, "div", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "section", 100)(215, "div", 83)(216, "div", 101)(217, "h2");
      \u0275\u0275text(218, "Pr\xEAt \xE0 connecter votre famille ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "p");
      \u0275\u0275text(220, "Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 102)(222, "a", 103)(223, "span", 16);
      \u0275\u0275text(224, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, " Acc\xE9der \xE0 mon espace famille ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 104)(227, "span", 16);
      \u0275\u0275text(228, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(229, " Espace administrateur ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(230, "footer", 105)(231, "div", 106)(232, "div", 107);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(233, "svg", 108);
      \u0275\u0275element(234, "rect", 3)(235, "path", 4)(236, "path", 5)(237, "circle", 6)(238, "circle", 7)(239, "circle", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(240, "span");
      \u0275\u0275text(241, "Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "span", 109);
      \u0275\u0275text(243, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "span", 110);
      \u0275\u0275text(245, "par Sahelys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 111)(247, "a", 112);
      \u0275\u0275text(248, "Espace Famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "a", 113);
      \u0275\u0275text(250, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "a", 114);
      \u0275\u0275text(252, "Cr\xE9er un espace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 115);
      \u0275\u0275text(254, "\xA9 2026 Sahelys. Tous droits r\xE9serv\xE9s.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.navOpen ? "close" : "menu");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.navOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.navOpen);
      \u0275\u0275advance(29);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(26);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(43);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.familles), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.membres), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.unions), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.stories), "+");
      \u0275\u0275advance(40);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.familles);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.testimonials[ctx.currentSlide]);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  overflow-x: hidden;\n  color: #0F172A;\n  background: #ffffff;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\na[_ngcontent-%COMP%] {\n  color: #1445F5;\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  text-wrap: balance;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_drawLine {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_leafPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_leafFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-5px) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes _ngcontent-%COMP%_ctaGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(129, 199, 132, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(129, 199, 132, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_statPop {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.fade-up-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.05s both;\n}\n.fade-up-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.18s both;\n}\n.fade-up-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.3s both;\n}\n.fade-up-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.42s both;\n}\n.landing-nav[_ngcontent-%COMP%] {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 60;\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(14px) saturate(160%);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 17px;\n  font-weight: 800;\n  color: #0F172A;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4B5563;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #0F172A;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-nav-famille[_ngcontent-%COMP%], \n.btn-nav-admin[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 11px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn-nav-famille[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.btn-nav-admin[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.btn-nav-famille[_ngcontent-%COMP%] {\n  background: #0F2A1E;\n  color: #ffffff;\n}\n.btn-nav-famille[_ngcontent-%COMP%]:hover {\n  background: #123B27;\n}\n.btn-nav-admin[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.btn-nav-admin[_ngcontent-%COMP%]:hover {\n  background: #DCFCE7;\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: #FEE2E2;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background: #F3F4F6;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0F172A;\n}\n.nav-mobile-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 40;\n}\n.nav-mobile-sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 84vw;\n  background: #ffffff;\n  z-index: 50;\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.12);\n}\n.nav-mobile-sheet.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nms-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-logo[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.nms-close[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: none;\n  background: #F3F4F6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.nms-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 10px;\n  gap: 2px;\n}\n.nms-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.nms-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: #9CA3AF;\n}\n.nms-link[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.nms-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 16px;\n  border-top: 1px solid #EEF1F5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.nms-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.nms-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n}\n.nms-btn-famille[_ngcontent-%COMP%] {\n  background: #0F2A1E;\n  color: #ffffff;\n}\n.nms-btn-admin[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.nms-btn-logout[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  padding: 76px 40px 0;\n}\n.hero-sparks[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.spark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: _ngcontent-%COMP%_sparkRise 5.5s ease-in infinite;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 480px;\n  gap: 40px;\n  align-items: center;\n  padding-bottom: 70px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: #C7F0D3;\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-bottom: 22px;\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: #81C784;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 46px;\n  font-weight: 800;\n  line-height: 1.14;\n  letter-spacing: -1px;\n  color: #ffffff;\n}\n.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #81C784,\n      #D4E88C);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.62);\n  max-width: 46ch;\n}\n.hero-entries[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 32px;\n  max-width: 420px;\n}\n.entry-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 15px 18px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  cursor: pointer;\n  transition: transform 0.15s, background 0.15s;\n  text-align: left;\n  width: 100%;\n  font-family: inherit;\n}\n.entry-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  background: rgba(255, 255, 255, 0.1);\n}\n.entry-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon.famille[_ngcontent-%COMP%] {\n  background: #81C784;\n  color: #0B2914;\n}\n.entry-icon.admin[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n}\n.entry-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.entry-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.entry-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\n.entry-card[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 18px !important;\n}\n.hero-tree-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tree-line[_ngcontent-%COMP%] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  animation: _ngcontent-%COMP%_drawLine 0.9s ease forwards;\n}\n.tree-line.g-root[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.tree-line.g-trunk[_ngcontent-%COMP%] {\n  animation-delay: 0.15s;\n}\n.tree-line.g-1[_ngcontent-%COMP%] {\n  animation-delay: 0.55s;\n}\n.tree-line.g-2[_ngcontent-%COMP%] {\n  animation-delay: 0.95s;\n}\n.leaf[_ngcontent-%COMP%] {\n  transform-box: fill-box;\n  transform-origin: center;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_leafPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both, _ngcontent-%COMP%_leafFloat 3.2s ease-in-out infinite;\n}\n.stats-section[_ngcontent-%COMP%] {\n  background: #0F2A1E;\n  padding: 26px 0 30px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #81C784;\n  font-size: 19px !important;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.1;\n  animation: _ngcontent-%COMP%_statPop 0.5s ease both;\n  font-variant-numeric: tabular-nums;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(1)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.55s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(2)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.65s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(3)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.75s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(4)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.85s;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sec-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: #F0FDF4;\n  color: #15803D;\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.sec-tag-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: #81C784;\n}\n.sec-head[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 620px;\n  margin: 0 auto 48px;\n}\n.sec-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 14px 0 12px;\n  color: #0F172A;\n}\n.sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.solution[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.sol-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n}\n.sol-card[_ngcontent-%COMP%] {\n  padding: 34px;\n  border-radius: 22px;\n  border: 1px solid #EEF1F5;\n  background: #FAFBFC;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.sol-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.sol-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 15px;\n  background: #0F2A1E;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sol-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #81C784;\n  font-size: 24px !important;\n}\n.sol-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.sol-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.features[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.feat-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 60px;\n  align-items: start;\n}\n.feat-left[_ngcontent-%COMP%]   .sec-tag[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.feat-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 0 0 14px;\n}\n.feat-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.feat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.feat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 18px;\n  padding: 24px 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.feat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.feat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 21px !important;\n}\n.feat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #0F172A;\n}\n.feat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.familles[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.fam-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 44px;\n}\n.fam-card[_ngcontent-%COMP%] {\n  border: 1px solid #EEF1F5;\n  border-radius: 20px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.fam-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.fam-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.fam-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.fam-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0;\n}\n.fam-origin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.fam-origin[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.fam-stats[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #F3F4F6;\n}\n.fam-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 14px 0;\n}\n.fam-stat[_ngcontent-%COMP%]    + .fam-stat[_ngcontent-%COMP%] {\n  border-left: 1px solid #F3F4F6;\n}\n.fam-stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 17px;\n  font-weight: 800;\n}\n.fam-stat-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.testimonials[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #0F2A1E;\n}\n.testimonials[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonials[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.testi-wrap[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.testi-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 40px;\n}\n.testi-quote-icon[_ngcontent-%COMP%] {\n  color: #81C784;\n  font-size: 30px !important;\n  margin-bottom: 14px;\n  display: block;\n}\n.testi-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.88);\n  margin: 0 0 26px;\n  font-weight: 300;\n}\n.testi-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.testi-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.testi-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.testi-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.testi-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 26px;\n}\n.testi-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.testi-dot.active[_ngcontent-%COMP%] {\n  background: #81C784;\n  width: 22px;\n  border-radius: 5px;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 90px 0;\n  background: #ffffff;\n}\n.cta-box[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 56px;\n  border-radius: 28px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0E2417,\n      #123B27);\n  position: relative;\n  overflow: hidden;\n}\n.cta-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.cta-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 14px 0 30px;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.cta-btn-primary[_ngcontent-%COMP%] {\n  background: #81C784;\n  color: #0B2914;\n  animation: _ngcontent-%COMP%_ctaGlow 2.4s ease-in-out infinite;\n}\n.cta-btn-primary[_ngcontent-%COMP%]:hover {\n  animation: none;\n}\n.cta-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.landing-footer[_ngcontent-%COMP%] {\n  padding: 28px 0;\n  border-top: 1px solid #EEF1F5;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: #D1D5DB;\n}\n.footer-by[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 400;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0F172A;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n@media (max-width: 900px) {\n  .landing-nav[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-famille[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-admin[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 76px 20px 0;\n  }\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-bottom: 40px;\n    text-align: center;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-entries[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-tree-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 280px;\n    height: auto;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sol-grid[_ngcontent-%COMP%], \n   .fam-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .feat-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .feat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .solution[_ngcontent-%COMP%], \n   .features[_ngcontent-%COMP%], \n   .familles[_ngcontent-%COMP%], \n   .testimonials[_ngcontent-%COMP%] {\n    padding: 64px 0;\n  }\n  .cta-box[_ngcontent-%COMP%] {\n    padding: 36px 24px;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: false, template: `<!-- ===== NAVBAR ===== -->
<nav class="landing-nav">
  <a routerLink="/" class="nav-logo">
    <svg width="26" height="26" viewBox="0 0 120 120" fill="none">
      <rect x="50" y="60" width="20" height="40" fill="#8B4513" rx="2"/>
      <path d="M60 60 L40 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
      <path d="M60 60 L80 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
      <circle cx="35" cy="35" r="10" fill="#2E7D32"/>
      <circle cx="85" cy="35" r="10" fill="#2E7D32"/>
      <circle cx="60" cy="25" r="10" fill="#81C784"/>
    </svg>
    <span>Mam Buudu</span>
  </a>
  <div class="nav-links">
    <a href="#features" class="nav-link">Fonctionnalit\xE9s</a>
    <a href="#familles" class="nav-link">Familles</a>
    <a href="#temoignages" class="nav-link">T\xE9moignages</a>
  </div>
  <div class="nav-actions">
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/famille/login" class="btn-nav-famille">
        <span class="material-icons-round">people</span>
        Espace Famille
      </a>
      <a routerLink="/auth/login" class="btn-nav-admin">
        <span class="material-icons-round">manage_accounts</span>
        Administration
      </a>
    </ng-container>
    <ng-container *ngIf="isLoggedIn">
      <a [routerLink]="dashboardRoute" class="btn-nav-famille">
        <span class="material-icons-round">dashboard</span>
        Mon espace
      </a>
      <button class="btn-nav-logout" (click)="logout()">
        <span class="material-icons-round">logout</span>
        Se d\xE9connecter
      </button>
    </ng-container>
    <button class="nav-hamburger" (click)="navOpen = !navOpen" aria-label="Menu">
      <span class="material-icons-round">{{ navOpen ? 'close' : 'menu' }}</span>
    </button>
  </div>
</nav>

<!-- ===== MOBILE NAV SHEET ===== -->
<div class="nav-mobile-overlay" *ngIf="navOpen" (click)="navOpen=false"></div>
<div class="nav-mobile-sheet" [class.open]="navOpen">
  <div class="nms-header">
    <div class="nav-logo nms-logo">
      <svg width="24" height="24" viewBox="0 0 120 120" fill="none">
        <rect x="50" y="60" width="20" height="40" fill="#8B4513" rx="2"/>
        <path d="M60 60 L40 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <path d="M60 60 L80 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <circle cx="35" cy="35" r="10" fill="#2E7D32"/>
        <circle cx="85" cy="35" r="10" fill="#2E7D32"/>
        <circle cx="60" cy="25" r="10" fill="#81C784"/>
      </svg>
      <span>Mam Buudu</span>
    </div>
    <button class="nms-close" (click)="navOpen=false">
      <span class="material-icons-round">close</span>
    </button>
  </div>
  <div class="nms-links">
    <a href="#features" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">star</span>Fonctionnalit\xE9s
    </a>
    <a href="#familles" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">family_restroom</span>Familles
    </a>
    <a href="#temoignages" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">format_quote</span>T\xE9moignages
    </a>
  </div>
  <div class="nms-actions">
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/famille/login" class="nms-btn nms-btn-famille" (click)="navOpen=false">
        <span class="material-icons-round">people</span>Espace Famille
      </a>
      <a routerLink="/auth/login" class="nms-btn nms-btn-admin" (click)="navOpen=false">
        <span class="material-icons-round">manage_accounts</span>Administration
      </a>
    </ng-container>
    <ng-container *ngIf="isLoggedIn">
      <a [routerLink]="dashboardRoute" class="nms-btn nms-btn-famille" (click)="navOpen=false">
        <span class="material-icons-round">dashboard</span>Mon espace
      </a>
      <button class="nms-btn nms-btn-logout" (click)="logout(); navOpen=false">
        <span class="material-icons-round">logout</span>Se d\xE9connecter
      </button>
    </ng-container>
  </div>
</div>

<!-- ===== HERO ===== -->
<section class="hero">
  <div class="hero-sparks">
    <div class="spark" style="left:12%; animation-delay:0s"></div>
    <div class="spark" style="left:24%; animation-delay:1.4s; width:4px; height:4px;"></div>
    <div class="spark" style="left:38%; animation-delay:2.6s"></div>
    <div class="spark" style="left:55%; animation-delay:0.7s; width:4px; height:4px;"></div>
    <div class="spark" style="left:68%; animation-delay:3.4s"></div>
    <div class="spark" style="left:81%; animation-delay:1.9s; width:4px; height:4px;"></div>
  </div>

  <div class="hero-inner">
    <div>
      <span class="hero-badge fade-up-1">
        <span class="material-icons-round">auto_awesome</span>
        Application g\xE9n\xE9alogique africaine
      </span>
      <h1 class="hero-title fade-up-2">
        L'histoire de votre<br/>
        <span class="accent">famille</span>,<br/>
        pr\xE9serv\xE9e pour toujours
      </h1>
      <p class="hero-sub fade-up-3">
        Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps.
      </p>

      <div class="hero-entries fade-up-4">
        <ng-container *ngIf="!isLoggedIn">
          <a routerLink="/famille/login" class="entry-card">
            <div class="entry-icon famille"><span class="material-icons-round">family_restroom</span></div>
            <div class="entry-info"><strong>Espace Famille</strong><span>Pour les membres de la famille</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
          <a routerLink="/auth/login" class="entry-card">
            <div class="entry-icon admin"><span class="material-icons-round">admin_panel_settings</span></div>
            <div class="entry-info"><strong>Espace Admin</strong><span>Pour les gestionnaires</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
        </ng-container>
        <ng-container *ngIf="isLoggedIn">
          <a [routerLink]="dashboardRoute" class="entry-card">
            <div class="entry-icon famille"><span class="material-icons-round">dashboard</span></div>
            <div class="entry-info"><strong>Retour \xE0 mon espace</strong><span>{{ userName }}</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
          <button class="entry-card" (click)="logout()">
            <div class="entry-icon admin"><span class="material-icons-round">logout</span></div>
            <div class="entry-info"><strong>Se d\xE9connecter</strong><span>Quitter la session</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </button>
        </ng-container>
      </div>
    </div>

    <div class="hero-tree-wrap">
      <svg width="480" height="560" viewBox="0 0 480 560" fill="none">
        <!-- Racines -->
        <path class="tree-line g-root" d="M240 520 C 220 500, 200 495, 175 505" stroke="#8B4513" stroke-width="3" fill="none" opacity="0.55"/>
        <path class="tree-line g-root" d="M240 520 C 260 500, 280 495, 305 505" stroke="#8B4513" stroke-width="3" fill="none" opacity="0.55"/>
        <path class="tree-line g-root" d="M240 520 L 240 545" stroke="#8B4513" stroke-width="4" opacity="0.55"/>
        <!-- Tronc + g\xE9n\xE9ration 1 -->
        <path class="tree-line g-trunk" d="M240 520 L 240 400" stroke="#8B4513" stroke-width="7" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 C 210 380, 180 365, 150 340" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 C 270 380, 300 365, 330 340" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 L 240 330" stroke="#8B4513" stroke-width="5" stroke-linecap="round"/>
        <!-- G\xE9n\xE9ration 2 -->
        <path class="tree-line g-1" d="M150 340 C 130 315, 115 300, 95 280" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M150 340 C 155 310, 150 290, 140 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M330 340 C 350 315, 365 300, 385 280" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M330 340 C 325 310, 330 290, 340 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M240 330 C 225 305, 225 290, 235 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M240 330 C 255 305, 255 290, 245 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <!-- G\xE9n\xE9ration 3 (fines) -->
        <path class="tree-line g-2" d="M95 280 C 85 260, 82 245, 88 225" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M140 265 C 135 245, 138 230, 148 210" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M385 280 C 395 260, 398 245, 392 225" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M340 265 C 345 245, 342 230, 332 210" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M235 265 C 225 240, 228 222, 220 200" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M245 265 C 255 240, 252 222, 260 200" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>

        <!-- Feuillage -->
        <circle class="leaf" style="animation-delay:1.4s, 1.9s" cx="88" cy="220" r="16" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.5s, 2.1s" cx="148" cy="205" r="14" fill="#81C784"/>
        <circle class="leaf" style="animation-delay:1.6s, 1.7s" cx="220" cy="196" r="16" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.65s, 2.4s" cx="260" cy="196" r="14" fill="#81C784"/>
        <circle class="leaf" style="animation-delay:1.55s, 2.0s" cx="332" cy="205" r="14" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.45s, 1.85s" cx="392" cy="220" r="16" fill="#81C784"/>

        <circle class="leaf" style="animation-delay:1.0s, 2.6s" cx="95" cy="280" r="9" fill="#3B82F6" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.05s, 2.2s" cx="140" cy="265" r="8" fill="#EC4899" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:0.75s, 2.8s" cx="240" cy="330" r="9" fill="#F59E0B" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.05s, 2.35s" cx="340" cy="265" r="8" fill="#EC4899" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.0s, 1.95s" cx="385" cy="280" r="9" fill="#3B82F6" opacity="0.85"/>

        <circle class="leaf" style="animation-delay:0.65s, 3.0s" cx="150" cy="340" r="10" fill="#8B5CF6" opacity="0.9"/>
        <circle class="leaf" style="animation-delay:0.65s, 2.5s" cx="330" cy="340" r="10" fill="#8B5CF6" opacity="0.9"/>
      </svg>
    </div>
  </div>
</section>

<!-- ===== STATS ===== -->
<section class="stats-section">
  <div class="container stats-grid">
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">family_restroom</span></div>
      <div><div class="stat-number">{{ formatStat(stats.familles) }}+</div><div class="stat-label">Familles</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">people</span></div>
      <div><div class="stat-number">{{ formatStat(stats.membres) }}+</div><div class="stat-label">Membres</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">favorite</span></div>
      <div><div class="stat-number">{{ formatStat(stats.unions) }}+</div><div class="stat-label">Unions</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">auto_stories</span></div>
      <div><div class="stat-number">{{ formatStat(stats.stories) }}+</div><div class="stat-label">Stories</div></div>
    </div>
  </div>
</section>

<!-- ===== SOLUTION ===== -->
<section class="solution">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag">Notre solution</span>
      <h2>Mam Buudu simplifie la g\xE9n\xE9alogie, pour toutes les familles.</h2>
      <p>De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.</p>
    </div>
    <div class="sol-grid">
      <div class="sol-card">
        <div class="sol-icon"><span class="material-icons-round">account_tree</span></div>
        <h3>Sans code, sans effort</h3>
        <p>Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.</p>
      </div>
      <div class="sol-card">
        <div class="sol-icon"><span class="material-icons-round">share</span></div>
        <h3>Partage en famille</h3>
        <p>Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== FEATURES ===== -->
<section class="features" id="features">
  <div class="container">
    <div class="feat-layout">
      <div class="feat-left">
        <span class="sec-tag">Bienvenue sur Mam Buudu</span>
        <h2>G\xE9n\xE9alogie nouvelle g\xE9n\xE9ration</h2>
        <p>Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire. Nous rempla\xE7ons les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.</p>
      </div>
      <div class="feat-grid">
        <div class="feat-card" *ngFor="let f of features">
          <div class="feat-icon" [style.background]="f.color + '18'">
            <span class="material-icons-round" [style.color]="f.color">{{ f.icon }}</span>
          </div>
          <h4>{{ f.title }}</h4>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== FAMILLES ===== -->
<section class="familles" id="familles">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag">Familles</span>
      <h2>Des familles qui nous font confiance</h2>
      <p>Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.</p>
    </div>
    <div class="fam-grid">
      <div class="fam-card" *ngFor="let f of familles">
        <div class="fam-head">
          <div class="fam-avatar" [style.background]="f.color + '22'" [style.color]="f.color">{{ f.initiale }}</div>
          <div>
            <p class="fam-name">Famille {{ f.nom }}</p>
            <span class="fam-origin"><span class="material-icons-round">place</span>{{ f.origine }}</span>
          </div>
        </div>
        <div class="fam-stats">
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.membres }}</span><span class="fam-stat-label">Membres</span></div>
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.generations }}</span><span class="fam-stat-label">G\xE9n\xE9rations</span></div>
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.unions }}</span><span class="fam-stat-label">Unions</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="testimonials" id="temoignages">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag sec-tag-dark">T\xE9moignages</span>
      <h2>Ce que disent nos utilisateurs</h2>
      <p>Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.</p>
    </div>
    <div class="testi-wrap" *ngIf="testimonials[currentSlide] as t">
      <div class="testi-card">
        <span class="material-icons-round testi-quote-icon">format_quote</span>
        <p class="testi-text">{{ t.texte }}</p>
        <div class="testi-author">
          <div class="testi-avatar" [style.background]="t.color + '33'" [style.color]="t.color">{{ t.initiale }}</div>
          <div><div class="testi-name">{{ t.nom }}</div><div class="testi-role">{{ t.role }}</div></div>
        </div>
      </div>
      <div class="testi-dots">
        <button class="testi-dot" *ngFor="let s of testimonials; let i = index"
                [class.active]="i === currentSlide" (click)="goToSlide(i)"></button>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA FINAL ===== -->
<section class="cta">
  <div class="container">
    <div class="cta-box">
      <h2>Pr\xEAt \xE0 connecter votre famille ?</h2>
      <p>Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.</p>
      <div class="cta-actions">
        <a routerLink="/famille/login" class="cta-btn cta-btn-primary">
          <span class="material-icons-round">family_restroom</span>
          Acc\xE9der \xE0 mon espace famille
        </a>
        <a routerLink="/auth/login" class="cta-btn cta-btn-ghost">
          <span class="material-icons-round">admin_panel_settings</span>
          Espace administrateur
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="landing-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <svg width="18" height="18" viewBox="0 0 120 120" fill="none">
        <rect x="50" y="60" width="20" height="40" fill="#8B4513" rx="2"/>
        <path d="M60 60 L40 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <path d="M60 60 L80 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <circle cx="35" cy="35" r="10" fill="#2E7D32"/><circle cx="85" cy="35" r="10" fill="#2E7D32"/><circle cx="60" cy="25" r="10" fill="#81C784"/>
      </svg>
      <span>Mam Buudu</span>
      <span class="footer-sep">\xB7</span>
      <span class="footer-by">par Sahelys</span>
    </div>
    <div class="footer-links">
      <a routerLink="/famille/login">Espace Famille</a>
      <a routerLink="/auth/login">Administration</a>
      <a routerLink="/auth/register">Cr\xE9er un espace</a>
    </div>
    <div class="footer-copy">\xA9 2026 Sahelys. Tous droits r\xE9serv\xE9s.</div>
  </div>
</footer>
`, styles: ['/* src/app/landing/landing.component.scss */\n:host {\n  display: block;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  overflow-x: hidden;\n  color: #0F172A;\n  background: #ffffff;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  color: #1445F5;\n  text-decoration: none;\n}\nh1,\nh2,\nh3 {\n  text-wrap: balance;\n  margin: 0;\n}\n.container {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes drawLine {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes leafPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes leafFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-5px) scale(1);\n  }\n}\n@keyframes sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes ctaGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(129, 199, 132, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(129, 199, 132, 0);\n  }\n}\n@keyframes statPop {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host * {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.fade-up-1 {\n  animation: fadeUp 0.6s ease 0.05s both;\n}\n.fade-up-2 {\n  animation: fadeUp 0.6s ease 0.18s both;\n}\n.fade-up-3 {\n  animation: fadeUp 0.6s ease 0.3s both;\n}\n.fade-up-4 {\n  animation: fadeUp 0.6s ease 0.42s both;\n}\n.landing-nav {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 60;\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(14px) saturate(160%);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n}\n.nav-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 17px;\n  font-weight: 800;\n  color: #0F172A;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.nav-link {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4B5563;\n}\n.nav-link:hover {\n  color: #0F172A;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-nav-famille,\n.btn-nav-admin,\n.btn-nav-logout {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 11px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn-nav-famille .material-icons-round,\n.btn-nav-admin .material-icons-round,\n.btn-nav-logout .material-icons-round {\n  font-size: 17px !important;\n}\n.btn-nav-famille {\n  background: #0F2A1E;\n  color: #ffffff;\n}\n.btn-nav-famille:hover {\n  background: #123B27;\n}\n.btn-nav-admin {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.btn-nav-admin:hover {\n  background: #DCFCE7;\n}\n.btn-nav-logout {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.btn-nav-logout:hover {\n  background: #FEE2E2;\n}\n.nav-hamburger {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background: #F3F4F6;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0F172A;\n}\n.nav-mobile-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 40;\n}\n.nav-mobile-sheet {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 84vw;\n  background: #ffffff;\n  z-index: 50;\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.12);\n}\n.nav-mobile-sheet.open {\n  transform: translateX(0);\n}\n.nms-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-logo {\n  font-size: 15px;\n}\n.nms-close {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: none;\n  background: #F3F4F6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.nms-links {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 10px;\n  gap: 2px;\n}\n.nms-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.nms-link .material-icons-round {\n  font-size: 19px !important;\n  color: #9CA3AF;\n}\n.nms-link:hover {\n  background: #F9FAFB;\n}\n.nms-actions {\n  margin-top: auto;\n  padding: 16px;\n  border-top: 1px solid #EEF1F5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.nms-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.nms-btn .material-icons-round {\n  font-size: 19px !important;\n}\n.nms-btn-famille {\n  background: #0F2A1E;\n  color: #ffffff;\n}\n.nms-btn-admin {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.nms-btn-logout {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.hero {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  padding: 76px 40px 0;\n}\n.hero-sparks {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.spark {\n  position: absolute;\n  bottom: 60px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: sparkRise 5.5s ease-in infinite;\n}\n.hero-inner {\n  position: relative;\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 480px;\n  gap: 40px;\n  align-items: center;\n  padding-bottom: 70px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: #C7F0D3;\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-bottom: 22px;\n}\n.hero-badge .material-icons-round {\n  font-size: 15px !important;\n  color: #81C784;\n}\n.hero-title {\n  font-size: 46px;\n  font-weight: 800;\n  line-height: 1.14;\n  letter-spacing: -1px;\n  color: #ffffff;\n}\n.hero-title .accent {\n  background:\n    linear-gradient(\n      90deg,\n      #81C784,\n      #D4E88C);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-sub {\n  margin: 20px 0 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.62);\n  max-width: 46ch;\n}\n.hero-entries {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 32px;\n  max-width: 420px;\n}\n.entry-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 15px 18px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  cursor: pointer;\n  transition: transform 0.15s, background 0.15s;\n  text-align: left;\n  width: 100%;\n  font-family: inherit;\n}\n.entry-card:hover {\n  transform: translateX(3px);\n  background: rgba(255, 255, 255, 0.1);\n}\n.entry-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon.famille {\n  background: #81C784;\n  color: #0B2914;\n}\n.entry-icon.admin {\n  background: rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n}\n.entry-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.entry-info strong {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.entry-info span {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\n.entry-card .arrow {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 18px !important;\n}\n.hero-tree-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tree-line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  animation: drawLine 0.9s ease forwards;\n}\n.tree-line.g-root {\n  animation-delay: 0s;\n}\n.tree-line.g-trunk {\n  animation-delay: 0.15s;\n}\n.tree-line.g-1 {\n  animation-delay: 0.55s;\n}\n.tree-line.g-2 {\n  animation-delay: 0.95s;\n}\n.leaf {\n  transform-box: fill-box;\n  transform-origin: center;\n  opacity: 0;\n  animation: leafPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both, leafFloat 3.2s ease-in-out infinite;\n}\n.stats-section {\n  background: #0F2A1E;\n  padding: 26px 0 30px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n}\n.stat-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon .material-icons-round {\n  color: #81C784;\n  font-size: 19px !important;\n}\n.stat-number {\n  font-size: 22px;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.1;\n  animation: statPop 0.5s ease both;\n  font-variant-numeric: tabular-nums;\n}\n.stat-box:nth-child(1) .stat-number {\n  animation-delay: 0.55s;\n}\n.stat-box:nth-child(2) .stat-number {\n  animation-delay: 0.65s;\n}\n.stat-box:nth-child(3) .stat-number {\n  animation-delay: 0.75s;\n}\n.stat-box:nth-child(4) .stat-number {\n  animation-delay: 0.85s;\n}\n.stat-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sec-tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: #F0FDF4;\n  color: #15803D;\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.sec-tag-dark {\n  background: rgba(255, 255, 255, 0.1);\n  color: #81C784;\n}\n.sec-head {\n  text-align: center;\n  max-width: 620px;\n  margin: 0 auto 48px;\n}\n.sec-head h2 {\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 14px 0 12px;\n  color: #0F172A;\n}\n.sec-head p {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.solution {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.sol-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n}\n.sol-card {\n  padding: 34px;\n  border-radius: 22px;\n  border: 1px solid #EEF1F5;\n  background: #FAFBFC;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.sol-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.sol-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 15px;\n  background: #0F2A1E;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sol-icon .material-icons-round {\n  color: #81C784;\n  font-size: 24px !important;\n}\n.sol-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.sol-card p {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.features {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.feat-layout {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 60px;\n  align-items: start;\n}\n.feat-left .sec-tag {\n  margin-bottom: 18px;\n}\n.feat-left h2 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 0 0 14px;\n}\n.feat-left p {\n  font-size: 14.5px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.feat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.feat-card {\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 18px;\n  padding: 24px 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.feat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.feat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.feat-icon .material-icons-round {\n  font-size: 21px !important;\n}\n.feat-card h4 {\n  font-size: 14.5px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #0F172A;\n}\n.feat-card p {\n  font-size: 12.5px;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.familles {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.fam-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 44px;\n}\n.fam-card {\n  border: 1px solid #EEF1F5;\n  border-radius: 20px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.fam-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.fam-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.fam-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.fam-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0;\n}\n.fam-origin {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.fam-origin .material-icons-round {\n  font-size: 13px !important;\n}\n.fam-stats {\n  display: flex;\n  border-top: 1px solid #F3F4F6;\n}\n.fam-stat {\n  flex: 1;\n  text-align: center;\n  padding: 14px 0;\n}\n.fam-stat + .fam-stat {\n  border-left: 1px solid #F3F4F6;\n}\n.fam-stat-val {\n  display: block;\n  font-size: 17px;\n  font-weight: 800;\n}\n.fam-stat-label {\n  font-size: 10.5px;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.testimonials {\n  padding: 100px 0;\n  background: #0F2A1E;\n}\n.testimonials .sec-head p {\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonials .sec-head h2 {\n  color: #ffffff;\n}\n.testi-wrap {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.testi-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 40px;\n}\n.testi-quote-icon {\n  color: #81C784;\n  font-size: 30px !important;\n  margin-bottom: 14px;\n  display: block;\n}\n.testi-text {\n  font-size: 17px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.88);\n  margin: 0 0 26px;\n  font-weight: 300;\n}\n.testi-author {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.testi-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.testi-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.testi-role {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.testi-dots {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 26px;\n}\n.testi-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.testi-dot.active {\n  background: #81C784;\n  width: 22px;\n  border-radius: 5px;\n}\n.cta {\n  padding: 90px 0;\n  background: #ffffff;\n}\n.cta-box {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 56px;\n  border-radius: 28px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0E2417,\n      #123B27);\n  position: relative;\n  overflow: hidden;\n}\n.cta-box h2 {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.cta-box p {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 14px 0 30px;\n}\n.cta-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n.cta-btn .material-icons-round {\n  font-size: 18px !important;\n}\n.cta-btn-primary {\n  background: #81C784;\n  color: #0B2914;\n  animation: ctaGlow 2.4s ease-in-out infinite;\n}\n.cta-btn-primary:hover {\n  animation: none;\n}\n.cta-btn-ghost {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.landing-footer {\n  padding: 28px 0;\n  border-top: 1px solid #EEF1F5;\n}\n.footer-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.footer-sep {\n  color: #D1D5DB;\n}\n.footer-by {\n  color: #6B7280;\n  font-weight: 400;\n}\n.footer-links {\n  display: flex;\n  gap: 22px;\n}\n.footer-links a {\n  font-size: 13px;\n  color: #6B7280;\n}\n.footer-links a:hover {\n  color: #0F172A;\n}\n.footer-copy {\n  font-size: 12px;\n  color: #6B7280;\n}\n@media (max-width: 900px) {\n  .landing-nav {\n    padding: 0 20px;\n  }\n  .nav-links,\n  .nav-actions .btn-nav-famille,\n  .nav-actions .btn-nav-admin,\n  .nav-actions .btn-nav-logout {\n    display: none;\n  }\n  .nav-hamburger {\n    display: flex;\n  }\n  .hero {\n    padding: 76px 20px 0;\n  }\n  .hero-inner {\n    grid-template-columns: 1fr;\n    padding-bottom: 40px;\n    text-align: center;\n  }\n  .hero-title {\n    font-size: 32px;\n  }\n  .hero-entries {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-tree-wrap svg {\n    width: 280px;\n    height: auto;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sol-grid,\n  .fam-grid {\n    grid-template-columns: 1fr;\n  }\n  .feat-layout {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .feat-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .solution,\n  .features,\n  .familles,\n  .testimonials {\n    padding: 64px 0;\n  }\n  .cta-box {\n    padding: 36px 24px;\n  }\n  .footer-inner {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/landing/landing.component.ts", lineNumber: 29 });
})();

// src/app/app-routing-module.ts
var routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./chunk-ZKGMGZF4.js").then((m) => m.AuthModule)
  },
  {
    path: "app",
    canActivate: [authGuard, roleGuard(["admin", "gestionnaire"])],
    loadChildren: () => import("./chunk-D6R6JZPS.js").then((m) => m.ShellModule)
  },
  {
    path: "famille",
    loadChildren: () => import("./chunk-OJLAJIZ7.js").then((m) => m.FamilleModule)
  },
  {
    path: "superadmin",
    loadChildren: () => import("./chunk-FIBQ7E3M.js").then((m) => m.SuperAdminModule)
  },
  { path: "**", redirectTo: "" }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.ts
var App = class _App {
  router;
  renderer;
  constructor(router, renderer, _theme) {
    this.router = router;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects;
      const theme = url.startsWith("/app") ? "gestionnaire" : url.startsWith("/famille") ? "famille" : "default";
      this.renderer.setAttribute(document.body, "data-theme", theme);
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<router-outlet></router-outlet>\n" }]
  }], () => [{ type: Router }, { type: Renderer2 }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/app/core/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  if (req.url.includes("/api/superadmin")) {
    return next(req);
  }
  const token = localStorage.getItem("mb_token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/core/loading.interceptor.ts
var loadingInterceptor = (req, next) => {
  const loading = inject(LoadingService);
  loading.start();
  return next(req).pipe(finalize(() => loading.stop()));
};

// src/app/app-module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [App] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor]))
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [App, LandingComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
          enabled: !isDevMode(),
          registrationStrategy: "registerWhenStable:30000"
        })
      ],
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor]))
      ],
      bootstrap: [App]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch((err) => console.error(err));
/*! Bundled license information:

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v20.3.21
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.1.1

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _handlebarsBase = __webpack_require__(3);

      var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)


      var _handlebarsSafeString = __webpack_require__(20);

      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

      var _handlebarsException = __webpack_require__(5);

      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

      var _handlebarsUtils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_handlebarsUtils);

      var _handlebarsRuntime = __webpack_require__(21);

      var runtime = _interopRequireWildcard(_handlebarsRuntime);

      var _handlebarsNoConflict = __webpack_require__(33);

      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace


      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;

        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _handlebarsNoConflict2['default'](inst);

      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _helpers = __webpack_require__(9);

      var _decorators = __webpack_require__(17);

      var _logger = __webpack_require__(19);

      var _logger2 = _interopRequireDefault(_logger);

      var VERSION = '4.1.1';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 7;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};

        _helpers.registerDefaultHelpers(this);

        _decorators.registerDefaultDecorators(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }

            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }

            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }

            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];
      /***/
    },
    /* 4 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
          possible = /[&<>"'`=]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj
      /* , ...source */
      ) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;
      exports.toString = toString; // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt

      /* eslint-disable func-style */

      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      }; // fallback for older versions of Chrome and Safari

      /* istanbul ignore next */


      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }

      exports.isFunction = isFunction;
      /* eslint-enable func-style */

      /* istanbul ignore next */

      var isArray = Array.isArray || function (value) {
        return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
      };

      exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }

        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          } // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.


          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }

        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$defineProperty = __webpack_require__(6)['default'];

      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            column = undefined;

        if (loc) {
          line = loc.start.line;
          column = loc.start.column;
          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.

        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }
        /* istanbul ignore else */


        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        try {
          if (loc) {
            this.lineNumber = line; // Work around issue under safari where we can't directly set the column value

            /* istanbul ignore next */

            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
            } else {
              this.column = column;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }

      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(7),
        __esModule: true
      };
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);

      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;

      var _helpersBlockHelperMissing = __webpack_require__(10);

      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

      var _helpersEach = __webpack_require__(11);

      var _helpersEach2 = _interopRequireDefault(_helpersEach);

      var _helpersHelperMissing = __webpack_require__(12);

      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

      var _helpersIf = __webpack_require__(13);

      var _helpersIf2 = _interopRequireDefault(_helpersIf);

      var _helpersLog = __webpack_require__(14);

      var _helpersLog2 = _interopRequireDefault(_helpersLog);

      var _helpersLookup = __webpack_require__(15);

      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

      var _helpersWith = __webpack_require__(16);

      var _helpersWith2 = _interopRequireDefault(_helpersWith);

      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);

        _helpersEach2['default'](instance);

        _helpersHelperMissing2['default'](instance);

        _helpersIf2['default'](instance);

        _helpersLog2['default'](instance);

        _helpersLookup2['default'](instance);

        _helpersWith2['default'](instance);
      }
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);

              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }

            return fn(context, options);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('each', function (context, options) {
          if (!options) {
            throw new _exception2['default']('Must pass iterator to #each');
          }

          var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = '',
              data = undefined,
              contextPath = undefined;

          if (options.data && options.ids) {
            contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
          }

          if (_utils.isFunction(context)) {
            context = context.call(this);
          }

          if (options.data) {
            data = _utils.createFrame(options.data);
          }

          function execIteration(field, index, last) {
            if (data) {
              data.key = field;
              data.index = index;
              data.first = index === 0;
              data.last = !!last;

              if (contextPath) {
                data.contextPath = contextPath + field;
              }
            }

            ret = ret + fn(context[field], {
              data: data,
              blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
            });
          }

          if (context && typeof context === 'object') {
            if (_utils.isArray(context)) {
              for (var j = context.length; i < j; i++) {
                if (i in context) {
                  execIteration(i, i, i === context.length - 1);
                }
              }
            } else {
              var priorKey = undefined;

              for (var key in context) {
                if (context.hasOwnProperty(key)) {
                  // We're running the iterations one step out of sync so we can detect
                  // the last iteration without have to scan the object twice and create
                  // an itermediate keys array.
                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1);
                  }

                  priorKey = key;
                  i++;
                }
              }

              if (priorKey !== undefined) {
                execIteration(priorKey, i - 1, true);
              }
            }
          }

          if (i === 0) {
            ret = inverse(this);
          }

          return ret;
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function ()
        /* [args, ]options */
        {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          } // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.


          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 14 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('log', function ()
        /* message, options */
        {
          var args = [undefined],
              options = arguments[arguments.length - 1];

          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }

          var level = 1;

          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }

          args[0] = level;
          instance.log.apply(instance, args);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 15 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field) {
          return obj && obj[field];
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (_utils.isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!_utils.isEmpty(context)) {
            var data = options.data;

            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }

            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;

      var _decoratorsInline = __webpack_require__(18);

      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }
      /***/

    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;

          if (!props.partials) {
            props.partials = {};

            ret = function (context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }

          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());

            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }

          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);

          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];

            if (!console[method]) {
              // eslint-disable-line no-console
              method = 'log';
            }

            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }

            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };
      exports['default'] = logger;
      module.exports = exports['default'];
      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;

      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];
      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$seal = __webpack_require__(22)['default'];

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _utils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_utils);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _base = __webpack_require__(3);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _base.COMPILER_REVISION;

        if (compilerRevision !== currentRevision) {
          if (compilerRevision < currentRevision) {
            var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                compilerVersions = _base.REVISION_CHANGES[compilerRevision];
            throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
          } else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
          }
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }

        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
        }

        templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as psuedo-supported APIs.

        env.VM.checkRevision(templateSpec.compiler);

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);

            if (options.ids) {
              options.ids[0] = true;
            }
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var result = env.VM.invokePartial.call(this, partial, context, options);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, options);
          }

          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');

              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }

              result = lines.join('\n');
            }

            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        } // Just add water


        var container = {
          strict: function strict(obj, name) {
            if (!(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj);
            }

            return obj[name];
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;

            for (var i = 0; i < len; i++) {
              if (depths[i] && depths[i][name] != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);

            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }

            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }

            return value;
          },
          merge: function merge(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;

          ret._setup(options);

          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }

          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;

          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }

          function main(context
          /*, options*/
          ) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }

          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }

        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            container.helpers = container.merge(options.helpers, env.helpers);

            if (templateSpec.usePartial) {
              container.partials = container.merge(options.partials, env.partials);
            }

            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = container.merge(options.decorators, env.decorators);
            }
          } else {
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }

          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };

        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;

          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }

          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }

        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }

      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }

        return partial;
      }

      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;

        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }

        var partialBlock = undefined;

        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure

            var fn = options.fn;

            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.

              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };

            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }

        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }

        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }

        return data;
      }

      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }

        return prog;
      }
      /***/

    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(23),
        __esModule: true
      };
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(24);

      module.exports = __webpack_require__(29).Object.seal;
      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __webpack_require__(25);

      __webpack_require__(26)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });
      /***/

    },
    /* 25 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(27),
          core = __webpack_require__(29),
          fails = __webpack_require__(32);

      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
      /***/

    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(28),
          core = __webpack_require__(29),
          ctx = __webpack_require__(30),
          PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (param) {
              return this instanceof C ? new C(param) : C(param);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      module.exports = $export;
      /***/
    },
    /* 28 */

    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 29 */

    /***/
    function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(31);

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },
    /* 31 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },
    /* 32 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },
    /* 33 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /* global window */
        'use strict';

        exports.__esModule = true;

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */

          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }

            return Handlebars;
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    }])
  );
});

;
},{}],"../components/breadcrumb/breadcrumb.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    var stack1;
    return "                <li>\n" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.link : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(2, data, 0),
      "inverse": container.program(4, data, 0),
      "data": data
    })) != null ? stack1 : "") + "                </li>\n";
  },
  "2": function _(container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
    return "                    <a href=\"" + alias4((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "link",
      "hash": {},
      "data": data
    }) : helper)) + "\">" + alias4((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "label",
      "hash": {},
      "data": data
    }) : helper)) + "</a>\n";
  },
  "4": function _(container, depth0, helpers, partials, data) {
    var helper;
    return "                    <a href=\"./index.html\" aria-current=\"page\">" + container.escapeExpression((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "label",
      "hash": {},
      "data": data
    }) : helper)) + "</a>\n";
  },
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        alias1 = container.lambda,
        alias2 = container.escapeExpression;
    return "<div class=\"container\">\n    <section>\n        <nav aria-label=\"Breadcrumb\" class=\"breadcrumb\">\n            <ol>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.breadcrumbs : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "            </ol>\n        </nav>\n        <nav class=\"breadcrumb--back-link\">\n            &lt; <a href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.parent : depth0) != null ? stack1.link : stack1, depth0)) + "\">Back to " + alias2(alias1((stack1 = depth0 != null ? depth0.parent : depth0) != null ? stack1.label : stack1, depth0)) + "</a>\n        </nav>\n    </section>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/breadcrumb/breadcrumb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _breadcrumb = _interopRequireDefault(require("./breadcrumb.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(breadcrumbs) {
  var element = document.querySelector('[data-template="breadcrumb"]');
  var parent = breadcrumbs[breadcrumbs.length - 2];
  element.outerHTML = (0, _breadcrumb.default)({
    breadcrumbs: breadcrumbs,
    parent: parent
  });
}
},{"./breadcrumb.hbs":"../components/breadcrumb/breadcrumb.hbs"}],"../components/product-details/product-details.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    return "						<svg class=\"icon product-rating__star\">\n							<use xlink:href=\"../sprite.svg#" + container.escapeExpression(container.lambda(depth0, depth0)) + "\"></use>\n						</svg>\n";
  },
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
    return "<div class=\"product-details\" data-component=\"product-details\">\n	<div class=\"product-description\">\n		<h1 class=\"product-description__title\">" + alias4((helper = (helper = helpers.product_name || (depth0 != null ? depth0.product_name : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_name",
      "hash": {},
      "data": data
    }) : helper)) + "</h1>\n		<span class=\"product-description__price\" data-js=\"gallery-target-sibling\" aria-label=\"product price\">\n			<span class=\"product-description__price-now\">\n				<span class=\"price__label\" aria-hidden=\"true\">Price</span>\n				<span class=\"price__dollar\" aria-hidden=\"true\">$" + alias4((helper = (helper = helpers.price_sale || (depth0 != null ? depth0.price_sale : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_sale",
      "hash": {},
      "data": data
    }) : helper)) + "</span>\n				<span class=\"element-invisible\">current price $" + alias4((helper = (helper = helpers.price_sale || (depth0 != null ? depth0.price_sale : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_sale",
      "hash": {},
      "data": data
    }) : helper)) + "</span>\n			</span>\n			<span class=\"product-description__price-was\">\n				<span class=\"price__label\" aria-hidden=\"true\">was</span>\n				<span class=\"price__dollar\" aria-hidden=\"true\">$" + alias4((helper = (helper = helpers.price_actual || (depth0 != null ? depth0.price_actual : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_actual",
      "hash": {},
      "data": data
    }) : helper)) + "</span>\n				<span class=\"element-invisible\">was $" + alias4((helper = (helper = helpers.price_actual || (depth0 != null ? depth0.price_actual : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_actual",
      "hash": {},
      "data": data
    }) : helper)) + "</span>\n			</span>\n			<span class=\"product-description__price-save\">\n				<span class=\"price__label\" aria-hidden=\"true\">save</span>\n				<span class=\"price__dollar\" aria-hidden=\"true\">$" + alias4((helper = (helper = helpers.price_savings || (depth0 != null ? depth0.price_savings : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_savings",
      "hash": {},
      "data": data
    }) : helper)) + ".00</span>\n				<span class=\"element-invisible\">save $" + alias4((helper = (helper = helpers.price_savings || (depth0 != null ? depth0.price_savings : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_savings",
      "hash": {},
      "data": data
    }) : helper)) + "</span>\n			</span>\n		</span>\n		<hr class=\"divider divider--medium\" aria-hidden=\"true\" />\n		<p class=\"product-description__summary\">\n			" + alias4((helper = (helper = helpers.short_desc || (depth0 != null ? depth0.short_desc : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "short_desc",
      "hash": {},
      "data": data
    }) : helper)) + "\n		</p>\n		<a href=\"#product-description\" class=\"product-description__read-more\">Full product description</a>\n\n		<form class=\"product-form\" data-component=\"product-form\">\n			<hr class=\"divider\" aria-hidden=\"true\" />\n			<div class=\"product-rating\">\n				<div class=\"product-description__input-title\">Rating</div>\n				<div class=\"product-rating__display\" aria-hidden=\"true\">\n					<div class=\"product-rating__stars\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.ratings : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "						<span class=\"product-rating__value\">" + alias4((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rating",
      "hash": {},
      "data": data
    }) : helper)) + " out of 5</span>\n						<span class=\"product-rating__count\">(" + alias4((helper = (helper = helpers.rating_count || (depth0 != null ? depth0.rating_count : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rating_count",
      "hash": {},
      "data": data
    }) : helper)) + "<span class=\"element-invisible\"> reviews</span>)</span>\n					</div>\n				</div>\n				<a class=\"product-rating__view-button\" href=\"#product-reviews\">\n					<span class=\"element-invisible\">Rating: 3.5 out of 5 based on 156 reviews.</span>\n					Ratings and reviews\n				</a>\n			</div>\n			<hr class=\"divider\" aria-hidden=\"true\" />\n			<input type=\"hidden\" name=\"product_name\" value=\"" + alias4((helper = (helper = helpers.product_name || (depth0 != null ? depth0.product_name : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_name",
      "hash": {},
      "data": data
    }) : helper)) + "\">\n			<input type=\"hidden\" name=\"product_id\" value=\"" + alias4((helper = (helper = helpers.product_id || (depth0 != null ? depth0.product_id : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_id",
      "hash": {},
      "data": data
    }) : helper)) + "\">\n			<input type=\"hidden\" name=\"price_sale\" value=\"" + alias4((helper = (helper = helpers.price_sale || (depth0 != null ? depth0.price_sale : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_sale",
      "hash": {},
      "data": data
    }) : helper)) + "\" />\n			<input type=\"hidden\" name=\"thumbnail_url\" value=\"" + alias4((helper = (helper = helpers.thumbnail_url || (depth0 != null ? depth0.thumbnail_url : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "thumbnail_url",
      "hash": {},
      "data": data
    }) : helper)) + "\" />\n			<div class=\"product-description__color-and-size\">\n				<fieldset class=\"product-description__color\">\n					<legend id=\"color\" class=\"product-description__input-title\">Select Color</legend>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"blue\" name=\"color\" id=\"color-blue\" aria-describedby=\"color\">\n						<label for=\"color-blue\" class=\"radio__label\"> Blue</label>\n					</div>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"green\" name=\"color\" id=\"color-green\" aria-describedby=\"color\">\n						<label for=\"color-green\" class=\"radio__label\">Green</label>\n					</div>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"yellow\" name=\"color\" id=\"color-yellow\" aria-describedby=\"color\" checked>\n						<label for=\"color-yellow\" class=\"radio__label\">Yellow</label>\n					</div>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"red\" name=\"color\" id=\"color-red\" aria-describedby=\"color\" checked>\n						<label for=\"color-red\" class=\"radio__label\">Red</label>\n					</div>\n					<a class=\"skip-link\" href=\"#skip-to-gallery\" id=\"skip-to-details\">Jump to product gallery</a>\n				</fieldset>\n\n				<fieldset class=\"product-description__size\">\n					<legend id=\"size\" class=\"product-description__input-title\">Select Size</legend>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"small\" name=\"size\" id=\"size-small\" aria-describedby=\"size\" checked>\n						<label for=\"size-small\" class=\"radio__label\">Small</label>\n					</div>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"medium\" name=\"size\" id=\"size-medium\" aria-describedby=\"size\">\n						<label for=\"size-medium\" class=\"radio__label\">Medium</label>\n					</div>\n					<div class=\"product-description__radio-group\">\n						<input type=\"radio\" class=\"radio__input\" value=\"large\" name=\"size\" id=\"size-large\" aria-describedby=\"size\">\n						<label for=\"size-large\" class=\"radio__label\">Large</label>\n					</div>\n					<a href=\"#size-chart\" class=\"size-chart__link\">\n						<svg class=\"icon icon--ruler\">\n							<use xlink:href=\"../sprite.svg#ruler\"></use>\n						</svg>Size chart\n					</a>\n				</fieldset>\n\n			</div>\n			<hr class=\"divider\" aria-hidden=\"true\" />\n			<div class=\"product-actions\">\n				<div class=\"product-description__input-title\">Quantity</div>\n				<div class=\"product-actions__cart\">\n					<span class=\"quantity-comp\">\n						<button class=\"quantity-comp__decrease btn btn--black-inverted btn--icon\" type=\"button\">\n							<span class=\"sr-only\">Decrease quantity</span>\n							<svg class=\"icon icon--ruler\">\n								<use xlink:href=\"../sprite.svg#remove\"></use>\n							</svg>\n						</button>\n						<!-- <label for=\"quantity\">Qty:</label> -->\n						<input type=\"text\" aria-label=\"quantity\" value=\"1\" class=\"quantity-comp__text\" name=\"quantity\" id=\"quantity\" data-js=\"quantity\">\n						<span aria-live=\"assertive\" aria-atomic=\"true\" class=\"element-invisible quantity-comp__aria\">Quantity is now\n							<span> 1 </span></span>\n						<button class=\"quantity-comp__increase btn btn--black-inverted btn--icon\" type=\"button\">\n							<span class=\"sr-only\">Increase quantity</span>\n							<svg class=\"icon icon--ruler\">\n								<use xlink:href=\"../sprite.svg#add\"></use>\n							</svg>\n						</button>\n					</span>\n					<button class=\"product-actions__add-to-cart btn btn--primary\" type=\"submit\">Add to Cart</button>\n					<button class=\"product-actions__add-to-wishlist btn btn--favorites\" type=\"button\" data-modal-show=\"construction-modal\">\n						<svg class=\"icon icon--heart\">\n							<use xlink:href=\"../sprite.svg#heart\"></use>\n						</svg>\n						Save <span class=\"sr-only\">to wish list</span>\n					</button>\n				</div>\n			</div>\n		</form>\n	</div>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlebarsHelper = handlebarsHelper;
exports.handlebarsPartial = handlebarsPartial;
exports.activeElementMatches = activeElementMatches;
exports.chunk = chunk;
exports.getRandomSubset = getRandomSubset;
exports.getFocusableChildren = getFocusableChildren;
exports.$$ = $$;
exports.trapTabKey = trapTabKey;
exports.setFocusToFirstItem = setFocusToFirstItem;
exports.getElementIndex = getElementIndex;
exports.normalizeName = normalizeName;
exports.setPageTitle = setPageTitle;
exports.getStars = getStars;
exports.enableSkipLinks = enableSkipLinks;
exports.focusOnElement = focusOnElement;
exports.roundNumber = roundNumber;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function handlebarsHelper(helperName, helperFunc) {
  return _handlebars.default.registerHelper(helperName, helperFunc);
}

function handlebarsPartial(partialName, partialTemplate) {
  return _handlebars.default.registerPartial(partialName, partialTemplate);
}

function activeElementMatches(matchList) {
  // the active element (with focus) isn't available yet when the blur event fires
  // so we kick this function down the stack a little with requestAnimationFrame
  return new Promise(function (resolve) {
    window.requestAnimationFrame(function () {
      var activeFocusElement = document.activeElement;
      resolve(activeFocusElement.matches(matchList));
    });
  });
}
/**
 * Breaks a long array into an array of subset arrays of specified size
 * @param {array} items
 * @param {number} size - number of items to put in each 'chunk'
 */


function chunk(items, size) {
  if (size === 0) return [_toConsumableArray(items)];
  var chunked = [];
  var index = 0;

  while (index < items.length) {
    chunked.push(items.slice(index, index + size));
    index += size;
  }

  return chunked;
}
/**
 * Takes an array and returns a randomized subset array
 * @param {array} items
 * @param {number} length - Size of subset array to return
 * @returns {array}
 */


function getRandomSubset(items, length) {
  var tempItems = _toConsumableArray(items);

  var randomSubset = [];

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * tempItems.length);
    randomSubset.push(tempItems.splice(randomIndex, 1)[0]);
  }

  return randomSubset;
}

function getFocusableChildren(node) {
  var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled]):not([tabindex="-1"])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'];
  return $$(focusableElements.join(','), node).filter(function (child) {
    return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
  });
} // Helper function to get all nodes in context matching selector as an array


function $$(selector, context) {
  return Array.prototype.slice.call((context || document).querySelectorAll(selector) || []);
} // Helper function trapping the tab key inside a node


function trapTabKey(node, event) {
  var focusableChildren = getFocusableChildren(node);
  var focusedItemIndex = focusableChildren.indexOf(document.activeElement);
  var isTabPressed = event.key === 'Tab' || event.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (event.shiftKey && focusedItemIndex === 0) {
    focusableChildren[focusableChildren.length - 1].focus();
    event.preventDefault();
  } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
    focusableChildren[0].focus();
    event.preventDefault();
  }
} // Helper function to focus first focusable item in node


function setFocusToFirstItem(node) {
  var focusableChildren = getFocusableChildren(node);
  if (focusableChildren.length) focusableChildren[0].focus();
}
/**
 * Get index of an element inside parent
 * @param  {HTMLElement} element
 */


function getElementIndex(element) {
  var index = 0;

  while (element = element.previousElementSibling) {
    ++index;
  }

  return index;
}

function normalizeName(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
/**
 * Set the document title
 * @param  {Array} [terms] - list of terms to add after the site name
 */


function setPageTitle(terms) {
  var siteName = 'The Accessible eStore';
  document.title = terms ? "".concat(siteName, ", ").concat(terms.join(', ')) : siteName;
}

function generateStars(starType) {
  return Array.from(Array(5), function () {
    return starType;
  });
}

function getStars(rating) {
  if (rating === 5) return generateStars('full-star');
  var fractionMin = 0.25;
  var fractionMax = 0.75;
  var fullStarCount = Math.floor(rating);
  var stars = generateStars('empty-star');

  if (fullStarCount < 5) {
    for (var i = 0; i < fullStarCount; i++) {
      stars[i] = 'full-star';
    }

    var ratingFraction = rating - fullStarCount;

    if (ratingFraction > fractionMin && ratingFraction < fractionMax) {
      stars[fullStarCount] = 'half-star';
    } else if (ratingFraction > fractionMax) {
      stars[fullStarCount] = 'full-star';
    }
  }

  return stars;
}

function enableSkipLinks() {
  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('skip-link')) {
      var targetElement = document.querySelector(event.target.hash);
      event.preventDefault();
      focusOnElement(targetElement);
    }
  });
}

function focusOnElement(element) {
  if (element) {
    // Basic check only to see if element exists. Can be expanded later to determine if its a focusable element, etc.
    window.requestAnimationFrame(function () {
      element.focus();
    });
  }
}

function roundNumber(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/product-details/product-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _productDetails = _interopRequireDefault(require("./product-details.hbs"));

var _utils = require("../../js/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(productData) {
  productData.ratings = (0, _utils.getStars)(productData.rating);
  var element = document.querySelector('[data-template="product-details"]');
  element.outerHTML = (0, _productDetails.default)(productData);
}
},{"./product-details.hbs":"../components/product-details/product-details.hbs","../../js/utils":"../js/utils.js"}],"../components/product-details-accordion/product-details-accordion.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"accordion product-details__accordion\" data-component=\"accordion\">\n    <div class=\"long-description\" data-title=\"Product Description\" data-id=\"product-description\" data-js=\"accordion-panel\" data-component=\"product-description\">Product Description TKO</div>\n    <div data-title=\"Size Chart\" data-id=\"size-chart\" data-js=\"accordion-panel\" data-component=\"size-chart\">Size Chart TKO</div>\n    <div data-title=\"Ratings & Reviews\" data-id=\"product-reviews\" data-js=\"accordion-panel\" data-component=\"product-reviews\">Product Ratings TKO</div>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/accordion/accordion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.enableToggles = enableToggles;

var _utils = require("../../js/utils");

function toggleState(button) {
  var header = button.closest('.accordion__heading');
  var ariaExpanded = button.getAttribute('aria-expanded') === 'true' ? false : true;
  button.setAttribute('aria-expanded', ariaExpanded);
  header.classList.toggle('collapsed', !ariaExpanded);
}

function accordionToggleClick(event) {
  toggleState(event.currentTarget);
}

function enableToggle(button) {
  button.addEventListener('click', accordionToggleClick);
}

function openAccordionButton(hashElement) {
  return hashElement && hashElement.getAttribute('aria-expanded') == 'false';
}

function hashClicked(event) {
  var hashElement = document.querySelector(event.currentTarget.hash);
  (0, _utils.focusOnElement)(hashElement);

  if (openAccordionButton(hashElement)) {
    toggleState(hashElement);
  }
}

function enableToggles(parentElement) {
  var accordionButtons = parentElement.querySelectorAll('[data-js="accordion-toggle"]');
  accordionButtons.forEach(enableToggle);
}

function createToggle(accordionElement, panel, startCollapsed) {
  var header = document.createElement('h2');
  var toggle = document.createElement('button');
  if (startCollapsed) header.classList.add('collapsed');
  header.classList.add('accordion__heading');
  toggle.setAttribute('id', panel.dataset.id);
  toggle.classList.add('accordion__toggle');
  toggle.setAttribute('aria-expanded', !startCollapsed);
  panel.classList.add('accordion__panel');
  toggle.innerHTML = "\n    ".concat(panel.dataset.title, "\n    <svg class=\"icon icon--toggle-btn\">\n        <use xlink:href=\"../sprite.svg#chevron\"></use>\n    </svg>\n  ");
  enableToggle(toggle);
  header.appendChild(toggle);
  accordionElement.insertBefore(header, panel);
}

function init(accordionElement, startCollapsed) {
  // Create toggle buttons, set up classes
  var accordionPanels = accordionElement.querySelectorAll('[data-js="accordion-panel"]');
  accordionPanels.forEach(function initAccordionPanel(panel) {
    createToggle(accordionElement, panel, startCollapsed);
  }); // Listen to any "hash links" (starting with "#") and toggle accordions

  var hashLinks = document.querySelectorAll('[href^="#"]');
  hashLinks.forEach(function initHashLink(link) {
    if (link.hash) link.addEventListener('click', hashClicked);
  }); // Open accordion if page loads with hash

  if (window.location.hash) {
    var hashElement = document.querySelector(window.location.hash);

    if (openAccordionButton(hashElement)) {
      toggleState(hashElement);
    }
  }
}
},{"../../js/utils":"../js/utils.js"}],"../components/size-chart/size-chart.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    return "<div class=\"size-chart\">\n    <button class=\"toggle-size-units-button\" aria-live=\"polite\">\n        <span class=\"element-invisible\">Sizes are shown in\n            <span class=\"units-displayed\">inches</span>, click to show in\n            <span class=\"alternate-units-displayed\">centimeters</span>\n        </span>\n        <span class=\"units-toggle inches selected\" aria-hidden=\"true\">Inches</span>\n        <span class=\"units-toggle centimeters\" aria-hidden=\"true\">Centimeters</span>\n    </button>\n    <!-- Table START -->\n    <table class=\"size-chart-table show-inches\">\n        <caption class=\"element-invisible\">Size Chart</caption>\n        <tbody>\n            <tr class=\"index-row\">\n                <th scope=\"col\">\n                    <span aria-hidden=\"true\">Size</span>\n                    <span class=\"element-invisible\">Body Areas to be Sized</span>\n                </th>\n                <th scope=\"col\">\n                    <span aria-hidden=\"true\">S</span>\n                    <span class=\"element-invisible\">Small Size</span>\n                </th>\n                <th scope=\"col\">\n                    <span aria-hidden=\"true\">M</span>\n                    <span class=\"element-invisible\">Medium Size</span>\n                </th>\n                <th scope=\"col\">\n                    <span aria-hidden=\"true\">L</span>\n                    <span class=\"element-invisible\">Large Size</span>\n                </th>\n                <th scope=\"col\">\n                    <span aria-hidden=\"true\">XL</span>\n                    <span class=\"element-invisible\">Extra Large Size</span>\n                </th>\n            </tr>\n            <tr class=\"inches highlight\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Bust</span>\n                    <span class=\"element-invisible\">Bust size in inches</span>\n                </th>\n                <td aria-label=\"30 to 32 inches\">30-32</td>\n                <td aria-label=\"32 to 34 inches\">32-34</td>\n                <td aria-label=\"34 to 36 inches\">34-36</td>\n                <td aria-label=\"36 to 38 inches\">36-38</td>\n            </tr>\n            <tr class=\"centimeters highlight\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Bust</span>\n                    <span class=\"element-invisible\">Bust size in centimeters</span>\n                </th>\n                <td aria-label=\"76 to 81 centimeters\">76-81</td>\n                <td aria-label=\"81 to 86 centimeters\">81-86</td>\n                <td aria-label=\"86 to 91 centimeters\">86-91</td>\n                <td aria-label=\"91 to 96 centimeters\">91-96</td>\n            </tr>\n            <tr class=\"inches\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Waist</span>\n                    <span class=\"element-invisible\">Waist size in inches</span>\n                </th>\n                <td aria-label=\"23 to 24 inches\">23-24</td>\n                <td aria-label=\"24 to 26 inches\">24-26</td>\n                <td aria-label=\"26 to 28 inches\">26-28</td>\n                <td aria-label=\"28 to 30 inches\">28-30</td>\n            </tr>\n            <tr class=\"centimeters\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Waist</span>\n                    <span class=\"element-invisible\">Waist size in centimeters</span>\n                </th>\n                <td aria-label=\"56 to 60 centimeters\">56-60</td>\n                <td aria-label=\"60 to 66 centimeters\">60-66</td>\n                <td aria-label=\"66 to 71 centimeters\">66-71</td>\n                <td aria-label=\"71 to 76 centimeters\">71-76</td>\n            </tr>\n            <tr class=\"inches highlight\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Hip</span>\n                    <span class=\"element-invisible\">Hip size in inches</span>\n                </th>\n                <td aria-label=\"37 to 38 inches\">37-38</td>\n                <td aria-label=\"39 to 40 inches\">39-40</td>\n                <td aria-label=\"40 to 43 inches\">40-43</td>\n                <td aria-label=\"43 to 47 inches\">43-47</td>\n            </tr>\n            <tr class=\"centimeters highlight\">\n                <th scope=\"row\">\n                    <span aria-hidden=\"true\">Hip</span>\n                    <span class=\"element-invisible\">Hip size in centimeters</span>\n                </th>\n                <td aria-label=\"93 to 96 centimeters\">93-96</td>\n                <td aria-label=\"96 to 101 centimeters\">96-101</td>\n                <td aria-label=\"101 to 109 centimeters\">101-109</td>\n                <td aria-label=\"109 to 119 centimeters\">109-119</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/size-chart/size-chart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _sizeChart = _interopRequireDefault(require("./size-chart.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table;
var unitsDisplayed;
var alternateUnits;
var toggleChildren;

function onToggle() {
  var selectedUnits = unitsDisplayed.textContent;
  unitsDisplayed.textContent = selectedUnits === 'inches' ? 'centimeters' : 'inches';
  alternateUnits.textContent = selectedUnits === 'inches' ? 'inches' : 'centimeters';
  toggleChildren.forEach(function (toggle) {
    toggle.classList.toggle('selected'); // toggle.classList.toggle('btn');
    // toggle.classList.toggle('btn-primary');
  });
  table.classList.toggle('show-inches');
  table.classList.toggle('show-centimeters');
}

function init() {
  var sizeChartElement = document.querySelector('[data-component="size-chart"]');
  sizeChartElement.innerHTML = (0, _sizeChart.default)();
  table = sizeChartElement.querySelector('.size-chart-table');
  unitsDisplayed = sizeChartElement.querySelector('.units-displayed');
  alternateUnits = sizeChartElement.querySelector('.alternate-units-displayed');
  toggleChildren = sizeChartElement.querySelectorAll('.units-toggle');
  sizeChartElement.querySelector('.toggle-size-units-button').addEventListener('click', onToggle);
}
},{"./size-chart.hbs":"../components/size-chart/size-chart.hbs"}],"../components/product-reviews/product-reviews.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    return "        <svg class=\"icon product-rating__star\">\n            <use xlink:href=\"../sprite.svg#" + container.escapeExpression(container.lambda(depth0, depth0)) + "\"></use>\n        </svg>\n";
  },
  "3": function _(container, depth0, helpers, partials, data) {
    var stack1;
    return "        <li class=\"user-ratings__list-item\">\n            <div class=\"element-invisible\">Customer review " + container.escapeExpression(container.lambda(depth0 != null ? depth0.index : depth0, depth0)) + " of 5</div>\n            <div class=\"user-ratings__stars\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.stars : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(4, data, 0),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "            </div>\n            <div class=\"element-invisible\">3 out of 5 stars</div>\n            <p class=\"product-rating__title\"><strong>Do something every day that will make you happy</strong></p>\n\n            <p class=\"review-details\">\n                <a href=\"#\">Reviewer's Profile</a> on May 2, 2018\n            </p>\n            <p class=\"review-text\">\n                Those great big fluffy clouds. There he comes. This is a happy place, little squirrels live here and play. Let your imagination just wonder around when you're doing these things. There isn't a rule. You just practice and find out which way works best for you.\n            </p>\n        </li>\n";
  },
  "4": function _(container, depth0, helpers, partials, data) {
    return "                <svg class=\"icon product-rating__star\">\n                    <use xlink:href=\"../sprite.svg#" + container.escapeExpression(container.lambda(depth0, depth0)) + "\"></use>\n                </svg>\n";
  },
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
    return "<!-- Reviews START -->\n<div id=\"reviews\" class=\"product-reviews\">\n    <div class=\"rating-summary\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.ratings : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "\n        <span class=\"rating-total\">" + alias4((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rating",
      "hash": {},
      "data": data
    }) : helper)) + " out of 5</span>\n        <div class=\"element-invisible\">based on</div>\n        <div class=\"review-total\">" + alias4((helper = (helper = helpers.rating_count || (depth0 != null ? depth0.rating_count : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rating_count",
      "hash": {},
      "data": data
    }) : helper)) + " Reviews</div>\n    </div>\n\n    <ul class=\"user-ratings\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.reviews : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(3, data, 0),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "    </ul>\n</div>\n\n<!-- Reviews END -->\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/product-reviews/product-reviews.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _productReviews = _interopRequireDefault(require("./product-reviews.hbs"));

var _utils = require("../../js/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReviews() {
  var reviews = [];

  for (var i = 0; i < 4; i++) {
    reviews.push({
      index: i + 1,
      stars: (0, _utils.getStars)(3)
    });
  }

  return reviews;
}

function init(productData) {
  var element = document.querySelector('[data-component="product-reviews"]');
  productData.ratings = (0, _utils.getStars)(productData.rating);
  productData.reviews = getReviews();
  element.innerHTML = (0, _productReviews.default)(productData);
}
},{"./product-reviews.hbs":"../components/product-reviews/product-reviews.hbs","../../js/utils":"../js/utils.js"}],"../components/product-details-accordion/product-details-accordion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _productDetailsAccordion = _interopRequireDefault(require("./product-details-accordion.hbs"));

var accordion = _interopRequireWildcard(require("../accordion/accordion"));

var sizeChart = _interopRequireWildcard(require("../size-chart/size-chart"));

var productReviews = _interopRequireWildcard(require("../product-reviews/product-reviews"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(productData) {
  var element = document.querySelector('[data-template="product-details-accordion"]');
  element.outerHTML = (0, _productDetailsAccordion.default)();
  var accordionEl = document.querySelector('[data-component="accordion"]');
  accordion.init(accordionEl, true);
  var longDescription = accordionEl.querySelector('[data-component="product-description"]');
  longDescription.innerHTML = "<p>".concat(productData.long_desc, "</p>");
  sizeChart.init();
  productReviews.init(productData);
}
},{"./product-details-accordion.hbs":"../components/product-details-accordion/product-details-accordion.hbs","../accordion/accordion":"../components/accordion/accordion.js","../size-chart/size-chart":"../components/size-chart/size-chart.js","../product-reviews/product-reviews":"../components/product-reviews/product-reviews.js"}],"../components/gallery/gallery.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
    return "<div class=\"gallery\" data-component=\"gallery\">\n  <a class=\"skip-link\" id=\"skip-to-gallery\" href=\"#skip-to-details\">Return to product details</a>\n  <div class=\"gallery__main-image__container\">\n    <div class=\"gallery__main-image__inner-container\">\n      <img id=\"gallery__main-image\" src=\"../" + alias4((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "image_url",
      "hash": {},
      "data": data
    }) : helper)) + "\" alt=\"\" />\n    </div>\n    <div class=\"gallery__main-image__zoom\">\n      <button data-modal-show=\"gallery-modal\" class=\"btn btn--secondary gallery__btn--zoom\">\n        <span class=\"sr-only\">Enlarge the Image</span>\n        <svg class=\"icon\">\n          <use xlink:href=\"../sprite.svg#zoom-out\"></use>\n        </svg>\n      </button>\n      <div class=\"gallery__main-image__zoom-group\">\n        <span class=\"gallery__zoom-icon\">\n          <svg class=\"icon\">\n            <use xlink:href=\"../sprite.svg#search\"></use>\n          </svg>\n        </span>\n        <button id=\"gallery__minimize\" class=\"btn btn--black btn--icon gallery__minimize\" disabled aria-label=\"Decrease size of the image to 100%\" data-modal-show=\"construction-modal\">\n          <span class=\"sr-only\">Decrease size</span>\n          <svg class=\"icon\">\n            <use xlink:href=\"../sprite.svg#remove\"></use>\n          </svg>\n        </button>\n        <button data-modal-show=\"construction-modal\" id=\"gallery__maximize\" class=\"gallery__maximize btn btn--black btn--icon\" aria-label=\"Increase size of the image to 150%\">\n          <span class=\"sr-only\">Increase size</span>\n          <svg class=\"icon\">\n            <use xlink:href=\"../sprite.svg#add\"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"gallery__thumbnail-container\">\n    <!--\n    <button id=\"gallery__thumbnail-container__scroll-left\" class=\"btn btn--black btn--icon thumbnail__scroll-left\" aria-hidden=\"false\" tabindex=\"-1\" disabled data-scroll-dir=\"right\">\n      <span class=\"icon ion-ios-arrow-back\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </button>\n    -->\n    <ul class=\"gallery__thumbnail-list\">\n      <li class=\"gallery__thumbnail-list-item\">\n        <button class=\"selected\">\n          <img src=\"../" + alias4((helper = (helper = helpers.thumbnail_url || (depth0 != null ? depth0.thumbnail_url : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "thumbnail_url",
      "hash": {},
      "data": data
    }) : helper)) + "\" data-main-image-url=\"../" + alias4((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "image_url",
      "hash": {},
      "data": data
    }) : helper)) + "\" alt=\"Display product view one\">\n        </button>\n      </li>\n      <li class=\"gallery__thumbnail-list-item\">\n        <button>\n          <img src=\"../black-and-white-stripe-tee.jpg\" data-main-image-url=\"../black-and-white-stripe-tee.jpg\" alt=\"Display product view two\">\n        </button>\n      </li>\n      <li class=\"gallery__thumbnail-list-item\">\n        <button>\n          <img src=\"../ladies-white-t-shirt.jpg\" data-main-image-url=\"../ladies-white-t-shirt.jpg\" alt=\"Display product view three\">\n        </button>\n      </li>\n      <li class=\"gallery__thumbnail-list-item\">\n        <button>\n          <img src=\"../red-tee-with-pocket.jpg\" data-main-image-url=\"../red-tee-with-pocket.jpg \" alt=\"Display product view four\">\n        </button>\n      </li>\n      <li class=\"gallery__thumbnail-list-item\">\n        <button>\n          <img src=\"../ladies-white-t-shirt.jpg\" data-main-image-url=\"../ladies-white-t-shirt.jpg\" alt=\"Display product view five\">\n        </button>\n      </li>\n    </ul>\n    <!--\n    <button id=\"gallery__thumbnail-container__scroll-right\" class=\"btn btn--black btn--icon thumbnail__scroll-right\" aria-hidden=\"false\" tabindex=\"-1\" data-scroll-dir=\"left\">\n      <span class=\"icon ion-ios-arrow-forward\"></span>\n      <span class=\"sr-only\">Next</span>\n    </button>\n    -->\n  </div>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/gallery/gallery-modal.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateFunction = _handlebars.default.template({
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var helper;
    return "<div id=\"gallery-modal\" class=\"modal gallery-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modalTitle\" aria-describedby=\"modalDesc\">\n  <div class=\"modal__flex\">\n    <div class=\"modal__content\">\n      <button class=\"modal__close\" data-modal-hide=\"gallery-modal\">\n        <span class=\"sr-only\">close</span>\n        <svg class=\"icon icon--close\">\n          <use xlink:href=\"" + container.escapeExpression((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#close\"></use>\n        </svg>\n      </button>\n      <img class=\"gallery-modal__image\" src=\"#\" alt=\"\">\n    </div>\n  </div>\n  <button tabindex=\"-1\" class=\"modal__backdrop-close\" data-modal-hide=\"gallery-modal\" aria-hidden=\"true\">close</button>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/modal/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _utils = require("../../js/utils");

var Modal = function Modal(element, mainSelector) {
  this.element = element;
  this.focusedElementBeforeModal;
  this.main = document.querySelector(mainSelector) || document.body;
  this.shown = false;
  this.initEvents();
};

Modal.prototype = {
  onKeyDown: function onKeyDown(event) {
    if (this.shown && event.which === 27) {
      event.preventDefault();
      this.hide();
    }

    if (this.shown && event.which === 9) {
      (0, _utils.trapTabKey)(this.element, event);
    }
  },
  onFocus: function onFocus() {
    if (this.shown && !this.element.contains(event.target)) {
      (0, _utils.setFocusToFirstItem)(this.element);
    }
  },
  show: function show(event) {
    event.preventDefault();
    this.shown = true;
    this.element.setAttribute('aria-hidden', 'false');
    this.element.setAttribute('aria-expanded', 'true');
    this.main.setAttribute('aria-hidden', 'true');
    document.body.classList.add('modal-open');
    this.focusedElementBeforeModal = document.activeElement;
    (0, _utils.setFocusToFirstItem)(this.element);
  },
  hide: function hide() {
    this.shown = false;
    this.element.setAttribute('aria-hidden', 'true');
    this.element.setAttribute('aria-expanded', 'false');
    this.main.setAttribute('aria-hidden', 'false');
    document.body.classList.remove('modal-open');

    if (document.querySelector(".mini-cart__dropdown").contains(this.focusedElementBeforeModal)) {
      // if we don't check this, focus is lost because the mini-cart closes when this modal closes
      document.querySelector(".secondary-nav__mini-cart button").focus();
    } else {
      this.focusedElementBeforeModal.focus();
    }
  },
  initEvents: function initEvents() {
    var _this = this;

    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.body.addEventListener('focus', this.onFocus.bind(this), true);
    (0, _utils.$$)('[data-modal-show="' + this.element.id + '"]').forEach(function (opener) {
      return opener.addEventListener('click', _this.show.bind(_this));
    });
    (0, _utils.$$)('[data-modal-hide]', this.element).concat((0, _utils.$$)('[data-modal-hide="' + this.element.id + '"]')).forEach(function (closer) {
      return closer.addEventListener('click', _this.hide.bind(_this));
    });
  }
};

function init(modalElementID) {
  var modalElement = document.querySelector('#' + modalElementID);
  new Modal(modalElement, '#content');
}
},{"../../js/utils":"../js/utils.js"}],"../components/gallery/gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _gallery = _interopRequireDefault(require("./gallery.hbs"));

var _galleryModal = _interopRequireDefault(require("./gallery-modal.hbs"));

var Modal = _interopRequireWildcard(require("../modal/modal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thumbnails;
var globalVariables = {
  rootPath: window.location.pathname === '/index.html' || window.location.pathname === '/accessible-ecommerce-demo/' || window.location.pathname === '/accessible-ecommerce-demo/index.html' ? '.' : '..'
};

function onClickViewImage(event) {
  var currElement = event.target;
  if (currElement.nodeName == 'IMG') currElement = currElement.parentElement;
  thumbnails.forEach(function (thumbnail) {
    thumbnail.className = thumbnail.className.replace(/\bselected\b/g, "");
  });
  currElement.className += "selected";
  var mainImage = currElement.children[0].getAttribute("data-main-image-url"); // set main image

  document.querySelector("#gallery__main-image").setAttribute("src", mainImage); // set modal image

  document.querySelector("#gallery-modal img").setAttribute("src", mainImage);
}

function init(galleryData) {
  var targetElement = document.querySelector('[data-template="gallery"]');
  targetElement.outerHTML = (0, _gallery.default)(galleryData);
  thumbnails = document.querySelectorAll('.gallery__thumbnail-list-item button');
  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', onClickViewImage);
  });
  var galleryModalDOM = document.querySelector('[data-template="gallery-modal"]');
  if (galleryModalDOM) galleryModalDOM.outerHTML = (0, _galleryModal.default)(globalVariables);
  Modal.init("gallery-modal"); // set initial modal image based on initial main image

  document.querySelector("#gallery-modal img").setAttribute("src", document.querySelector("#gallery__main-image").getAttribute("src"));
}
},{"./gallery.hbs":"../components/gallery/gallery.hbs","./gallery-modal.hbs":"../components/gallery/gallery-modal.hbs","../modal/modal":"../components/modal/modal.js"}],"../components/cart/cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.getCartFromStorage = getCartFromStorage;
exports.removeFromCart = removeFromCart;
exports.getCartSubtotal = getCartSubtotal;

var _utils = require("../../js/utils");

function pushCartUpdatedEvent(detail) {
  var event = new CustomEvent('update:cart', {
    detail: detail
  });
  document.dispatchEvent(event);
}

function getEmptyCart() {
  return {
    cartItemCount: 0,
    cartItemsLabel: 'items',
    cartItems: [],
    cartIndex: 0,
    cartSubtotal: 0
  };
}

function getCartFromStorage() {
  var cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : getEmptyCart();
}

function putCartInStorage(newCart) {
  localStorage.setItem('cart', JSON.stringify(newCart));
}

function getCartItemCount(cartItems) {
  return cartItems.reduce(function (accumulator, cartItem) {
    return accumulator + parseInt(cartItem.quantity);
  }, 0);
}

function getCartSubtotal(cartItems) {
  return cartItems.reduce(function (accumulator, cartItem) {
    return accumulator + Number(cartItem.total_price);
  }, 0);
}

function addToCart(newCartItem) {
  var cart = getCartFromStorage();
  cart.cartIndex++;
  newCartItem.cart_id = cart.cartIndex;
  newCartItem.total_price = (0, _utils.roundNumber)(parseInt(newCartItem.quantity) * Number(newCartItem.price_sale));
  cart.cartItems.push(newCartItem);
  updateCart(cart);
}

function removeFromCart(itemId) {
  var cart = getCartFromStorage();
  var updatedCartItems = cart.cartItems.filter(function (cartItem) {
    return cartItem.cart_id !== parseInt(itemId);
  });
  cart.cartItems = updatedCartItems;
  updateCart(cart);
}

function updateCart(cart) {
  cart.cartItemCount = getCartItemCount(cart.cartItems);
  cart.cartSubtotal = getCartSubtotal(cart.cartItems).toFixed(2);
  cart.cartItemsLabel = cart.cartItemCount === 1 ? 'item' : 'items';
  putCartInStorage(cart);
  pushCartUpdatedEvent(cart);
}
},{"../../js/utils":"../js/utils.js"}],"../components/product-form/product-form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _cart = require("../cart/cart");

var quantity = 1;
var formEl;
var ariaQuantityElement;
var quantityInput;

function increment() {
  quantity++;
  quantityInput.value = quantity;
  ariaQuantityElement.innerHTML = quantity;
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
    ariaQuantityElement.innerHTML = quantity;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  var formData = {
    product_name: formEl.querySelector('[name=product_name]').value,
    product_id: formEl.querySelector('[name=product_id]').value,
    quantity: formEl.querySelector('[name=quantity]').value,
    color: formEl.querySelector('[name=color]:checked').value,
    size: formEl.querySelector('[name=size]:checked').value,
    price_sale: formEl.querySelector('[name=price_sale]').value,
    thumbnail_url: formEl.querySelector('[name=thumbnail_url]').value
  };
  (0, _cart.addToCart)(formData);
}

function init(formElement) {
  formEl = formElement;
  quantityInput = formEl.querySelector('[data-js="quantity"]');
  ariaQuantityElement = formEl.querySelector('.quantity-comp__aria span');
  var incrementBtn = formEl.querySelector('.quantity-comp__increase');
  var decrementBtn = formEl.querySelector('.quantity-comp__decrease');
  formEl.addEventListener('submit', onFormSubmit);
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);
}
},{"../cart/cart":"../components/cart/cart.js"}],"../../node_modules/argsarray/index.js":[function(require,module,exports) {
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}
},{}],"../../node_modules/immediate/lib/browser.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

},{}],"../../node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = $getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];

  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}
},{}],"../../node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../../node_modules/spark-md5/spark-md5.js":[function(require,module,exports) {
var define;
(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));

},{}],"../../node_modules/pouchdb/node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"../../node_modules/pouchdb/node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],"../../node_modules/pouchdb/node_modules/uuid/v1.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/rng":"../../node_modules/pouchdb/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../../node_modules/pouchdb/node_modules/uuid/lib/bytesToUuid.js"}],"../../node_modules/pouchdb/node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"../../node_modules/pouchdb/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../../node_modules/pouchdb/node_modules/uuid/lib/bytesToUuid.js"}],"../../node_modules/pouchdb/node_modules/uuid/index.js":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":"../../node_modules/pouchdb/node_modules/uuid/v1.js","./v4":"../../node_modules/pouchdb/node_modules/uuid/v4.js"}],"../../node_modules/vuvuzela/index.js":[function(require,module,exports) {
'use strict';

/**
 * Stringify/parse functions that don't operate
 * recursively, so they avoid call stack exceeded
 * errors.
 */
exports.stringify = function stringify(input) {
  var queue = [];
  queue.push({obj: input});

  var res = '';
  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
  while ((next = queue.pop())) {
    obj = next.obj;
    prefix = next.prefix || '';
    val = next.val || '';
    res += prefix;
    if (val) {
      res += val;
    } else if (typeof obj !== 'object') {
      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
    } else if (obj === null) {
      res += 'null';
    } else if (Array.isArray(obj)) {
      queue.push({val: ']'});
      for (i = obj.length - 1; i >= 0; i--) {
        arrayPrefix = i === 0 ? '' : ',';
        queue.push({obj: obj[i], prefix: arrayPrefix});
      }
      queue.push({val: '['});
    } else { // object
      keys = [];
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      queue.push({val: '}'});
      for (i = keys.length - 1; i >= 0; i--) {
        key = keys[i];
        value = obj[key];
        objPrefix = (i > 0 ? ',' : '');
        objPrefix += JSON.stringify(key) + ':';
        queue.push({obj: value, prefix: objPrefix});
      }
      queue.push({val: '{'});
    }
  }
  return res;
};

// Convenience function for the parse function.
// This pop function is basically copied from
// pouchCollate.parseIndexableString
function pop(obj, stack, metaStack) {
  var lastMetaElement = metaStack[metaStack.length - 1];
  if (obj === lastMetaElement.element) {
    // popping a meta-element, e.g. an object whose value is another object
    metaStack.pop();
    lastMetaElement = metaStack[metaStack.length - 1];
  }
  var element = lastMetaElement.element;
  var lastElementIndex = lastMetaElement.index;
  if (Array.isArray(element)) {
    element.push(obj);
  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
    var key = stack.pop();
    element[key] = obj;
  } else {
    stack.push(obj); // obj with key only
  }
}

exports.parse = function (str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;
  var collationIndex,parsedNum,numChar;
  var parsedString,lastCh,numConsecutiveSlashes,ch;
  var arrayElement, objElement;
  while (true) {
    collationIndex = str[i++];
    if (collationIndex === '}' ||
        collationIndex === ']' ||
        typeof collationIndex === 'undefined') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack.pop(), stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case ' ':
      case '\t':
      case '\n':
      case ':':
      case ',':
        break;
      case 'n':
        i += 3; // 'ull'
        pop(null, stack, metaStack);
        break;
      case 't':
        i += 3; // 'rue'
        pop(true, stack, metaStack);
        break;
      case 'f':
        i += 4; // 'alse'
        pop(false, stack, metaStack);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
        parsedNum = '';
        i--;
        while (true) {
          numChar = str[i++];
          if (/[\d\.\-e\+]/.test(numChar)) {
            parsedNum += numChar;
          } else {
            i--;
            break;
          }
        }
        pop(parseFloat(parsedNum), stack, metaStack);
        break;
      case '"':
        parsedString = '';
        lastCh = void 0;
        numConsecutiveSlashes = 0;
        while (true) {
          ch = str[i++];
          if (ch !== '"' || (lastCh === '\\' &&
              numConsecutiveSlashes % 2 === 1)) {
            parsedString += ch;
            lastCh = ch;
            if (lastCh === '\\') {
              numConsecutiveSlashes++;
            } else {
              numConsecutiveSlashes = 0;
            }
          } else {
            break;
          }
        }
        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
        break;
      case '[':
        arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '{':
        objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      default:
        throw new Error(
          'unexpectedly reached end of input: ' + collationIndex);
    }
  }
};

},{}],"../../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../node_modules/pouchdb/lib/index-browser.es.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _argsarray = _interopRequireDefault(require("argsarray"));

var _immediate = _interopRequireDefault(require("immediate"));

var _events = require("events");

var _inherits = _interopRequireDefault(require("inherits"));

var _sparkMd = _interopRequireDefault(require("spark-md5"));

var _uuid = _interopRequireDefault(require("uuid"));

var _vuvuzela = _interopRequireDefault(require("vuvuzela"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinaryObject(object) {
  return typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer || typeof Blob !== 'undefined' && object instanceof Blob;
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  } // IE10-11 slice() polyfill


  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }

  var size = object.size;
  var type = object.type; // Blob

  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  } // PhantomJS slice() replacement


  return object.webkitSlice(0, size, type);
} // most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js


var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */

  if (proto === null) {
    // not sure when this happens, but I guess it can
    return true;
  }

  var Ctor = proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];

    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }

    return newObject;
  } // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates


  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};

  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);

      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }

  return newObject;
}

function once(fun) {
  var called = false;
  return (0, _argsarray.default)(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return (0, _argsarray.default)(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this; // if the last argument is a function, assume its a callback

    var usedCB = typeof args[args.length - 1] === 'function' ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;

      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        }); // create a callback for this invocation
        // apply the function in the orig context

        args.push(callback);
        resp = func.apply(self, args);

        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    }); // if there is a callback, call it back

    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }

    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];

    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }

    self.constructor.emit('debug', logArgs); // override the callback itself to log the response

    var origCallback = args[args.length - 1];

    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(err ? ['error', err] : ['success', res]);
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise((0, _argsarray.default)(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }

    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }

    var self = this;
    logApiCall(self, name, args);

    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }

    return callback.apply(this, args);
  }));
}

function mangle(key) {
  return '$' + key;
}

function unmangle(key) {
  return key.substring(1);
}

function Map$1() {
  this._store = {};
}

Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};

Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};

Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};

Map$1.prototype.delete = function (key) {
  var mangled = mangle(key);
  var res = mangled in this._store;
  delete this._store[mangled];
  return res;
};

Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};

Object.defineProperty(Map$1.prototype, 'size', {
  get: function () {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1(); // init with an array

  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}

Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};

Set$1.prototype.has = function (key) {
  return this._store.has(key);
};

Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};

Object.defineProperty(Set$1.prototype, 'size', {
  get: function () {
    return this._store.size;
  }
});
/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.

function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }

  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
} // based on https://github.com/montagejs/collections


var ExportedSet;
var ExportedMap;
{
  if (supportsMapAndSet()) {
    // prefer built-in Map/Set
    ExportedSet = Set;
    ExportedMap = Map;
  } else {
    // fall back to our polyfill
    ExportedSet = Set$1;
    ExportedMap = Map$1;
  }
} // like underscore/lodash _.pick()

function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];

    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }

  return res;
} // Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.


var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
} // shim for P/CouchDB adapters that don't directly implement _bulk_get


function bulkGet(db, opts, callback) {
  var requests = opts.docs; // consolidate into one request per doc if possible

  var requestsById = new ExportedMap();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });
  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {
      results: results
    });
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {
      id: id,
      docs: docs
    };
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });
  var i = 0;

  function nextBatch() {
    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId); // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.

      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      }); // remove falsey / undefined revisions

      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs; // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request

        formatResult = formatResultForOpenRevsGet;
      } // globally-supplied options


      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */

        if (err) {
          result = [{
            error: err
          }];
        } else {
          result = formatResult(res);
        }

        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();
}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
} // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We


(0, _inherits.default)(Changes, _events.EventEmitter);
/* istanbul ignore next */

function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  _events.EventEmitter.call(this);

  this._listeners = {};
  attachBrowserEvents(this);
}

Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }

  var self = this;
  var inprogress = false;

  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }

    if (inprogress) {
      inprogress = 'waiting';
      return;
    }

    inprogress = true;
    var changesOpts = pick(opts, ['style', 'include_docs', 'attachments', 'conflicts', 'filter', 'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs']);
    /* istanbul ignore next */

    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        (0, _immediate.default)(eventFunction);
      }

      inprogress = false;
    }).on('error', onError);
  }

  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }

  _events.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);

  delete this._listeners[id];
};
/* istanbul ignore next */


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes

  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);

  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  } // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout


  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two

    max = maxTimeout;
  }

  var ratio = Math.random();
  var range = max - min;
  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;

  if (!min) {
    max = 2000;
  }

  return randomNumber(min, max);
} // designed to give info to browser users, who are disturbed
// when they see http errors in the console


function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function (target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }
}
var $inject_Object_assign = assign;
(0, _inherits.default)(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.

    /* jshint ignore:start */
    for (var p in error) {
      if (typeof error[p] !== 'function') {
        this[p] = error[p];
      }
    }
    /* jshint ignore:end */


    if (reason !== undefined) {
      this.reason = reason;
    }
  }

  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {
  if (typeof err !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return createError(BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;
  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (typeof filterReturn === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }

    return true;
  };
}

function flatten(arrs) {
  var res = [];

  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }

  return res;
} // shim for Function.prototype.name,
// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case


function invalidIdError(id) {
  var err;

  if (!id) {
    err = createError(MISSING_ID);
  } else if (typeof id !== 'string') {
    err = createError(INVALID_ID);
  } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
    err = createError(RESERVED_ID);
  }

  if (err) {
    throw err;
  }
} // Checks if a PouchDB object is "remote" or not. This is


function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */


  if (typeof db.type === 'function') {
    guardedConsole('warn', 'db.type() is deprecated and will be removed in ' + 'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */


  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) : _events.EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }

  var parts = s.split('/');

  if (parts.length === 2) {
    return parts;
  }

  if (parts.length === 1) {
    return [s, s];
  }

  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
} // originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName = "queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g; // use the "loose" parser

/* eslint maxlen: 0, no-useless-escape: 0 */

var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });
  return uri;
} // Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()


function scopeEval(source, scope) {
  var keys = [];
  var values = [];

  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }

  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
} // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all


function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }

        doc = {};
      } // the user might change the _rev, so save it for posterity


      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({
          updated: false,
          rev: docRev
        });
      } // users aren't allowed to modify these values,
      // so reset them here


      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }

    return upsert(db, doc._id, diffFun);
  });
}

var thisAtob = function (str) {
  return atob(str);
};

var thisBtoa = function (str) {
  return btoa(str);
}; // Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).


function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};

  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }

    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();

    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }

    return builder.getBlob(properties.type);
  }
} // From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)


function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }

  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {
    type: type
  });
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
} //Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers


function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return binary;
} // shim for browsers that don't support it


function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';

  reader.onloadend = function (e) {
    var result = e.target.result || '';

    if (hasBinaryString) {
      return callback(result);
    }

    callback(arrayBufferToBinaryString(result));
  };

  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
} // simplified API. universal browser support is assumed


function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();

  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };

  reader.readAsArrayBuffer(blob);
} // this is not used in the browser


var setImmediateShim = global.setImmediate || global.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return thisBtoa(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }

  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }

  readAsArrayBuffer(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }

  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new _sparkMd.default() : new _sparkMd.default.ArrayBuffer();
  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;

    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }

  loadNextChunk();
}

function stringMd5(string) {
  return _sparkMd.default.hash(string);
}

function rev$$1(doc, deterministic_revs) {
  var clonedDoc = clone(doc);

  if (!deterministic_revs) {
    return _uuid.default.v4().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return stringMd5(JSON.stringify(clonedDoc));
}

var uuid = _uuid.default.v4; // We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html

function winningRev(metadata) {
  var winningId;
  var winningPos;
  var winningDeleted;
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var tree = node.ids;
    var branches = tree[2];
    var pos = node.pos;

    if (branches.length) {
      // non-leaf
      for (var i = 0, len = branches.length; i < len; i++) {
        toVisit.push({
          pos: pos + 1,
          ids: branches[i]
        });
      }

      continue;
    }

    var deleted = !!tree[1].deleted;
    var id = tree[0]; // sort by deleted, then pos, then id

    if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
      winningId = id;
      winningPos = pos;
      winningDeleted = deleted;
    }
  }

  return winningPos + '-' + winningId;
} // Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node


function traverseRevTree(revs, callback) {
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        ctx: newCtx
      });
    }
  }
}

function sortByPos(a, b) {
  return a.pos - b.pos;
}

function collectLeaves(revs) {
  var leaves = [];
  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.push({
        rev: pos + "-" + id,
        pos: pos,
        opts: opts
      });
    }
  });
  leaves.sort(sortByPos).reverse();

  for (var i = 0, len = leaves.length; i < len; i++) {
    delete leaves[i].pos;
  }

  return leaves;
} // returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision


function collectConflicts(metadata) {
  var win = winningRev(metadata);
  var leaves = collectLeaves(metadata.rev_tree);
  var conflicts = [];

  for (var i = 0, len = leaves.length; i < len; i++) {
    var leaf = leaves[i];

    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  }

  return conflicts;
} // compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete


function compactTree(metadata) {
  var revs = [];
  traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
    if (opts.status === 'available' && !isLeaf) {
      revs.push(pos + '-' + revHash);
      opts.status = 'missing';
    }
  });
  return revs;
} // build up a list of all the paths to the leafs in this revision tree


function rootToLeaf(revs) {
  var paths = [];
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      opts: opts
    });

    if (isLeaf) {
      paths.push({
        pos: pos + 1 - history.length,
        ids: history
      });
    }

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        history: history
      });
    }
  }

  return paths.reverse();
} // for a better overview of what this is doing, read:


function sortByPos$1(a, b) {
  return a.pos - b.pos;
} // classic binary search


function binarySearch(arr, item, comparator) {
  var low = 0;
  var high = arr.length;
  var mid;

  while (low < high) {
    mid = low + high >>> 1;

    if (comparator(arr[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
} // assuming the arr is sorted, insert the item in the proper place


function insertSorted(arr, item, comparator) {
  var idx = binarySearch(arr, item, comparator);
  arr.splice(idx, 0, item);
} // Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument


function pathToTree(path, numStemmed) {
  var root;
  var leaf;

  for (var i = numStemmed, len = path.length; i < len; i++) {
    var node = path[i];
    var currentLeaf = [node.id, node.opts, []];

    if (leaf) {
      leaf[2].push(currentLeaf);
      leaf = currentLeaf;
    } else {
      root = leaf = currentLeaf;
    }
  }

  return root;
} // compare the IDs of two trees


function compareTree(a, b) {
  return a[0] < b[0] ? -1 : 1;
} // Merge two trees together
// The roots of tree1 and tree2 must be the same revision


function mergeTree(in_tree1, in_tree2) {
  var queue = [{
    tree1: in_tree1,
    tree2: in_tree2
  }];
  var conflicts = false;

  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status = tree1[1].status === 'available' || tree2[1].status === 'available' ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;

      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({
            tree1: tree1[2][j],
            tree2: tree2[2][i]
          });
          merged = true;
        }
      }

      if (!merged) {
        conflicts = 'new_branch';
        insertSorted(tree1[2], tree2[2][i], compareTree);
      }
    }
  }

  return {
    conflicts: conflicts,
    tree: in_tree1
  };
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {
      tree: [path],
      conflicts: 'new_leaf'
    };
  }

  for (var i = 0, len = tree.length; i < len; i++) {
    var branch = tree[i];

    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({
        pos: branch.pos,
        ids: res.tree
      });
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees
      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;
      var candidateParents = [];
      var trees = [];
      trees.push({
        ids: t1.ids,
        diff: diff,
        parent: null,
        parentIdx: null
      });

      while (trees.length > 0) {
        var item = trees.pop();

        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }

          continue;
        }

        var elements = item.ids[2];

        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
          trees.push({
            ids: elements[j],
            diff: item.diff - 1,
            parent: item.ids,
            parentIdx: j
          });
        }
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({
          pos: t1.pos,
          ids: t1.ids
        });
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  } // We didnt find


  if (!merged) {
    restree.push(path);
  }

  restree.sort(sortByPos$1);
  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
} // To ensure we dont grow the revision tree infinitely, we stem old revisions


function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths
  var paths = rootToLeaf(tree);
  var stemmedRevs;
  var result;

  for (var i = 0, len = paths.length; i < len; i++) {
    // Then for each path, we cut off the start of the path based on the
    // `depth` to stem to, and generate a new set of flat trees
    var path = paths[i];
    var stemmed = path.ids;
    var node;

    if (stemmed.length > depth) {
      // only do the stemming work if we actually need to stem
      if (!stemmedRevs) {
        stemmedRevs = {}; // avoid allocating this object unnecessarily
      }

      var numStemmed = stemmed.length - depth;
      node = {
        pos: path.pos + numStemmed,
        ids: pathToTree(stemmed, numStemmed)
      };

      for (var s = 0; s < numStemmed; s++) {
        var rev = path.pos + s + '-' + stemmed[s].id;
        stemmedRevs[rev] = true;
      }
    } else {
      // no need to actually stem
      node = {
        pos: path.pos,
        ids: pathToTree(stemmed, 0)
      };
    } // Then we remerge all those flat trees together, ensuring that we dont
    // connect trees that would go beyond the depth limit


    if (result) {
      result = doMerge(result, node, true).tree;
    } else {
      result = [node];
    }
  } // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed


  if (stemmedRevs) {
    traverseRevTree(result, function (isLeaf, pos, revHash) {
      // some revisions may have been removed in a branch but not in another
      delete stemmedRevs[pos + '-' + revHash];
    });
  }

  return {
    tree: result,
    revs: stemmedRevs ? Object.keys(stemmedRevs) : []
  };
}

function merge(tree, path, depth) {
  var newTree = doMerge(tree, path);
  var stemmed = stem(newTree.tree, depth);
  return {
    tree: stemmed.tree,
    stemmedRevs: stemmed.revs,
    conflicts: newTree.conflicts
  };
} // return true if a rev exists in the rev tree, false otherwise


function revExists(revs, rev) {
  var toVisit = revs.slice();
  var splitRev = rev.split('-');
  var targetPos = parseInt(splitRev[0], 10);
  var targetId = splitRev[1];
  var node;

  while (node = toVisit.pop()) {
    if (node.pos === targetPos && node.ids[0] === targetId) {
      return true;
    }

    var branches = node.ids[2];

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: node.pos + 1,
        ids: branches[i]
      });
    }
  }

  return false;
}

function getTrees(node) {
  return node.ids;
} // check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision


function isDeleted(metadata, rev) {
  if (!rev) {
    rev = winningRev(metadata);
  }

  var id = rev.substring(rev.indexOf('-') + 1);
  var toVisit = metadata.rev_tree.map(getTrees);
  var tree;

  while (tree = toVisit.pop()) {
    if (tree[0] === id) {
      return !!tree[1].deleted;
    }

    toVisit = toVisit.concat(tree[2]);
  }
}

function isLocalId(id) {
  return /^_local/.test(id);
} // returns the current leaf node for a given revision


function latest(rev, metadata) {
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      pos: pos,
      opts: opts
    });

    if (isLeaf) {
      for (var i = 0, len = history.length; i < len; i++) {
        var historyNode = history[i];
        var historyRev = historyNode.pos + '-' + historyNode.id;

        if (historyRev === rev) {
          // return the rev of this leaf
          return pos + '-' + id;
        }
      }
    }

    for (var j = 0, l = branches.length; j < l; j++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[j],
        history: history
      });
    }
  }
  /* istanbul ignore next */


  throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

(0, _inherits.default)(Changes$1, _events.EventEmitter);

function tryCatchInChangeListener(self, change, pending, lastSeq) {
  // isolate try/catches to avoid V8 deoptimizations
  try {
    self.emit('change', change, pending, lastSeq);
  } catch (e) {
    guardedConsole('error', 'Error in .on("change", function):', e);
  }
}

function Changes$1(db, opts, callback) {
  _events.EventEmitter.call(this);

  var self = this;
  this.db = db;
  opts = opts ? clone(opts) : {};
  var complete = opts.complete = once(function (err, resp) {
    if (err) {
      if (listenerCount(self, 'error') > 0) {
        self.emit('error', err);
      }
    } else {
      self.emit('complete', resp);
    }

    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });

  if (callback) {
    self.on('complete', function (resp) {
      callback(null, resp);
    });
    self.on('error', callback);
  }

  function onDestroy() {
    self.cancel();
  }

  db.once('destroyed', onDestroy);

  opts.onChange = function (change, pending, lastSeq) {
    /* istanbul ignore if */
    if (self.isCancelled) {
      return;
    }

    tryCatchInChangeListener(self, change, pending, lastSeq);
  };

  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    db.removeListener('destroyed', onDestroy);
    opts.complete(null, {
      status: 'cancelled'
    });
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);

  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function (failed) {
      if (failed) {
        opts.complete(failed);
      } else if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.validateChanges(opts);
      }
    });
  } else {
    self.validateChanges(opts);
  }
}

Changes$1.prototype.cancel = function () {
  this.isCancelled = true;

  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};

function processChange(doc, metadata, opts) {
  var changeList = [{
    rev: doc._rev
  }];

  if (opts.style === 'all_docs') {
    changeList = collectLeaves(metadata.rev_tree).map(function (x) {
      return {
        rev: x.rev
      };
    });
  }

  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }

  if (opts.conflicts) {
    change.doc._conflicts = collectConflicts(metadata);

    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }

  return change;
}

Changes$1.prototype.validateChanges = function (opts) {
  var callback = opts.complete;
  var self = this;
  /* istanbul ignore else */

  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.validate(opts, function (err) {
      if (err) {
        return callback(err);
      }

      self.doChanges(opts);
    });
  } else {
    self.doChanges(opts);
  }
};

Changes$1.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;
  opts = clone(opts);

  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }

  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }

  if (!opts.since) {
    opts.since = 0;
  }

  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      /* istanbul ignore if */
      if (self.isCancelled) {
        callback(null, {
          status: 'cancelled'
        });
        return;
      }

      opts.since = info.update_seq;
      self.doChanges(opts);
    }, callback);
    return;
  }
  /* istanbul ignore else */


  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.normalize(opts);

    if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
      return PouchDB._changesFilterPlugin.filter(this, opts);
    }
  } else {
    ['doc_ids', 'filter', 'selector', 'view'].forEach(function (key) {
      if (key in opts) {
        guardedConsole('warn', 'The "' + key + '" option was passed in to changes/replicate, ' + 'but pouchdb-changes-filter plugin is not installed, so it ' + 'was ignored. Please install the plugin to enable filtering.');
      }
    });
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  } // 0 and 1 should return 1 document


  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;

  var newPromise = this.db._changes(opts);
  /* istanbul ignore else */


  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = (0, _argsarray.default)(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};
/*
 * A generic pouch adapter
 */


function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error


function yankError(callback, docId) {
  return function (err, results) {
    if (err || results[0] && results[0].error) {
      err = err || results[0];
      err.docId = docId;
      callback(err);
    } else {
      callback(null, results.length ? results[0] : results);
    }
  };
} // clean docs given to us by the user


function cleanDocs(docs) {
  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];

    if (doc._deleted) {
      delete doc._attachments; // ignore atts for deleted docs
    } else if (doc._attachments) {
      // filter out extraneous keys from _attachments
      var atts = Object.keys(doc._attachments);

      for (var j = 0; j < atts.length; j++) {
        var att = atts[j];
        doc._attachments[att] = pick(doc._attachments[att], ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
      }
    }
  }
} // compare two docs, first by _id then by _rev


function compareByIdThenRev(a, b) {
  var idCompare = compare(a._id, b._id);

  if (idCompare !== 0) {
    return idCompare;
  }

  var aStart = a._revisions ? a._revisions.start : 0;
  var bStart = b._revisions ? b._revisions.start : 0;
  return compare(aStart, bStart);
} // for every node in a revision tree computes its distance from the closest
// leaf


function computeHeight(revs) {
  var height = {};
  var edges = [];
  traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev = pos + "-" + id;

    if (isLeaf) {
      height[rev] = 0;
    }

    if (prnt !== undefined) {
      edges.push({
        from: prnt,
        to: rev
      });
    }

    return rev;
  });
  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysParse(opts) {
  var keys = 'limit' in opts ? opts.keys.slice(opts.skip, opts.limit + opts.skip) : opts.skip > 0 ? opts.keys.slice(opts.skip) : opts.keys;
  opts.keys = keys;
  opts.skip = 0;
  delete opts.limit;

  if (opts.descending) {
    keys.reverse();
    opts.descending = false;
  }
} // all compaction is done in a queue, to avoid attaching
// too many listeners at once


function doNextCompaction(self) {
  var task = self._compactionQueue[0];
  var opts = task.opts;
  var callback = task.callback;
  self.get('_local/compaction').catch(function () {
    return false;
  }).then(function (doc) {
    if (doc && doc.last_seq) {
      opts.last_seq = doc.last_seq;
    }

    self._compact(opts, function (err, res) {
      /* istanbul ignore if */
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }

      (0, _immediate.default)(function () {
        self._compactionQueue.shift();

        if (self._compactionQueue.length) {
          doNextCompaction(self);
        }
      });
    });
  });
}

function attachmentNameError(name) {
  if (name.charAt(0) === '_') {
    return name + ' is not a valid attachment name, attachment ' + 'names cannot start with \'_\'';
  }

  return false;
}

(0, _inherits.default)(AbstractPouchDB, _events.EventEmitter);

function AbstractPouchDB() {
  _events.EventEmitter.call(this); // re-bind prototyped methods


  for (var p in AbstractPouchDB.prototype) {
    if (typeof this[p] === 'function') {
      this[p] = this[p].bind(this);
    }
  }
}

AbstractPouchDB.prototype.post = adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return callback(createError(NOT_AN_OBJECT));
  }

  this.bulkDocs({
    docs: [doc]
  }, opts, yankError(callback, doc._id));
});
AbstractPouchDB.prototype.put = adapterFun('put', function (doc, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return cb(createError(NOT_AN_OBJECT));
  }

  invalidIdError(doc._id);

  if (isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, cb);
    } else {
      return this._putLocal(doc, cb);
    }
  }

  var self = this;

  if (opts.force && doc._rev) {
    transformForceOptionToNewEditsOption();
    putDoc(function (err) {
      var result = err ? null : {
        ok: true,
        id: doc._id,
        rev: doc._rev
      };
      cb(err, result);
    });
  } else {
    putDoc(cb);
  }

  function transformForceOptionToNewEditsOption() {
    var parts = doc._rev.split('-');

    var oldRevId = parts[1];
    var oldRevNum = parseInt(parts[0], 10);
    var newRevNum = oldRevNum + 1;
    var newRevId = rev$$1();
    doc._revisions = {
      start: newRevNum,
      ids: [newRevId, oldRevId]
    };
    doc._rev = newRevNum + '-' + newRevId;
    opts.new_edits = false;
  }

  function putDoc(next) {
    if (typeof self._put === 'function' && opts.new_edits !== false) {
      self._put(doc, opts, next);
    } else {
      self.bulkDocs({
        docs: [doc]
      }, opts, yankError(next, doc._id));
    }
  }
});
AbstractPouchDB.prototype.putAttachment = adapterFun('putAttachment', function (docId, attachmentId, rev, blob, type) {
  var api = this;

  if (typeof type === 'function') {
    type = blob;
    blob = rev;
    rev = null;
  } // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267

  /* istanbul ignore if */


  if (typeof type === 'undefined') {
    type = blob;
    blob = rev;
    rev = null;
  }

  if (!type) {
    guardedConsole('warn', 'Attachment', attachmentId, 'on document', docId, 'is missing content_type');
  }

  function createAttachment(doc) {
    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob,
      revpos: ++prevrevpos
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev) {
      throw createError(REV_CONFLICT);
    }

    return createAttachment(doc);
  }, function (err) {
    // create new doc

    /* istanbul ignore else */
    if (err.reason === MISSING_DOC.message) {
      return createAttachment({
        _id: docId
      });
    } else {
      throw err;
    }
  });
});
AbstractPouchDB.prototype.removeAttachment = adapterFun('removeAttachment', function (docId, attachmentId, rev, callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    /* istanbul ignore if */
    if (err) {
      callback(err);
      return;
    }

    if (obj._rev !== rev) {
      callback(createError(REV_CONFLICT));
      return;
    }
    /* istanbul ignore if */


    if (!obj._attachments) {
      return callback();
    }

    delete obj._attachments[attachmentId];

    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }

    self.put(obj, callback);
  });
});
AbstractPouchDB.prototype.remove = adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;

  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;

    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }

  opts = opts || {};
  opts.was_delete = true;
  var newDoc = {
    _id: doc._id,
    _rev: doc._rev || opts.rev
  };
  newDoc._deleted = true;

  if (isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }

  this.bulkDocs({
    docs: [newDoc]
  }, opts, yankError(callback, newDoc._id));
});
AbstractPouchDB.prototype.revsDiff = adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new ExportedMap();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {
        missing: []
      });
    }

    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;
      var idx = missingForId.indexOf(rev);

      if (idx === -1) {
        return;
      }

      missingForId.splice(idx, 1);
      /* istanbul ignore if */

      if (opts.status !== 'available') {
        addToMissing(id, rev);
      }
    }); // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree

    missingForId.forEach(function (rev) {
      addToMissing(id, rev);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {
          missing: req[id]
        });
      } else if (err) {
        /* istanbul ignore next */
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
}); // _bulk_get API for faster replication, as described in
// https://github.com/apache/couchdb-chttpd/pull/33
// At the "abstract" level, it will just run multiple get()s in
// parallel, because this isn't much of a performance cost
// for local databases (except the cost of multiple transactions, which is
// small). The http adapter overrides this in order
// to do a more efficient single HTTP request.

AbstractPouchDB.prototype.bulkGet = adapterFun('bulkGet', function (opts, callback) {
  bulkGet(this, opts, callback);
}); // compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height

AbstractPouchDB.prototype.compactDocument = adapterFun('compactDocument', function (docId, maxHeight, callback) {
  var self = this;

  this._getRevisionTree(docId, function (err, revTree) {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    var height = computeHeight(revTree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev) {
      if (height[rev] > maxHeight) {
        candidates.push(rev);
      }
    });
    traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;

      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
        revs.push(rev);
      }
    });

    self._doCompaction(docId, revs, callback);
  });
}); // compact the whole database using single document
// compaction

AbstractPouchDB.prototype.compact = adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  opts = opts || {};
  self._compactionQueue = self._compactionQueue || [];

  self._compactionQueue.push({
    opts: opts,
    callback: callback
  });

  if (self._compactionQueue.length === 1) {
    doNextCompaction(self);
  }
});

AbstractPouchDB.prototype._compact = function (opts, callback) {
  var self = this;
  var changesOpts = {
    return_docs: false,
    last_seq: opts.last_seq || 0
  };
  var promises = [];

  function onChange(row) {
    promises.push(self.compactDocument(row.id, 0));
  }

  function onComplete(resp) {
    var lastSeq = resp.last_seq;
    Promise.all(promises).then(function () {
      return upsert(self, '_local/compaction', function deltaFunc(doc) {
        if (!doc.last_seq || doc.last_seq < lastSeq) {
          doc.last_seq = lastSeq;
          return doc;
        }

        return false; // somebody else got here first, don't update
      });
    }).then(function () {
      callback(null, {
        ok: true
      });
    }).catch(callback);
  }

  self.changes(changesOpts).on('change', onChange).on('complete', onComplete).on('error', callback);
};
/* Begin api wrappers. Specific functionality to storage belongs in the
   _[method] */


AbstractPouchDB.prototype.get = adapterFun('get', function (id, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof id !== 'string') {
    return cb(createError(INVALID_ID));
  }

  if (isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, cb);
  }

  var leaves = [],
      self = this;

  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    /* istanbul ignore if */

    if (!count) {
      return cb(null, result);
    } // order with open_revs is unspecified


    leaves.forEach(function (leaf) {
      self.get(id, {
        rev: leaf,
        revs: opts.revs,
        latest: opts.latest,
        attachments: opts.attachments,
        binary: opts.binary
      }, function (err, doc) {
        if (!err) {
          // using latest=true can produce duplicates
          var existing;

          for (var i = 0, l = result.length; i < l; i++) {
            if (result[i].ok && result[i].ok._rev === doc._rev) {
              existing = true;
              break;
            }
          }

          if (!existing) {
            result.push({
              ok: doc
            });
          }
        } else {
          result.push({
            missing: leaf
          });
        }

        count--;

        if (!count) {
          cb(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        /* istanbul ignore if */
        if (err) {
          return cb(err);
        }

        leaves = collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;

        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i]; // looks like it's the only thing couchdb checks

          if (!(typeof l === "string" && /^\d+-/.test(l))) {
            return cb(createError(INVALID_REV));
          }
        }

        finishOpenRevs();
      } else {
        return cb(createError(UNKNOWN_ERROR, 'function_clause'));
      }
    }

    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    if (err) {
      err.docId = id;
      return cb(err);
    }

    var doc = result.doc;
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = collectConflicts(metadata);

      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (isDeleted(metadata, doc._rev)) {
      doc._deleted = true;
    }

    if (opts.revs || opts.revs_info) {
      var splittedRev = doc._rev.split('-');

      var revNo = parseInt(splittedRev[0], 10);
      var revHash = splittedRev[1];
      var paths = rootToLeaf(metadata.rev_tree);
      var path = null;

      for (var i = 0; i < paths.length; i++) {
        var currentPath = paths[i];
        var hashIndex = currentPath.ids.map(function (x) {
          return x.id;
        }).indexOf(revHash);
        var hashFoundAtRevPos = hashIndex === revNo - 1;

        if (hashFoundAtRevPos || !path && hashIndex !== -1) {
          path = currentPath;
        }
      }

      var indexOfRev = path.ids.map(function (x) {
        return x.id;
      }).indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: path.pos + path.ids.length - 1,
          ids: path.ids.map(function (rev) {
            return rev.id;
          })
        };
      }

      if (opts.revs_info) {
        var pos = path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev) {
          pos--;
          return {
            rev: pos + '-' + rev.id,
            status: rev.opts.status
          };
        });
      }
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;

      if (count === 0) {
        return cb(null, doc);
      }

      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(doc._id, key, attachments[key], {
          // Previously the revision handling was done in adapter.js
          // getAttachment, however since idb-next doesnt we need to
          // pass the rev through
          rev: doc._rev,
          binary: opts.binary,
          ctx: ctx
        }, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          delete att.length;

          if (! --count) {
            cb(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          /* istanbul ignore else */
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }

      cb(null, doc);
    }
  });
}); // TODO: I dont like this, it forces an extra read for every
// attachment read and enforces a confusing api between
// adapter.js and the adapter implementation

AbstractPouchDB.prototype.getAttachment = adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
  var self = this;

  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }

  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      opts.binary = true;

      self._getAttachment(docId, attachmentId, res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(createError(MISSING_DOC));
    }
  });
});
AbstractPouchDB.prototype.allDocs = adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;

  if (opts.start_key) {
    opts.startkey = opts.start_key;
  }

  if (opts.end_key) {
    opts.endkey = opts.end_key;
  }

  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }

    var incompatibleOpt = ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];

    if (incompatibleOpt) {
      callback(createError(QUERY_PARSE_ERROR, 'Query parameter `' + incompatibleOpt + '` is not compatible with multi-get'));
      return;
    }

    if (!isRemote(this)) {
      allDocsKeysParse(opts);

      if (opts.keys.length === 0) {
        return this._allDocs({
          limit: 0
        }, callback);
      }
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {}; // By default set return_docs to false if the caller has opts.live = true,
  // this will prevent us from collecting the set of changes indefinitely
  // resulting in growing memory

  opts.return_docs = 'return_docs' in opts ? opts.return_docs : !opts.live;
  return new Changes$1(this, opts, callback);
};

AbstractPouchDB.prototype.close = adapterFun('close', function (callback) {
  this._closed = true;
  this.emit('closed');
  return this._close(callback);
});
AbstractPouchDB.prototype.info = adapterFun('info', function (callback) {
  var self = this;

  this._info(function (err, info) {
    if (err) {
      return callback(err);
    } // assume we know better than the adapter, unless it informs us


    info.db_name = info.db_name || self.name;
    info.auto_compaction = !!(self.auto_compaction && !isRemote(self));
    info.adapter = self.adapter;
    callback(null, info);
  });
});
AbstractPouchDB.prototype.id = adapterFun('id', function (callback) {
  return this._id(callback);
});
/* istanbul ignore next */

AbstractPouchDB.prototype.type = function () {
  return typeof this._type === 'function' ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs = adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(createError(MISSING_BULK_DOCS));
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
      return callback(createError(NOT_AN_OBJECT));
    }
  }

  var attachmentError;
  req.docs.forEach(function (doc) {
    if (doc._attachments) {
      Object.keys(doc._attachments).forEach(function (name) {
        attachmentError = attachmentError || attachmentNameError(name);

        if (!doc._attachments[name].content_type) {
          guardedConsole('warn', 'Attachment', name, 'on document', doc._id, 'is missing content_type');
        }
      });
    }
  });

  if (attachmentError) {
    return callback(createError(BAD_REQUEST, attachmentError));
  }

  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  var adapter = this;

  if (!opts.new_edits && !isRemote(adapter)) {
    // ensure revisions of the same doc are sorted, so that
    // the local adapter processes them correctly (#2935)
    req.docs.sort(compareByIdThenRev);
  }

  cleanDocs(req.docs); // in the case of conflicts, we want to return the _ids to the user
  // however, the underlying adapter may destroy the docs array, so
  // create a copy here

  var ids = req.docs.map(function (doc) {
    return doc._id;
  });
  return this._bulkDocs(req, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (!opts.new_edits) {
      // this is what couch does when new_edits is false
      res = res.filter(function (x) {
        return x.error;
      });
    } // add ids for error/conflict responses (not required for CouchDB)


    if (!isRemote(adapter)) {
      for (var i = 0, l = res.length; i < l; i++) {
        res[i].id = res[i].id || ids[i];
      }
    }

    callback(null, res);
  });
});
AbstractPouchDB.prototype.registerDependentDatabase = adapterFun('registerDependentDatabase', function (dependentDb, callback) {
  var depDB = new this.constructor(dependentDb, this.__opts);

  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};

    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }

    doc.dependentDbs[dependentDb] = true;
    return doc;
  }

  upsert(this, '_local/_pouch_dependentDbs', diffFun).then(function () {
    callback(null, {
      db: depDB
    });
  }).catch(callback);
});
AbstractPouchDB.prototype.destroy = adapterFun('destroy', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

  function destroyDb() {
    // call destroy method of the particular adaptor
    self._destroy(opts, function (err, resp) {
      if (err) {
        return callback(err);
      }

      self._destroyed = true;
      self.emit('destroyed');
      callback(null, resp || {
        'ok': true
      });
    });
  }

  if (isRemote(self)) {
    // no need to check for dependent DBs if it's a remote DB
    return destroyDb();
  }

  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
    if (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        return callback(err);
      } else {
        // no dependencies
        return destroyDb();
      }
    }

    var dependentDbs = localDoc.dependentDbs;
    var PouchDB = self.constructor;
    var deletedMap = Object.keys(dependentDbs).map(function (name) {
      // use_prefix is only false in the browser

      /* istanbul ignore next */
      var trueName = usePrefix ? name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
      return new PouchDB(trueName, self.__opts).destroy();
    });
    Promise.all(deletedMap).then(destroyDb, callback);
  });
});

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var fun;

  if (this.failed) {
    while (fun = this.queue.shift()) {
      fun(this.failed);
    }
  } else {
    while (fun = this.queue.shift()) {
      fun();
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  this.isReady = true;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (fun) {
  this.queue.push(fun);

  if (this.failed) {
    this.execute();
  }
};

function parseAdapter(name, opts) {
  var match = name.match(/([a-z-]*):\/\/(.*)/);

  if (match) {
    // the http adapter expects the fully qualified name
    return {
      name: /https?/.test(match[1]) ? match[1] + '://' + match[2] : match[2],
      adapter: match[1]
    };
  }

  var adapters = PouchDB.adapters;
  var preferredAdapters = PouchDB.preferredAdapters;
  var prefix = PouchDB.prefix;
  var adapterName = opts.adapter;

  if (!adapterName) {
    // automatically determine adapter
    for (var i = 0; i < preferredAdapters.length; ++i) {
      adapterName = preferredAdapters[i]; // check for browsers that have been upgraded from websql-only to websql+idb

      /* istanbul ignore if */

      if (adapterName === 'idb' && 'websql' in adapters && hasLocalStorage() && localStorage['_pouch__websqldb_' + prefix + name]) {
        // log it, because this can be confusing during development
        guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' + ' avoid data loss, because it was already opened with WebSQL.');
        continue; // keep using websql to avoid user data loss
      }

      break;
    }
  }

  var adapter = adapters[adapterName]; // if adapter is invalid, then an error will be thrown later

  var usePrefix = adapter && 'use_prefix' in adapter ? adapter.use_prefix : true;
  return {
    name: usePrefix ? prefix + name : name,
    adapter: adapterName
  };
} // OK, so here's the deal. Consider this code:
//     var db1 = new PouchDB('foo');
//     var db2 = new PouchDB('foo');
//     db1.destroy();
// ^ these two both need to emit 'destroyed' events,
// as well as the PouchDB constructor itself.
// So we have one db object (whichever one got destroy() called on it)
// responsible for emitting the initial event, which then gets emitted
// by the constructor, which then broadcasts it to any other dbs
// that may have been created with the same name.


function prepareForDestruction(self) {
  function onDestroyed(from_constructor) {
    self.removeListener('closed', onClosed);

    if (!from_constructor) {
      self.constructor.emit('destroyed', self.name);
    }
  }

  function onClosed() {
    self.removeListener('destroyed', onDestroyed);
    self.constructor.emit('unref', self);
  }

  self.once('destroyed', onDestroyed);
  self.once('closed', onClosed);
  self.constructor.emit('ref', self);
}

(0, _inherits.default)(PouchDB, AbstractPouchDB);

function PouchDB(name, opts) {
  // In Node our test suite only tests this for PouchAlt unfortunately

  /* istanbul ignore if */
  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts);
  }

  var self = this;
  opts = opts || {};

  if (name && typeof name === 'object') {
    opts = name;
    name = opts.name;
    delete opts.name;
  }

  if (opts.deterministic_revs === undefined) {
    opts.deterministic_revs = true;
  }

  this.__opts = opts = clone(opts);
  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;

  if (typeof name !== 'string') {
    throw new Error('Missing/invalid DB name');
  }

  var prefixedName = (opts.prefix || '') + name;
  var backend = parseAdapter(prefixedName, opts);
  opts.name = backend.name;
  opts.adapter = opts.adapter || backend.adapter;
  self.name = name;
  self._adapter = opts.adapter;
  PouchDB.emit('debug', ['adapter', 'Picked adapter: ', opts.adapter]);

  if (!PouchDB.adapters[opts.adapter] || !PouchDB.adapters[opts.adapter].valid()) {
    throw new Error('Invalid Adapter: ' + opts.adapter);
  }

  AbstractPouchDB.call(self);
  self.taskqueue = new TaskQueue();
  self.adapter = opts.adapter;
  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
    if (err) {
      return self.taskqueue.fail(err);
    }

    prepareForDestruction(self);
    self.emit('created', self);
    PouchDB.emit('created', self.name);
    self.taskqueue.ready(self);
  });
} // AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed


var a = typeof AbortController !== 'undefined' ? AbortController : function () {
  return {
    abort: function () {}
  };
};
var f$1 = fetch;
var h = Headers;
PouchDB.adapters = {};
PouchDB.preferredAdapters = [];
PouchDB.prefix = '_pouch_';
var eventEmitter = new _events.EventEmitter();

function setUpEventEmitter(Pouch) {
  Object.keys(_events.EventEmitter.prototype).forEach(function (key) {
    if (typeof _events.EventEmitter.prototype[key] === 'function') {
      Pouch[key] = eventEmitter[key].bind(eventEmitter);
    }
  }); // these are created in constructor.js, and allow us to notify each DB with
  // the same name that it was destroyed, via the constructor object

  var destructListeners = Pouch._destructionListeners = new ExportedMap();
  Pouch.on('ref', function onConstructorRef(db) {
    if (!destructListeners.has(db.name)) {
      destructListeners.set(db.name, []);
    }

    destructListeners.get(db.name).push(db);
  });
  Pouch.on('unref', function onConstructorUnref(db) {
    if (!destructListeners.has(db.name)) {
      return;
    }

    var dbList = destructListeners.get(db.name);
    var pos = dbList.indexOf(db);

    if (pos < 0) {
      /* istanbul ignore next */
      return;
    }

    dbList.splice(pos, 1);

    if (dbList.length > 1) {
      /* istanbul ignore next */
      destructListeners.set(db.name, dbList);
    } else {
      destructListeners.delete(db.name);
    }
  });
  Pouch.on('destroyed', function onConstructorDestroyed(name) {
    if (!destructListeners.has(name)) {
      return;
    }

    var dbList = destructListeners.get(name);
    destructListeners.delete(name);
    dbList.forEach(function (db) {
      db.emit('destroyed', true);
    });
  });
}

setUpEventEmitter(PouchDB);

PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
  /* istanbul ignore else */
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;

    if (addToPreferredAdapters) {
      PouchDB.preferredAdapters.push(id);
    }
  }
};

PouchDB.plugin = function (obj) {
  if (typeof obj === 'function') {
    // function style for plugins
    obj(PouchDB);
  } else if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
    throw new Error('Invalid plugin: got "' + obj + '", expected an object or a function');
  } else {
    Object.keys(obj).forEach(function (id) {
      // object style for plugins
      PouchDB.prototype[id] = obj[id];
    });
  }

  if (this.__defaults) {
    PouchDB.__defaults = $inject_Object_assign({}, this.__defaults);
  }

  return PouchDB;
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts) {
    if (!(this instanceof PouchAlt)) {
      return new PouchAlt(name, opts);
    }

    opts = opts || {};

    if (name && typeof name === 'object') {
      opts = name;
      name = opts.name;
      delete opts.name;
    }

    opts = $inject_Object_assign({}, PouchAlt.__defaults, opts);
    PouchDB.call(this, name, opts);
  }

  (0, _inherits.default)(PouchAlt, PouchDB);
  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  }); // make default options transitive
  // https://github.com/pouchdb/pouchdb/issues/5922

  PouchAlt.__defaults = $inject_Object_assign({}, this.__defaults, defaultOpts);
  return PouchAlt;
};

PouchDB.fetch = function (url, opts) {
  return f$1(url, opts);
}; // managed automatically by set-version.js


var version = "7.0.0"; // this would just be "return doc[field]", but fields
// can be "deep" due to dot notation

function getFieldFromDoc(doc, parsedField) {
  var value = doc;

  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];

    if (!value) {
      break;
    }
  }

  return value;
}

function compare$1(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Converts a string in dot notation to an array of its components, with backslash escaping


function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';

  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];

    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') {
        // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else {
        // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else {
      // normal character
      current += ch;
    }
  }

  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];

function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
} // flatten an array of selectors joined by an $and operator


function mergeAndedSelectors(selectors) {
  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};
  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];

      if (typeof matcher !== 'object') {
        matcher = {
          $eq: matcher
        };
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }

          fieldMatchers[operator] = value;
        });
      }
    });
  });
  return res;
} // collapse logically equivalent gt/gte values


function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) {
        // more specificity
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value >= fieldMatchers.$gte) {
        // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) {
        // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value > fieldMatchers.$gt) {
        // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // collapse logically equivalent lt/lte values


function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) {
        // more specificity
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value <= fieldMatchers.$lte) {
        // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) {
        // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value < fieldMatchers.$lt) {
        // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // combine $ne values into one array


function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else {
    // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
} // add $eq into the mix


function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
} //
// normalize the selector
//


function massageSelector(input) {
  var result = clone(input);
  var wasAnded = false;

  if ('$and' in result) {
    result = mergeAndedSelectors(result['$and']);
    wasAnded = true;
  }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];

          if (typeof matcher !== 'object' || matcher === null) {
            subSelector[field] = {
              $eq: matcher
            };
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (typeof matcher !== 'object' || matcher === null) {
      matcher = {
        $eq: matcher
      };
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }

    result[field] = matcher;
  }

  return result;
}

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */

  while (padding.length < targetLength) {
    padding += padWith;
  }

  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE

var MAGNITUDE_DIGITS = 3; // ditto

var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {
  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);
  var ai = collationIndex(a);
  var bi = collationIndex(b);

  if (ai - bi !== 0) {
    return ai - bi;
  }

  switch (typeof a) {
    case 'number':
      return a - b;

    case 'boolean':
      return a < b ? -1 : 1;

    case 'string':
      return stringCollate(a, b);
  }

  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
} // couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.


function normalizeKey(key) {
  switch (typeof key) {
    case 'undefined':
      return null;

    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }

      return key;

    case 'object':
      var origKey = key;

      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);

        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
        /* istanbul ignore next */

      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) {
        // generic object
        key = {};

        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];

            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }

  }

  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (typeof key) {
      case 'boolean':
        return key ? 1 : 0;

      case 'number':
        return numToIndexableString(key);

      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2

        /* eslint-disable no-control-regex */
        return key.replace(/\u0002/g, '\u0002\u0002').replace(/\u0001/g, '\u0001\u0002').replace(/\u0000/g, '\u0001\u0001');

      /* eslint-enable no-control-regex */

      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';

        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) + toIndexableString(key[objKey]);
          }
        }

        return result;
    }
  }

  return '';
} // convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.


function toIndexableString(key) {
  var zero = '\u0000';
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';

  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */

    if (neg) {
      magnitude = -magnitude;
    }

    i += MAGNITUDE_DIGITS;

    while (true) {
      var ch = str[i];

      if (ch === '\u0000') {
        break;
      } else {
        numAsString += ch;
      }

      i++;
    }

    numAsString = numAsString.split('.');

    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */


    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */


    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }

  return {
    num: num,
    length: i - originalIdx
  };
} // move up the stack while parsing
// this function moved outside of parseIndexableString for performance


function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];

    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }

    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;

    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) {
      // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects

  var i = 0;
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

  while (true) {
    var collationIndex = str[i++];

    if (collationIndex === '\u0000') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }

    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;

      case '2':
        stack.push(str[i] === '1');
        i++;
        break;

      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;

      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

        while (true) {
          var ch = str[i];

          if (ch === '\u0000') {
            break;
          }

          parsedStr += ch;
          i++;
        } // perform the reverse of the order-preserving replacement
        // algorithm (see above)

        /* eslint-disable no-control-regex */


        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000').replace(/\u0001\u0002/g, '\u0001').replace(/\u0002\u0002/g, '\u0002');
        /* eslint-enable no-control-regex */

        stack.push(parsedStr);
        break;

      case '5':
        var arrayElement = {
          element: [],
          index: stack.length
        };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;

      case '6':
        var objElement = {
          element: {},
          index: stack.length
        };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;

      /* istanbul ignore next */

      default:
        throw new Error('bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);

  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);

    if (sort !== 0) {
      return sort;
    }
  }

  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
}

function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return a === b ? 0 : a > b ? 1 : -1;
}

function objectCollate(a, b) {
  var ak = Object.keys(a),
      bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);

  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);

    if (sort !== 0) {
      return sort;
    } // if the keys are equal sort the values


    sort = collate(a[ak[i]], b[bk[i]]);

    if (sort !== 0) {
      return sort;
    }
  }

  return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
} // The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null


function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(typeof x); //false if -1 otherwise true, but fast!!!!1

  if (~idx) {
    if (x === null) {
      return 1;
    }

    if (Array.isArray(x)) {
      return 5;
    }

    return idx < 3 ? idx + 2 : idx + 3;
  }
  /* istanbul ignore next */


  if (Array.isArray(x)) {
    return 5;
  }
} // conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse


function numToIndexableString(num) {
  if (num === 0) {
    return '1';
  } // convert number to exponential format for easier and
  // more succinct string sorting


  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);
  var neg = num < 0;
  var result = neg ? '0' : '2'; // first sort by magnitude
  // it's easier if all magnitudes are positive

  var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
  var magString = padLeft(magForComparison.toString(), '0', MAGNITUDE_DIGITS);
  result += SEP + magString; // then sort by the factor

  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)

  /* istanbul ignore next */

  if (neg) {
    // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20); // strip zeros from the end

  factorStr = factorStr.replace(/\.?0+$/, '');
  result += SEP + factorStr;
  return result;
} // create a comparator based on the sort object


function createFieldSorter(sort) {
  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = collate(aFieldValues, bFieldValues);

    if (collation !== 0) {
      return collation;
    } // this is what mango seems to do


    return compare$1(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);

    if (typeof requestDef.sort[0] !== 'string' && getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }

  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);

    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  }

  return Object.keys(matcher).every(function (userOperator) {
    var userValue = matcher[userOperator];
    return match(userOperator, doc, userValue, parsedField, docFieldValue);
  });
}

function matchCominationalSelector(field, matcher, doc) {
  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  } //`$nor`


  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });
}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' + '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }

  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];

  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);
  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {
  switch (userValue) {
    case 'null':
      return docFieldValue === null;

    case 'boolean':
      return typeof docFieldValue === 'boolean';

    case 'number':
      return typeof docFieldValue === 'number';

    case 'string':
      return typeof docFieldValue === 'string';

    case 'array':
      return docFieldValue instanceof Array;

    case 'object':
      return {}.toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' + 'Please use one of object, string, array, number, boolean or null.');
}

var matchers = {
  '$elemMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$allMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }
    /* istanbul ignore next */


    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$eq': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) === 0;
  },
  '$gte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) >= 0;
  },
  '$gt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) > 0;
  },
  '$lte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) <= 0;
  },
  '$lt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) < 0;
  },
  '$exists': function (doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },
  '$mod': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },
  '$ne': function (doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return collate(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },
  '$nin': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },
  '$size': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },
  '$all': function (doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },
  '$regex': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },
  '$type': function (doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
}; // return true if the given doc matches the supplied selector

function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (typeof selector !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };
  var rowsMatched = filterInMemoryFields([row], {
    'selector': selector
  }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}

function evalFilter(input) {
  return scopeEval('"use strict";\nreturn ' + input + ';', {});
}

function evalView(input) {
  var code = ['return function(doc) {', '  "use strict";', '  var emitted = false;', '  var emit = function (a, b) {', '    emitted = true;', '  };', '  var view = ' + input + ';', '  view(doc);', '  if (emitted) {', '    return true;', '  }', '};'].join('\n');
  return scopeEval(code, {});
}

function validate(opts, callback) {
  if (opts.selector) {
    if (opts.filter && opts.filter !== '_selector') {
      var filterName = typeof opts.filter === 'string' ? opts.filter : 'function';
      return callback(new Error('selector invalid for filter "' + filterName + '"'));
    }
  }

  callback();
}

function normalize(opts) {
  if (opts.view && !opts.filter) {
    opts.filter = '_view';
  }

  if (opts.selector && !opts.filter) {
    opts.filter = '_selector';
  }

  if (opts.filter && typeof opts.filter === 'string') {
    if (opts.filter === '_view') {
      opts.view = normalizeDesignDocFunctionName(opts.view);
    } else {
      opts.filter = normalizeDesignDocFunctionName(opts.filter);
    }
  }
}

function shouldFilter(changesHandler, opts) {
  return opts.filter && typeof opts.filter === 'string' && !opts.doc_ids && !isRemote(changesHandler.db);
}

function filter(changesHandler, opts) {
  var callback = opts.complete;

  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = createError(BAD_REQUEST, '`view` filter parameter not found or invalid.');
      return callback(err);
    } // fetch a view from a design doc, make it behave like a filter


    var viewName = parseDesignDocFunctionName(opts.view);
    changesHandler.db.get('_design/' + viewName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(generateErrorFromResponse(err));
      }

      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] && ddoc.views[viewName[1]].map;

      if (!mapFun) {
        return callback(createError(MISSING_DOC, ddoc.views ? 'missing json key: ' + viewName[1] : 'missing json key: views'));
      }

      opts.filter = evalView(mapFun);
      changesHandler.doChanges(opts);
    });
  } else if (opts.selector) {
    opts.filter = function (doc) {
      return matchesSelector(doc, opts.selector);
    };

    changesHandler.doChanges(opts);
  } else {
    // fetch a filter from a design doc
    var filterName = parseDesignDocFunctionName(opts.filter);
    changesHandler.db.get('_design/' + filterName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(generateErrorFromResponse(err));
      }

      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];

      if (!filterFun) {
        return callback(createError(MISSING_DOC, ddoc && ddoc.filters ? 'missing json key: ' + filterName[1] : 'missing json key: filters'));
      }

      opts.filter = evalFilter(filterFun);
      changesHandler.doChanges(opts);
    });
  }
}

function applyChangesFilterPlugin(PouchDB) {
  PouchDB._changesFilterPlugin = {
    validate: validate,
    normalize: normalize,
    shouldFilter: shouldFilter,
    filter: filter
  };
} // TODO: remove from pouchdb-core (breaking)


PouchDB.plugin(applyChangesFilterPlugin);
PouchDB.version = version;

function toObject(array) {
  return array.reduce(function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
} // List of top level reserved words for doc


var reservedWords = toObject(['_id', '_rev', '_attachments', '_deleted', '_revisions', '_revs_info', '_conflicts', '_deleted_conflicts', '_local_seq', '_rev_tree', //replication documents
'_replication_id', '_replication_state', '_replication_state_time', '_replication_state_reason', '_replication_stats', // Specific to Couchbase Sync Gateway
'_removed']); // List of reserved words that should end up the document

var dataWords = toObject(['_attachments', //replication documents
'_replication_id', '_replication_state', '_replication_state_time', '_replication_state_reason', '_replication_stats']);

function parseRevisionInfo(rev) {
  if (!/^\d+-./.test(rev)) {
    return createError(INVALID_REV);
  }

  var idx = rev.indexOf('-');
  var left = rev.substring(0, idx);
  var right = rev.substring(idx + 1);
  return {
    prefix: parseInt(left, 10),
    id: right
  };
}

function makeRevTreeFromRevisions(revisions, opts) {
  var pos = revisions.start - revisions.ids.length + 1;
  var revisionIds = revisions.ids;
  var ids = [revisionIds[0], opts, []];

  for (var i = 1, len = revisionIds.length; i < len; i++) {
    ids = [revisionIds[i], {
      status: 'missing'
    }, [ids]];
  }

  return [{
    pos: pos,
    ids: ids
  }];
} // Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc


function parseDoc(doc, newEdits, dbOpts) {
  if (!dbOpts) {
    dbOpts = {
      deterministic_revs: true
    };
  }

  var nRevNum;
  var newRevId;
  var revInfo;
  var opts = {
    status: 'available'
  };

  if (doc._deleted) {
    opts.deleted = true;
  }

  if (newEdits) {
    if (!doc._id) {
      doc._id = uuid();
    }

    newRevId = rev$$1(doc, dbOpts.deterministic_revs);

    if (doc._rev) {
      revInfo = parseRevisionInfo(doc._rev);

      if (revInfo.error) {
        return revInfo;
      }

      doc._rev_tree = [{
        pos: revInfo.prefix,
        ids: [revInfo.id, {
          status: 'missing'
        }, [[newRevId, opts, []]]]
      }];
      nRevNum = revInfo.prefix + 1;
    } else {
      doc._rev_tree = [{
        pos: 1,
        ids: [newRevId, opts, []]
      }];
      nRevNum = 1;
    }
  } else {
    if (doc._revisions) {
      doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
      nRevNum = doc._revisions.start;
      newRevId = doc._revisions.ids[0];
    }

    if (!doc._rev_tree) {
      revInfo = parseRevisionInfo(doc._rev);

      if (revInfo.error) {
        return revInfo;
      }

      nRevNum = revInfo.prefix;
      newRevId = revInfo.id;
      doc._rev_tree = [{
        pos: nRevNum,
        ids: [newRevId, opts, []]
      }];
    }
  }

  invalidIdError(doc._id);
  doc._rev = nRevNum + '-' + newRevId;
  var result = {
    metadata: {},
    data: {}
  };

  for (var key in doc) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(doc, key)) {
      var specialKey = key[0] === '_';

      if (specialKey && !reservedWords[key]) {
        var error = createError(DOC_VALIDATION, key);
        error.message = DOC_VALIDATION.message + ': ' + key;
        throw error;
      } else if (specialKey && !dataWords[key]) {
        result.metadata[key.slice(1)] = doc[key];
      } else {
        result.data[key] = doc[key];
      }
    }
  }

  return result;
}

function parseBase64(data) {
  try {
    return thisAtob(data);
  } catch (e) {
    var err = createError(BAD_ARG, 'Attachment is not a valid base64 string');
    return {
      error: err
    };
  }
}

function preprocessString(att, blobType, callback) {
  var asBinary = parseBase64(att.data);

  if (asBinary.error) {
    return callback(asBinary.error);
  }

  att.length = asBinary.length;

  if (blobType === 'blob') {
    att.data = binStringToBluffer(asBinary, att.content_type);
  } else if (blobType === 'base64') {
    att.data = thisBtoa(asBinary);
  } else {
    // binary
    att.data = asBinary;
  }

  binaryMd5(asBinary, function (result) {
    att.digest = 'md5-' + result;
    callback();
  });
}

function preprocessBlob(att, blobType, callback) {
  binaryMd5(att.data, function (md5) {
    att.digest = 'md5-' + md5; // size is for blobs (browser), length is for buffers (node)

    att.length = att.data.size || att.data.length || 0;

    if (blobType === 'binary') {
      blobToBinaryString(att.data, function (binString) {
        att.data = binString;
        callback();
      });
    } else if (blobType === 'base64') {
      blobToBase64(att.data, function (b64) {
        att.data = b64;
        callback();
      });
    } else {
      callback();
    }
  });
}

function preprocessAttachment(att, blobType, callback) {
  if (att.stub) {
    return callback();
  }

  if (typeof att.data === 'string') {
    // input is a base64 string
    preprocessString(att, blobType, callback);
  } else {
    // input is a blob
    preprocessBlob(att, blobType, callback);
  }
}

function preprocessAttachments(docInfos, blobType, callback) {
  if (!docInfos.length) {
    return callback();
  }

  var docv = 0;
  var overallErr;
  docInfos.forEach(function (docInfo) {
    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    var recv = 0;

    if (!attachments.length) {
      return done();
    }

    function processedAttachment(err) {
      overallErr = err;
      recv++;

      if (recv === attachments.length) {
        done();
      }
    }

    for (var key in docInfo.data._attachments) {
      if (docInfo.data._attachments.hasOwnProperty(key)) {
        preprocessAttachment(docInfo.data._attachments[key], blobType, processedAttachment);
      }
    }
  });

  function done() {
    docv++;

    if (docInfos.length === docv) {
      if (overallErr) {
        callback(overallErr);
      } else {
        callback();
      }
    }
  }
}

function updateDoc(revLimit, prev, docInfo, results, i, cb, writeDoc, newEdits) {
  if (revExists(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
    results[i] = docInfo;
    return cb();
  } // sometimes this is pre-calculated. historically not always


  var previousWinningRev = prev.winningRev || winningRev(prev);
  var previouslyDeleted = 'deleted' in prev ? prev.deleted : isDeleted(prev, previousWinningRev);
  var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted : isDeleted(docInfo.metadata);
  var isRoot = /^1-/.test(docInfo.metadata.rev);

  if (previouslyDeleted && !deleted && newEdits && isRoot) {
    var newDoc = docInfo.data;
    newDoc._rev = previousWinningRev;
    newDoc._id = docInfo.metadata.id;
    docInfo = parseDoc(newDoc, newEdits);
  }

  var merged = merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
  var inConflict = newEdits && (previouslyDeleted && deleted && merged.conflicts !== 'new_leaf' || !previouslyDeleted && merged.conflicts !== 'new_leaf' || previouslyDeleted && !deleted && merged.conflicts === 'new_branch');

  if (inConflict) {
    var err = createError(REV_CONFLICT);
    results[i] = err;
    return cb();
  }

  var newRev = docInfo.metadata.rev;
  docInfo.metadata.rev_tree = merged.tree;
  docInfo.stemmedRevs = merged.stemmedRevs || [];
  /* istanbul ignore else */

  if (prev.rev_map) {
    docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
  } // recalculate


  var winningRev$$1 = winningRev(docInfo.metadata);
  var winningRevIsDeleted = isDeleted(docInfo.metadata, winningRev$$1); // calculate the total number of documents that were added/removed,
  // from the perspective of total_rows/doc_count

  var delta = previouslyDeleted === winningRevIsDeleted ? 0 : previouslyDeleted < winningRevIsDeleted ? -1 : 1;
  var newRevIsDeleted;

  if (newRev === winningRev$$1) {
    // if the new rev is the same as the winning rev, we can reuse that value
    newRevIsDeleted = winningRevIsDeleted;
  } else {
    // if they're not the same, then we need to recalculate
    newRevIsDeleted = isDeleted(docInfo.metadata, newRev);
  }

  writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, true, delta, i, cb);
}

function rootIsMissing(docInfo) {
  return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
}

function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results, writeDoc, opts, overallCallback) {
  // Default to 1000 locally
  revLimit = revLimit || 1000;

  function insertDoc(docInfo, resultsIdx, callback) {
    // Cant insert new deleted documents
    var winningRev$$1 = winningRev(docInfo.metadata);
    var deleted = isDeleted(docInfo.metadata, winningRev$$1);

    if ('was_delete' in opts && deleted) {
      results[resultsIdx] = createError(MISSING_DOC, 'deleted');
      return callback();
    } // 4712 - detect whether a new document was inserted with a _rev


    var inConflict = newEdits && rootIsMissing(docInfo);

    if (inConflict) {
      var err = createError(REV_CONFLICT);
      results[resultsIdx] = err;
      return callback();
    }

    var delta = deleted ? 0 : 1;
    writeDoc(docInfo, winningRev$$1, deleted, deleted, false, delta, resultsIdx, callback);
  }

  var newEdits = opts.new_edits;
  var idsToDocs = new ExportedMap();
  var docsDone = 0;
  var docsToDo = docInfos.length;

  function checkAllDocsDone() {
    if (++docsDone === docsToDo && overallCallback) {
      overallCallback();
    }
  }

  docInfos.forEach(function (currentDoc, resultsIdx) {
    if (currentDoc._id && isLocalId(currentDoc._id)) {
      var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
      api[fun](currentDoc, {
        ctx: tx
      }, function (err, res) {
        results[resultsIdx] = err || res;
        checkAllDocsDone();
      });
      return;
    }

    var id = currentDoc.metadata.id;

    if (idsToDocs.has(id)) {
      docsToDo--; // duplicate

      idsToDocs.get(id).push([currentDoc, resultsIdx]);
    } else {
      idsToDocs.set(id, [[currentDoc, resultsIdx]]);
    }
  }); // in the case of new_edits, the user can provide multiple docs
  // with the same id. these need to be processed sequentially

  idsToDocs.forEach(function (docs, id) {
    var numDone = 0;

    function docWritten() {
      if (++numDone < docs.length) {
        nextDoc();
      } else {
        checkAllDocsDone();
      }
    }

    function nextDoc() {
      var value = docs[numDone];
      var currentDoc = value[0];
      var resultsIdx = value[1];

      if (fetchedDocs.has(id)) {
        updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results, resultsIdx, docWritten, writeDoc, newEdits);
      } else {
        // Ensure stemming applies to new writes as well
        var merged = merge([], currentDoc.metadata.rev_tree[0], revLimit);
        currentDoc.metadata.rev_tree = merged.tree;
        currentDoc.stemmedRevs = merged.stemmedRevs || [];
        insertDoc(currentDoc, resultsIdx, docWritten);
      }
    }

    nextDoc();
  });
} // IndexedDB requires a versioned database structure, so we use the
// version here to manage migrations.


var ADAPTER_VERSION = 5; // The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
// Keyed by document id

var DOC_STORE = 'document-store'; // BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id

var BY_SEQ_STORE = 'by-sequence'; // Where we store attachments

var ATTACH_STORE = 'attach-store'; // Where we store many-to-many relations
// between attachment digests and seqs

var ATTACH_AND_SEQ_STORE = 'attach-seq-store'; // Where we store database-wide meta data in a single record
// keyed by id: META_STORE

var META_STORE = 'meta-store'; // Where we store local documents

var LOCAL_STORE = 'local-store'; // Where we detect blob support

var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';

function safeJsonParse(str) {
  // This try/catch guards against stack overflow errors.
  // JSON.parse() is faster than vuvuzela.parse() but vuvuzela
  // cannot overflow.
  try {
    return JSON.parse(str);
  } catch (e) {
    /* istanbul ignore next */
    return _vuvuzela.default.parse(str);
  }
}

function safeJsonStringify(json) {
  try {
    return JSON.stringify(json);
  } catch (e) {
    /* istanbul ignore next */
    return _vuvuzela.default.stringify(json);
  }
}

function idbError(callback) {
  return function (evt) {
    var message = 'unknown_error';

    if (evt.target && evt.target.error) {
      message = evt.target.error.name || evt.target.error.message;
    }

    callback(createError(IDB_ERROR, message, evt.type));
  };
} // Unfortunately, the metadata has to be stringified
// when it is put into the database, because otherwise
// IndexedDB can throw errors for deeply-nested objects.
// Originally we just used JSON.parse/JSON.stringify; now
// we use this custom vuvuzela library that avoids recursion.
// If we could do it all over again, we'd probably use a
// format for the revision trees other than JSON.


function encodeMetadata(metadata, winningRev, deleted) {
  return {
    data: safeJsonStringify(metadata),
    winningRev: winningRev,
    deletedOrLocal: deleted ? '1' : '0',
    seq: metadata.seq,
    // highest seq for this doc
    id: metadata.id
  };
}

function decodeMetadata(storedObject) {
  if (!storedObject) {
    return null;
  }

  var metadata = safeJsonParse(storedObject.data);
  metadata.winningRev = storedObject.winningRev;
  metadata.deleted = storedObject.deletedOrLocal === '1';
  metadata.seq = storedObject.seq;
  return metadata;
} // read the doc back out from the database. we don't store the
// _id or _rev because we already have _doc_id_rev.


function decodeDoc(doc) {
  if (!doc) {
    return doc;
  }

  var idx = doc._doc_id_rev.lastIndexOf(':');

  doc._id = doc._doc_id_rev.substring(0, idx - 1);
  doc._rev = doc._doc_id_rev.substring(idx + 1);
  delete doc._doc_id_rev;
  return doc;
} // Read a blob from the database, encoding as necessary
// and translating from base64 if the IDB doesn't support
// native Blobs


function readBlobData(body, type, asBlob, callback) {
  if (asBlob) {
    if (!body) {
      callback(createBlob([''], {
        type: type
      }));
    } else if (typeof body !== 'string') {
      // we have blob support
      callback(body);
    } else {
      // no blob support
      callback(b64ToBluffer(body, type));
    }
  } else {
    // as base64 string
    if (!body) {
      callback('');
    } else if (typeof body !== 'string') {
      // we have blob support
      readAsBinaryString(body, function (binary) {
        callback(thisBtoa(binary));
      });
    } else {
      // no blob support
      callback(body);
    }
  }
}

function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
  var attachments = Object.keys(doc._attachments || {});

  if (!attachments.length) {
    return cb && cb();
  }

  var numDone = 0;

  function checkDone() {
    if (++numDone === attachments.length && cb) {
      cb();
    }
  }

  function fetchAttachment(doc, att) {
    var attObj = doc._attachments[att];
    var digest = attObj.digest;
    var req = txn.objectStore(ATTACH_STORE).get(digest);

    req.onsuccess = function (e) {
      attObj.body = e.target.result.body;
      checkDone();
    };
  }

  attachments.forEach(function (att) {
    if (opts.attachments && opts.include_docs) {
      fetchAttachment(doc, att);
    } else {
      doc._attachments[att].stub = true;
      checkDone();
    }
  });
} // IDB-specific postprocessing necessary because
// we don't know whether we stored a true Blob or
// a base64-encoded string, and if it's a Blob it
// needs to be read outside of the transaction context


function postProcessAttachments(results, asBlob) {
  return Promise.all(results.map(function (row) {
    if (row.doc && row.doc._attachments) {
      var attNames = Object.keys(row.doc._attachments);
      return Promise.all(attNames.map(function (att) {
        var attObj = row.doc._attachments[att];

        if (!('body' in attObj)) {
          // already processed
          return;
        }

        var body = attObj.body;
        var type = attObj.content_type;
        return new Promise(function (resolve) {
          readBlobData(body, type, asBlob, function (data) {
            row.doc._attachments[att] = $inject_Object_assign(pick(attObj, ['digest', 'content_type']), {
              data: data
            });
            resolve();
          });
        });
      }));
    }
  }));
}

function compactRevs(revs, docId, txn) {
  var possiblyOrphanedDigests = [];
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var attStore = txn.objectStore(ATTACH_STORE);
  var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
  var count = revs.length;

  function checkDone() {
    count--;

    if (!count) {
      // done processing all revs
      deleteOrphanedAttachments();
    }
  }

  function deleteOrphanedAttachments() {
    if (!possiblyOrphanedDigests.length) {
      return;
    }

    possiblyOrphanedDigests.forEach(function (digest) {
      var countReq = attAndSeqStore.index('digestSeq').count(IDBKeyRange.bound(digest + '::', digest + '::\uffff', false, false));

      countReq.onsuccess = function (e) {
        var count = e.target.result;

        if (!count) {
          // orphaned
          attStore.delete(digest);
        }
      };
    });
  }

  revs.forEach(function (rev) {
    var index = seqStore.index('_doc_id_rev');
    var key = docId + "::" + rev;

    index.getKey(key).onsuccess = function (e) {
      var seq = e.target.result;

      if (typeof seq !== 'number') {
        return checkDone();
      }

      seqStore.delete(seq);
      var cursor = attAndSeqStore.index('seq').openCursor(IDBKeyRange.only(seq));

      cursor.onsuccess = function (event) {
        var cursor = event.target.result;

        if (cursor) {
          var digest = cursor.value.digestSeq.split('::')[0];
          possiblyOrphanedDigests.push(digest);
          attAndSeqStore.delete(cursor.primaryKey);
          cursor.continue();
        } else {
          // done
          checkDone();
        }
      };
    };
  });
}

function openTransactionSafely(idb, stores, mode) {
  try {
    return {
      txn: idb.transaction(stores, mode)
    };
  } catch (err) {
    return {
      error: err
    };
  }
}

var changesHandler = new Changes();

function idbBulkDocs(dbOpts, req, opts, api, idb, callback) {
  var docInfos = req.docs;
  var txn;
  var docStore;
  var bySeqStore;
  var attachStore;
  var attachAndSeqStore;
  var metaStore;
  var docInfoError;
  var metaDoc;

  for (var i = 0, len = docInfos.length; i < len; i++) {
    var doc = docInfos[i];

    if (doc._id && isLocalId(doc._id)) {
      continue;
    }

    doc = docInfos[i] = parseDoc(doc, opts.new_edits, dbOpts);

    if (doc.error && !docInfoError) {
      docInfoError = doc;
    }
  }

  if (docInfoError) {
    return callback(docInfoError);
  }

  var allDocsProcessed = false;
  var docCountDelta = 0;
  var results = new Array(docInfos.length);
  var fetchedDocs = new ExportedMap();
  var preconditionErrored = false;
  var blobType = api._meta.blobSupport ? 'blob' : 'base64';
  preprocessAttachments(docInfos, blobType, function (err) {
    if (err) {
      return callback(err);
    }

    startTransaction();
  });

  function startTransaction() {
    var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, LOCAL_STORE, ATTACH_AND_SEQ_STORE, META_STORE];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    txn = txnResult.txn;
    txn.onabort = idbError(callback);
    txn.ontimeout = idbError(callback);
    txn.oncomplete = complete;
    docStore = txn.objectStore(DOC_STORE);
    bySeqStore = txn.objectStore(BY_SEQ_STORE);
    attachStore = txn.objectStore(ATTACH_STORE);
    attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
    metaStore = txn.objectStore(META_STORE);

    metaStore.get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result;
      updateDocCountIfReady();
    };

    verifyAttachments(function (err) {
      if (err) {
        preconditionErrored = true;
        return callback(err);
      }

      fetchExistingDocs();
    });
  }

  function onAllDocsProcessed() {
    allDocsProcessed = true;
    updateDocCountIfReady();
  }

  function idbProcessDocs() {
    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs, txn, results, writeDoc, opts, onAllDocsProcessed);
  }

  function updateDocCountIfReady() {
    if (!metaDoc || !allDocsProcessed) {
      return;
    } // caching the docCount saves a lot of time in allDocs() and
    // info(), which is why we go to all the trouble of doing this


    metaDoc.docCount += docCountDelta;
    metaStore.put(metaDoc);
  }

  function fetchExistingDocs() {
    if (!docInfos.length) {
      return;
    }

    var numFetched = 0;

    function checkDone() {
      if (++numFetched === docInfos.length) {
        idbProcessDocs();
      }
    }

    function readMetadata(event) {
      var metadata = decodeMetadata(event.target.result);

      if (metadata) {
        fetchedDocs.set(metadata.id, metadata);
      }

      checkDone();
    }

    for (var i = 0, len = docInfos.length; i < len; i++) {
      var docInfo = docInfos[i];

      if (docInfo._id && isLocalId(docInfo._id)) {
        checkDone(); // skip local docs

        continue;
      }

      var req = docStore.get(docInfo.metadata.id);
      req.onsuccess = readMetadata;
    }
  }

  function complete() {
    if (preconditionErrored) {
      return;
    }

    changesHandler.notify(api._meta.name);
    callback(null, results);
  }

  function verifyAttachment(digest, callback) {
    var req = attachStore.get(digest);

    req.onsuccess = function (e) {
      if (!e.target.result) {
        var err = createError(MISSING_STUB, 'unknown stub attachment with digest ' + digest);
        err.status = 412;
        callback(err);
      } else {
        callback();
      }
    };
  }

  function verifyAttachments(finish) {
    var digests = [];
    docInfos.forEach(function (docInfo) {
      if (docInfo.data && docInfo.data._attachments) {
        Object.keys(docInfo.data._attachments).forEach(function (filename) {
          var att = docInfo.data._attachments[filename];

          if (att.stub) {
            digests.push(att.digest);
          }
        });
      }
    });

    if (!digests.length) {
      return finish();
    }

    var numDone = 0;
    var err;

    function checkDone() {
      if (++numDone === digests.length) {
        finish(err);
      }
    }

    digests.forEach(function (digest) {
      verifyAttachment(digest, function (attErr) {
        if (attErr && !err) {
          err = attErr;
        }

        checkDone();
      });
    });
  }

  function writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, isUpdate, delta, resultsIdx, callback) {
    docInfo.metadata.winningRev = winningRev$$1;
    docInfo.metadata.deleted = winningRevIsDeleted;
    var doc = docInfo.data;
    doc._id = docInfo.metadata.id;
    doc._rev = docInfo.metadata.rev;

    if (newRevIsDeleted) {
      doc._deleted = true;
    }

    var hasAttachments = doc._attachments && Object.keys(doc._attachments).length;

    if (hasAttachments) {
      return writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
    }

    docCountDelta += delta;
    updateDocCountIfReady();
    finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
  }

  function finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
    var doc = docInfo.data;
    var metadata = docInfo.metadata;
    doc._doc_id_rev = metadata.id + '::' + metadata.rev;
    delete doc._id;
    delete doc._rev;

    function afterPutDoc(e) {
      var revsToDelete = docInfo.stemmedRevs || [];

      if (isUpdate && api.auto_compaction) {
        revsToDelete = revsToDelete.concat(compactTree(docInfo.metadata));
      }

      if (revsToDelete && revsToDelete.length) {
        compactRevs(revsToDelete, docInfo.metadata.id, txn);
      }

      metadata.seq = e.target.result; // Current _rev is calculated from _rev_tree on read
      // delete metadata.rev;

      var metadataToStore = encodeMetadata(metadata, winningRev$$1, winningRevIsDeleted);
      var metaDataReq = docStore.put(metadataToStore);
      metaDataReq.onsuccess = afterPutMetadata;
    }

    function afterPutDocError(e) {
      // ConstraintError, need to update, not put (see #1638 for details)
      e.preventDefault(); // avoid transaction abort

      e.stopPropagation(); // avoid transaction onerror

      var index = bySeqStore.index('_doc_id_rev');
      var getKeyReq = index.getKey(doc._doc_id_rev);

      getKeyReq.onsuccess = function (e) {
        var putReq = bySeqStore.put(doc, e.target.result);
        putReq.onsuccess = afterPutDoc;
      };
    }

    function afterPutMetadata() {
      results[resultsIdx] = {
        ok: true,
        id: metadata.id,
        rev: metadata.rev
      };
      fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
      insertAttachmentMappings(docInfo, metadata.seq, callback);
    }

    var putReq = bySeqStore.put(doc);
    putReq.onsuccess = afterPutDoc;
    putReq.onerror = afterPutDocError;
  }

  function writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
    var doc = docInfo.data;
    var numDone = 0;
    var attachments = Object.keys(doc._attachments);

    function collectResults() {
      if (numDone === attachments.length) {
        finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
      }
    }

    function attachmentSaved() {
      numDone++;
      collectResults();
    }

    attachments.forEach(function (key) {
      var att = docInfo.data._attachments[key];

      if (!att.stub) {
        var data = att.data;
        delete att.data;
        att.revpos = parseInt(winningRev$$1, 10);
        var digest = att.digest;
        saveAttachment(digest, data, attachmentSaved);
      } else {
        numDone++;
        collectResults();
      }
    });
  } // map seqs to attachment digests, which
  // we will need later during compaction


  function insertAttachmentMappings(docInfo, seq, callback) {
    var attsAdded = 0;
    var attsToAdd = Object.keys(docInfo.data._attachments || {});

    if (!attsToAdd.length) {
      return callback();
    }

    function checkDone() {
      if (++attsAdded === attsToAdd.length) {
        callback();
      }
    }

    function add(att) {
      var digest = docInfo.data._attachments[att].digest;
      var req = attachAndSeqStore.put({
        seq: seq,
        digestSeq: digest + '::' + seq
      });
      req.onsuccess = checkDone;

      req.onerror = function (e) {
        // this callback is for a constaint error, which we ignore
        // because this docid/rev has already been associated with
        // the digest (e.g. when new_edits == false)
        e.preventDefault(); // avoid transaction abort

        e.stopPropagation(); // avoid transaction onerror

        checkDone();
      };
    }

    for (var i = 0; i < attsToAdd.length; i++) {
      add(attsToAdd[i]); // do in parallel
    }
  }

  function saveAttachment(digest, data, callback) {
    var getKeyReq = attachStore.count(digest);

    getKeyReq.onsuccess = function (e) {
      var count = e.target.result;

      if (count) {
        return callback(); // already exists
      }

      var newAtt = {
        digest: digest,
        body: data
      };
      var putReq = attachStore.put(newAtt);
      putReq.onsuccess = callback;
    };
  }
} // Abstraction over IDBCursor and getAll()/getAllKeys() that allows us to batch our operations
// while falling back to a normal IDBCursor operation on browsers that don't support getAll() or
// getAllKeys(). This allows for a much faster implementation than just straight-up cursors, because
// we're not processing each document one-at-a-time.


function runBatchedCursor(objectStore, keyRange, descending, batchSize, onBatch) {
  if (batchSize === -1) {
    batchSize = 1000;
  } // Bail out of getAll()/getAllKeys() in the following cases:
  // 1) either method is unsupported - we need both
  // 2) batchSize is 1 (might as well use IDBCursor)
  // 3) descending – no real way to do this via getAll()/getAllKeys()


  var useGetAll = typeof objectStore.getAll === 'function' && typeof objectStore.getAllKeys === 'function' && batchSize > 1 && !descending;
  var keysBatch;
  var valuesBatch;
  var pseudoCursor;

  function onGetAll(e) {
    valuesBatch = e.target.result;

    if (keysBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function onGetAllKeys(e) {
    keysBatch = e.target.result;

    if (valuesBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function continuePseudoCursor() {
    if (!keysBatch.length) {
      // no more results
      return onBatch();
    } // fetch next batch, exclusive start


    var lastKey = keysBatch[keysBatch.length - 1];
    var newKeyRange;

    if (keyRange && keyRange.upper) {
      try {
        newKeyRange = IDBKeyRange.bound(lastKey, keyRange.upper, true, keyRange.upperOpen);
      } catch (e) {
        if (e.name === "DataError" && e.code === 0) {
          return onBatch(); // we're done, startkey and endkey are equal
        }
      }
    } else {
      newKeyRange = IDBKeyRange.lowerBound(lastKey, true);
    }

    keyRange = newKeyRange;
    keysBatch = null;
    valuesBatch = null;
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  }

  function onCursor(e) {
    var cursor = e.target.result;

    if (!cursor) {
      // done
      return onBatch();
    } // regular IDBCursor acts like a batch where batch size is always 1


    onBatch([cursor.key], [cursor.value], cursor);
  }

  if (useGetAll) {
    pseudoCursor = {
      "continue": continuePseudoCursor
    };
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  } else if (descending) {
    objectStore.openCursor(keyRange, 'prev').onsuccess = onCursor;
  } else {
    objectStore.openCursor(keyRange).onsuccess = onCursor;
  }
} // simple shim for objectStore.getAll(), falling back to IDBCursor


function getAll(objectStore, keyRange, onSuccess) {
  if (typeof objectStore.getAll === 'function') {
    // use native getAll
    objectStore.getAll(keyRange).onsuccess = onSuccess;
    return;
  } // fall back to cursors


  var values = [];

  function onCursor(e) {
    var cursor = e.target.result;

    if (cursor) {
      values.push(cursor.value);
      cursor.continue();
    } else {
      onSuccess({
        target: {
          result: values
        }
      });
    }
  }

  objectStore.openCursor(keyRange).onsuccess = onCursor;
}

function allDocsKeys(keys, docStore, onBatch) {
  // It's not guaranted to be returned in right order  
  var valuesBatch = new Array(keys.length);
  var count = 0;
  keys.forEach(function (key, index) {
    docStore.get(key).onsuccess = function (event) {
      if (event.target.result) {
        valuesBatch[index] = event.target.result;
      } else {
        valuesBatch[index] = {
          key: key,
          error: 'not_found'
        };
      }

      count++;

      if (count === keys.length) {
        onBatch(keys, valuesBatch, {});
      }
    };
  });
}

function createKeyRange(start, end, inclusiveEnd, key, descending) {
  try {
    if (start && end) {
      if (descending) {
        return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
      } else {
        return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
      }
    } else if (start) {
      if (descending) {
        return IDBKeyRange.upperBound(start);
      } else {
        return IDBKeyRange.lowerBound(start);
      }
    } else if (end) {
      if (descending) {
        return IDBKeyRange.lowerBound(end, !inclusiveEnd);
      } else {
        return IDBKeyRange.upperBound(end, !inclusiveEnd);
      }
    } else if (key) {
      return IDBKeyRange.only(key);
    }
  } catch (e) {
    return {
      error: e
    };
  }

  return null;
}

function idbAllDocs(opts, idb, callback) {
  var start = 'startkey' in opts ? opts.startkey : false;
  var end = 'endkey' in opts ? opts.endkey : false;
  var key = 'key' in opts ? opts.key : false;
  var keys = 'keys' in opts ? opts.keys : false;
  var skip = opts.skip || 0;
  var limit = typeof opts.limit === 'number' ? opts.limit : -1;
  var inclusiveEnd = opts.inclusive_end !== false;
  var keyRange;
  var keyRangeError;

  if (!keys) {
    keyRange = createKeyRange(start, end, inclusiveEnd, key, opts.descending);
    keyRangeError = keyRange && keyRange.error;

    if (keyRangeError && !(keyRangeError.name === "DataError" && keyRangeError.code === 0)) {
      // DataError with error code 0 indicates start is less than end, so
      // can just do an empty query. Else need to throw
      return callback(createError(IDB_ERROR, keyRangeError.name, keyRangeError.message));
    }
  }

  var stores = [DOC_STORE, BY_SEQ_STORE, META_STORE];

  if (opts.attachments) {
    stores.push(ATTACH_STORE);
  }

  var txnResult = openTransactionSafely(idb, stores, 'readonly');

  if (txnResult.error) {
    return callback(txnResult.error);
  }

  var txn = txnResult.txn;
  txn.oncomplete = onTxnComplete;
  txn.onabort = idbError(callback);
  var docStore = txn.objectStore(DOC_STORE);
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var metaStore = txn.objectStore(META_STORE);
  var docIdRevIndex = seqStore.index('_doc_id_rev');
  var results = [];
  var docCount;
  var updateSeq;

  metaStore.get(META_STORE).onsuccess = function (e) {
    docCount = e.target.result.docCount;
  };
  /* istanbul ignore if */


  if (opts.update_seq) {
    getMaxUpdateSeq(seqStore, function (e) {
      if (e.target.result && e.target.result.length > 0) {
        updateSeq = e.target.result[0];
      }
    });
  }

  function getMaxUpdateSeq(objectStore, onSuccess) {
    function onCursor(e) {
      var cursor = e.target.result;
      var maxKey = undefined;

      if (cursor && cursor.key) {
        maxKey = cursor.key;
      }

      return onSuccess({
        target: {
          result: [maxKey]
        }
      });
    }

    objectStore.openCursor(null, 'prev').onsuccess = onCursor;
  } // if the user specifies include_docs=true, then we don't
  // want to block the main cursor while we're fetching the doc


  function fetchDocAsynchronously(metadata, row, winningRev$$1) {
    var key = metadata.id + "::" + winningRev$$1;

    docIdRevIndex.get(key).onsuccess = function onGetDoc(e) {
      row.doc = decodeDoc(e.target.result) || {};

      if (opts.conflicts) {
        var conflicts = collectConflicts(metadata);

        if (conflicts.length) {
          row.doc._conflicts = conflicts;
        }
      }

      fetchAttachmentsIfNecessary(row.doc, opts, txn);
    };
  }

  function allDocsInner(winningRev$$1, metadata) {
    var row = {
      id: metadata.id,
      key: metadata.id,
      value: {
        rev: winningRev$$1
      }
    };
    var deleted = metadata.deleted;

    if (deleted) {
      if (keys) {
        results.push(row); // deleted docs are okay with "keys" requests

        row.value.deleted = true;
        row.doc = null;
      }
    } else if (skip-- <= 0) {
      results.push(row);

      if (opts.include_docs) {
        fetchDocAsynchronously(metadata, row, winningRev$$1);
      }
    }
  }

  function processBatch(batchValues) {
    for (var i = 0, len = batchValues.length; i < len; i++) {
      if (results.length === limit) {
        break;
      }

      var batchValue = batchValues[i];

      if (batchValue.error && keys) {
        // key was not found with "keys" requests
        results.push(batchValue);
        continue;
      }

      var metadata = decodeMetadata(batchValue);
      var winningRev$$1 = metadata.winningRev;
      allDocsInner(winningRev$$1, metadata);
    }
  }

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor) {
      return;
    }

    processBatch(batchValues);

    if (results.length < limit) {
      cursor.continue();
    }
  }

  function onGetAll(e) {
    var values = e.target.result;

    if (opts.descending) {
      values = values.reverse();
    }

    processBatch(values);
  }

  function onResultsReady() {
    var returnVal = {
      total_rows: docCount,
      offset: opts.skip,
      rows: results
    };
    /* istanbul ignore if */

    if (opts.update_seq && updateSeq !== undefined) {
      returnVal.update_seq = updateSeq;
    }

    callback(null, returnVal);
  }

  function onTxnComplete() {
    if (opts.attachments) {
      postProcessAttachments(results, opts.binary).then(onResultsReady);
    } else {
      onResultsReady();
    }
  } // don't bother doing any requests if start > end or limit === 0


  if (keyRangeError || limit === 0) {
    return;
  }

  if (keys) {
    return allDocsKeys(opts.keys, docStore, onBatch);
  }

  if (limit === -1) {
    // just fetch everything
    return getAll(docStore, keyRange, onGetAll);
  } // else do a cursor
  // choose a batch size based on the skip, since we'll need to skip that many


  runBatchedCursor(docStore, keyRange, opts.descending, limit + skip, onBatch);
} //
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//


function checkBlobSupport(txn) {
  return new Promise(function (resolve) {
    var blob$$1 = createBlob(['']);
    var req = txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob$$1, 'key');

    req.onsuccess = function () {
      var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
      var matchedEdge = navigator.userAgent.match(/Edge\//); // MS Edge pretends to be Chrome 42:
      // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx

      resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
    };

    req.onerror = txn.onabort = function (e) {
      // If the transaction aborts now its due to not being able to
      // write to the database, likely due to the disk being full
      e.preventDefault();
      e.stopPropagation();
      resolve(false);
    };
  }).catch(function () {
    return false; // error, so assume unsupported
  });
}

function countDocs(txn, cb) {
  var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');

  index.count(IDBKeyRange.only('0')).onsuccess = function (e) {
    cb(e.target.result);
  };
} // This task queue ensures that IDB open calls are done in their own tick


var running = false;
var queue = [];

function tryCode(fun, err, res, PouchDB) {
  try {
    fun(err, res);
  } catch (err) {
    // Shouldn't happen, but in some odd cases
    // IndexedDB implementations might throw a sync
    // error, in which case this will at least log it.
    PouchDB.emit('error', err);
  }
}

function applyNext() {
  if (running || !queue.length) {
    return;
  }

  running = true;
  queue.shift()();
}

function enqueueTask(action, callback, PouchDB) {
  queue.push(function runAction() {
    action(function runCallback(err, res) {
      tryCode(callback, err, res, PouchDB);
      running = false;
      (0, _immediate.default)(function runNext() {
        applyNext(PouchDB);
      });
    });
  });
  applyNext();
}

function changes(opts, api, dbName, idb) {
  opts = clone(opts);

  if (opts.continuous) {
    var id = dbName + ':' + uuid();
    changesHandler.addListener(dbName, id, api, opts);
    changesHandler.notify(dbName);
    return {
      cancel: function () {
        changesHandler.removeListener(dbName, id);
      }
    };
  }

  var docIds = opts.doc_ids && new ExportedSet(opts.doc_ids);
  opts.since = opts.since || 0;
  var lastSeq = opts.since;
  var limit = 'limit' in opts ? opts.limit : -1;

  if (limit === 0) {
    limit = 1; // per CouchDB _changes spec
  }

  var results = [];
  var numResults = 0;
  var filter = filterChange(opts);
  var docIdsToMetadata = new ExportedMap();
  var txn;
  var bySeqStore;
  var docStore;
  var docIdRevIndex;

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor || !batchKeys.length) {
      // done
      return;
    }

    var winningDocs = new Array(batchKeys.length);
    var metadatas = new Array(batchKeys.length);

    function processMetadataAndWinningDoc(metadata, winningDoc) {
      var change = opts.processChange(winningDoc, metadata, opts);
      lastSeq = change.seq = metadata.seq;
      var filtered = filter(change);

      if (typeof filtered === 'object') {
        // anything but true/false indicates error
        return Promise.reject(filtered);
      }

      if (!filtered) {
        return Promise.resolve();
      }

      numResults++;

      if (opts.return_docs) {
        results.push(change);
      } // process the attachment immediately
      // for the benefit of live listeners


      if (opts.attachments && opts.include_docs) {
        return new Promise(function (resolve) {
          fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
            postProcessAttachments([change], opts.binary).then(function () {
              resolve(change);
            });
          });
        });
      } else {
        return Promise.resolve(change);
      }
    }

    function onBatchDone() {
      var promises = [];

      for (var i = 0, len = winningDocs.length; i < len; i++) {
        if (numResults === limit) {
          break;
        }

        var winningDoc = winningDocs[i];

        if (!winningDoc) {
          continue;
        }

        var metadata = metadatas[i];
        promises.push(processMetadataAndWinningDoc(metadata, winningDoc));
      }

      Promise.all(promises).then(function (changes) {
        for (var i = 0, len = changes.length; i < len; i++) {
          if (changes[i]) {
            opts.onChange(changes[i]);
          }
        }
      }).catch(opts.complete);

      if (numResults !== limit) {
        cursor.continue();
      }
    } // Fetch all metadatas/winningdocs from this batch in parallel, then process
    // them all only once all data has been collected. This is done in parallel
    // because it's faster than doing it one-at-a-time.


    var numDone = 0;
    batchValues.forEach(function (value, i) {
      var doc = decodeDoc(value);
      var seq = batchKeys[i];
      fetchWinningDocAndMetadata(doc, seq, function (metadata, winningDoc) {
        metadatas[i] = metadata;
        winningDocs[i] = winningDoc;

        if (++numDone === batchKeys.length) {
          onBatchDone();
        }
      });
    });
  }

  function onGetMetadata(doc, seq, metadata, cb) {
    if (metadata.seq !== seq) {
      // some other seq is later
      return cb();
    }

    if (metadata.winningRev === doc._rev) {
      // this is the winning doc
      return cb(metadata, doc);
    } // fetch winning doc in separate request


    var docIdRev = doc._id + '::' + metadata.winningRev;
    var req = docIdRevIndex.get(docIdRev);

    req.onsuccess = function (e) {
      cb(metadata, decodeDoc(e.target.result));
    };
  }

  function fetchWinningDocAndMetadata(doc, seq, cb) {
    if (docIds && !docIds.has(doc._id)) {
      return cb();
    }

    var metadata = docIdsToMetadata.get(doc._id);

    if (metadata) {
      // cached
      return onGetMetadata(doc, seq, metadata, cb);
    } // metadata not cached, have to go fetch it


    docStore.get(doc._id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result);
      docIdsToMetadata.set(doc._id, metadata);
      onGetMetadata(doc, seq, metadata, cb);
    };
  }

  function finish() {
    opts.complete(null, {
      results: results,
      last_seq: lastSeq
    });
  }

  function onTxnComplete() {
    if (!opts.continuous && opts.attachments) {
      // cannot guarantee that postProcessing was already done,
      // so do it again
      postProcessAttachments(results).then(finish);
    } else {
      finish();
    }
  }

  var objectStores = [DOC_STORE, BY_SEQ_STORE];

  if (opts.attachments) {
    objectStores.push(ATTACH_STORE);
  }

  var txnResult = openTransactionSafely(idb, objectStores, 'readonly');

  if (txnResult.error) {
    return opts.complete(txnResult.error);
  }

  txn = txnResult.txn;
  txn.onabort = idbError(opts.complete);
  txn.oncomplete = onTxnComplete;
  bySeqStore = txn.objectStore(BY_SEQ_STORE);
  docStore = txn.objectStore(DOC_STORE);
  docIdRevIndex = bySeqStore.index('_doc_id_rev');
  var keyRange = opts.since && !opts.descending ? IDBKeyRange.lowerBound(opts.since, true) : null;
  runBatchedCursor(bySeqStore, keyRange, opts.descending, limit, onBatch);
}

var cachedDBs = new ExportedMap();
var blobSupportPromise;
var openReqList = new ExportedMap();

function IdbPouch(opts, callback) {
  var api = this;
  enqueueTask(function (thisCallback) {
    init(api, opts, thisCallback);
  }, callback, api.constructor);
}

function init(api, opts, callback) {
  var dbName = opts.name;
  var idb = null;
  api._meta = null; // called when creating a fresh new database

  function createSchema(db) {
    var docStore = db.createObjectStore(DOC_STORE, {
      keyPath: 'id'
    });
    db.createObjectStore(BY_SEQ_STORE, {
      autoIncrement: true
    }).createIndex('_doc_id_rev', '_doc_id_rev', {
      unique: true
    });
    db.createObjectStore(ATTACH_STORE, {
      keyPath: 'digest'
    });
    db.createObjectStore(META_STORE, {
      keyPath: 'id',
      autoIncrement: false
    });
    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE); // added in v2

    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {
      unique: false
    }); // added in v3

    db.createObjectStore(LOCAL_STORE, {
      keyPath: '_id'
    }); // added in v4

    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, {
      autoIncrement: true
    });
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {
      unique: true
    });
  } // migration to version 2
  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
  // store local docs in the main doc-store, but whaddyagonnado


  function addDeletedOrLocalIndex(txn, callback) {
    var docStore = txn.objectStore(DOC_STORE);
    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {
      unique: false
    });

    docStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        var metadata = cursor.value;
        var deleted = isDeleted(metadata);
        metadata.deletedOrLocal = deleted ? "1" : "0";
        docStore.put(metadata);
        cursor.continue();
      } else {
        callback();
      }
    };
  } // migration to version 3 (part 1)


  function createLocalStoreSchema(db) {
    db.createObjectStore(LOCAL_STORE, {
      keyPath: '_id'
    }).createIndex('_doc_id_rev', '_doc_id_rev', {
      unique: true
    });
  } // migration to version 3 (part 2)


  function migrateLocalStore(txn, cb) {
    var localStore = txn.objectStore(LOCAL_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var seqStore = txn.objectStore(BY_SEQ_STORE);
    var cursor = docStore.openCursor();

    cursor.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        var metadata = cursor.value;
        var docId = metadata.id;
        var local = isLocalId(docId);
        var rev = winningRev(metadata);

        if (local) {
          var docIdRev = docId + "::" + rev; // remove all seq entries
          // associated with this docId

          var start = docId + "::";
          var end = docId + "::~";
          var index = seqStore.index('_doc_id_rev');
          var range = IDBKeyRange.bound(start, end, false, false);
          var seqCursor = index.openCursor(range);

          seqCursor.onsuccess = function (e) {
            seqCursor = e.target.result;

            if (!seqCursor) {
              // done
              docStore.delete(cursor.primaryKey);
              cursor.continue();
            } else {
              var data = seqCursor.value;

              if (data._doc_id_rev === docIdRev) {
                localStore.put(data);
              }

              seqStore.delete(seqCursor.primaryKey);
              seqCursor.continue();
            }
          };
        } else {
          cursor.continue();
        }
      } else if (cb) {
        cb();
      }
    };
  } // migration to version 4 (part 1)


  function addAttachAndSeqStore(db) {
    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, {
      autoIncrement: true
    });
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {
      unique: true
    });
  } // migration to version 4 (part 2)


  function migrateAttsAndSeqs(txn, callback) {
    var seqStore = txn.objectStore(BY_SEQ_STORE);
    var attStore = txn.objectStore(ATTACH_STORE);
    var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE); // need to actually populate the table. this is the expensive part,
    // so as an optimization, check first that this database even
    // contains attachments

    var req = attStore.count();

    req.onsuccess = function (e) {
      var count = e.target.result;

      if (!count) {
        return callback(); // done
      }

      seqStore.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;

        if (!cursor) {
          return callback(); // done
        }

        var doc = cursor.value;
        var seq = cursor.primaryKey;
        var atts = Object.keys(doc._attachments || {});
        var digestMap = {};

        for (var j = 0; j < atts.length; j++) {
          var att = doc._attachments[atts[j]];
          digestMap[att.digest] = true; // uniq digests, just in case
        }

        var digests = Object.keys(digestMap);

        for (j = 0; j < digests.length; j++) {
          var digest = digests[j];
          attAndSeqStore.put({
            seq: seq,
            digestSeq: digest + '::' + seq
          });
        }

        cursor.continue();
      };
    };
  } // migration to version 5
  // Instead of relying on on-the-fly migration of metadata,
  // this brings the doc-store to its modern form:
  // - metadata.winningrev
  // - metadata.seq
  // - stringify the metadata when storing it


  function migrateMetadata(txn) {
    function decodeMetadataCompat(storedObject) {
      if (!storedObject.data) {
        // old format, when we didn't store it stringified
        storedObject.deleted = storedObject.deletedOrLocal === '1';
        return storedObject;
      }

      return decodeMetadata(storedObject);
    } // ensure that every metadata has a winningRev and seq,
    // which was previously created on-the-fly but better to migrate


    var bySeqStore = txn.objectStore(BY_SEQ_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var cursor = docStore.openCursor();

    cursor.onsuccess = function (e) {
      var cursor = e.target.result;

      if (!cursor) {
        return; // done
      }

      var metadata = decodeMetadataCompat(cursor.value);
      metadata.winningRev = metadata.winningRev || winningRev(metadata);

      function fetchMetadataSeq() {
        // metadata.seq was added post-3.2.0, so if it's missing,
        // we need to fetch it manually
        var start = metadata.id + '::';
        var end = metadata.id + '::\uffff';
        var req = bySeqStore.index('_doc_id_rev').openCursor(IDBKeyRange.bound(start, end));
        var metadataSeq = 0;

        req.onsuccess = function (e) {
          var cursor = e.target.result;

          if (!cursor) {
            metadata.seq = metadataSeq;
            return onGetMetadataSeq();
          }

          var seq = cursor.primaryKey;

          if (seq > metadataSeq) {
            metadataSeq = seq;
          }

          cursor.continue();
        };
      }

      function onGetMetadataSeq() {
        var metadataToStore = encodeMetadata(metadata, metadata.winningRev, metadata.deleted);
        var req = docStore.put(metadataToStore);

        req.onsuccess = function () {
          cursor.continue();
        };
      }

      if (metadata.seq) {
        return onGetMetadataSeq();
      }

      fetchMetadataSeq();
    };
  }

  api._remote = false;

  api.type = function () {
    return 'idb';
  };

  api._id = toPromise(function (callback) {
    callback(null, api._meta.instanceId);
  });

  api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
    idbBulkDocs(opts, req, reqOpts, api, idb, callback);
  }; // First we look up the metadata in the ids database, then we fetch the
  // current revision(s) from the by sequence store


  api._get = function idb_get(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    var txn = opts.ctx;

    if (!txn) {
      var txnResult = openTransactionSafely(idb, [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      txn = txnResult.txn;
    }

    function finish() {
      callback(err, {
        doc: doc,
        metadata: metadata,
        ctx: txn
      });
    }

    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result); // we can determine the result here if:
      // 1. there is no such document
      // 2. the document is deleted and we don't ask about specific rev
      // When we ask with opts.rev we expect the answer to be either
      // doc (possibly with _deleted=true) or missing error

      if (!metadata) {
        err = createError(MISSING_DOC, 'missing');
        return finish();
      }

      var rev;

      if (!opts.rev) {
        rev = metadata.winningRev;
        var deleted = isDeleted(metadata);

        if (deleted) {
          err = createError(MISSING_DOC, "deleted");
          return finish();
        }
      } else {
        rev = opts.latest ? latest(opts.rev, metadata) : opts.rev;
      }

      var objectStore = txn.objectStore(BY_SEQ_STORE);
      var key = metadata.id + '::' + rev;

      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
        doc = e.target.result;

        if (doc) {
          doc = decodeDoc(doc);
        }

        if (!doc) {
          err = createError(MISSING_DOC, 'missing');
          return finish();
        }

        finish();
      };
    };
  };

  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
    var txn;

    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      var txnResult = openTransactionSafely(idb, [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      txn = txnResult.txn;
    }

    var digest = attachment.digest;
    var type = attachment.content_type;

    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
      var body = e.target.result.body;
      readBlobData(body, type, opts.binary, function (blobData) {
        callback(null, blobData);
      });
    };
  };

  api._info = function idb_info(callback) {
    var updateSeq;
    var docCount;
    var txnResult = openTransactionSafely(idb, [META_STORE, BY_SEQ_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;

    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      docCount = e.target.result.docCount;
    };

    txn.objectStore(BY_SEQ_STORE).openCursor(null, 'prev').onsuccess = function (e) {
      var cursor = e.target.result;
      updateSeq = cursor ? cursor.key : 0;
    };

    txn.oncomplete = function () {
      callback(null, {
        doc_count: docCount,
        update_seq: updateSeq,
        // for debugging
        idb_attachment_format: api._meta.blobSupport ? 'binary' : 'base64'
      });
    };
  };

  api._allDocs = function idb_allDocs(opts, callback) {
    idbAllDocs(opts, idb, callback);
  };

  api._changes = function idbChanges(opts) {
    return changes(opts, api, dbName, idb);
  };

  api._close = function (callback) {
    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
    // "Returns immediately and closes the connection in a separate thread..."
    idb.close();
    cachedDBs.delete(dbName);
    callback();
  };

  api._getRevisionTree = function (docId, callback) {
    var txnResult = openTransactionSafely(idb, [DOC_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;
    var req = txn.objectStore(DOC_STORE).get(docId);

    req.onsuccess = function (event) {
      var doc = decodeMetadata(event.target.result);

      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        callback(null, doc.rev_tree);
      }
    };
  }; // This function removes revisions of document docId
  // which are listed in revs and sets this document
  // revision to to rev_tree


  api._doCompaction = function (docId, revs, callback) {
    var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, ATTACH_AND_SEQ_STORE];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;
    var docStore = txn.objectStore(DOC_STORE);

    docStore.get(docId).onsuccess = function (event) {
      var metadata = decodeMetadata(event.target.result);
      traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
        var rev = pos + '-' + revHash;

        if (revs.indexOf(rev) !== -1) {
          opts.status = 'missing';
        }
      });
      compactRevs(revs, docId, txn);
      var winningRev$$1 = metadata.winningRev;
      var deleted = metadata.deleted;
      txn.objectStore(DOC_STORE).put(encodeMetadata(metadata, winningRev$$1, deleted));
    };

    txn.onabort = idbError(callback);

    txn.oncomplete = function () {
      callback();
    };
  };

  api._getLocal = function (id, callback) {
    var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var tx = txnResult.txn;
    var req = tx.objectStore(LOCAL_STORE).get(id);
    req.onerror = idbError(callback);

    req.onsuccess = function (e) {
      var doc = e.target.result;

      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        delete doc['_doc_id_rev']; // for backwards compat

        callback(null, doc);
      }
    };
  };

  api._putLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    delete doc._revisions; // ignore this, trust the rev

    var oldRev = doc._rev;
    var id = doc._id;

    if (!oldRev) {
      doc._rev = '0-1';
    } else {
      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
    }

    var tx = opts.ctx;
    var ret;

    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      tx = txnResult.txn;
      tx.onerror = idbError(callback);

      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var oStore = tx.objectStore(LOCAL_STORE);
    var req;

    if (oldRev) {
      req = oStore.get(id);

      req.onsuccess = function (e) {
        var oldDoc = e.target.result;

        if (!oldDoc || oldDoc._rev !== oldRev) {
          callback(createError(REV_CONFLICT));
        } else {
          // update
          var req = oStore.put(doc);

          req.onsuccess = function () {
            ret = {
              ok: true,
              id: doc._id,
              rev: doc._rev
            };

            if (opts.ctx) {
              // return immediately
              callback(null, ret);
            }
          };
        }
      };
    } else {
      // new doc
      req = oStore.add(doc);

      req.onerror = function (e) {
        // constraint error, already exists
        callback(createError(REV_CONFLICT));
        e.preventDefault(); // avoid transaction abort

        e.stopPropagation(); // avoid transaction onerror
      };

      req.onsuccess = function () {
        ret = {
          ok: true,
          id: doc._id,
          rev: doc._rev
        };

        if (opts.ctx) {
          // return immediately
          callback(null, ret);
        }
      };
    }
  };

  api._removeLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    var tx = opts.ctx;

    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      tx = txnResult.txn;

      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var ret;
    var id = doc._id;
    var oStore = tx.objectStore(LOCAL_STORE);
    var req = oStore.get(id);
    req.onerror = idbError(callback);

    req.onsuccess = function (e) {
      var oldDoc = e.target.result;

      if (!oldDoc || oldDoc._rev !== doc._rev) {
        callback(createError(MISSING_DOC));
      } else {
        oStore.delete(id);
        ret = {
          ok: true,
          id: id,
          rev: '0-0'
        };

        if (opts.ctx) {
          // return immediately
          callback(null, ret);
        }
      }
    };
  };

  api._destroy = function (opts, callback) {
    changesHandler.removeAllListeners(dbName); //Close open request for "dbName" database to fix ie delay.

    var openReq = openReqList.get(dbName);

    if (openReq && openReq.result) {
      openReq.result.close();
      cachedDBs.delete(dbName);
    }

    var req = indexedDB.deleteDatabase(dbName);

    req.onsuccess = function () {
      //Remove open request from the list.
      openReqList.delete(dbName);

      if (hasLocalStorage() && dbName in localStorage) {
        delete localStorage[dbName];
      }

      callback(null, {
        'ok': true
      });
    };

    req.onerror = idbError(callback);
  };

  var cached = cachedDBs.get(dbName);

  if (cached) {
    idb = cached.idb;
    api._meta = cached.global;
    return (0, _immediate.default)(function () {
      callback(null, api);
    });
  }

  var req = indexedDB.open(dbName, ADAPTER_VERSION);
  openReqList.set(dbName, req);

  req.onupgradeneeded = function (e) {
    var db = e.target.result;

    if (e.oldVersion < 1) {
      return createSchema(db); // new db, initial schema
    } // do migrations


    var txn = e.currentTarget.transaction; // these migrations have to be done in this function, before
    // control is returned to the event loop, because IndexedDB

    if (e.oldVersion < 3) {
      createLocalStoreSchema(db); // v2 -> v3
    }

    if (e.oldVersion < 4) {
      addAttachAndSeqStore(db); // v3 -> v4
    }

    var migrations = [addDeletedOrLocalIndex, // v1 -> v2
    migrateLocalStore, // v2 -> v3
    migrateAttsAndSeqs, // v3 -> v4
    migrateMetadata // v4 -> v5
    ];
    var i = e.oldVersion;

    function next() {
      var migration = migrations[i - 1];
      i++;

      if (migration) {
        migration(txn, next);
      }
    }

    next();
  };

  req.onsuccess = function (e) {
    idb = e.target.result;

    idb.onversionchange = function () {
      idb.close();
      cachedDBs.delete(dbName);
    };

    idb.onabort = function (e) {
      guardedConsole('error', 'Database has a global failure', e.target.error);
      idb.close();
      cachedDBs.delete(dbName);
    }; // Do a few setup operations (in parallel as much as possible):
    // 1. Fetch meta doc
    // 2. Check blob support
    // 3. Calculate docCount
    // 4. Generate an instanceId if necessary
    // 5. Store docCount and instanceId on meta doc


    var txn = idb.transaction([META_STORE, DETECT_BLOB_SUPPORT_STORE, DOC_STORE], 'readwrite');
    var storedMetaDoc = false;
    var metaDoc;
    var docCount;
    var blobSupport;
    var instanceId;

    function completeSetup() {
      if (typeof blobSupport === 'undefined' || !storedMetaDoc) {
        return;
      }

      api._meta = {
        name: dbName,
        instanceId: instanceId,
        blobSupport: blobSupport
      };
      cachedDBs.set(dbName, {
        idb: idb,
        global: api._meta
      });
      callback(null, api);
    }

    function storeMetaDocIfReady() {
      if (typeof docCount === 'undefined' || typeof metaDoc === 'undefined') {
        return;
      }

      var instanceKey = dbName + '_id';

      if (instanceKey in metaDoc) {
        instanceId = metaDoc[instanceKey];
      } else {
        metaDoc[instanceKey] = instanceId = uuid();
      }

      metaDoc.docCount = docCount;
      txn.objectStore(META_STORE).put(metaDoc);
    } //
    // fetch or generate the instanceId
    //


    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result || {
        id: META_STORE
      };
      storeMetaDocIfReady();
    }; //
    // countDocs
    //


    countDocs(txn, function (count) {
      docCount = count;
      storeMetaDocIfReady();
    }); //
    // check blob support
    //

    if (!blobSupportPromise) {
      // make sure blob support is only checked once
      blobSupportPromise = checkBlobSupport(txn);
    }

    blobSupportPromise.then(function (val) {
      blobSupport = val;
      completeSetup();
    }); // only when the metadata put transaction has completed,
    // consider the setup done

    txn.oncomplete = function () {
      storedMetaDoc = true;
      completeSetup();
    };

    txn.onabort = idbError(callback);
  };

  req.onerror = function () {
    var msg = 'Failed to open indexedDB, are you in private browsing mode?';
    guardedConsole('error', msg);
    callback(createError(IDB_ERROR, msg));
  };
}

IdbPouch.valid = function () {
  // Following #7085 buggy idb versions (typically Safari < 10.1) are
  // considered valid.
  // On Firefox SecurityError is thrown while referencing indexedDB if cookies
  // are not allowed. `typeof indexedDB` also triggers the error.
  try {
    // some outdated implementations of IDB that appear on Samsung
    // and HTC Android devices <4.4 are missing IDBKeyRange
    return typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined';
  } catch (e) {
    return false;
  }
};

function IDBPouch(PouchDB) {
  PouchDB.adapter('idb', IdbPouch, true);
} // dead simple promise pool, inspired by https://github.com/timdp/es6-promise-pool
// but much smaller in code size. limits the number of concurrent promises that are executed


function pool(promiseFactories, limit) {
  return new Promise(function (resolve, reject) {
    var running = 0;
    var current = 0;
    var done = 0;
    var len = promiseFactories.length;
    var err;

    function runNext() {
      running++;
      promiseFactories[current++]().then(onSuccess, onError);
    }

    function doNext() {
      if (++done === len) {
        /* istanbul ignore if */
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      } else {
        runNextBatch();
      }
    }

    function onSuccess() {
      running--;
      doNext();
    }
    /* istanbul ignore next */


    function onError(thisErr) {
      running--;
      err = err || thisErr;
      doNext();
    }

    function runNextBatch() {
      while (running < limit && current < len) {
        runNext();
      }
    }

    runNextBatch();
  });
}

var CHANGES_BATCH_SIZE = 25;
var MAX_SIMULTANEOUS_REVS = 50;
var CHANGES_TIMEOUT_BUFFER = 5000;
var DEFAULT_HEARTBEAT = 10000;
var supportsBulkGetMap = {};

function readAttachmentsAsBlobOrBuffer(row) {
  var doc = row.doc || row.ok;
  var atts = doc._attachments;

  if (!atts) {
    return;
  }

  Object.keys(atts).forEach(function (filename) {
    var att = atts[filename];
    att.data = b64ToBluffer(att.data, att.content_type);
  });
}

function encodeDocId(id) {
  if (/^_design/.test(id)) {
    return '_design/' + encodeURIComponent(id.slice(8));
  }

  if (/^_local/.test(id)) {
    return '_local/' + encodeURIComponent(id.slice(7));
  }

  return encodeURIComponent(id);
}

function preprocessAttachments$1(doc) {
  if (!doc._attachments || !Object.keys(doc._attachments)) {
    return Promise.resolve();
  }

  return Promise.all(Object.keys(doc._attachments).map(function (key) {
    var attachment = doc._attachments[key];

    if (attachment.data && typeof attachment.data !== 'string') {
      return new Promise(function (resolve) {
        blobToBase64(attachment.data, resolve);
      }).then(function (b64) {
        attachment.data = b64;
      });
    }
  }));
}

function hasUrlPrefix(opts) {
  if (!opts.prefix) {
    return false;
  }

  var protocol = parseUri(opts.prefix).protocol;
  return protocol === 'http' || protocol === 'https';
} // Get all the information you possibly can about the URI given by name and
// return it as a suitable object.


function getHost(name, opts) {
  // encode db name if opts.prefix is a url (#5574)
  if (hasUrlPrefix(opts)) {
    var dbName = opts.name.substr(opts.prefix.length); // Ensure prefix has a trailing slash

    var prefix = opts.prefix.replace(/\/?$/, '/');
    name = prefix + encodeURIComponent(dbName);
  }

  var uri = parseUri(name);

  if (uri.user || uri.password) {
    uri.auth = {
      username: uri.user,
      password: uri.password
    };
  } // Split the path part of the URI into parts using '/' as the delimiter
  // after removing any leading '/' and any trailing '/'


  var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');
  uri.db = parts.pop(); // Prevent double encoding of URI component

  if (uri.db.indexOf('%') === -1) {
    uri.db = encodeURIComponent(uri.db);
  }

  uri.path = parts.join('/');
  return uri;
} // Generate a URL with the host data given by opts and the given path


function genDBUrl(opts, path) {
  return genUrl(opts, opts.db + '/' + path);
} // Generate a URL with the host data given by opts and the given path


function genUrl(opts, path) {
  // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string
  var pathDel = !opts.path ? '' : '/'; // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string

  return opts.protocol + '://' + opts.host + (opts.port ? ':' + opts.port : '') + '/' + opts.path + pathDel + path;
}

function paramsToStr(params) {
  return '?' + Object.keys(params).map(function (k) {
    return k + '=' + encodeURIComponent(params[k]);
  }).join('&');
}

function shouldCacheBust(opts) {
  var ua = typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
  var isIE = ua.indexOf('msie') !== -1;
  var isTrident = ua.indexOf('trident') !== -1;
  var isEdge = ua.indexOf('edge') !== -1;
  var isGET = !('method' in opts) || opts.method === 'GET';
  return (isIE || isTrident || isEdge) && isGET;
} // Implements the PouchDB API for dealing with CouchDB instances over HTTP


function HttpPouch(opts, callback) {
  // The functions that will be publicly available for HttpPouch
  var api = this;
  var host = getHost(opts.name, opts);
  var dbUrl = genDBUrl(host, '');
  opts = clone(opts);

  var ourFetch = function (url, options) {
    options = options || {};
    options.headers = options.headers || new h();

    if (opts.auth || host.auth) {
      var nAuth = opts.auth || host.auth;
      var str = nAuth.username + ':' + nAuth.password;
      var token = thisBtoa(unescape(encodeURIComponent(str)));
      options.headers.set('Authorization', 'Basic ' + token);
    }

    var headers = opts.headers || {};
    Object.keys(headers).forEach(function (key) {
      options.headers.append(key, headers[key]);
    });
    /* istanbul ignore if */

    if (shouldCacheBust(options)) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + '_nonce=' + Date.now();
    }

    var fetchFun = opts.fetch || f$1;
    return fetchFun(url, options);
  };

  function adapterFun$$1(name, fun) {
    return adapterFun(name, (0, _argsarray.default)(function (args) {
      setup().then(function () {
        return fun.apply(this, args);
      }).catch(function (e) {
        var callback = args.pop();
        callback(e);
      });
    })).bind(api);
  }

  function fetchJSON(url, options, callback) {
    var result = {};
    options = options || {};
    options.headers = options.headers || new h();

    if (!options.headers.get('Content-Type')) {
      options.headers.set('Content-Type', 'application/json');
    }

    if (!options.headers.get('Accept')) {
      options.headers.set('Accept', 'application/json');
    }

    return ourFetch(url, options).then(function (response) {
      result.ok = response.ok;
      result.status = response.status;
      return response.json();
    }).then(function (json) {
      result.data = json;

      if (!result.ok) {
        result.data.status = result.status;
        var err = generateErrorFromResponse(result.data);

        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }

      if (Array.isArray(result.data)) {
        result.data = result.data.map(function (v) {
          if (v.error || v.missing) {
            return generateErrorFromResponse(v);
          } else {
            return v;
          }
        });
      }

      if (callback) {
        callback(null, result.data);
      } else {
        return result;
      }
    });
  }

  var setupPromise;

  function setup() {
    if (opts.skip_setup) {
      return Promise.resolve();
    } // If there is a setup in process or previous successful setup
    // done then we will use that
    // If previous setups have been rejected we will try again


    if (setupPromise) {
      return setupPromise;
    }

    setupPromise = fetchJSON(dbUrl).catch(function (err) {
      if (err && err.status && err.status === 404) {
        // Doesnt exist, create it
        explainError(404, 'PouchDB is just detecting if the remote exists.');
        return fetchJSON(dbUrl, {
          method: 'PUT'
        });
      } else {
        return Promise.reject(err);
      }
    }).catch(function (err) {
      // If we try to create a database that already exists, skipped in
      // istanbul since its catching a race condition.

      /* istanbul ignore if */
      if (err && err.status && err.status === 412) {
        return true;
      }

      return Promise.reject(err);
    });
    setupPromise.catch(function () {
      setupPromise = null;
    });
    return setupPromise;
  }

  (0, _immediate.default)(function () {
    callback(null, api);
  });
  api._remote = true;
  /* istanbul ignore next */

  api.type = function () {
    return 'http';
  };

  api.id = adapterFun$$1('id', function (callback) {
    ourFetch(genUrl(host, '')).then(function (response) {
      return response.json();
    }).then(function (result) {
      var uuid$$1 = result && result.uuid ? result.uuid + host.db : genDBUrl(host, '');
      callback(null, uuid$$1);
    }).catch(function (err) {
      callback(err);
    });
  }); // Sends a POST request to the host calling the couchdb _compact function
  //    version: The version of CouchDB it is running

  api.compact = adapterFun$$1('compact', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts);
    fetchJSON(genDBUrl(host, '_compact'), {
      method: 'POST'
    }).then(function () {
      function ping() {
        api.info(function (err, res) {
          // CouchDB may send a "compact_running:true" if it's
          // already compacting. PouchDB Server doesn't.

          /* istanbul ignore else */
          if (res && !res.compact_running) {
            callback(null, {
              ok: true
            });
          } else {
            setTimeout(ping, opts.interval || 200);
          }
        });
      } // Ping the http if it's finished compaction


      ping();
    });
  });
  api.bulkGet = adapterFun('bulkGet', function (opts, callback) {
    var self = this;

    function doBulkGet(cb) {
      var params = {};

      if (opts.revs) {
        params.revs = true;
      }

      if (opts.attachments) {
        /* istanbul ignore next */
        params.attachments = true;
      }

      if (opts.latest) {
        params.latest = true;
      }

      fetchJSON(genDBUrl(host, '_bulk_get' + paramsToStr(params)), {
        method: 'POST',
        body: JSON.stringify({
          docs: opts.docs
        })
      }).then(function (result) {
        if (opts.attachments && opts.binary) {
          result.data.results.forEach(function (res) {
            res.docs.forEach(readAttachmentsAsBlobOrBuffer);
          });
        }

        cb(null, result.data);
      }).catch(cb);
    }
    /* istanbul ignore next */


    function doBulkGetShim() {
      // avoid "url too long error" by splitting up into multiple requests
      var batchSize = MAX_SIMULTANEOUS_REVS;
      var numBatches = Math.ceil(opts.docs.length / batchSize);
      var numDone = 0;
      var results = new Array(numBatches);

      function onResult(batchNum) {
        return function (err, res) {
          // err is impossible because shim returns a list of errs in that case
          results[batchNum] = res.results;

          if (++numDone === numBatches) {
            callback(null, {
              results: flatten(results)
            });
          }
        };
      }

      for (var i = 0; i < numBatches; i++) {
        var subOpts = pick(opts, ['revs', 'attachments', 'binary', 'latest']);
        subOpts.docs = opts.docs.slice(i * batchSize, Math.min(opts.docs.length, (i + 1) * batchSize));
        bulkGet(self, subOpts, onResult(i));
      }
    } // mark the whole database as either supporting or not supporting _bulk_get


    var dbUrl = genUrl(host, '');
    var supportsBulkGet = supportsBulkGetMap[dbUrl];
    /* istanbul ignore next */

    if (typeof supportsBulkGet !== 'boolean') {
      // check if this database supports _bulk_get
      doBulkGet(function (err, res) {
        if (err) {
          supportsBulkGetMap[dbUrl] = false;
          explainError(err.status, 'PouchDB is just detecting if the remote ' + 'supports the _bulk_get API.');
          doBulkGetShim();
        } else {
          supportsBulkGetMap[dbUrl] = true;
          callback(null, res);
        }
      });
    } else if (supportsBulkGet) {
      doBulkGet(callback);
    } else {
      doBulkGetShim();
    }
  }); // Calls GET on the host, which gets back a JSON string containing
  //    couchdb: A welcome string
  //    version: The version of CouchDB it is running

  api._info = function (callback) {
    setup().then(function () {
      return ourFetch(genDBUrl(host, ''));
    }).then(function (response) {
      return response.json();
    }).then(function (info) {
      info.host = genDBUrl(host, '');
      callback(null, info);
    }).catch(callback);
  };

  api.fetch = function (path, options) {
    return setup().then(function () {
      return ourFetch(genDBUrl(host, path), options);
    });
  }; // Get the document with the given id from the database given by host.
  // The id could be solely the _id in the database, or it may be a
  // _design/ID or _local/ID path


  api.get = adapterFun$$1('get', function (id, opts, callback) {
    // If no options were given, set the callback to the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts); // List of parameters to add to the GET request

    var params = {};

    if (opts.revs) {
      params.revs = true;
    }

    if (opts.revs_info) {
      params.revs_info = true;
    }

    if (opts.latest) {
      params.latest = true;
    }

    if (opts.open_revs) {
      if (opts.open_revs !== "all") {
        opts.open_revs = JSON.stringify(opts.open_revs);
      }

      params.open_revs = opts.open_revs;
    }

    if (opts.rev) {
      params.rev = opts.rev;
    }

    if (opts.conflicts) {
      params.conflicts = opts.conflicts;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = opts.update_seq;
    }

    id = encodeDocId(id);

    function fetchAttachments(doc) {
      var atts = doc._attachments;
      var filenames = atts && Object.keys(atts);

      if (!atts || !filenames.length) {
        return;
      } // we fetch these manually in separate XHRs, because
      // Sync Gateway would normally send it back as multipart/mixed,
      // which we cannot parse. Also, this is more efficient than
      // receiving attachments as base64-encoded strings.


      function fetchData(filename) {
        var att = atts[filename];

        var path = encodeDocId(doc._id) + '/' + encodeAttachmentId(filename) + '?rev=' + doc._rev;

        return ourFetch(genDBUrl(host, path)).then(function (response) {
          if (typeof process !== 'undefined' && !true) {
            return response.buffer();
          } else {
            /* istanbul ignore next */
            return response.blob();
          }
        }).then(function (blob) {
          if (opts.binary) {
            // TODO: Can we remove this?
            if (typeof process !== 'undefined' && !true) {
              blob.type = att.content_type;
            }

            return blob;
          }

          return new Promise(function (resolve) {
            blobToBase64(blob, resolve);
          });
        }).then(function (data) {
          delete att.stub;
          delete att.length;
          att.data = data;
        });
      }

      var promiseFactories = filenames.map(function (filename) {
        return function () {
          return fetchData(filename);
        };
      }); // This limits the number of parallel xhr requests to 5 any time
      // to avoid issues with maximum browser request limits

      return pool(promiseFactories, 5);
    }

    function fetchAllAttachments(docOrDocs) {
      if (Array.isArray(docOrDocs)) {
        return Promise.all(docOrDocs.map(function (doc) {
          if (doc.ok) {
            return fetchAttachments(doc.ok);
          }
        }));
      }

      return fetchAttachments(docOrDocs);
    }

    var url = genDBUrl(host, id + paramsToStr(params));
    fetchJSON(url).then(function (res) {
      return Promise.resolve().then(function () {
        if (opts.attachments) {
          return fetchAllAttachments(res.data);
        }
      }).then(function () {
        callback(null, res.data);
      });
    }).catch(function (e) {
      e.docId = id;
      callback(e);
    });
  }); // Delete the document given by doc from the database given by host.

  api.remove = adapterFun$$1('remove', function (docOrId, optsOrRev, opts, cb) {
    var doc;

    if (typeof optsOrRev === 'string') {
      // id, rev, opts, callback style
      doc = {
        _id: docOrId,
        _rev: optsOrRev
      };

      if (typeof opts === 'function') {
        cb = opts;
        opts = {};
      }
    } else {
      // doc, opts, callback style
      doc = docOrId;

      if (typeof optsOrRev === 'function') {
        cb = optsOrRev;
        opts = {};
      } else {
        cb = opts;
        opts = optsOrRev;
      }
    }

    var rev = doc._rev || opts.rev;
    var url = genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev;
    fetchJSON(url, {
      method: 'DELETE'
    }, cb).catch(cb);
  });

  function encodeAttachmentId(attachmentId) {
    return attachmentId.split("/").map(encodeURIComponent).join("/");
  } // Get the attachment


  api.getAttachment = adapterFun$$1('getAttachment', function (docId, attachmentId, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    var params = opts.rev ? '?rev=' + opts.rev : '';
    var url = genDBUrl(host, encodeDocId(docId)) + '/' + encodeAttachmentId(attachmentId) + params;
    var contentType;
    ourFetch(url, {
      method: 'GET'
    }).then(function (response) {
      contentType = response.headers.get('content-type');

      if (!response.ok) {
        throw response;
      } else {
        if (typeof process !== 'undefined' && !true) {
          return response.buffer();
        } else {
          /* istanbul ignore next */
          return response.blob();
        }
      }
    }).then(function (blob) {
      // TODO: also remove
      if (typeof process !== 'undefined' && !true) {
        blob.type = contentType;
      }

      callback(null, blob);
    }).catch(function (err) {
      callback(err);
    });
  }); // Remove the attachment given by the id and rev

  api.removeAttachment = adapterFun$$1('removeAttachment', function (docId, attachmentId, rev, callback) {
    var url = genDBUrl(host, encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId)) + '?rev=' + rev;
    fetchJSON(url, {
      method: 'DELETE'
    }, callback).catch(callback);
  }); // Add the attachment given by blob and its contentType property
  // to the document with the given id, the revision given by rev, and
  // add it to the database given by host.

  api.putAttachment = adapterFun$$1('putAttachment', function (docId, attachmentId, rev, blob, type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev;
      rev = null;
    }

    var id = encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId);
    var url = genDBUrl(host, id);

    if (rev) {
      url += '?rev=' + rev;
    }

    if (typeof blob === 'string') {
      // input is assumed to be a base64 string
      var binary;

      try {
        binary = thisAtob(blob);
      } catch (err) {
        return callback(createError(BAD_ARG, 'Attachment is not a valid base64 string'));
      }

      blob = binary ? binStringToBluffer(binary, type) : '';
    } // Add the attachment


    fetchJSON(url, {
      headers: new h({
        'Content-Type': type
      }),
      method: 'PUT',
      body: blob
    }, callback).catch(callback);
  }); // Update/create multiple documents given by req in the database
  // given by host.

  api._bulkDocs = function (req, opts, callback) {
    // If new_edits=false then it prevents the database from creating
    // new revision numbers for the documents. Instead it just uses
    // the old ones. This is used in database replication.
    req.new_edits = opts.new_edits;
    setup().then(function () {
      return Promise.all(req.docs.map(preprocessAttachments$1));
    }).then(function () {
      // Update/create the documents
      return fetchJSON(genDBUrl(host, '_bulk_docs'), {
        method: 'POST',
        body: JSON.stringify(req)
      }, callback);
    }).catch(callback);
  }; // Update/create document


  api._put = function (doc, opts, callback) {
    setup().then(function () {
      return preprocessAttachments$1(doc);
    }).then(function () {
      return fetchJSON(genDBUrl(host, encodeDocId(doc._id)), {
        method: 'PUT',
        body: JSON.stringify(doc)
      });
    }).then(function (result) {
      callback(null, result.data);
    }).catch(function (err) {
      err.docId = doc && doc._id;
      callback(err);
    });
  }; // Get a listing of the documents in the database given
  // by host and ordered by increasing id.


  api.allDocs = adapterFun$$1('allDocs', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts); // List of parameters to add to the GET request

    var params = {};
    var body;
    var method = 'GET';

    if (opts.conflicts) {
      params.conflicts = true;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    if (opts.include_docs) {
      params.include_docs = true;
    } // added in CouchDB 1.6.0


    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.key) {
      params.key = JSON.stringify(opts.key);
    }

    if (opts.start_key) {
      opts.startkey = opts.start_key;
    }

    if (opts.startkey) {
      params.startkey = JSON.stringify(opts.startkey);
    }

    if (opts.end_key) {
      opts.endkey = opts.end_key;
    }

    if (opts.endkey) {
      params.endkey = JSON.stringify(opts.endkey);
    }

    if (typeof opts.inclusive_end !== 'undefined') {
      params.inclusive_end = !!opts.inclusive_end;
    }

    if (typeof opts.limit !== 'undefined') {
      params.limit = opts.limit;
    }

    if (typeof opts.skip !== 'undefined') {
      params.skip = opts.skip;
    }

    var paramStr = paramsToStr(params);

    if (typeof opts.keys !== 'undefined') {
      method = 'POST';
      body = {
        keys: opts.keys
      };
    }

    fetchJSON(genDBUrl(host, '_all_docs' + paramStr), {
      method: method,
      body: JSON.stringify(body)
    }).then(function (result) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        result.data.rows.forEach(readAttachmentsAsBlobOrBuffer);
      }

      callback(null, result.data);
    }).catch(callback);
  }); // Get a list of changes made to documents in the database given by host.
  // TODO According to the README, there should be two other methods here,
  // api.changes.addListener and api.changes.removeListener.

  api._changes = function (opts) {
    // We internally page the results of a changes request, this means
    // if there is a large set of changes to be returned we can start
    // processing them quicker instead of waiting on the entire
    // set of changes to return and attempting to process them at once
    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;
    opts = clone(opts);

    if (opts.continuous && !('heartbeat' in opts)) {
      opts.heartbeat = DEFAULT_HEARTBEAT;
    }

    var requestTimeout = 'timeout' in opts ? opts.timeout : 30 * 1000; // ensure CHANGES_TIMEOUT_BUFFER applies

    if ('timeout' in opts && opts.timeout && requestTimeout - opts.timeout < CHANGES_TIMEOUT_BUFFER) {
      requestTimeout = opts.timeout + CHANGES_TIMEOUT_BUFFER;
    }
    /* istanbul ignore if */


    if ('heartbeat' in opts && opts.heartbeat && requestTimeout - opts.heartbeat < CHANGES_TIMEOUT_BUFFER) {
      requestTimeout = opts.heartbeat + CHANGES_TIMEOUT_BUFFER;
    }

    var params = {};

    if ('timeout' in opts && opts.timeout) {
      params.timeout = opts.timeout;
    }

    var limit = typeof opts.limit !== 'undefined' ? opts.limit : false;
    var leftToFetch = limit;

    if (opts.style) {
      params.style = opts.style;
    }

    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
      params.include_docs = true;
    }

    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.continuous) {
      params.feed = 'longpoll';
    }

    if (opts.seq_interval) {
      params.seq_interval = opts.seq_interval;
    }

    if (opts.conflicts) {
      params.conflicts = true;
    }

    if (opts.descending) {
      params.descending = true;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = true;
    }

    if ('heartbeat' in opts) {
      // If the heartbeat value is false, it disables the default heartbeat
      if (opts.heartbeat) {
        params.heartbeat = opts.heartbeat;
      }
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
    }

    if (opts.view && typeof opts.view === 'string') {
      params.filter = '_view';
      params.view = opts.view;
    } // If opts.query_params exists, pass it through to the changes request.
    // These parameters may be used by the filter on the source database.


    if (opts.query_params && typeof opts.query_params === 'object') {
      for (var param_name in opts.query_params) {
        /* istanbul ignore else */
        if (opts.query_params.hasOwnProperty(param_name)) {
          params[param_name] = opts.query_params[param_name];
        }
      }
    }

    var method = 'GET';
    var body;

    if (opts.doc_ids) {
      // set this automagically for the user; it's annoying that couchdb
      // requires both a "filter" and a "doc_ids" param.
      params.filter = '_doc_ids';
      method = 'POST';
      body = {
        doc_ids: opts.doc_ids
      };
    }
    /* istanbul ignore next */
    else if (opts.selector) {
        // set this automagically for the user, similar to above
        params.filter = '_selector';
        method = 'POST';
        body = {
          selector: opts.selector
        };
      }

    var controller = new a();
    var lastFetchedSeq; // Get all the changes starting wtih the one immediately after the
    // sequence number given by since.

    var fetchData = function (since, callback) {
      if (opts.aborted) {
        return;
      }

      params.since = since; // "since" can be any kind of json object in Cloudant/CouchDB 2.x

      /* istanbul ignore next */

      if (typeof params.since === "object") {
        params.since = JSON.stringify(params.since);
      }

      if (opts.descending) {
        if (limit) {
          params.limit = leftToFetch;
        }
      } else {
        params.limit = !limit || leftToFetch > batchSize ? batchSize : leftToFetch;
      } // Set the options for the ajax call


      var url = genDBUrl(host, '_changes' + paramsToStr(params));
      var fetchOpts = {
        signal: controller.signal,
        method: method,
        body: JSON.stringify(body)
      };
      lastFetchedSeq = since;
      /* istanbul ignore if */

      if (opts.aborted) {
        return;
      } // Get the changes


      setup().then(function () {
        return fetchJSON(url, fetchOpts, callback);
      }).catch(callback);
    }; // If opts.since exists, get all the changes from the sequence
    // number given by opts.since. Otherwise, get all the changes
    // from the sequence number 0.


    var results = {
      results: []
    };

    var fetched = function (err, res) {
      if (opts.aborted) {
        return;
      }

      var raw_results_length = 0; // If the result of the ajax call (res) contains changes (res.results)

      if (res && res.results) {
        raw_results_length = res.results.length;
        results.last_seq = res.last_seq;
        var pending = null;
        var lastSeq = null; // Attach 'pending' property if server supports it (CouchDB 2.0+)

        /* istanbul ignore if */

        if (typeof res.pending === 'number') {
          pending = res.pending;
        }

        if (typeof results.last_seq === 'string' || typeof results.last_seq === 'number') {
          lastSeq = results.last_seq;
        } // For each change


        var req = {};
        req.query = opts.query_params;
        res.results = res.results.filter(function (c) {
          leftToFetch--;
          var ret = filterChange(opts)(c);

          if (ret) {
            if (opts.include_docs && opts.attachments && opts.binary) {
              readAttachmentsAsBlobOrBuffer(c);
            }

            if (opts.return_docs) {
              results.results.push(c);
            }

            opts.onChange(c, pending, lastSeq);
          }

          return ret;
        });
      } else if (err) {
        // In case of an error, stop listening for changes and call
        // opts.complete
        opts.aborted = true;
        opts.complete(err);
        return;
      } // The changes feed may have timed out with no results
      // if so reuse last update sequence


      if (res && res.last_seq) {
        lastFetchedSeq = res.last_seq;
      }

      var finished = limit && leftToFetch <= 0 || res && raw_results_length < batchSize || opts.descending;

      if (opts.continuous && !(limit && leftToFetch <= 0) || !finished) {
        // Queue a call to fetch again with the newest sequence number
        (0, _immediate.default)(function () {
          fetchData(lastFetchedSeq, fetched);
        });
      } else {
        // We're done, call the callback
        opts.complete(null, results);
      }
    };

    fetchData(opts.since || 0, fetched); // Return a method to cancel this method from processing any more

    return {
      cancel: function () {
        opts.aborted = true;
        controller.abort();
      }
    };
  }; // Given a set of document/revision IDs (given by req), tets the subset of
  // those that do NOT correspond to revisions stored in the database.
  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff


  api.revsDiff = adapterFun$$1('revsDiff', function (req, opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    } // Get the missing document/revision IDs


    fetchJSON(genDBUrl(host, '_revs_diff'), {
      method: 'POST',
      body: JSON.stringify(req)
    }, callback).catch(callback);
  });

  api._close = function (callback) {
    callback();
  };

  api._destroy = function (options, callback) {
    fetchJSON(genDBUrl(host, ''), {
      method: 'DELETE'
    }).then(function (json) {
      callback(null, json);
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status === 404) {
        callback(null, {
          ok: true
        });
      } else {
        callback(err);
      }
    });
  };
} // HttpPouch is a valid adapter.


HttpPouch.valid = function () {
  return true;
};

function HttpPouch$1(PouchDB) {
  PouchDB.adapter('http', HttpPouch, false);
  PouchDB.adapter('https', HttpPouch, false);
}

function QueryParseError(message) {
  this.status = 400;
  this.name = 'query_parse_error';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, QueryParseError);
  } catch (e) {}
}

(0, _inherits.default)(QueryParseError, Error);

function NotFoundError(message) {
  this.status = 404;
  this.name = 'not_found';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, NotFoundError);
  } catch (e) {}
}

(0, _inherits.default)(NotFoundError, Error);

function BuiltInError(message) {
  this.status = 500;
  this.name = 'invalid_value';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, BuiltInError);
  } catch (e) {}
}

(0, _inherits.default)(BuiltInError, Error);

function promisedCallback(promise, callback) {
  if (callback) {
    promise.then(function (res) {
      (0, _immediate.default)(function () {
        callback(null, res);
      });
    }, function (reason) {
      (0, _immediate.default)(function () {
        callback(reason);
      });
    });
  }

  return promise;
}

function callbackify(fun) {
  return (0, _argsarray.default)(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);

    if (typeof cb === 'function') {
      promisedCallback(promise, cb);
    }

    return promise;
  });
} // Promise finally util similar to Q.finally


function fin(promise, finalPromiseFactory) {
  return promise.then(function (res) {
    return finalPromiseFactory().then(function () {
      return res;
    });
  }, function (reason) {
    return finalPromiseFactory().then(function () {
      throw reason;
    });
  });
}

function sequentialize(queue, promiseFactory) {
  return function () {
    var args = arguments;
    var that = this;
    return queue.add(function () {
      return promiseFactory.apply(that, args);
    });
  };
} // uniq an array of strings, order not guaranteed
// similar to underscore/lodash _.uniq


function uniq(arr) {
  var theSet = new ExportedSet(arr);
  var result = new Array(theSet.size);
  var index = -1;
  theSet.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

function mapToKeysArray(map) {
  var result = new Array(map.size);
  var index = -1;
  map.forEach(function (value, key) {
    result[++index] = key;
  });
  return result;
}

function createBuiltInError(name) {
  var message = 'builtin ' + name + ' function requires map values to be numbers' + ' or number arrays';
  return new BuiltInError(message);
}

function sum(values) {
  var result = 0;

  for (var i = 0, len = values.length; i < len; i++) {
    var num = values[i];

    if (typeof num !== 'number') {
      if (Array.isArray(num)) {
        // lists of numbers are also allowed, sum them separately
        result = typeof result === 'number' ? [result] : result;

        for (var j = 0, jLen = num.length; j < jLen; j++) {
          var jNum = num[j];

          if (typeof jNum !== 'number') {
            throw createBuiltInError('_sum');
          } else if (typeof result[j] === 'undefined') {
            result.push(jNum);
          } else {
            result[j] += jNum;
          }
        }
      } else {
        // not array/number
        throw createBuiltInError('_sum');
      }
    } else if (typeof result === 'number') {
      result += num;
    } else {
      // add number to array
      result[0] += num;
    }
  }

  return result;
}

var log = guardedConsole.bind(null, 'log');
var isArray = Array.isArray;
var toJSON = JSON.parse;

function evalFunctionWithEval(func, emit) {
  return scopeEval("return (" + func.replace(/;\s*$/, "") + ");", {
    emit: emit,
    sum: sum,
    log: log,
    isArray: isArray,
    toJSON: toJSON
  });
}
/*
 * Simple task queue to sequentialize actions. Assumes
 * callbacks will eventually fire (once).
 */


function TaskQueue$1() {
  this.promise = new Promise(function (fulfill) {
    fulfill();
  });
}

TaskQueue$1.prototype.add = function (promiseFactory) {
  this.promise = this.promise.catch(function () {// just recover
  }).then(function () {
    return promiseFactory();
  });
  return this.promise;
};

TaskQueue$1.prototype.finish = function () {
  return this.promise;
};

function stringify(input) {
  if (!input) {
    return 'undefined'; // backwards compat for empty reduce
  } // for backwards compat with mapreduce, functions/strings are stringified
  // as-is. everything else is JSON-stringified.


  switch (typeof input) {
    case 'function':
      // e.g. a mapreduce map
      return input.toString();

    case 'string':
      // e.g. a mapreduce built-in _reduce function
      return input.toString();

    default:
      // e.g. a JSON object in the case of mango queries
      return JSON.stringify(input);
  }
}
/* create a string signature for a view so we can cache it and uniq it */


function createViewSignature(mapFun, reduceFun) {
  // the "undefined" part is for backwards compatibility
  return stringify(mapFun) + stringify(reduceFun) + 'undefined';
}

function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
  var viewSignature = createViewSignature(mapFun, reduceFun);
  var cachedViews;

  if (!temporary) {
    // cache this to ensure we don't try to update the same view twice
    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};

    if (cachedViews[viewSignature]) {
      return cachedViews[viewSignature];
    }
  }

  var promiseForView = sourceDB.info().then(function (info) {
    var depDbName = info.db_name + '-mrview-' + (temporary ? 'temp' : stringMd5(viewSignature)); // save the view name in the source db so it can be cleaned up if necessary
    // (e.g. when the _design doc is deleted, remove all associated view data)

    function diffFunction(doc) {
      doc.views = doc.views || {};
      var fullViewName = viewName;

      if (fullViewName.indexOf('/') === -1) {
        fullViewName = viewName + '/' + viewName;
      }

      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
      /* istanbul ignore if */

      if (depDbs[depDbName]) {
        return; // no update necessary
      }

      depDbs[depDbName] = true;
      return doc;
    }

    return upsert(sourceDB, '_local/' + localDocName, diffFunction).then(function () {
      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
        var db = res.db;
        db.auto_compaction = true;
        var view = {
          name: depDbName,
          db: db,
          sourceDB: sourceDB,
          adapter: sourceDB.adapter,
          mapFun: mapFun,
          reduceFun: reduceFun
        };
        return view.db.get('_local/lastSeq').catch(function (err) {
          /* istanbul ignore if */
          if (err.status !== 404) {
            throw err;
          }
        }).then(function (lastSeqDoc) {
          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;

          if (cachedViews) {
            view.db.once('destroyed', function () {
              delete cachedViews[viewSignature];
            });
          }

          return view;
        });
      });
    });
  });

  if (cachedViews) {
    cachedViews[viewSignature] = promiseForView;
  }

  return promiseForView;
}

var persistentQueues = {};
var tempViewQueue = new TaskQueue$1();
var CHANGES_BATCH_SIZE$1 = 50;

function parseViewName(name) {
  // can be either 'ddocname/viewname' or just 'viewname'
  // (where the ddoc name is the same)
  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
}

function isGenOne(changes) {
  // only return true if the current change is 1-
  // and there are no other leafs
  return changes.length === 1 && /^1-/.test(changes[0].rev);
}

function emitError(db, e) {
  try {
    db.emit('error', e);
  } catch (err) {
    guardedConsole('error', 'The user\'s map/reduce function threw an uncaught error.\n' + 'You can debug this error by doing:\n' + 'myDatabase.on(\'error\', function (err) { debugger; });\n' + 'Please double-check your map/reduce function.');
    guardedConsole('error', e);
  }
}
/**
 * Returns an "abstract" mapreduce object of the form:
 *
 *   {
 *     query: queryFun,
 *     viewCleanup: viewCleanupFun
 *   }
 *
 * Arguments are:
 *
 * localDoc: string
 *   This is for the local doc that gets saved in order to track the
 *   "dependent" DBs and clean them up for viewCleanup. It should be
 *   unique, so that indexer plugins don't collide with each other.
 * mapper: function (mapFunDef, emit)
 *   Returns a map function based on the mapFunDef, which in the case of
 *   normal map/reduce is just the de-stringified function, but may be
 *   something else, such as an object in the case of pouchdb-find.
 * reducer: function (reduceFunDef)
 *   Ditto, but for reducing. Modules don't have to support reducing
 *   (e.g. pouchdb-find).
 * ddocValidator: function (ddoc, viewName)
 *   Throws an error if the ddoc or viewName is not valid.
 *   This could be a way to communicate to the user that the configuration for the
 *   indexer is invalid.
 */


function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {
  function tryMap(db, fun, doc) {
    // emit an event if there was an error thrown by a map function.
    // putting try/catches in a single function also avoids deoptimizations.
    try {
      fun(doc);
    } catch (e) {
      emitError(db, e);
    }
  }

  function tryReduce(db, fun, keys, values, rereduce) {
    // same as above, but returning the result or an error. there are two separate
    // functions to avoid extra memory allocations since the tryCode() case is used
    // for custom map functions (common) vs this function, which is only used for
    // custom reduce functions (rare)
    try {
      return {
        output: fun(keys, values, rereduce)
      };
    } catch (e) {
      emitError(db, e);
      return {
        error: e
      };
    }
  }

  function sortByKeyThenValue(x, y) {
    var keyCompare = collate(x.key, y.key);
    return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
  }

  function sliceResults(results, limit, skip) {
    skip = skip || 0;

    if (typeof limit === 'number') {
      return results.slice(skip, limit + skip);
    } else if (skip > 0) {
      return results.slice(skip);
    }

    return results;
  }

  function rowToDocId(row) {
    var val = row.value; // Users can explicitly specify a joined doc _id, or it
    // defaults to the doc _id that emitted the key/value.

    var docId = val && typeof val === 'object' && val._id || row.id;
    return docId;
  }

  function readAttachmentsAsBlobOrBuffer(res) {
    res.rows.forEach(function (row) {
      var atts = row.doc && row.doc._attachments;

      if (!atts) {
        return;
      }

      Object.keys(atts).forEach(function (filename) {
        var att = atts[filename];
        atts[filename].data = b64ToBluffer(att.data, att.content_type);
      });
    });
  }

  function postprocessAttachments(opts) {
    return function (res) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        readAttachmentsAsBlobOrBuffer(res);
      }

      return res;
    };
  }

  function addHttpParam(paramName, opts, params, asJson) {
    // add an http param from opts to params, optionally json-encoded
    var val = opts[paramName];

    if (typeof val !== 'undefined') {
      if (asJson) {
        val = encodeURIComponent(JSON.stringify(val));
      }

      params.push(paramName + '=' + val);
    }
  }

  function coerceInteger(integerCandidate) {
    if (typeof integerCandidate !== 'undefined') {
      var asNumber = Number(integerCandidate); // prevents e.g. '1foo' or '1.1' being coerced to 1

      if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
        return asNumber;
      } else {
        return integerCandidate;
      }
    }
  }

  function coerceOptions(opts) {
    opts.group_level = coerceInteger(opts.group_level);
    opts.limit = coerceInteger(opts.limit);
    opts.skip = coerceInteger(opts.skip);
    return opts;
  }

  function checkPositiveInteger(number) {
    if (number) {
      if (typeof number !== 'number') {
        return new QueryParseError('Invalid value for integer: "' + number + '"');
      }

      if (number < 0) {
        return new QueryParseError('Invalid value for positive integer: ' + '"' + number + '"');
      }
    }
  }

  function checkQueryParseError(options, fun) {
    var startkeyName = options.descending ? 'endkey' : 'startkey';
    var endkeyName = options.descending ? 'startkey' : 'endkey';

    if (typeof options[startkeyName] !== 'undefined' && typeof options[endkeyName] !== 'undefined' && collate(options[startkeyName], options[endkeyName]) > 0) {
      throw new QueryParseError('No rows can match your key range, ' + 'reverse your start_key and end_key or set {descending : true}');
    } else if (fun.reduce && options.reduce !== false) {
      if (options.include_docs) {
        throw new QueryParseError('{include_docs:true} is invalid for reduce');
      } else if (options.keys && options.keys.length > 1 && !options.group && !options.group_level) {
        throw new QueryParseError('Multi-key fetches for reduce views must use ' + '{group: true}');
      }
    }

    ['group_level', 'limit', 'skip'].forEach(function (optionName) {
      var error = checkPositiveInteger(options[optionName]);

      if (error) {
        throw error;
      }
    });
  }

  function httpQuery(db, fun, opts) {
    // List of parameters to add to the PUT request
    var params = [];
    var body;
    var method = 'GET';
    var ok, status; // If opts.reduce exists and is defined, then add it to the list
    // of parameters.
    // If reduce=false then the results are that of only the map function
    // not the final result of map and reduce.

    addHttpParam('reduce', opts, params);
    addHttpParam('include_docs', opts, params);
    addHttpParam('attachments', opts, params);
    addHttpParam('limit', opts, params);
    addHttpParam('descending', opts, params);
    addHttpParam('group', opts, params);
    addHttpParam('group_level', opts, params);
    addHttpParam('skip', opts, params);
    addHttpParam('stale', opts, params);
    addHttpParam('conflicts', opts, params);
    addHttpParam('startkey', opts, params, true);
    addHttpParam('start_key', opts, params, true);
    addHttpParam('endkey', opts, params, true);
    addHttpParam('end_key', opts, params, true);
    addHttpParam('inclusive_end', opts, params);
    addHttpParam('key', opts, params, true);
    addHttpParam('update_seq', opts, params); // Format the list of parameters into a valid URI query string

    params = params.join('&');
    params = params === '' ? '' : '?' + params; // If keys are supplied, issue a POST to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options

    if (typeof opts.keys !== 'undefined') {
      var MAX_URL_LENGTH = 2000; // according to http://stackoverflow.com/a/417184/680742,
      // the de facto URL length limit is 2000 characters

      var keysAsString = 'keys=' + encodeURIComponent(JSON.stringify(opts.keys));

      if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
        // If the keys are short enough, do a GET. we do this to work around
        // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
        params += (params[0] === '?' ? '&' : '?') + keysAsString;
      } else {
        method = 'POST';

        if (typeof fun === 'string') {
          body = {
            keys: opts.keys
          };
        } else {
          // fun is {map : mapfun}, so append to this
          fun.keys = opts.keys;
        }
      }
    } // We are referencing a query defined in the design doc


    if (typeof fun === 'string') {
      var parts = parseViewName(fun);
      return db.fetch('_design/' + parts[0] + '/_view/' + parts[1] + params, {
        headers: new h({
          'Content-Type': 'application/json'
        }),
        method: method,
        body: JSON.stringify(body)
      }).then(function (response) {
        ok = response.ok;
        status = response.status;
        return response.json();
      }).then(function (result) {
        if (!ok) {
          result.status = status;
          throw generateErrorFromResponse(result);
        } // fail the entire request if the result contains an error


        result.rows.forEach(function (row) {
          /* istanbul ignore if */
          if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
            throw new Error(row.reason);
          }
        });
        return result;
      }).then(postprocessAttachments(opts));
    } // We are using a temporary view, terrible for performance, good for testing


    body = body || {};
    Object.keys(fun).forEach(function (key) {
      if (Array.isArray(fun[key])) {
        body[key] = fun[key];
      } else {
        body[key] = fun[key].toString();
      }
    });
    return db.fetch('_temp_view' + params, {
      headers: new h({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(body)
    }).then(function (response) {
      ok = response.ok;
      status = response.status;
      return response.json();
    }).then(function (result) {
      if (!ok) {
        result.status = status;
        throw generateErrorFromResponse(result);
      }

      return result;
    }).then(postprocessAttachments(opts));
  } // custom adapters can define their own api._query
  // and override the default behavior

  /* istanbul ignore next */


  function customQuery(db, fun, opts) {
    return new Promise(function (resolve, reject) {
      db._query(fun, opts, function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  } // custom adapters can define their own api._viewCleanup
  // and override the default behavior

  /* istanbul ignore next */


  function customViewCleanup(db) {
    return new Promise(function (resolve, reject) {
      db._viewCleanup(function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  }

  function defaultsTo(value) {
    return function (reason) {
      /* istanbul ignore else */
      if (reason.status === 404) {
        return value;
      } else {
        throw reason;
      }
    };
  } // returns a promise for a list of docs to update, based on the input docId.
  // the order doesn't matter, because post-3.2.0, bulkDocs
  // is an atomic operation in all three adapters.


  function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
    var metaDocId = '_local/doc_' + docId;
    var defaultMetaDoc = {
      _id: metaDocId,
      keys: []
    };
    var docData = docIdsToChangesAndEmits.get(docId);
    var indexableKeysToKeyValues = docData[0];
    var changes = docData[1];

    function getMetaDoc() {
      if (isGenOne(changes)) {
        // generation 1, so we can safely assume initial state
        // for performance reasons (avoids unnecessary GETs)
        return Promise.resolve(defaultMetaDoc);
      }

      return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
    }

    function getKeyValueDocs(metaDoc) {
      if (!metaDoc.keys.length) {
        // no keys, no need for a lookup
        return Promise.resolve({
          rows: []
        });
      }

      return view.db.allDocs({
        keys: metaDoc.keys,
        include_docs: true
      });
    }

    function processKeyValueDocs(metaDoc, kvDocsRes) {
      var kvDocs = [];
      var oldKeys = new ExportedSet();

      for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
        var row = kvDocsRes.rows[i];
        var doc = row.doc;

        if (!doc) {
          // deleted
          continue;
        }

        kvDocs.push(doc);
        oldKeys.add(doc._id);
        doc._deleted = !indexableKeysToKeyValues.has(doc._id);

        if (!doc._deleted) {
          var keyValue = indexableKeysToKeyValues.get(doc._id);

          if ('value' in keyValue) {
            doc.value = keyValue.value;
          }
        }
      }

      var newKeys = mapToKeysArray(indexableKeysToKeyValues);
      newKeys.forEach(function (key) {
        if (!oldKeys.has(key)) {
          // new doc
          var kvDoc = {
            _id: key
          };
          var keyValue = indexableKeysToKeyValues.get(key);

          if ('value' in keyValue) {
            kvDoc.value = keyValue.value;
          }

          kvDocs.push(kvDoc);
        }
      });
      metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
      kvDocs.push(metaDoc);
      return kvDocs;
    }

    return getMetaDoc().then(function (metaDoc) {
      return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
        return processKeyValueDocs(metaDoc, kvDocsRes);
      });
    });
  } // updates all emitted key/value docs and metaDocs in the mrview database
  // for the given batch of documents from the source database


  function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
    var seqDocId = '_local/lastSeq';
    return view.db.get(seqDocId).catch(defaultsTo({
      _id: seqDocId,
      seq: 0
    })).then(function (lastSeqDoc) {
      var docIds = mapToKeysArray(docIdsToChangesAndEmits);
      return Promise.all(docIds.map(function (docId) {
        return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
      })).then(function (listOfDocsToPersist) {
        var docsToPersist = flatten(listOfDocsToPersist);
        lastSeqDoc.seq = seq;
        docsToPersist.push(lastSeqDoc); // write all docs in a single operation, update the seq once

        return view.db.bulkDocs({
          docs: docsToPersist
        });
      });
    });
  }

  function getQueue(view) {
    var viewName = typeof view === 'string' ? view : view.name;
    var queue = persistentQueues[viewName];

    if (!queue) {
      queue = persistentQueues[viewName] = new TaskQueue$1();
    }

    return queue;
  }

  function updateView(view) {
    return sequentialize(getQueue(view), function () {
      return updateViewInQueue(view);
    })();
  }

  function updateViewInQueue(view) {
    // bind the emit function once
    var mapResults;
    var doc;

    function emit(key, value) {
      var output = {
        id: doc._id,
        key: normalizeKey(key)
      }; // Don't explicitly store the value unless it's defined and non-null.
      // This saves on storage space, because often people don't use it.

      if (typeof value !== 'undefined' && value !== null) {
        output.value = normalizeKey(value);
      }

      mapResults.push(output);
    }

    var mapFun = mapper(view.mapFun, emit);
    var currentSeq = view.seq || 0;

    function processChange(docIdsToChangesAndEmits, seq) {
      return function () {
        return saveKeyValues(view, docIdsToChangesAndEmits, seq);
      };
    }

    var queue = new TaskQueue$1();

    function processNextBatch() {
      return view.sourceDB.changes({
        return_docs: true,
        conflicts: true,
        include_docs: true,
        style: 'all_docs',
        since: currentSeq,
        limit: CHANGES_BATCH_SIZE$1
      }).then(processBatch);
    }

    function processBatch(response) {
      var results = response.results;

      if (!results.length) {
        return;
      }

      var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
      queue.add(processChange(docIdsToChangesAndEmits, currentSeq));

      if (results.length < CHANGES_BATCH_SIZE$1) {
        return;
      }

      return processNextBatch();
    }

    function createDocIdsToChangesAndEmits(results) {
      var docIdsToChangesAndEmits = new ExportedMap();

      for (var i = 0, len = results.length; i < len; i++) {
        var change = results[i];

        if (change.doc._id[0] !== '_') {
          mapResults = [];
          doc = change.doc;

          if (!doc._deleted) {
            tryMap(view.sourceDB, mapFun, doc);
          }

          mapResults.sort(sortByKeyThenValue);
          var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
          docIdsToChangesAndEmits.set(change.doc._id, [indexableKeysToKeyValues, change.changes]);
        }

        currentSeq = change.seq;
      }

      return docIdsToChangesAndEmits;
    }

    function createIndexableKeysToKeyValues(mapResults) {
      var indexableKeysToKeyValues = new ExportedMap();
      var lastKey;

      for (var i = 0, len = mapResults.length; i < len; i++) {
        var emittedKeyValue = mapResults[i];
        var complexKey = [emittedKeyValue.key, emittedKeyValue.id];

        if (i > 0 && collate(emittedKeyValue.key, lastKey) === 0) {
          complexKey.push(i); // dup key+id, so make it unique
        }

        indexableKeysToKeyValues.set(toIndexableString(complexKey), emittedKeyValue);
        lastKey = emittedKeyValue.key;
      }

      return indexableKeysToKeyValues;
    }

    return processNextBatch().then(function () {
      return queue.finish();
    }).then(function () {
      view.seq = currentSeq;
    });
  }

  function reduceView(view, results, options) {
    if (options.group_level === 0) {
      delete options.group_level;
    }

    var shouldGroup = options.group || options.group_level;
    var reduceFun = reducer(view.reduceFun);
    var groups = [];
    var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY : options.group_level;
    results.forEach(function (e) {
      var last = groups[groups.length - 1];
      var groupKey = shouldGroup ? e.key : null; // only set group_level for array keys

      if (shouldGroup && Array.isArray(groupKey)) {
        groupKey = groupKey.slice(0, lvl);
      }

      if (last && collate(last.groupKey, groupKey) === 0) {
        last.keys.push([e.key, e.id]);
        last.values.push(e.value);
        return;
      }

      groups.push({
        keys: [[e.key, e.id]],
        values: [e.value],
        groupKey: groupKey
      });
    });
    results = [];

    for (var i = 0, len = groups.length; i < len; i++) {
      var e = groups[i];
      var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);

      if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
        // CouchDB returns an error if a built-in errors out
        throw reduceTry.error;
      }

      results.push({
        // CouchDB just sets the value to null if a non-built-in errors out
        value: reduceTry.error ? null : reduceTry.output,
        key: e.groupKey
      });
    } // no total_rows/offset when reducing


    return {
      rows: sliceResults(results, options.limit, options.skip)
    };
  }

  function queryView(view, opts) {
    return sequentialize(getQueue(view), function () {
      return queryViewInQueue(view, opts);
    })();
  }

  function queryViewInQueue(view, opts) {
    var totalRows;
    var shouldReduce = view.reduceFun && opts.reduce !== false;
    var skip = opts.skip || 0;

    if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
      // equivalent query
      opts.limit = 0;
      delete opts.keys;
    }

    function fetchFromView(viewOpts) {
      viewOpts.include_docs = true;
      return view.db.allDocs(viewOpts).then(function (res) {
        totalRows = res.total_rows;
        return res.rows.map(function (result) {
          // implicit migration - in older versions of PouchDB,
          // we explicitly stored the doc as {id: ..., key: ..., value: ...}
          // this is tested in a migration test

          /* istanbul ignore next */
          if ('value' in result.doc && typeof result.doc.value === 'object' && result.doc.value !== null) {
            var keys = Object.keys(result.doc.value).sort(); // this detection method is not perfect, but it's unlikely the user
            // emitted a value which was an object with these 3 exact keys

            var expectedKeys = ['id', 'key', 'value'];

            if (!(keys < expectedKeys || keys > expectedKeys)) {
              return result.doc.value;
            }
          }

          var parsedKeyAndDocId = parseIndexableString(result.doc._id);
          return {
            key: parsedKeyAndDocId[0],
            id: parsedKeyAndDocId[1],
            value: 'value' in result.doc ? result.doc.value : null
          };
        });
      });
    }

    function onMapResultsReady(rows) {
      var finalResults;

      if (shouldReduce) {
        finalResults = reduceView(view, rows, opts);
      } else {
        finalResults = {
          total_rows: totalRows,
          offset: skip,
          rows: rows
        };
      }
      /* istanbul ignore if */


      if (opts.update_seq) {
        finalResults.update_seq = view.seq;
      }

      if (opts.include_docs) {
        var docIds = uniq(rows.map(rowToDocId));
        return view.sourceDB.allDocs({
          keys: docIds,
          include_docs: true,
          conflicts: opts.conflicts,
          attachments: opts.attachments,
          binary: opts.binary
        }).then(function (allDocsRes) {
          var docIdsToDocs = new ExportedMap();
          allDocsRes.rows.forEach(function (row) {
            docIdsToDocs.set(row.id, row.doc);
          });
          rows.forEach(function (row) {
            var docId = rowToDocId(row);
            var doc = docIdsToDocs.get(docId);

            if (doc) {
              row.doc = doc;
            }
          });
          return finalResults;
        });
      } else {
        return finalResults;
      }
    }

    if (typeof opts.keys !== 'undefined') {
      var keys = opts.keys;
      var fetchPromises = keys.map(function (key) {
        var viewOpts = {
          startkey: toIndexableString([key]),
          endkey: toIndexableString([key, {}])
        };
        /* istanbul ignore if */

        if (opts.update_seq) {
          viewOpts.update_seq = true;
        }

        return fetchFromView(viewOpts);
      });
      return Promise.all(fetchPromises).then(flatten).then(onMapResultsReady);
    } else {
      // normal query, no 'keys'
      var viewOpts = {
        descending: opts.descending
      };
      /* istanbul ignore if */

      if (opts.update_seq) {
        viewOpts.update_seq = true;
      }

      var startkey;
      var endkey;

      if ('start_key' in opts) {
        startkey = opts.start_key;
      }

      if ('startkey' in opts) {
        startkey = opts.startkey;
      }

      if ('end_key' in opts) {
        endkey = opts.end_key;
      }

      if ('endkey' in opts) {
        endkey = opts.endkey;
      }

      if (typeof startkey !== 'undefined') {
        viewOpts.startkey = opts.descending ? toIndexableString([startkey, {}]) : toIndexableString([startkey]);
      }

      if (typeof endkey !== 'undefined') {
        var inclusiveEnd = opts.inclusive_end !== false;

        if (opts.descending) {
          inclusiveEnd = !inclusiveEnd;
        }

        viewOpts.endkey = toIndexableString(inclusiveEnd ? [endkey, {}] : [endkey]);
      }

      if (typeof opts.key !== 'undefined') {
        var keyStart = toIndexableString([opts.key]);
        var keyEnd = toIndexableString([opts.key, {}]);

        if (viewOpts.descending) {
          viewOpts.endkey = keyStart;
          viewOpts.startkey = keyEnd;
        } else {
          viewOpts.startkey = keyStart;
          viewOpts.endkey = keyEnd;
        }
      }

      if (!shouldReduce) {
        if (typeof opts.limit === 'number') {
          viewOpts.limit = opts.limit;
        }

        viewOpts.skip = skip;
      }

      return fetchFromView(viewOpts).then(onMapResultsReady);
    }
  }

  function httpViewCleanup(db) {
    return db.fetch('_view_cleanup', {
      headers: new h({
        'Content-Type': 'application/json'
      }),
      method: 'POST'
    }).then(function (response) {
      return response.json();
    });
  }

  function localViewCleanup(db) {
    return db.get('_local/' + localDocName).then(function (metaDoc) {
      var docsToViews = new ExportedMap();
      Object.keys(metaDoc.views).forEach(function (fullViewName) {
        var parts = parseViewName(fullViewName);
        var designDocName = '_design/' + parts[0];
        var viewName = parts[1];
        var views = docsToViews.get(designDocName);

        if (!views) {
          views = new ExportedSet();
          docsToViews.set(designDocName, views);
        }

        views.add(viewName);
      });
      var opts = {
        keys: mapToKeysArray(docsToViews),
        include_docs: true
      };
      return db.allDocs(opts).then(function (res) {
        var viewsToStatus = {};
        res.rows.forEach(function (row) {
          var ddocName = row.key.substring(8); // cuts off '_design/'

          docsToViews.get(row.key).forEach(function (viewName) {
            var fullViewName = ddocName + '/' + viewName;
            /* istanbul ignore if */

            if (!metaDoc.views[fullViewName]) {
              // new format, without slashes, to support PouchDB 2.2.0
              // migration test in pouchdb's browser.migration.js verifies this
              fullViewName = viewName;
            }

            var viewDBNames = Object.keys(metaDoc.views[fullViewName]); // design doc deleted, or view function nonexistent

            var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
            viewDBNames.forEach(function (viewDBName) {
              viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
            });
          });
        });
        var dbsToDelete = Object.keys(viewsToStatus).filter(function (viewDBName) {
          return !viewsToStatus[viewDBName];
        });
        var destroyPromises = dbsToDelete.map(function (viewDBName) {
          return sequentialize(getQueue(viewDBName), function () {
            return new db.constructor(viewDBName, db.__opts).destroy();
          })();
        });
        return Promise.all(destroyPromises).then(function () {
          return {
            ok: true
          };
        });
      });
    }, defaultsTo({
      ok: true
    }));
  }

  function queryPromised(db, fun, opts) {
    /* istanbul ignore next */
    if (typeof db._query === 'function') {
      return customQuery(db, fun, opts);
    }

    if (isRemote(db)) {
      return httpQuery(db, fun, opts);
    }

    if (typeof fun !== 'string') {
      // temp_view
      checkQueryParseError(opts, fun);
      tempViewQueue.add(function () {
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        'temp_view/temp_view',
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        true,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          return fin(updateView(view).then(function () {
            return queryView(view, opts);
          }), function () {
            return view.db.destroy();
          });
        });
      });
      return tempViewQueue.finish();
    } else {
      // persistent view
      var fullViewName = fun;
      var parts = parseViewName(fullViewName);
      var designDocName = parts[0];
      var viewName = parts[1];
      return db.get('_design/' + designDocName).then(function (doc) {
        var fun = doc.views && doc.views[viewName];

        if (!fun) {
          // basic validator; it's assumed that every subclass would want this
          throw new NotFoundError('ddoc ' + doc._id + ' has no view named ' + viewName);
        }

        ddocValidator(doc, viewName);
        checkQueryParseError(opts, fun);
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        fullViewName,
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        false,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          if (opts.stale === 'ok' || opts.stale === 'update_after') {
            if (opts.stale === 'update_after') {
              (0, _immediate.default)(function () {
                updateView(view);
              });
            }

            return queryView(view, opts);
          } else {
            // stale not ok
            return updateView(view).then(function () {
              return queryView(view, opts);
            });
          }
        });
      });
    }
  }

  function abstractQuery(fun, opts, callback) {
    var db = this;

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = opts ? coerceOptions(opts) : {};

    if (typeof fun === 'function') {
      fun = {
        map: fun
      };
    }

    var promise = Promise.resolve().then(function () {
      return queryPromised(db, fun, opts);
    });
    promisedCallback(promise, callback);
    return promise;
  }

  var abstractViewCleanup = callbackify(function () {
    var db = this;
    /* istanbul ignore next */

    if (typeof db._viewCleanup === 'function') {
      return customViewCleanup(db);
    }

    if (isRemote(db)) {
      return httpViewCleanup(db);
    }

    return localViewCleanup(db);
  });
  return {
    query: abstractQuery,
    viewCleanup: abstractViewCleanup
  };
}

var builtInReduce = {
  _sum: function (keys, values) {
    return sum(values);
  },
  _count: function (keys, values) {
    return values.length;
  },
  _stats: function (keys, values) {
    // no need to implement rereduce=true, because Pouch
    // will never call it
    function sumsqr(values) {
      var _sumsqr = 0;

      for (var i = 0, len = values.length; i < len; i++) {
        var num = values[i];
        _sumsqr += num * num;
      }

      return _sumsqr;
    }

    return {
      sum: sum(values),
      min: Math.min.apply(null, values),
      max: Math.max.apply(null, values),
      count: values.length,
      sumsqr: sumsqr(values)
    };
  }
};

function getBuiltIn(reduceFunString) {
  if (/^_sum/.test(reduceFunString)) {
    return builtInReduce._sum;
  } else if (/^_count/.test(reduceFunString)) {
    return builtInReduce._count;
  } else if (/^_stats/.test(reduceFunString)) {
    return builtInReduce._stats;
  } else if (/^_/.test(reduceFunString)) {
    throw new Error(reduceFunString + ' is not a supported reduce function.');
  }
}

function mapper(mapFun, emit) {
  // for temp_views one can use emit(doc, emit), see #38
  if (typeof mapFun === "function" && mapFun.length === 2) {
    var origMap = mapFun;
    return function (doc) {
      return origMap(doc, emit);
    };
  } else {
    return evalFunctionWithEval(mapFun.toString(), emit);
  }
}

function reducer(reduceFun) {
  var reduceFunString = reduceFun.toString();
  var builtIn = getBuiltIn(reduceFunString);

  if (builtIn) {
    return builtIn;
  } else {
    return evalFunctionWithEval(reduceFunString);
  }
}

function ddocValidator(ddoc, viewName) {
  var fun = ddoc.views && ddoc.views[viewName];

  if (typeof fun.map !== 'string') {
    throw new NotFoundError('ddoc ' + ddoc._id + ' has no string view named ' + viewName + ', instead found object of type: ' + typeof fun.map);
  }
}

var localDocName = 'mrviews';
var abstract = createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator);

function query(fun, opts, callback) {
  return abstract.query.call(this, fun, opts, callback);
}

function viewCleanup(callback) {
  return abstract.viewCleanup.call(this, callback);
}

var mapreduce = {
  query: query,
  viewCleanup: viewCleanup
};

function isGenOne$1(rev) {
  return /^1-/.test(rev);
}

function fileHasChanged(localDoc, remoteDoc, filename) {
  return !localDoc._attachments || !localDoc._attachments[filename] || localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
}

function getDocAttachments(db, doc) {
  var filenames = Object.keys(doc._attachments);
  return Promise.all(filenames.map(function (filename) {
    return db.getAttachment(doc._id, filename, {
      rev: doc._rev
    });
  }));
}

function getDocAttachmentsFromTargetOrSource(target, src, doc) {
  var doCheckForLocalAttachments = isRemote(src) && !isRemote(target);
  var filenames = Object.keys(doc._attachments);

  if (!doCheckForLocalAttachments) {
    return getDocAttachments(src, doc);
  }

  return target.get(doc._id).then(function (localDoc) {
    return Promise.all(filenames.map(function (filename) {
      if (fileHasChanged(localDoc, doc, filename)) {
        return src.getAttachment(doc._id, filename);
      }

      return target.getAttachment(localDoc._id, filename);
    }));
  }).catch(function (error) {
    /* istanbul ignore if */
    if (error.status !== 404) {
      throw error;
    }

    return getDocAttachments(src, doc);
  });
}

function createBulkGetOpts(diffs) {
  var requests = [];
  Object.keys(diffs).forEach(function (id) {
    var missingRevs = diffs[id].missing;
    missingRevs.forEach(function (missingRev) {
      requests.push({
        id: id,
        rev: missingRev
      });
    });
  });
  return {
    docs: requests,
    revs: true,
    latest: true
  };
} //
// Fetch all the documents from the src as described in the "diffs",
// which is a mapping of docs IDs to revisions. If the state ever
// changes to "cancelled", then the returned promise will be rejected.
// Else it will be resolved with a list of fetched documents.
//


function getDocs(src, target, diffs, state) {
  diffs = clone(diffs); // we do not need to modify this

  var resultDocs = [],
      ok = true;

  function getAllDocs() {
    var bulkGetOpts = createBulkGetOpts(diffs);

    if (!bulkGetOpts.docs.length) {
      // optimization: skip empty requests
      return;
    }

    return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
      /* istanbul ignore if */
      if (state.cancelled) {
        throw new Error('cancelled');
      }

      return Promise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
        return Promise.all(bulkGetInfo.docs.map(function (doc) {
          var remoteDoc = doc.ok;

          if (doc.error) {
            // when AUTO_COMPACTION is set, docs can be returned which look
            // like this: {"missing":"1-7c3ac256b693c462af8442f992b83696"}
            ok = false;
          }

          if (!remoteDoc || !remoteDoc._attachments) {
            return remoteDoc;
          }

          return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc).then(function (attachments) {
            var filenames = Object.keys(remoteDoc._attachments);
            attachments.forEach(function (attachment, i) {
              var att = remoteDoc._attachments[filenames[i]];
              delete att.stub;
              delete att.length;
              att.data = attachment;
            });
            return remoteDoc;
          });
        }));
      })).then(function (results) {
        resultDocs = resultDocs.concat(flatten(results).filter(Boolean));
      });
    });
  }

  function hasAttachments(doc) {
    return doc._attachments && Object.keys(doc._attachments).length > 0;
  }

  function hasConflicts(doc) {
    return doc._conflicts && doc._conflicts.length > 0;
  }

  function fetchRevisionOneDocs(ids) {
    // Optimization: fetch gen-1 docs and attachments in
    // a single request using _all_docs
    return src.allDocs({
      keys: ids,
      include_docs: true,
      conflicts: true
    }).then(function (res) {
      if (state.cancelled) {
        throw new Error('cancelled');
      }

      res.rows.forEach(function (row) {
        if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) || hasAttachments(row.doc) || hasConflicts(row.doc)) {
          // if any of these conditions apply, we need to fetch using get()
          return;
        } // strip _conflicts array to appease CSG (#5793)

        /* istanbul ignore if */


        if (row.doc._conflicts) {
          delete row.doc._conflicts;
        } // the doc we got back from allDocs() is sufficient


        resultDocs.push(row.doc);
        delete diffs[row.id];
      });
    });
  }

  function getRevisionOneDocs() {
    // filter out the generation 1 docs and get them
    // leaving the non-generation one docs to be got otherwise
    var ids = Object.keys(diffs).filter(function (id) {
      var missing = diffs[id].missing;
      return missing.length === 1 && isGenOne$1(missing[0]);
    });

    if (ids.length > 0) {
      return fetchRevisionOneDocs(ids);
    }
  }

  function returnResult() {
    return {
      ok: ok,
      docs: resultDocs
    };
  }

  return Promise.resolve().then(getRevisionOneDocs).then(getAllDocs).then(returnResult);
}

var CHECKPOINT_VERSION = 1;
var REPLICATOR = "pouchdb"; // This is an arbitrary number to limit the
// amount of replication history we save in the checkpoint.
// If we save too much, the checkpoing docs will become very big,
// if we save fewer, we'll run a greater risk of having to
// read all the changes from 0 when checkpoint PUTs fail
// CouchDB 2.0 has a more involved history pruning,
// but let's go for the simple version for now.

var CHECKPOINT_HISTORY_SIZE = 5;
var LOWEST_SEQ = 0;

function updateCheckpoint(db, id, checkpoint, session, returnValue) {
  return db.get(id).catch(function (err) {
    if (err.status === 404) {
      if (db.adapter === 'http' || db.adapter === 'https') {
        explainError(404, 'PouchDB is just checking if a remote checkpoint exists.');
      }

      return {
        session_id: session,
        _id: id,
        history: [],
        replicator: REPLICATOR,
        version: CHECKPOINT_VERSION
      };
    }

    throw err;
  }).then(function (doc) {
    if (returnValue.cancelled) {
      return;
    } // if the checkpoint has not changed, do not update


    if (doc.last_seq === checkpoint) {
      return;
    } // Filter out current entry for this replication


    doc.history = (doc.history || []).filter(function (item) {
      return item.session_id !== session;
    }); // Add the latest checkpoint to history

    doc.history.unshift({
      last_seq: checkpoint,
      session_id: session
    }); // Just take the last pieces in history, to
    // avoid really big checkpoint docs.
    // see comment on history size above

    doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);
    doc.version = CHECKPOINT_VERSION;
    doc.replicator = REPLICATOR;
    doc.session_id = session;
    doc.last_seq = checkpoint;
    return db.put(doc).catch(function (err) {
      if (err.status === 409) {
        // retry; someone is trying to write a checkpoint simultaneously
        return updateCheckpoint(db, id, checkpoint, session, returnValue);
      }

      throw err;
    });
  });
}

function Checkpointer(src, target, id, returnValue, opts) {
  this.src = src;
  this.target = target;
  this.id = id;
  this.returnValue = returnValue;
  this.opts = opts || {};
}

Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
  var self = this;
  return this.updateTarget(checkpoint, session).then(function () {
    return self.updateSource(checkpoint, session);
  });
};

Checkpointer.prototype.updateTarget = function (checkpoint, session) {
  if (this.opts.writeTargetCheckpoint) {
    return updateCheckpoint(this.target, this.id, checkpoint, session, this.returnValue);
  } else {
    return Promise.resolve(true);
  }
};

Checkpointer.prototype.updateSource = function (checkpoint, session) {
  if (this.opts.writeSourceCheckpoint) {
    var self = this;
    return updateCheckpoint(this.src, this.id, checkpoint, session, this.returnValue).catch(function (err) {
      if (isForbiddenError(err)) {
        self.opts.writeSourceCheckpoint = false;
        return true;
      }

      throw err;
    });
  } else {
    return Promise.resolve(true);
  }
};

var comparisons = {
  "undefined": function (targetDoc, sourceDoc) {
    // This is the previous comparison function
    if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
      return sourceDoc.last_seq;
    }
    /* istanbul ignore next */


    return 0;
  },
  "1": function (targetDoc, sourceDoc) {
    // This is the comparison function ported from CouchDB
    return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
  }
};

Checkpointer.prototype.getCheckpoint = function () {
  var self = this;

  if (self.opts && self.opts.writeSourceCheckpoint && !self.opts.writeTargetCheckpoint) {
    return self.src.get(self.id).then(function (sourceDoc) {
      return sourceDoc.last_seq || LOWEST_SEQ;
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        throw err;
      }

      return LOWEST_SEQ;
    });
  }

  return self.target.get(self.id).then(function (targetDoc) {
    if (self.opts && self.opts.writeTargetCheckpoint && !self.opts.writeSourceCheckpoint) {
      return targetDoc.last_seq || LOWEST_SEQ;
    }

    return self.src.get(self.id).then(function (sourceDoc) {
      // Since we can't migrate an old version doc to a new one
      // (no session id), we just go with the lowest seq in this case

      /* istanbul ignore if */
      if (targetDoc.version !== sourceDoc.version) {
        return LOWEST_SEQ;
      }

      var version;

      if (targetDoc.version) {
        version = targetDoc.version.toString();
      } else {
        version = "undefined";
      }

      if (version in comparisons) {
        return comparisons[version](targetDoc, sourceDoc);
      }
      /* istanbul ignore next */


      return LOWEST_SEQ;
    }, function (err) {
      if (err.status === 404 && targetDoc.last_seq) {
        return self.src.put({
          _id: self.id,
          last_seq: LOWEST_SEQ
        }).then(function () {
          return LOWEST_SEQ;
        }, function (err) {
          if (isForbiddenError(err)) {
            self.opts.writeSourceCheckpoint = false;
            return targetDoc.last_seq;
          }
          /* istanbul ignore next */


          return LOWEST_SEQ;
        });
      }

      throw err;
    });
  }).catch(function (err) {
    if (err.status !== 404) {
      throw err;
    }

    return LOWEST_SEQ;
  });
}; // This checkpoint comparison is ported from CouchDBs source
// they come from here:
// https://github.com/apache/couchdb-couch-replicator/blob/master/src/couch_replicator.erl#L863-L906


function compareReplicationLogs(srcDoc, tgtDoc) {
  if (srcDoc.session_id === tgtDoc.session_id) {
    return {
      last_seq: srcDoc.last_seq,
      history: srcDoc.history
    };
  }

  return compareReplicationHistory(srcDoc.history, tgtDoc.history);
}

function compareReplicationHistory(sourceHistory, targetHistory) {
  // the erlang loop via function arguments is not so easy to repeat in JS
  // therefore, doing this as recursion
  var S = sourceHistory[0];
  var sourceRest = sourceHistory.slice(1);
  var T = targetHistory[0];
  var targetRest = targetHistory.slice(1);

  if (!S || targetHistory.length === 0) {
    return {
      last_seq: LOWEST_SEQ,
      history: []
    };
  }

  var sourceId = S.session_id;
  /* istanbul ignore if */

  if (hasSessionId(sourceId, targetHistory)) {
    return {
      last_seq: S.last_seq,
      history: sourceHistory
    };
  }

  var targetId = T.session_id;

  if (hasSessionId(targetId, sourceRest)) {
    return {
      last_seq: T.last_seq,
      history: targetRest
    };
  }

  return compareReplicationHistory(sourceRest, targetRest);
}

function hasSessionId(sessionId, history) {
  var props = history[0];
  var rest = history.slice(1);

  if (!sessionId || history.length === 0) {
    return false;
  }

  if (sessionId === props.session_id) {
    return true;
  }

  return hasSessionId(sessionId, rest);
}

function isForbiddenError(err) {
  return typeof err.status === 'number' && Math.floor(err.status / 100) === 4;
}

var STARTING_BACK_OFF = 0;

function backOff(opts, returnValue, error, callback) {
  if (opts.retry === false) {
    returnValue.emit('error', error);
    returnValue.removeAllListeners();
    return;
  }
  /* istanbul ignore if */


  if (typeof opts.back_off_function !== 'function') {
    opts.back_off_function = defaultBackOff;
  }

  returnValue.emit('requestError', error);

  if (returnValue.state === 'active' || returnValue.state === 'pending') {
    returnValue.emit('paused', error);
    returnValue.state = 'stopped';

    var backOffSet = function backoffTimeSet() {
      opts.current_back_off = STARTING_BACK_OFF;
    };

    var removeBackOffSetter = function removeBackOffTimeSet() {
      returnValue.removeListener('active', backOffSet);
    };

    returnValue.once('paused', removeBackOffSetter);
    returnValue.once('active', backOffSet);
  }

  opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
  opts.current_back_off = opts.back_off_function(opts.current_back_off);
  setTimeout(callback, opts.current_back_off);
}

function sortObjectPropertiesByKey(queryParams) {
  return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
    result[key] = queryParams[key];
    return result;
  }, {});
} // Generate a unique id particular to this replication.
// Not guaranteed to align perfectly with CouchDB's rep ids.


function generateReplicationId(src, target, opts) {
  var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : '';
  var filterFun = opts.filter ? opts.filter.toString() : '';
  var queryParams = '';
  var filterViewName = '';
  var selector = ''; // possibility for checkpoints to be lost here as behaviour of
  // JSON.stringify is not stable (see #6226)

  /* istanbul ignore if */

  if (opts.selector) {
    selector = JSON.stringify(opts.selector);
  }

  if (opts.filter && opts.query_params) {
    queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
  }

  if (opts.filter && opts.filter === '_view') {
    filterViewName = opts.view.toString();
  }

  return Promise.all([src.id(), target.id()]).then(function (res) {
    var queryData = res[0] + res[1] + filterFun + filterViewName + queryParams + docIds + selector;
    return new Promise(function (resolve) {
      binaryMd5(queryData, resolve);
    });
  }).then(function (md5sum) {
    // can't use straight-up md5 alphabet, because
    // the char '/' is interpreted as being for attachments,
    // and + is also not url-safe
    md5sum = md5sum.replace(/\//g, '.').replace(/\+/g, '_');
    return '_local/' + md5sum;
  });
}

function replicate(src, target, opts, returnValue, result) {
  var batches = []; // list of batches to be processed

  var currentBatch; // the batch currently being processed

  var pendingBatch = {
    seq: 0,
    changes: [],
    docs: []
  }; // next batch, not yet ready to be processed

  var writingCheckpoint = false; // true while checkpoint is being written

  var changesCompleted = false; // true when all changes received

  var replicationCompleted = false; // true when replication has completed

  var last_seq = 0;
  var continuous = opts.continuous || opts.live || false;
  var batch_size = opts.batch_size || 100;
  var batches_limit = opts.batches_limit || 10;
  var changesPending = false; // true while src.changes is running

  var doc_ids = opts.doc_ids;
  var selector = opts.selector;
  var repId;
  var checkpointer;
  var changedDocs = []; // Like couchdb, every replication gets a unique session id

  var session = uuid();
  result = result || {
    ok: true,
    start_time: new Date().toISOString(),
    docs_read: 0,
    docs_written: 0,
    doc_write_failures: 0,
    errors: []
  };
  var changesOpts = {};
  returnValue.ready(src, target);

  function initCheckpointer() {
    if (checkpointer) {
      return Promise.resolve();
    }

    return generateReplicationId(src, target, opts).then(function (res) {
      repId = res;
      var checkpointOpts = {};

      if (opts.checkpoint === false) {
        checkpointOpts = {
          writeSourceCheckpoint: false,
          writeTargetCheckpoint: false
        };
      } else if (opts.checkpoint === 'source') {
        checkpointOpts = {
          writeSourceCheckpoint: true,
          writeTargetCheckpoint: false
        };
      } else if (opts.checkpoint === 'target') {
        checkpointOpts = {
          writeSourceCheckpoint: false,
          writeTargetCheckpoint: true
        };
      } else {
        checkpointOpts = {
          writeSourceCheckpoint: true,
          writeTargetCheckpoint: true
        };
      }

      checkpointer = new Checkpointer(src, target, repId, returnValue, checkpointOpts);
    });
  }

  function writeDocs() {
    changedDocs = [];

    if (currentBatch.docs.length === 0) {
      return;
    }

    var docs = currentBatch.docs;
    var bulkOpts = {
      timeout: opts.timeout
    };
    return target.bulkDocs({
      docs: docs,
      new_edits: false
    }, bulkOpts).then(function (res) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      } // `res` doesn't include full documents (which live in `docs`), so we create a map of 
      // (id -> error), and check for errors while iterating over `docs`


      var errorsById = Object.create(null);
      res.forEach(function (res) {
        if (res.error) {
          errorsById[res.id] = res;
        }
      });
      var errorsNo = Object.keys(errorsById).length;
      result.doc_write_failures += errorsNo;
      result.docs_written += docs.length - errorsNo;
      docs.forEach(function (doc) {
        var error = errorsById[doc._id];

        if (error) {
          result.errors.push(error); // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)

          var errorName = (error.name || '').toLowerCase();

          if (errorName === 'unauthorized' || errorName === 'forbidden') {
            returnValue.emit('denied', clone(error));
          } else {
            throw error;
          }
        } else {
          changedDocs.push(doc);
        }
      });
    }, function (err) {
      result.doc_write_failures += docs.length;
      throw err;
    });
  }

  function finishBatch() {
    if (currentBatch.error) {
      throw new Error('There was a problem getting docs.');
    }

    result.last_seq = last_seq = currentBatch.seq;
    var outResult = clone(result);

    if (changedDocs.length) {
      outResult.docs = changedDocs; // Attach 'pending' property if server supports it (CouchDB 2.0+)

      /* istanbul ignore if */

      if (typeof currentBatch.pending === 'number') {
        outResult.pending = currentBatch.pending;
        delete currentBatch.pending;
      }

      returnValue.emit('change', outResult);
    }

    writingCheckpoint = true;
    return checkpointer.writeCheckpoint(currentBatch.seq, session).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */

      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }

      currentBatch = undefined;
      getChanges();
    }).catch(function (err) {
      onCheckpointError(err);
      throw err;
    });
  }

  function getDiffs() {
    var diff = {};
    currentBatch.changes.forEach(function (change) {
      // Couchbase Sync Gateway emits these, but we can ignore them

      /* istanbul ignore if */
      if (change.id === "_user/") {
        return;
      }

      diff[change.id] = change.changes.map(function (x) {
        return x.rev;
      });
    });
    return target.revsDiff(diff).then(function (diffs) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      } // currentBatch.diffs elements are deleted as the documents are written


      currentBatch.diffs = diffs;
    });
  }

  function getBatchDocs() {
    return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
      currentBatch.error = !got.ok;
      got.docs.forEach(function (doc) {
        delete currentBatch.diffs[doc._id];
        result.docs_read++;
        currentBatch.docs.push(doc);
      });
    });
  }

  function startNextBatch() {
    if (returnValue.cancelled || currentBatch) {
      return;
    }

    if (batches.length === 0) {
      processPendingBatch(true);
      return;
    }

    currentBatch = batches.shift();
    getDiffs().then(getBatchDocs).then(writeDocs).then(finishBatch).then(startNextBatch).catch(function (err) {
      abortReplication('batch processing terminated with error', err);
    });
  }

  function processPendingBatch(immediate) {
    if (pendingBatch.changes.length === 0) {
      if (batches.length === 0 && !currentBatch) {
        if (continuous && changesOpts.live || changesCompleted) {
          returnValue.state = 'pending';
          returnValue.emit('paused');
        }

        if (changesCompleted) {
          completeReplication();
        }
      }

      return;
    }

    if (immediate || changesCompleted || pendingBatch.changes.length >= batch_size) {
      batches.push(pendingBatch);
      pendingBatch = {
        seq: 0,
        changes: [],
        docs: []
      };

      if (returnValue.state === 'pending' || returnValue.state === 'stopped') {
        returnValue.state = 'active';
        returnValue.emit('active');
      }

      startNextBatch();
    }
  }

  function abortReplication(reason, err) {
    if (replicationCompleted) {
      return;
    }

    if (!err.message) {
      err.message = reason;
    }

    result.ok = false;
    result.status = 'aborting';
    batches = [];
    pendingBatch = {
      seq: 0,
      changes: [],
      docs: []
    };
    completeReplication(err);
  }

  function completeReplication(fatalError) {
    if (replicationCompleted) {
      return;
    }
    /* istanbul ignore if */


    if (returnValue.cancelled) {
      result.status = 'cancelled';

      if (writingCheckpoint) {
        return;
      }
    }

    result.status = result.status || 'complete';
    result.end_time = new Date().toISOString();
    result.last_seq = last_seq;
    replicationCompleted = true;

    if (fatalError) {
      // need to extend the error because Firefox considers ".result" read-only
      fatalError = createError(fatalError);
      fatalError.result = result; // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)

      var errorName = (fatalError.name || '').toLowerCase();

      if (errorName === 'unauthorized' || errorName === 'forbidden') {
        returnValue.emit('error', fatalError);
        returnValue.removeAllListeners();
      } else {
        backOff(opts, returnValue, fatalError, function () {
          replicate(src, target, opts, returnValue);
        });
      }
    } else {
      returnValue.emit('complete', result);
      returnValue.removeAllListeners();
    }
  }

  function onChange(change, pending, lastSeq) {
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      return completeReplication();
    } // Attach 'pending' property if server supports it (CouchDB 2.0+)

    /* istanbul ignore if */


    if (typeof pending === 'number') {
      pendingBatch.pending = pending;
    }

    var filter = filterChange(opts)(change);

    if (!filter) {
      return;
    }

    pendingBatch.seq = change.seq || lastSeq;
    pendingBatch.changes.push(change);
    (0, _immediate.default)(function () {
      processPendingBatch(batches.length === 0 && changesOpts.live);
    });
  }

  function onChangesComplete(changes) {
    changesPending = false;
    /* istanbul ignore if */

    if (returnValue.cancelled) {
      return completeReplication();
    } // if no results were returned then we're done,
    // else fetch more


    if (changes.results.length > 0) {
      changesOpts.since = changes.results[changes.results.length - 1].seq;
      getChanges();
      processPendingBatch(true);
    } else {
      var complete = function () {
        if (continuous) {
          changesOpts.live = true;
          getChanges();
        } else {
          changesCompleted = true;
        }

        processPendingBatch(true);
      }; // update the checkpoint so we start from the right seq next time


      if (!currentBatch && changes.results.length === 0) {
        writingCheckpoint = true;
        checkpointer.writeCheckpoint(changes.last_seq, session).then(function () {
          writingCheckpoint = false;
          result.last_seq = last_seq = changes.last_seq;
          complete();
        }).catch(onCheckpointError);
      } else {
        complete();
      }
    }
  }

  function onChangesError(err) {
    changesPending = false;
    /* istanbul ignore if */

    if (returnValue.cancelled) {
      return completeReplication();
    }

    abortReplication('changes rejected', err);
  }

  function getChanges() {
    if (!(!changesPending && !changesCompleted && batches.length < batches_limit)) {
      return;
    }

    changesPending = true;

    function abortChanges() {
      changes.cancel();
    }

    function removeListener() {
      returnValue.removeListener('cancel', abortChanges);
    }

    if (returnValue._changes) {
      // remove old changes() and listeners
      returnValue.removeListener('cancel', returnValue._abortChanges);

      returnValue._changes.cancel();
    }

    returnValue.once('cancel', abortChanges);
    var changes = src.changes(changesOpts).on('change', onChange);
    changes.then(removeListener, removeListener);
    changes.then(onChangesComplete).catch(onChangesError);

    if (opts.retry) {
      // save for later so we can cancel if necessary
      returnValue._changes = changes;
      returnValue._abortChanges = abortChanges;
    }
  }

  function startChanges() {
    initCheckpointer().then(function () {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        return;
      }

      return checkpointer.getCheckpoint().then(function (checkpoint) {
        last_seq = checkpoint;
        changesOpts = {
          since: last_seq,
          limit: batch_size,
          batch_size: batch_size,
          style: 'all_docs',
          doc_ids: doc_ids,
          selector: selector,
          return_docs: true // required so we know when we're done

        };

        if (opts.filter) {
          if (typeof opts.filter !== 'string') {
            // required for the client-side filter in onChange
            changesOpts.include_docs = true;
          } else {
            // ddoc filter
            changesOpts.filter = opts.filter;
          }
        }

        if ('heartbeat' in opts) {
          changesOpts.heartbeat = opts.heartbeat;
        }

        if ('timeout' in opts) {
          changesOpts.timeout = opts.timeout;
        }

        if (opts.query_params) {
          changesOpts.query_params = opts.query_params;
        }

        if (opts.view) {
          changesOpts.view = opts.view;
        }

        getChanges();
      });
    }).catch(function (err) {
      abortReplication('getCheckpoint rejected with ', err);
    });
  }
  /* istanbul ignore next */


  function onCheckpointError(err) {
    writingCheckpoint = false;
    abortReplication('writeCheckpoint completed with error', err);
  }
  /* istanbul ignore if */


  if (returnValue.cancelled) {
    // cancelled immediately
    completeReplication();
    return;
  }

  if (!returnValue._addedListeners) {
    returnValue.once('cancel', completeReplication);

    if (typeof opts.complete === 'function') {
      returnValue.once('error', opts.complete);
      returnValue.once('complete', function (result) {
        opts.complete(null, result);
      });
    }

    returnValue._addedListeners = true;
  }

  if (typeof opts.since === 'undefined') {
    startChanges();
  } else {
    initCheckpointer().then(function () {
      writingCheckpoint = true;
      return checkpointer.writeCheckpoint(opts.since, session);
    }).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */

      if (returnValue.cancelled) {
        completeReplication();
        return;
      }

      last_seq = opts.since;
      startChanges();
    }).catch(onCheckpointError);
  }
} // We create a basic promise so the caller can cancel the replication possibly
// before we have actually started listening to changes etc


(0, _inherits.default)(Replication, _events.EventEmitter);

function Replication() {
  _events.EventEmitter.call(this);

  this.cancelled = false;
  this.state = 'pending';
  var self = this;
  var promise = new Promise(function (fulfill, reject) {
    self.once('complete', fulfill);
    self.once('error', reject);
  });

  self.then = function (resolve, reject) {
    return promise.then(resolve, reject);
  };

  self.catch = function (reject) {
    return promise.catch(reject);
  }; // As we allow error handling via "error" event as well,
  // put a stub in here so that rejecting never throws UnhandledError.


  self.catch(function () {});
}

Replication.prototype.cancel = function () {
  this.cancelled = true;
  this.state = 'cancelled';
  this.emit('cancel');
};

Replication.prototype.ready = function (src, target) {
  var self = this;

  if (self._readyCalled) {
    return;
  }

  self._readyCalled = true;

  function onDestroy() {
    self.cancel();
  }

  src.once('destroyed', onDestroy);
  target.once('destroyed', onDestroy);

  function cleanup() {
    src.removeListener('destroyed', onDestroy);
    target.removeListener('destroyed', onDestroy);
  }

  self.once('complete', cleanup);
};

function toPouch(db, opts) {
  var PouchConstructor = opts.PouchConstructor;

  if (typeof db === 'string') {
    return new PouchConstructor(db, opts);
  } else {
    return db;
  }
}

function replicateWrapper(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof opts === 'undefined') {
    opts = {};
  }

  if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
    throw createError(BAD_REQUEST, "`doc_ids` filter parameter is not a list.");
  }

  opts.complete = callback;
  opts = clone(opts);
  opts.continuous = opts.continuous || opts.live;
  opts.retry = 'retry' in opts ? opts.retry : false;
  /*jshint validthis:true */

  opts.PouchConstructor = opts.PouchConstructor || this;
  var replicateRet = new Replication(opts);
  var srcPouch = toPouch(src, opts);
  var targetPouch = toPouch(target, opts);
  replicate(srcPouch, targetPouch, opts, replicateRet);
  return replicateRet;
}

(0, _inherits.default)(Sync, _events.EventEmitter);

function sync(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof opts === 'undefined') {
    opts = {};
  }

  opts = clone(opts);
  /*jshint validthis:true */

  opts.PouchConstructor = opts.PouchConstructor || this;
  src = toPouch(src, opts);
  target = toPouch(target, opts);
  return new Sync(src, target, opts, callback);
}

function Sync(src, target, opts, callback) {
  var self = this;
  this.canceled = false;
  var optsPush = opts.push ? $inject_Object_assign({}, opts, opts.push) : opts;
  var optsPull = opts.pull ? $inject_Object_assign({}, opts, opts.pull) : opts;
  this.push = replicateWrapper(src, target, optsPush);
  this.pull = replicateWrapper(target, src, optsPull);
  this.pushPaused = true;
  this.pullPaused = true;

  function pullChange(change) {
    self.emit('change', {
      direction: 'pull',
      change: change
    });
  }

  function pushChange(change) {
    self.emit('change', {
      direction: 'push',
      change: change
    });
  }

  function pushDenied(doc) {
    self.emit('denied', {
      direction: 'push',
      doc: doc
    });
  }

  function pullDenied(doc) {
    self.emit('denied', {
      direction: 'pull',
      doc: doc
    });
  }

  function pushPaused() {
    self.pushPaused = true;
    /* istanbul ignore if */

    if (self.pullPaused) {
      self.emit('paused');
    }
  }

  function pullPaused() {
    self.pullPaused = true;
    /* istanbul ignore if */

    if (self.pushPaused) {
      self.emit('paused');
    }
  }

  function pushActive() {
    self.pushPaused = false;
    /* istanbul ignore if */

    if (self.pullPaused) {
      self.emit('active', {
        direction: 'push'
      });
    }
  }

  function pullActive() {
    self.pullPaused = false;
    /* istanbul ignore if */

    if (self.pushPaused) {
      self.emit('active', {
        direction: 'pull'
      });
    }
  }

  var removed = {};

  function removeAll(type) {
    // type is 'push' or 'pull'
    return function (event, func) {
      var isChange = event === 'change' && (func === pullChange || func === pushChange);
      var isDenied = event === 'denied' && (func === pullDenied || func === pushDenied);
      var isPaused = event === 'paused' && (func === pullPaused || func === pushPaused);
      var isActive = event === 'active' && (func === pullActive || func === pushActive);

      if (isChange || isDenied || isPaused || isActive) {
        if (!(event in removed)) {
          removed[event] = {};
        }

        removed[event][type] = true;

        if (Object.keys(removed[event]).length === 2) {
          // both push and pull have asked to be removed
          self.removeAllListeners(event);
        }
      }
    };
  }

  if (opts.live) {
    this.push.on('complete', self.pull.cancel.bind(self.pull));
    this.pull.on('complete', self.push.cancel.bind(self.push));
  }

  function addOneListener(ee, event, listener) {
    if (ee.listeners(event).indexOf(listener) == -1) {
      ee.on(event, listener);
    }
  }

  this.on('newListener', function (event) {
    if (event === 'change') {
      addOneListener(self.pull, 'change', pullChange);
      addOneListener(self.push, 'change', pushChange);
    } else if (event === 'denied') {
      addOneListener(self.pull, 'denied', pullDenied);
      addOneListener(self.push, 'denied', pushDenied);
    } else if (event === 'active') {
      addOneListener(self.pull, 'active', pullActive);
      addOneListener(self.push, 'active', pushActive);
    } else if (event === 'paused') {
      addOneListener(self.pull, 'paused', pullPaused);
      addOneListener(self.push, 'paused', pushPaused);
    }
  });
  this.on('removeListener', function (event) {
    if (event === 'change') {
      self.pull.removeListener('change', pullChange);
      self.push.removeListener('change', pushChange);
    } else if (event === 'denied') {
      self.pull.removeListener('denied', pullDenied);
      self.push.removeListener('denied', pushDenied);
    } else if (event === 'active') {
      self.pull.removeListener('active', pullActive);
      self.push.removeListener('active', pushActive);
    } else if (event === 'paused') {
      self.pull.removeListener('paused', pullPaused);
      self.push.removeListener('paused', pushPaused);
    }
  });
  this.pull.on('removeListener', removeAll('pull'));
  this.push.on('removeListener', removeAll('push'));
  var promise = Promise.all([this.push, this.pull]).then(function (resp) {
    var out = {
      push: resp[0],
      pull: resp[1]
    };
    self.emit('complete', out);

    if (callback) {
      callback(null, out);
    }

    self.removeAllListeners();
    return out;
  }, function (err) {
    self.cancel();

    if (callback) {
      // if there's a callback, then the callback can receive
      // the error event
      callback(err);
    } else {
      // if there's no callback, then we're safe to emit an error
      // event, which would otherwise throw an unhandled error
      // due to 'error' being a special event in EventEmitters
      self.emit('error', err);
    }

    self.removeAllListeners();

    if (callback) {
      // no sense throwing if we're already emitting an 'error' event
      throw err;
    }
  });

  this.then = function (success, err) {
    return promise.then(success, err);
  };

  this.catch = function (err) {
    return promise.catch(err);
  };
}

Sync.prototype.cancel = function () {
  if (!this.canceled) {
    this.canceled = true;
    this.push.cancel();
    this.pull.cancel();
  }
};

function replication(PouchDB) {
  PouchDB.replicate = replicateWrapper;
  PouchDB.sync = sync;
  Object.defineProperty(PouchDB.prototype, 'replicate', {
    get: function () {
      var self = this;

      if (typeof this.replicateMethods === 'undefined') {
        this.replicateMethods = {
          from: function (other, opts, callback) {
            return self.constructor.replicate(other, self, opts, callback);
          },
          to: function (other, opts, callback) {
            return self.constructor.replicate(self, other, opts, callback);
          }
        };
      }

      return this.replicateMethods;
    }
  });

  PouchDB.prototype.sync = function (dbName, opts, callback) {
    return this.constructor.sync(this, dbName, opts, callback);
  };
}

PouchDB.plugin(IDBPouch).plugin(HttpPouch$1).plugin(mapreduce).plugin(replication); // Pull from src because pouchdb-node/pouchdb-browser themselves

var _default = PouchDB;
exports.default = _default;
},{"argsarray":"../../node_modules/argsarray/index.js","immediate":"../../node_modules/immediate/lib/browser.js","events":"../../node_modules/events/events.js","inherits":"../../node_modules/inherits/inherits_browser.js","spark-md5":"../../node_modules/spark-md5/spark-md5.js","uuid":"../../node_modules/pouchdb/node_modules/uuid/index.js","vuvuzela":"../../node_modules/vuvuzela/index.js","process":"../../node_modules/process/browser.js"}],"../../node_modules/pouchdb-collections/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = exports.Set = void 0;

function mangle(key) {
  return '$' + key;
}

function unmangle(key) {
  return key.substring(1);
}

function Map$1() {
  this._store = {};
}

Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};

Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};

Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};

Map$1.prototype.delete = function (key) {
  var mangled = mangle(key);
  var res = mangled in this._store;
  delete this._store[mangled];
  return res;
};

Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};

Object.defineProperty(Map$1.prototype, 'size', {
  get: function () {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1(); // init with an array

  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}

Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};

Set$1.prototype.has = function (key) {
  return this._store.has(key);
};

Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};

Object.defineProperty(Set$1.prototype, 'size', {
  get: function () {
    return this._store.size;
  }
});
/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.

function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }

  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
} // based on https://github.com/montagejs/collections


var ExportedSet;
exports.Set = ExportedSet;
var ExportedMap;
exports.Map = ExportedMap;
{
  if (supportsMapAndSet()) {
    // prefer built-in Map/Set
    exports.Set = ExportedSet = Set;
    exports.Map = ExportedMap = Map;
  } else {
    // fall back to our polyfill
    exports.Set = ExportedSet = Set$1;
    exports.Map = ExportedMap = Map$1;
  }
}
},{}],"../../node_modules/pouchdb-errors/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createError = createError;
exports.generateErrorFromResponse = generateErrorFromResponse;
exports.INVALID_URL = exports.IDB_ERROR = exports.MISSING_STUB = exports.FILE_EXISTS = exports.INVALID_REV = exports.FORBIDDEN = exports.LDB_ERROR = exports.WSQ_ERROR = exports.DB_MISSING = exports.NOT_AN_OBJECT = exports.BAD_REQUEST = exports.DOC_VALIDATION = exports.QUERY_PARSE_ERROR = exports.INVALID_REQUEST = exports.BAD_ARG = exports.UNKNOWN_ERROR = exports.NOT_OPEN = exports.RESERVED_ID = exports.MISSING_ID = exports.INVALID_ID = exports.REV_CONFLICT = exports.MISSING_DOC = exports.MISSING_BULK_DOCS = exports.UNAUTHORIZED = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _inherits.default)(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
exports.UNAUTHORIZED = UNAUTHORIZED;
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
exports.MISSING_BULK_DOCS = MISSING_BULK_DOCS;
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
exports.MISSING_DOC = MISSING_DOC;
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
exports.REV_CONFLICT = REV_CONFLICT;
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
exports.INVALID_ID = INVALID_ID;
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
exports.MISSING_ID = MISSING_ID;
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
exports.RESERVED_ID = RESERVED_ID;
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
exports.NOT_OPEN = NOT_OPEN;
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
exports.UNKNOWN_ERROR = UNKNOWN_ERROR;
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
exports.BAD_ARG = BAD_ARG;
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
exports.INVALID_REQUEST = INVALID_REQUEST;
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
exports.QUERY_PARSE_ERROR = QUERY_PARSE_ERROR;
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
exports.DOC_VALIDATION = DOC_VALIDATION;
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
exports.BAD_REQUEST = BAD_REQUEST;
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
exports.NOT_AN_OBJECT = NOT_AN_OBJECT;
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
exports.DB_MISSING = DB_MISSING;
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
exports.IDB_ERROR = IDB_ERROR;
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
exports.WSQ_ERROR = WSQ_ERROR;
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
exports.LDB_ERROR = LDB_ERROR;
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
exports.FORBIDDEN = FORBIDDEN;
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
exports.INVALID_REV = INVALID_REV;
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
exports.FILE_EXISTS = FILE_EXISTS;
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
exports.MISSING_STUB = MISSING_STUB;
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');
exports.INVALID_URL = INVALID_URL;

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.

    /* jshint ignore:start */
    for (var p in error) {
      if (typeof error[p] !== 'function') {
        this[p] = error[p];
      }
    }
    /* jshint ignore:end */


    if (reason !== undefined) {
      this.reason = reason;
    }
  }

  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {
  if (typeof err !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}
},{"inherits":"../../node_modules/inherits/inherits_browser.js"}],"../../node_modules/pouchdb-utils/node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"../../node_modules/pouchdb-utils/node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],"../../node_modules/pouchdb-utils/node_modules/uuid/v1.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/rng":"../../node_modules/pouchdb-utils/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../../node_modules/pouchdb-utils/node_modules/uuid/lib/bytesToUuid.js"}],"../../node_modules/pouchdb-utils/node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"../../node_modules/pouchdb-utils/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../../node_modules/pouchdb-utils/node_modules/uuid/lib/bytesToUuid.js"}],"../../node_modules/pouchdb-utils/node_modules/uuid/index.js":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":"../../node_modules/pouchdb-utils/node_modules/uuid/v1.js","./v4":"../../node_modules/pouchdb-utils/node_modules/uuid/v4.js"}],"../../node_modules/pouchdb-binary-utils/lib/index-browser.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64StringToBlobOrBuffer = b64ToBluffer;
exports.binaryStringToArrayBuffer = binaryStringToArrayBuffer;
exports.binaryStringToBlobOrBuffer = binStringToBluffer;
exports.blob = createBlob;
exports.blobOrBufferToBase64 = blobToBase64;
exports.blobOrBufferToBinaryString = blobToBinaryString;
exports.readAsArrayBuffer = readAsArrayBuffer;
exports.readAsBinaryString = readAsBinaryString;
exports.typedBuffer = typedBuffer;
exports.btoa = exports.atob = void 0;

var thisAtob = function (str) {
  return atob(str);
};

exports.atob = thisAtob;

var thisBtoa = function (str) {
  return btoa(str);
}; // Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).


exports.btoa = thisBtoa;

function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};

  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }

    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();

    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }

    return builder.getBlob(properties.type);
  }
} // From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)


function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }

  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {
    type: type
  });
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
} //Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers


function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return binary;
} // shim for browsers that don't support it


function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';

  reader.onloadend = function (e) {
    var result = e.target.result || '';

    if (hasBinaryString) {
      return callback(result);
    }

    callback(arrayBufferToBinaryString(result));
  };

  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
} // simplified API. universal browser support is assumed


function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();

  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };

  reader.readAsArrayBuffer(blob);
} // this is not used in the browser


function typedBuffer() {}
},{}],"../../node_modules/pouchdb-md5/lib/index-browser.es.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binaryMd5 = binaryMd5;
exports.stringMd5 = stringMd5;

var _pouchdbBinaryUtils = require("pouchdb-binary-utils");

var _sparkMd = _interopRequireDefault(require("spark-md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setImmediateShim = global.setImmediate || global.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return (0, _pouchdbBinaryUtils.btoa)(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }

  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }

  (0, _pouchdbBinaryUtils.readAsArrayBuffer)(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }

  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new _sparkMd.default() : new _sparkMd.default.ArrayBuffer();
  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;

    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }

  loadNextChunk();
}

function stringMd5(string) {
  return _sparkMd.default.hash(string);
}
},{"pouchdb-binary-utils":"../../node_modules/pouchdb-binary-utils/lib/index-browser.es.js","spark-md5":"../../node_modules/spark-md5/spark-md5.js"}],"../../node_modules/pouchdb-utils/lib/index-browser.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFun = adapterFun;
exports.bulkGetShim = bulkGet;
exports.changesHandler = Changes;
exports.clone = clone$1;
exports.defaultBackOff = defaultBackOff;
exports.explainError = explainError;
exports.filterChange = filterChange;
exports.flatten = flatten;
exports.guardedConsole = guardedConsole;
exports.hasLocalStorage = hasLocalStorage;
exports.invalidIdError = invalidIdError;
exports.isRemote = isRemote;
exports.listenerCount = listenerCount;
exports.normalizeDdocFunctionName = normalizeDesignDocFunctionName;
exports.once = once;
exports.parseDdocFunctionName = parseDesignDocFunctionName;
exports.parseUri = parseUri;
exports.pick = pick;
exports.rev = rev;
exports.scopeEval = scopeEval;
exports.toPromise = toPromise;
exports.upsert = upsert;
Object.defineProperty(exports, "nextTick", {
  enumerable: true,
  get: function () {
    return _immediate.default;
  }
});
exports.uuid = exports.functionName = exports.assign = void 0;

var _argsarray = _interopRequireDefault(require("argsarray"));

var _pouchdbCollections = require("pouchdb-collections");

var _immediate = _interopRequireDefault(require("immediate"));

var _events = require("events");

var _inherits = _interopRequireDefault(require("inherits"));

var _pouchdbErrors = require("pouchdb-errors");

var _uuid = _interopRequireDefault(require("uuid"));

var _pouchdbMd = require("pouchdb-md5");

var _pouchdbUtils = require("pouchdb-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinaryObject(object) {
  return typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer || typeof Blob !== 'undefined' && object instanceof Blob;
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  } // IE10-11 slice() polyfill


  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }

  var size = object.size;
  var type = object.type; // Blob

  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  } // PhantomJS slice() replacement


  return object.webkitSlice(0, size, type);
} // most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js


var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */

  if (proto === null) {
    // not sure when this happens, but I guess it can
    return true;
  }

  var Ctor = proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function clone$1(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];

    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone$1(object[i]);
    }

    return newObject;
  } // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates


  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};

  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone$1(object[i]);

      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }

  return newObject;
}

function once(fun) {
  var called = false;
  return (0, _argsarray.default)(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return (0, _argsarray.default)(function (args) {
    // Clone arguments
    args = clone$1(args);
    var self = this; // if the last argument is a function, assume its a callback

    var usedCB = typeof args[args.length - 1] === 'function' ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;

      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        }); // create a callback for this invocation
        // apply the function in the orig context

        args.push(callback);
        resp = func.apply(self, args);

        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    }); // if there is a callback, call it back

    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }

    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];

    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }

    self.constructor.emit('debug', logArgs); // override the callback itself to log the response

    var origCallback = args[args.length - 1];

    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(err ? ['error', err] : ['success', res]);
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise((0, _argsarray.default)(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }

    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }

    var self = this;
    logApiCall(self, name, args);

    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }

    return callback.apply(this, args);
  }));
} // like underscore/lodash _.pick()


function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];

    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }

  return res;
} // Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.


var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
} // shim for P/CouchDB adapters that don't directly implement _bulk_get


function bulkGet(db, opts, callback) {
  var requests = opts.docs; // consolidate into one request per doc if possible

  var requestsById = new _pouchdbCollections.Map();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });
  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {
      results: results
    });
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {
      id: id,
      docs: docs
    };
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });
  var i = 0;

  function nextBatch() {
    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId); // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.

      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      }); // remove falsey / undefined revisions

      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs; // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request

        formatResult = formatResultForOpenRevsGet;
      } // globally-supplied options


      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */

        if (err) {
          result = [{
            error: err
          }];
        } else {
          result = formatResult(res);
        }

        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();
}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
} // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We


(0, _inherits.default)(Changes, _events.EventEmitter);
/* istanbul ignore next */

function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  _events.EventEmitter.call(this);

  this._listeners = {};
  attachBrowserEvents(this);
}

Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }

  var self = this;
  var inprogress = false;

  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }

    if (inprogress) {
      inprogress = 'waiting';
      return;
    }

    inprogress = true;
    var changesOpts = pick(opts, ['style', 'include_docs', 'attachments', 'conflicts', 'filter', 'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs']);
    /* istanbul ignore next */

    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        (0, _immediate.default)(eventFunction);
      }

      inprogress = false;
    }).on('error', onError);
  }

  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }

  _events.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);

  delete this._listeners[id];
};
/* istanbul ignore next */


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes

  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);

  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  } // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout


  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two

    max = maxTimeout;
  }

  var ratio = Math.random();
  var range = max - min;
  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;

  if (!min) {
    max = 2000;
  }

  return randomNumber(min, max);
} // designed to give info to browser users, who are disturbed
// when they see http errors in the console


function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function (target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }
}
var assign$1 = assign;
exports.assign = assign$1;

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return (0, _pouchdbErrors.createError)(_pouchdbErrors.BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;
  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (typeof filterReturn === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }

    return true;
  };
}

function flatten(arrs) {
  var res = [];

  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }

  return res;
} // shim for Function.prototype.name,
// for browsers that don't support it like IE

/* istanbul ignore next */


function f() {}

var hasName = f.name;
var res; // We dont run coverage in IE

/* istanbul ignore else */

if (hasName) {
  res = function (fun) {
    return fun.name;
  };
} else {
  res = function (fun) {
    var match = fun.toString().match(/^\s*function\s*(?:(\S+)\s*)?\(/);

    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  };
}

var res$1 = res; // Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case

exports.functionName = res$1;

function invalidIdError(id) {
  var err;

  if (!id) {
    err = (0, _pouchdbErrors.createError)(_pouchdbErrors.MISSING_ID);
  } else if (typeof id !== 'string') {
    err = (0, _pouchdbErrors.createError)(_pouchdbErrors.INVALID_ID);
  } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
    err = (0, _pouchdbErrors.createError)(_pouchdbErrors.RESERVED_ID);
  }

  if (err) {
    throw err;
  }
} // Checks if a PouchDB object is "remote" or not. This is


function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */


  if (typeof db.type === 'function') {
    guardedConsole('warn', 'db.type() is deprecated and will be removed in ' + 'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */


  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) : _events.EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }

  var parts = s.split('/');

  if (parts.length === 2) {
    return parts;
  }

  if (parts.length === 1) {
    return [s, s];
  }

  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
} // originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName = "queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g; // use the "loose" parser

/* eslint maxlen: 0, no-useless-escape: 0 */

var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });
  return uri;
} // Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()


function scopeEval(source, scope) {
  var keys = [];
  var values = [];

  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }

  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
} // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all


function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }

        doc = {};
      } // the user might change the _rev, so save it for posterity


      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({
          updated: false,
          rev: docRev
        });
      } // users aren't allowed to modify these values,
      // so reset them here


      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }

    return upsert(db, doc._id, diffFun);
  });
}

function rev(doc, deterministic_revs) {
  var clonedDoc = (0, _pouchdbUtils.clone)(doc);

  if (!deterministic_revs) {
    return _uuid.default.v4().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return (0, _pouchdbMd.stringMd5)(JSON.stringify(clonedDoc));
}

var uuid = _uuid.default.v4;
exports.uuid = uuid;
},{"argsarray":"../../node_modules/argsarray/index.js","pouchdb-collections":"../../node_modules/pouchdb-collections/lib/index.es.js","immediate":"../../node_modules/immediate/lib/browser.js","events":"../../node_modules/events/events.js","inherits":"../../node_modules/inherits/inherits_browser.js","pouchdb-errors":"../../node_modules/pouchdb-errors/lib/index.es.js","uuid":"../../node_modules/pouchdb-utils/node_modules/uuid/index.js","pouchdb-md5":"../../node_modules/pouchdb-md5/lib/index-browser.es.js","pouchdb-utils":"../../node_modules/pouchdb-utils/lib/index-browser.es.js"}],"../../node_modules/pouchdb-fetch/lib/index-browser.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbortController = exports.Headers = exports.fetch = void 0;
// AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed
var a = typeof AbortController !== 'undefined' ? AbortController : function () {
  return {
    abort: function () {}
  };
};
exports.AbortController = a;
var f = fetch;
exports.fetch = f;
var h = Headers;
exports.Headers = h;
},{}],"../../node_modules/pouchdb-collate/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collate = collate;
exports.normalizeKey = normalizeKey;
exports.toIndexableString = toIndexableString;
exports.parseIndexableString = parseIndexableString;

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */

  while (padding.length < targetLength) {
    padding += padWith;
  }

  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE

var MAGNITUDE_DIGITS = 3; // ditto

var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {
  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);
  var ai = collationIndex(a);
  var bi = collationIndex(b);

  if (ai - bi !== 0) {
    return ai - bi;
  }

  switch (typeof a) {
    case 'number':
      return a - b;

    case 'boolean':
      return a < b ? -1 : 1;

    case 'string':
      return stringCollate(a, b);
  }

  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
} // couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.


function normalizeKey(key) {
  switch (typeof key) {
    case 'undefined':
      return null;

    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }

      return key;

    case 'object':
      var origKey = key;

      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);

        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
        /* istanbul ignore next */

      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) {
        // generic object
        key = {};

        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];

            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }

  }

  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (typeof key) {
      case 'boolean':
        return key ? 1 : 0;

      case 'number':
        return numToIndexableString(key);

      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2

        /* eslint-disable no-control-regex */
        return key.replace(/\u0002/g, '\u0002\u0002').replace(/\u0001/g, '\u0001\u0002').replace(/\u0000/g, '\u0001\u0001');

      /* eslint-enable no-control-regex */

      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';

        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) + toIndexableString(key[objKey]);
          }
        }

        return result;
    }
  }

  return '';
} // convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.


function toIndexableString(key) {
  var zero = '\u0000';
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';

  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */

    if (neg) {
      magnitude = -magnitude;
    }

    i += MAGNITUDE_DIGITS;

    while (true) {
      var ch = str[i];

      if (ch === '\u0000') {
        break;
      } else {
        numAsString += ch;
      }

      i++;
    }

    numAsString = numAsString.split('.');

    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */


    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */


    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }

  return {
    num: num,
    length: i - originalIdx
  };
} // move up the stack while parsing
// this function moved outside of parseIndexableString for performance


function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];

    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }

    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;

    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) {
      // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects

  var i = 0;
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

  while (true) {
    var collationIndex = str[i++];

    if (collationIndex === '\u0000') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }

    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;

      case '2':
        stack.push(str[i] === '1');
        i++;
        break;

      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;

      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

        while (true) {
          var ch = str[i];

          if (ch === '\u0000') {
            break;
          }

          parsedStr += ch;
          i++;
        } // perform the reverse of the order-preserving replacement
        // algorithm (see above)

        /* eslint-disable no-control-regex */


        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000').replace(/\u0001\u0002/g, '\u0001').replace(/\u0002\u0002/g, '\u0002');
        /* eslint-enable no-control-regex */

        stack.push(parsedStr);
        break;

      case '5':
        var arrayElement = {
          element: [],
          index: stack.length
        };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;

      case '6':
        var objElement = {
          element: {},
          index: stack.length
        };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;

      /* istanbul ignore next */

      default:
        throw new Error('bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);

  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);

    if (sort !== 0) {
      return sort;
    }
  }

  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
}

function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return a === b ? 0 : a > b ? 1 : -1;
}

function objectCollate(a, b) {
  var ak = Object.keys(a),
      bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);

  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);

    if (sort !== 0) {
      return sort;
    } // if the keys are equal sort the values


    sort = collate(a[ak[i]], b[bk[i]]);

    if (sort !== 0) {
      return sort;
    }
  }

  return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
} // The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null


function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(typeof x); //false if -1 otherwise true, but fast!!!!1

  if (~idx) {
    if (x === null) {
      return 1;
    }

    if (Array.isArray(x)) {
      return 5;
    }

    return idx < 3 ? idx + 2 : idx + 3;
  }
  /* istanbul ignore next */


  if (Array.isArray(x)) {
    return 5;
  }
} // conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse


function numToIndexableString(num) {
  if (num === 0) {
    return '1';
  } // convert number to exponential format for easier and
  // more succinct string sorting


  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);
  var neg = num < 0;
  var result = neg ? '0' : '2'; // first sort by magnitude
  // it's easier if all magnitudes are positive

  var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
  var magString = padLeft(magForComparison.toString(), '0', MAGNITUDE_DIGITS);
  result += SEP + magString; // then sort by the factor

  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)

  /* istanbul ignore next */

  if (neg) {
    // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20); // strip zeros from the end

  factorStr = factorStr.replace(/\.?0+$/, '');
  result += SEP + factorStr;
  return result;
}
},{}],"../../node_modules/pouchdb-selector-core/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.massageSelector = massageSelector;
exports.matchesSelector = matchesSelector;
exports.filterInMemoryFields = filterInMemoryFields;
exports.createFieldSorter = createFieldSorter;
exports.rowFilter = rowFilter;
exports.isCombinationalField = isCombinationalField;
exports.getKey = getKey;
exports.getValue = getValue;
exports.getFieldFromDoc = getFieldFromDoc;
exports.setFieldInDoc = setFieldInDoc;
exports.compare = compare;
exports.parseField = parseField;

var _pouchdbUtils = require("pouchdb-utils");

var _pouchdbCollate = require("pouchdb-collate");

// this would just be "return doc[field]", but fields
// can be "deep" due to dot notation
function getFieldFromDoc(doc, parsedField) {
  var value = doc;

  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];

    if (!value) {
      break;
    }
  }

  return value;
}

function setFieldInDoc(doc, parsedField, value) {
  for (var i = 0, len = parsedField.length; i < len - 1; i++) {
    var elem = parsedField[i];
    doc = doc[elem] = {};
  }

  doc[parsedField[len - 1]] = value;
}

function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Converts a string in dot notation to an array of its components, with backslash escaping


function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';

  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];

    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') {
        // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else {
        // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else {
      // normal character
      current += ch;
    }
  }

  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];

function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
} // flatten an array of selectors joined by an $and operator


function mergeAndedSelectors(selectors) {
  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};
  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];

      if (typeof matcher !== 'object') {
        matcher = {
          $eq: matcher
        };
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }

          fieldMatchers[operator] = value;
        });
      }
    });
  });
  return res;
} // collapse logically equivalent gt/gte values


function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) {
        // more specificity
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value >= fieldMatchers.$gte) {
        // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) {
        // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value > fieldMatchers.$gt) {
        // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // collapse logically equivalent lt/lte values


function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) {
        // more specificity
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value <= fieldMatchers.$lte) {
        // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) {
        // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value < fieldMatchers.$lt) {
        // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // combine $ne values into one array


function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else {
    // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
} // add $eq into the mix


function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
} //
// normalize the selector
//


function massageSelector(input) {
  var result = (0, _pouchdbUtils.clone)(input);
  var wasAnded = false;

  if ('$and' in result) {
    result = mergeAndedSelectors(result['$and']);
    wasAnded = true;
  }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];

          if (typeof matcher !== 'object' || matcher === null) {
            subSelector[field] = {
              $eq: matcher
            };
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (typeof matcher !== 'object' || matcher === null) {
      matcher = {
        $eq: matcher
      };
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }

    result[field] = matcher;
  }

  return result;
} // create a comparator based on the sort object


function createFieldSorter(sort) {
  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = (0, _pouchdbCollate.collate)(aFieldValues, bFieldValues);

    if (collation !== 0) {
      return collation;
    } // this is what mango seems to do


    return compare(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);

    if (typeof requestDef.sort[0] !== 'string' && getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }

  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);

    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  }

  return Object.keys(matcher).every(function (userOperator) {
    var userValue = matcher[userOperator];
    return match(userOperator, doc, userValue, parsedField, docFieldValue);
  });
}

function matchCominationalSelector(field, matcher, doc) {
  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  } //`$nor`


  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });
}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' + '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }

  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];

  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);
  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {
  switch (userValue) {
    case 'null':
      return docFieldValue === null;

    case 'boolean':
      return typeof docFieldValue === 'boolean';

    case 'number':
      return typeof docFieldValue === 'number';

    case 'string':
      return typeof docFieldValue === 'string';

    case 'array':
      return docFieldValue instanceof Array;

    case 'object':
      return {}.toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' + 'Please use one of object, string, array, number, boolean or null.');
}

var matchers = {
  '$elemMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$allMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }
    /* istanbul ignore next */


    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$eq': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && (0, _pouchdbCollate.collate)(docFieldValue, userValue) === 0;
  },
  '$gte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && (0, _pouchdbCollate.collate)(docFieldValue, userValue) >= 0;
  },
  '$gt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && (0, _pouchdbCollate.collate)(docFieldValue, userValue) > 0;
  },
  '$lte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && (0, _pouchdbCollate.collate)(docFieldValue, userValue) <= 0;
  },
  '$lt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && (0, _pouchdbCollate.collate)(docFieldValue, userValue) < 0;
  },
  '$exists': function (doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },
  '$mod': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },
  '$ne': function (doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return (0, _pouchdbCollate.collate)(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },
  '$nin': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },
  '$size': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },
  '$all': function (doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },
  '$regex': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },
  '$type': function (doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
}; // return true if the given doc matches the supplied selector

function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (typeof selector !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };
  var rowsMatched = filterInMemoryFields([row], {
    'selector': selector
  }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}
},{"pouchdb-utils":"../../node_modules/pouchdb-utils/lib/index-browser.es.js","pouchdb-collate":"../../node_modules/pouchdb-collate/lib/index.es.js"}],"../../node_modules/pouchdb-mapreduce-utils/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniq = uniq;
exports.sequentialize = sequentialize;
exports.fin = fin;
exports.callbackify = callbackify;
exports.promisedCallback = promisedCallback;
exports.mapToKeysArray = mapToKeysArray;
exports.QueryParseError = QueryParseError;
exports.NotFoundError = NotFoundError;
exports.BuiltInError = BuiltInError;

var _inherits = _interopRequireDefault(require("inherits"));

var _pouchdbCollections = require("pouchdb-collections");

var _argsarray = _interopRequireDefault(require("argsarray"));

var _pouchdbUtils = require("pouchdb-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QueryParseError(message) {
  this.status = 400;
  this.name = 'query_parse_error';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, QueryParseError);
  } catch (e) {}
}

(0, _inherits.default)(QueryParseError, Error);

function NotFoundError(message) {
  this.status = 404;
  this.name = 'not_found';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, NotFoundError);
  } catch (e) {}
}

(0, _inherits.default)(NotFoundError, Error);

function BuiltInError(message) {
  this.status = 500;
  this.name = 'invalid_value';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, BuiltInError);
  } catch (e) {}
}

(0, _inherits.default)(BuiltInError, Error);

function promisedCallback(promise, callback) {
  if (callback) {
    promise.then(function (res) {
      (0, _pouchdbUtils.nextTick)(function () {
        callback(null, res);
      });
    }, function (reason) {
      (0, _pouchdbUtils.nextTick)(function () {
        callback(reason);
      });
    });
  }

  return promise;
}

function callbackify(fun) {
  return (0, _argsarray.default)(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);

    if (typeof cb === 'function') {
      promisedCallback(promise, cb);
    }

    return promise;
  });
} // Promise finally util similar to Q.finally


function fin(promise, finalPromiseFactory) {
  return promise.then(function (res) {
    return finalPromiseFactory().then(function () {
      return res;
    });
  }, function (reason) {
    return finalPromiseFactory().then(function () {
      throw reason;
    });
  });
}

function sequentialize(queue, promiseFactory) {
  return function () {
    var args = arguments;
    var that = this;
    return queue.add(function () {
      return promiseFactory.apply(that, args);
    });
  };
} // uniq an array of strings, order not guaranteed
// similar to underscore/lodash _.uniq


function uniq(arr) {
  var theSet = new _pouchdbCollections.Set(arr);
  var result = new Array(theSet.size);
  var index = -1;
  theSet.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

function mapToKeysArray(map) {
  var result = new Array(map.size);
  var index = -1;
  map.forEach(function (value, key) {
    result[++index] = key;
  });
  return result;
}
},{"inherits":"../../node_modules/inherits/inherits_browser.js","pouchdb-collections":"../../node_modules/pouchdb-collections/lib/index.es.js","argsarray":"../../node_modules/argsarray/index.js","pouchdb-utils":"../../node_modules/pouchdb-utils/lib/index-browser.es.js"}],"../../node_modules/pouchdb-abstract-mapreduce/lib/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pouchdbUtils = require("pouchdb-utils");

var _pouchdbMd = require("pouchdb-md5");

var _pouchdbCollections = require("pouchdb-collections");

var _pouchdbBinaryUtils = require("pouchdb-binary-utils");

var _pouchdbCollate = require("pouchdb-collate");

var _pouchdbErrors = require("pouchdb-errors");

var _pouchdbFetch = require("pouchdb-fetch");

var _pouchdbMapreduceUtils = require("pouchdb-mapreduce-utils");

/*
 * Simple task queue to sequentialize actions. Assumes
 * callbacks will eventually fire (once).
 */
function TaskQueue() {
  this.promise = new Promise(function (fulfill) {
    fulfill();
  });
}

TaskQueue.prototype.add = function (promiseFactory) {
  this.promise = this.promise.catch(function () {// just recover
  }).then(function () {
    return promiseFactory();
  });
  return this.promise;
};

TaskQueue.prototype.finish = function () {
  return this.promise;
};

function stringify(input) {
  if (!input) {
    return 'undefined'; // backwards compat for empty reduce
  } // for backwards compat with mapreduce, functions/strings are stringified
  // as-is. everything else is JSON-stringified.


  switch (typeof input) {
    case 'function':
      // e.g. a mapreduce map
      return input.toString();

    case 'string':
      // e.g. a mapreduce built-in _reduce function
      return input.toString();

    default:
      // e.g. a JSON object in the case of mango queries
      return JSON.stringify(input);
  }
}
/* create a string signature for a view so we can cache it and uniq it */


function createViewSignature(mapFun, reduceFun) {
  // the "undefined" part is for backwards compatibility
  return stringify(mapFun) + stringify(reduceFun) + 'undefined';
}

function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
  var viewSignature = createViewSignature(mapFun, reduceFun);
  var cachedViews;

  if (!temporary) {
    // cache this to ensure we don't try to update the same view twice
    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};

    if (cachedViews[viewSignature]) {
      return cachedViews[viewSignature];
    }
  }

  var promiseForView = sourceDB.info().then(function (info) {
    var depDbName = info.db_name + '-mrview-' + (temporary ? 'temp' : (0, _pouchdbMd.stringMd5)(viewSignature)); // save the view name in the source db so it can be cleaned up if necessary
    // (e.g. when the _design doc is deleted, remove all associated view data)

    function diffFunction(doc) {
      doc.views = doc.views || {};
      var fullViewName = viewName;

      if (fullViewName.indexOf('/') === -1) {
        fullViewName = viewName + '/' + viewName;
      }

      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
      /* istanbul ignore if */

      if (depDbs[depDbName]) {
        return; // no update necessary
      }

      depDbs[depDbName] = true;
      return doc;
    }

    return (0, _pouchdbUtils.upsert)(sourceDB, '_local/' + localDocName, diffFunction).then(function () {
      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
        var db = res.db;
        db.auto_compaction = true;
        var view = {
          name: depDbName,
          db: db,
          sourceDB: sourceDB,
          adapter: sourceDB.adapter,
          mapFun: mapFun,
          reduceFun: reduceFun
        };
        return view.db.get('_local/lastSeq').catch(function (err) {
          /* istanbul ignore if */
          if (err.status !== 404) {
            throw err;
          }
        }).then(function (lastSeqDoc) {
          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;

          if (cachedViews) {
            view.db.once('destroyed', function () {
              delete cachedViews[viewSignature];
            });
          }

          return view;
        });
      });
    });
  });

  if (cachedViews) {
    cachedViews[viewSignature] = promiseForView;
  }

  return promiseForView;
}

var persistentQueues = {};
var tempViewQueue = new TaskQueue();
var CHANGES_BATCH_SIZE = 50;

function parseViewName(name) {
  // can be either 'ddocname/viewname' or just 'viewname'
  // (where the ddoc name is the same)
  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
}

function isGenOne(changes) {
  // only return true if the current change is 1-
  // and there are no other leafs
  return changes.length === 1 && /^1-/.test(changes[0].rev);
}

function emitError(db, e) {
  try {
    db.emit('error', e);
  } catch (err) {
    (0, _pouchdbUtils.guardedConsole)('error', 'The user\'s map/reduce function threw an uncaught error.\n' + 'You can debug this error by doing:\n' + 'myDatabase.on(\'error\', function (err) { debugger; });\n' + 'Please double-check your map/reduce function.');
    (0, _pouchdbUtils.guardedConsole)('error', e);
  }
}
/**
 * Returns an "abstract" mapreduce object of the form:
 *
 *   {
 *     query: queryFun,
 *     viewCleanup: viewCleanupFun
 *   }
 *
 * Arguments are:
 *
 * localDoc: string
 *   This is for the local doc that gets saved in order to track the
 *   "dependent" DBs and clean them up for viewCleanup. It should be
 *   unique, so that indexer plugins don't collide with each other.
 * mapper: function (mapFunDef, emit)
 *   Returns a map function based on the mapFunDef, which in the case of
 *   normal map/reduce is just the de-stringified function, but may be
 *   something else, such as an object in the case of pouchdb-find.
 * reducer: function (reduceFunDef)
 *   Ditto, but for reducing. Modules don't have to support reducing
 *   (e.g. pouchdb-find).
 * ddocValidator: function (ddoc, viewName)
 *   Throws an error if the ddoc or viewName is not valid.
 *   This could be a way to communicate to the user that the configuration for the
 *   indexer is invalid.
 */


function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {
  function tryMap(db, fun, doc) {
    // emit an event if there was an error thrown by a map function.
    // putting try/catches in a single function also avoids deoptimizations.
    try {
      fun(doc);
    } catch (e) {
      emitError(db, e);
    }
  }

  function tryReduce(db, fun, keys, values, rereduce) {
    // same as above, but returning the result or an error. there are two separate
    // functions to avoid extra memory allocations since the tryCode() case is used
    // for custom map functions (common) vs this function, which is only used for
    // custom reduce functions (rare)
    try {
      return {
        output: fun(keys, values, rereduce)
      };
    } catch (e) {
      emitError(db, e);
      return {
        error: e
      };
    }
  }

  function sortByKeyThenValue(x, y) {
    var keyCompare = (0, _pouchdbCollate.collate)(x.key, y.key);
    return keyCompare !== 0 ? keyCompare : (0, _pouchdbCollate.collate)(x.value, y.value);
  }

  function sliceResults(results, limit, skip) {
    skip = skip || 0;

    if (typeof limit === 'number') {
      return results.slice(skip, limit + skip);
    } else if (skip > 0) {
      return results.slice(skip);
    }

    return results;
  }

  function rowToDocId(row) {
    var val = row.value; // Users can explicitly specify a joined doc _id, or it
    // defaults to the doc _id that emitted the key/value.

    var docId = val && typeof val === 'object' && val._id || row.id;
    return docId;
  }

  function readAttachmentsAsBlobOrBuffer(res) {
    res.rows.forEach(function (row) {
      var atts = row.doc && row.doc._attachments;

      if (!atts) {
        return;
      }

      Object.keys(atts).forEach(function (filename) {
        var att = atts[filename];
        atts[filename].data = (0, _pouchdbBinaryUtils.base64StringToBlobOrBuffer)(att.data, att.content_type);
      });
    });
  }

  function postprocessAttachments(opts) {
    return function (res) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        readAttachmentsAsBlobOrBuffer(res);
      }

      return res;
    };
  }

  function addHttpParam(paramName, opts, params, asJson) {
    // add an http param from opts to params, optionally json-encoded
    var val = opts[paramName];

    if (typeof val !== 'undefined') {
      if (asJson) {
        val = encodeURIComponent(JSON.stringify(val));
      }

      params.push(paramName + '=' + val);
    }
  }

  function coerceInteger(integerCandidate) {
    if (typeof integerCandidate !== 'undefined') {
      var asNumber = Number(integerCandidate); // prevents e.g. '1foo' or '1.1' being coerced to 1

      if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
        return asNumber;
      } else {
        return integerCandidate;
      }
    }
  }

  function coerceOptions(opts) {
    opts.group_level = coerceInteger(opts.group_level);
    opts.limit = coerceInteger(opts.limit);
    opts.skip = coerceInteger(opts.skip);
    return opts;
  }

  function checkPositiveInteger(number) {
    if (number) {
      if (typeof number !== 'number') {
        return new _pouchdbMapreduceUtils.QueryParseError('Invalid value for integer: "' + number + '"');
      }

      if (number < 0) {
        return new _pouchdbMapreduceUtils.QueryParseError('Invalid value for positive integer: ' + '"' + number + '"');
      }
    }
  }

  function checkQueryParseError(options, fun) {
    var startkeyName = options.descending ? 'endkey' : 'startkey';
    var endkeyName = options.descending ? 'startkey' : 'endkey';

    if (typeof options[startkeyName] !== 'undefined' && typeof options[endkeyName] !== 'undefined' && (0, _pouchdbCollate.collate)(options[startkeyName], options[endkeyName]) > 0) {
      throw new _pouchdbMapreduceUtils.QueryParseError('No rows can match your key range, ' + 'reverse your start_key and end_key or set {descending : true}');
    } else if (fun.reduce && options.reduce !== false) {
      if (options.include_docs) {
        throw new _pouchdbMapreduceUtils.QueryParseError('{include_docs:true} is invalid for reduce');
      } else if (options.keys && options.keys.length > 1 && !options.group && !options.group_level) {
        throw new _pouchdbMapreduceUtils.QueryParseError('Multi-key fetches for reduce views must use ' + '{group: true}');
      }
    }

    ['group_level', 'limit', 'skip'].forEach(function (optionName) {
      var error = checkPositiveInteger(options[optionName]);

      if (error) {
        throw error;
      }
    });
  }

  function httpQuery(db, fun, opts) {
    // List of parameters to add to the PUT request
    var params = [];
    var body;
    var method = 'GET';
    var ok, status; // If opts.reduce exists and is defined, then add it to the list
    // of parameters.
    // If reduce=false then the results are that of only the map function
    // not the final result of map and reduce.

    addHttpParam('reduce', opts, params);
    addHttpParam('include_docs', opts, params);
    addHttpParam('attachments', opts, params);
    addHttpParam('limit', opts, params);
    addHttpParam('descending', opts, params);
    addHttpParam('group', opts, params);
    addHttpParam('group_level', opts, params);
    addHttpParam('skip', opts, params);
    addHttpParam('stale', opts, params);
    addHttpParam('conflicts', opts, params);
    addHttpParam('startkey', opts, params, true);
    addHttpParam('start_key', opts, params, true);
    addHttpParam('endkey', opts, params, true);
    addHttpParam('end_key', opts, params, true);
    addHttpParam('inclusive_end', opts, params);
    addHttpParam('key', opts, params, true);
    addHttpParam('update_seq', opts, params); // Format the list of parameters into a valid URI query string

    params = params.join('&');
    params = params === '' ? '' : '?' + params; // If keys are supplied, issue a POST to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options

    if (typeof opts.keys !== 'undefined') {
      var MAX_URL_LENGTH = 2000; // according to http://stackoverflow.com/a/417184/680742,
      // the de facto URL length limit is 2000 characters

      var keysAsString = 'keys=' + encodeURIComponent(JSON.stringify(opts.keys));

      if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
        // If the keys are short enough, do a GET. we do this to work around
        // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
        params += (params[0] === '?' ? '&' : '?') + keysAsString;
      } else {
        method = 'POST';

        if (typeof fun === 'string') {
          body = {
            keys: opts.keys
          };
        } else {
          // fun is {map : mapfun}, so append to this
          fun.keys = opts.keys;
        }
      }
    } // We are referencing a query defined in the design doc


    if (typeof fun === 'string') {
      var parts = parseViewName(fun);
      return db.fetch('_design/' + parts[0] + '/_view/' + parts[1] + params, {
        headers: new _pouchdbFetch.Headers({
          'Content-Type': 'application/json'
        }),
        method: method,
        body: JSON.stringify(body)
      }).then(function (response) {
        ok = response.ok;
        status = response.status;
        return response.json();
      }).then(function (result) {
        if (!ok) {
          result.status = status;
          throw (0, _pouchdbErrors.generateErrorFromResponse)(result);
        } // fail the entire request if the result contains an error


        result.rows.forEach(function (row) {
          /* istanbul ignore if */
          if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
            throw new Error(row.reason);
          }
        });
        return result;
      }).then(postprocessAttachments(opts));
    } // We are using a temporary view, terrible for performance, good for testing


    body = body || {};
    Object.keys(fun).forEach(function (key) {
      if (Array.isArray(fun[key])) {
        body[key] = fun[key];
      } else {
        body[key] = fun[key].toString();
      }
    });
    return db.fetch('_temp_view' + params, {
      headers: new _pouchdbFetch.Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(body)
    }).then(function (response) {
      ok = response.ok;
      status = response.status;
      return response.json();
    }).then(function (result) {
      if (!ok) {
        result.status = status;
        throw (0, _pouchdbErrors.generateErrorFromResponse)(result);
      }

      return result;
    }).then(postprocessAttachments(opts));
  } // custom adapters can define their own api._query
  // and override the default behavior

  /* istanbul ignore next */


  function customQuery(db, fun, opts) {
    return new Promise(function (resolve, reject) {
      db._query(fun, opts, function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  } // custom adapters can define their own api._viewCleanup
  // and override the default behavior

  /* istanbul ignore next */


  function customViewCleanup(db) {
    return new Promise(function (resolve, reject) {
      db._viewCleanup(function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  }

  function defaultsTo(value) {
    return function (reason) {
      /* istanbul ignore else */
      if (reason.status === 404) {
        return value;
      } else {
        throw reason;
      }
    };
  } // returns a promise for a list of docs to update, based on the input docId.
  // the order doesn't matter, because post-3.2.0, bulkDocs
  // is an atomic operation in all three adapters.


  function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
    var metaDocId = '_local/doc_' + docId;
    var defaultMetaDoc = {
      _id: metaDocId,
      keys: []
    };
    var docData = docIdsToChangesAndEmits.get(docId);
    var indexableKeysToKeyValues = docData[0];
    var changes = docData[1];

    function getMetaDoc() {
      if (isGenOne(changes)) {
        // generation 1, so we can safely assume initial state
        // for performance reasons (avoids unnecessary GETs)
        return Promise.resolve(defaultMetaDoc);
      }

      return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
    }

    function getKeyValueDocs(metaDoc) {
      if (!metaDoc.keys.length) {
        // no keys, no need for a lookup
        return Promise.resolve({
          rows: []
        });
      }

      return view.db.allDocs({
        keys: metaDoc.keys,
        include_docs: true
      });
    }

    function processKeyValueDocs(metaDoc, kvDocsRes) {
      var kvDocs = [];
      var oldKeys = new _pouchdbCollections.Set();

      for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
        var row = kvDocsRes.rows[i];
        var doc = row.doc;

        if (!doc) {
          // deleted
          continue;
        }

        kvDocs.push(doc);
        oldKeys.add(doc._id);
        doc._deleted = !indexableKeysToKeyValues.has(doc._id);

        if (!doc._deleted) {
          var keyValue = indexableKeysToKeyValues.get(doc._id);

          if ('value' in keyValue) {
            doc.value = keyValue.value;
          }
        }
      }

      var newKeys = (0, _pouchdbMapreduceUtils.mapToKeysArray)(indexableKeysToKeyValues);
      newKeys.forEach(function (key) {
        if (!oldKeys.has(key)) {
          // new doc
          var kvDoc = {
            _id: key
          };
          var keyValue = indexableKeysToKeyValues.get(key);

          if ('value' in keyValue) {
            kvDoc.value = keyValue.value;
          }

          kvDocs.push(kvDoc);
        }
      });
      metaDoc.keys = (0, _pouchdbMapreduceUtils.uniq)(newKeys.concat(metaDoc.keys));
      kvDocs.push(metaDoc);
      return kvDocs;
    }

    return getMetaDoc().then(function (metaDoc) {
      return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
        return processKeyValueDocs(metaDoc, kvDocsRes);
      });
    });
  } // updates all emitted key/value docs and metaDocs in the mrview database
  // for the given batch of documents from the source database


  function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
    var seqDocId = '_local/lastSeq';
    return view.db.get(seqDocId).catch(defaultsTo({
      _id: seqDocId,
      seq: 0
    })).then(function (lastSeqDoc) {
      var docIds = (0, _pouchdbMapreduceUtils.mapToKeysArray)(docIdsToChangesAndEmits);
      return Promise.all(docIds.map(function (docId) {
        return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
      })).then(function (listOfDocsToPersist) {
        var docsToPersist = (0, _pouchdbUtils.flatten)(listOfDocsToPersist);
        lastSeqDoc.seq = seq;
        docsToPersist.push(lastSeqDoc); // write all docs in a single operation, update the seq once

        return view.db.bulkDocs({
          docs: docsToPersist
        });
      });
    });
  }

  function getQueue(view) {
    var viewName = typeof view === 'string' ? view : view.name;
    var queue = persistentQueues[viewName];

    if (!queue) {
      queue = persistentQueues[viewName] = new TaskQueue();
    }

    return queue;
  }

  function updateView(view) {
    return (0, _pouchdbMapreduceUtils.sequentialize)(getQueue(view), function () {
      return updateViewInQueue(view);
    })();
  }

  function updateViewInQueue(view) {
    // bind the emit function once
    var mapResults;
    var doc;

    function emit(key, value) {
      var output = {
        id: doc._id,
        key: (0, _pouchdbCollate.normalizeKey)(key)
      }; // Don't explicitly store the value unless it's defined and non-null.
      // This saves on storage space, because often people don't use it.

      if (typeof value !== 'undefined' && value !== null) {
        output.value = (0, _pouchdbCollate.normalizeKey)(value);
      }

      mapResults.push(output);
    }

    var mapFun = mapper(view.mapFun, emit);
    var currentSeq = view.seq || 0;

    function processChange(docIdsToChangesAndEmits, seq) {
      return function () {
        return saveKeyValues(view, docIdsToChangesAndEmits, seq);
      };
    }

    var queue = new TaskQueue();

    function processNextBatch() {
      return view.sourceDB.changes({
        return_docs: true,
        conflicts: true,
        include_docs: true,
        style: 'all_docs',
        since: currentSeq,
        limit: CHANGES_BATCH_SIZE
      }).then(processBatch);
    }

    function processBatch(response) {
      var results = response.results;

      if (!results.length) {
        return;
      }

      var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
      queue.add(processChange(docIdsToChangesAndEmits, currentSeq));

      if (results.length < CHANGES_BATCH_SIZE) {
        return;
      }

      return processNextBatch();
    }

    function createDocIdsToChangesAndEmits(results) {
      var docIdsToChangesAndEmits = new _pouchdbCollections.Map();

      for (var i = 0, len = results.length; i < len; i++) {
        var change = results[i];

        if (change.doc._id[0] !== '_') {
          mapResults = [];
          doc = change.doc;

          if (!doc._deleted) {
            tryMap(view.sourceDB, mapFun, doc);
          }

          mapResults.sort(sortByKeyThenValue);
          var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
          docIdsToChangesAndEmits.set(change.doc._id, [indexableKeysToKeyValues, change.changes]);
        }

        currentSeq = change.seq;
      }

      return docIdsToChangesAndEmits;
    }

    function createIndexableKeysToKeyValues(mapResults) {
      var indexableKeysToKeyValues = new _pouchdbCollections.Map();
      var lastKey;

      for (var i = 0, len = mapResults.length; i < len; i++) {
        var emittedKeyValue = mapResults[i];
        var complexKey = [emittedKeyValue.key, emittedKeyValue.id];

        if (i > 0 && (0, _pouchdbCollate.collate)(emittedKeyValue.key, lastKey) === 0) {
          complexKey.push(i); // dup key+id, so make it unique
        }

        indexableKeysToKeyValues.set((0, _pouchdbCollate.toIndexableString)(complexKey), emittedKeyValue);
        lastKey = emittedKeyValue.key;
      }

      return indexableKeysToKeyValues;
    }

    return processNextBatch().then(function () {
      return queue.finish();
    }).then(function () {
      view.seq = currentSeq;
    });
  }

  function reduceView(view, results, options) {
    if (options.group_level === 0) {
      delete options.group_level;
    }

    var shouldGroup = options.group || options.group_level;
    var reduceFun = reducer(view.reduceFun);
    var groups = [];
    var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY : options.group_level;
    results.forEach(function (e) {
      var last = groups[groups.length - 1];
      var groupKey = shouldGroup ? e.key : null; // only set group_level for array keys

      if (shouldGroup && Array.isArray(groupKey)) {
        groupKey = groupKey.slice(0, lvl);
      }

      if (last && (0, _pouchdbCollate.collate)(last.groupKey, groupKey) === 0) {
        last.keys.push([e.key, e.id]);
        last.values.push(e.value);
        return;
      }

      groups.push({
        keys: [[e.key, e.id]],
        values: [e.value],
        groupKey: groupKey
      });
    });
    results = [];

    for (var i = 0, len = groups.length; i < len; i++) {
      var e = groups[i];
      var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);

      if (reduceTry.error && reduceTry.error instanceof _pouchdbMapreduceUtils.BuiltInError) {
        // CouchDB returns an error if a built-in errors out
        throw reduceTry.error;
      }

      results.push({
        // CouchDB just sets the value to null if a non-built-in errors out
        value: reduceTry.error ? null : reduceTry.output,
        key: e.groupKey
      });
    } // no total_rows/offset when reducing


    return {
      rows: sliceResults(results, options.limit, options.skip)
    };
  }

  function queryView(view, opts) {
    return (0, _pouchdbMapreduceUtils.sequentialize)(getQueue(view), function () {
      return queryViewInQueue(view, opts);
    })();
  }

  function queryViewInQueue(view, opts) {
    var totalRows;
    var shouldReduce = view.reduceFun && opts.reduce !== false;
    var skip = opts.skip || 0;

    if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
      // equivalent query
      opts.limit = 0;
      delete opts.keys;
    }

    function fetchFromView(viewOpts) {
      viewOpts.include_docs = true;
      return view.db.allDocs(viewOpts).then(function (res) {
        totalRows = res.total_rows;
        return res.rows.map(function (result) {
          // implicit migration - in older versions of PouchDB,
          // we explicitly stored the doc as {id: ..., key: ..., value: ...}
          // this is tested in a migration test

          /* istanbul ignore next */
          if ('value' in result.doc && typeof result.doc.value === 'object' && result.doc.value !== null) {
            var keys = Object.keys(result.doc.value).sort(); // this detection method is not perfect, but it's unlikely the user
            // emitted a value which was an object with these 3 exact keys

            var expectedKeys = ['id', 'key', 'value'];

            if (!(keys < expectedKeys || keys > expectedKeys)) {
              return result.doc.value;
            }
          }

          var parsedKeyAndDocId = (0, _pouchdbCollate.parseIndexableString)(result.doc._id);
          return {
            key: parsedKeyAndDocId[0],
            id: parsedKeyAndDocId[1],
            value: 'value' in result.doc ? result.doc.value : null
          };
        });
      });
    }

    function onMapResultsReady(rows) {
      var finalResults;

      if (shouldReduce) {
        finalResults = reduceView(view, rows, opts);
      } else {
        finalResults = {
          total_rows: totalRows,
          offset: skip,
          rows: rows
        };
      }
      /* istanbul ignore if */


      if (opts.update_seq) {
        finalResults.update_seq = view.seq;
      }

      if (opts.include_docs) {
        var docIds = (0, _pouchdbMapreduceUtils.uniq)(rows.map(rowToDocId));
        return view.sourceDB.allDocs({
          keys: docIds,
          include_docs: true,
          conflicts: opts.conflicts,
          attachments: opts.attachments,
          binary: opts.binary
        }).then(function (allDocsRes) {
          var docIdsToDocs = new _pouchdbCollections.Map();
          allDocsRes.rows.forEach(function (row) {
            docIdsToDocs.set(row.id, row.doc);
          });
          rows.forEach(function (row) {
            var docId = rowToDocId(row);
            var doc = docIdsToDocs.get(docId);

            if (doc) {
              row.doc = doc;
            }
          });
          return finalResults;
        });
      } else {
        return finalResults;
      }
    }

    if (typeof opts.keys !== 'undefined') {
      var keys = opts.keys;
      var fetchPromises = keys.map(function (key) {
        var viewOpts = {
          startkey: (0, _pouchdbCollate.toIndexableString)([key]),
          endkey: (0, _pouchdbCollate.toIndexableString)([key, {}])
        };
        /* istanbul ignore if */

        if (opts.update_seq) {
          viewOpts.update_seq = true;
        }

        return fetchFromView(viewOpts);
      });
      return Promise.all(fetchPromises).then(_pouchdbUtils.flatten).then(onMapResultsReady);
    } else {
      // normal query, no 'keys'
      var viewOpts = {
        descending: opts.descending
      };
      /* istanbul ignore if */

      if (opts.update_seq) {
        viewOpts.update_seq = true;
      }

      var startkey;
      var endkey;

      if ('start_key' in opts) {
        startkey = opts.start_key;
      }

      if ('startkey' in opts) {
        startkey = opts.startkey;
      }

      if ('end_key' in opts) {
        endkey = opts.end_key;
      }

      if ('endkey' in opts) {
        endkey = opts.endkey;
      }

      if (typeof startkey !== 'undefined') {
        viewOpts.startkey = opts.descending ? (0, _pouchdbCollate.toIndexableString)([startkey, {}]) : (0, _pouchdbCollate.toIndexableString)([startkey]);
      }

      if (typeof endkey !== 'undefined') {
        var inclusiveEnd = opts.inclusive_end !== false;

        if (opts.descending) {
          inclusiveEnd = !inclusiveEnd;
        }

        viewOpts.endkey = (0, _pouchdbCollate.toIndexableString)(inclusiveEnd ? [endkey, {}] : [endkey]);
      }

      if (typeof opts.key !== 'undefined') {
        var keyStart = (0, _pouchdbCollate.toIndexableString)([opts.key]);
        var keyEnd = (0, _pouchdbCollate.toIndexableString)([opts.key, {}]);

        if (viewOpts.descending) {
          viewOpts.endkey = keyStart;
          viewOpts.startkey = keyEnd;
        } else {
          viewOpts.startkey = keyStart;
          viewOpts.endkey = keyEnd;
        }
      }

      if (!shouldReduce) {
        if (typeof opts.limit === 'number') {
          viewOpts.limit = opts.limit;
        }

        viewOpts.skip = skip;
      }

      return fetchFromView(viewOpts).then(onMapResultsReady);
    }
  }

  function httpViewCleanup(db) {
    return db.fetch('_view_cleanup', {
      headers: new _pouchdbFetch.Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST'
    }).then(function (response) {
      return response.json();
    });
  }

  function localViewCleanup(db) {
    return db.get('_local/' + localDocName).then(function (metaDoc) {
      var docsToViews = new _pouchdbCollections.Map();
      Object.keys(metaDoc.views).forEach(function (fullViewName) {
        var parts = parseViewName(fullViewName);
        var designDocName = '_design/' + parts[0];
        var viewName = parts[1];
        var views = docsToViews.get(designDocName);

        if (!views) {
          views = new _pouchdbCollections.Set();
          docsToViews.set(designDocName, views);
        }

        views.add(viewName);
      });
      var opts = {
        keys: (0, _pouchdbMapreduceUtils.mapToKeysArray)(docsToViews),
        include_docs: true
      };
      return db.allDocs(opts).then(function (res) {
        var viewsToStatus = {};
        res.rows.forEach(function (row) {
          var ddocName = row.key.substring(8); // cuts off '_design/'

          docsToViews.get(row.key).forEach(function (viewName) {
            var fullViewName = ddocName + '/' + viewName;
            /* istanbul ignore if */

            if (!metaDoc.views[fullViewName]) {
              // new format, without slashes, to support PouchDB 2.2.0
              // migration test in pouchdb's browser.migration.js verifies this
              fullViewName = viewName;
            }

            var viewDBNames = Object.keys(metaDoc.views[fullViewName]); // design doc deleted, or view function nonexistent

            var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
            viewDBNames.forEach(function (viewDBName) {
              viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
            });
          });
        });
        var dbsToDelete = Object.keys(viewsToStatus).filter(function (viewDBName) {
          return !viewsToStatus[viewDBName];
        });
        var destroyPromises = dbsToDelete.map(function (viewDBName) {
          return (0, _pouchdbMapreduceUtils.sequentialize)(getQueue(viewDBName), function () {
            return new db.constructor(viewDBName, db.__opts).destroy();
          })();
        });
        return Promise.all(destroyPromises).then(function () {
          return {
            ok: true
          };
        });
      });
    }, defaultsTo({
      ok: true
    }));
  }

  function queryPromised(db, fun, opts) {
    /* istanbul ignore next */
    if (typeof db._query === 'function') {
      return customQuery(db, fun, opts);
    }

    if ((0, _pouchdbUtils.isRemote)(db)) {
      return httpQuery(db, fun, opts);
    }

    if (typeof fun !== 'string') {
      // temp_view
      checkQueryParseError(opts, fun);
      tempViewQueue.add(function () {
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        'temp_view/temp_view',
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        true,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          return (0, _pouchdbMapreduceUtils.fin)(updateView(view).then(function () {
            return queryView(view, opts);
          }), function () {
            return view.db.destroy();
          });
        });
      });
      return tempViewQueue.finish();
    } else {
      // persistent view
      var fullViewName = fun;
      var parts = parseViewName(fullViewName);
      var designDocName = parts[0];
      var viewName = parts[1];
      return db.get('_design/' + designDocName).then(function (doc) {
        var fun = doc.views && doc.views[viewName];

        if (!fun) {
          // basic validator; it's assumed that every subclass would want this
          throw new _pouchdbMapreduceUtils.NotFoundError('ddoc ' + doc._id + ' has no view named ' + viewName);
        }

        ddocValidator(doc, viewName);
        checkQueryParseError(opts, fun);
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        fullViewName,
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        false,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          if (opts.stale === 'ok' || opts.stale === 'update_after') {
            if (opts.stale === 'update_after') {
              (0, _pouchdbUtils.nextTick)(function () {
                updateView(view);
              });
            }

            return queryView(view, opts);
          } else {
            // stale not ok
            return updateView(view).then(function () {
              return queryView(view, opts);
            });
          }
        });
      });
    }
  }

  function abstractQuery(fun, opts, callback) {
    var db = this;

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = opts ? coerceOptions(opts) : {};

    if (typeof fun === 'function') {
      fun = {
        map: fun
      };
    }

    var promise = Promise.resolve().then(function () {
      return queryPromised(db, fun, opts);
    });
    (0, _pouchdbMapreduceUtils.promisedCallback)(promise, callback);
    return promise;
  }

  var abstractViewCleanup = (0, _pouchdbMapreduceUtils.callbackify)(function () {
    var db = this;
    /* istanbul ignore next */

    if (typeof db._viewCleanup === 'function') {
      return customViewCleanup(db);
    }

    if ((0, _pouchdbUtils.isRemote)(db)) {
      return httpViewCleanup(db);
    }

    return localViewCleanup(db);
  });
  return {
    query: abstractQuery,
    viewCleanup: abstractViewCleanup
  };
}

var _default = createAbstractMapReduce;
exports.default = _default;
},{"pouchdb-utils":"../../node_modules/pouchdb-utils/lib/index-browser.es.js","pouchdb-md5":"../../node_modules/pouchdb-md5/lib/index-browser.es.js","pouchdb-collections":"../../node_modules/pouchdb-collections/lib/index.es.js","pouchdb-binary-utils":"../../node_modules/pouchdb-binary-utils/lib/index-browser.es.js","pouchdb-collate":"../../node_modules/pouchdb-collate/lib/index.es.js","pouchdb-errors":"../../node_modules/pouchdb-errors/lib/index.es.js","pouchdb-fetch":"../../node_modules/pouchdb-fetch/lib/index-browser.es.js","pouchdb-mapreduce-utils":"../../node_modules/pouchdb-mapreduce-utils/lib/index.es.js"}],"../../node_modules/pouchdb-find/lib/index-browser.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pouchdbUtils = require("pouchdb-utils");

var _pouchdbErrors = require("pouchdb-errors");

var _pouchdbFetch = require("pouchdb-fetch");

var _pouchdbSelectorCore = require("pouchdb-selector-core");

var _pouchdbAbstractMapreduce = _interopRequireDefault(require("pouchdb-abstract-mapreduce"));

var _pouchdbCollate = require("pouchdb-collate");

var _pouchdbMd = require("pouchdb-md5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we restucture the supplied JSON considerably, because the official
// Mango API is very particular about a lot of this stuff, but we like
// to be liberal with what we accept in order to prevent mental
// breakdowns in our users
function massageCreateIndexRequest(requestDef) {
  requestDef = (0, _pouchdbUtils.clone)(requestDef);

  if (!requestDef.index) {
    requestDef.index = {};
  }

  ['type', 'name', 'ddoc'].forEach(function (key) {
    if (requestDef.index[key]) {
      requestDef[key] = requestDef.index[key];
      delete requestDef.index[key];
    }
  });

  if (requestDef.fields) {
    requestDef.index.fields = requestDef.fields;
    delete requestDef.fields;
  }

  if (!requestDef.type) {
    requestDef.type = 'json';
  }

  return requestDef;
}

function dbFetch(db, path, opts, callback) {
  var status, ok;
  opts.headers = new _pouchdbFetch.Headers({
    'Content-type': 'application/json'
  });
  db.fetch(path, opts).then(function (response) {
    status = response.status;
    ok = response.ok;
    return response.json();
  }).then(function (json) {
    if (!ok) {
      json.status = status;
      var err = (0, _pouchdbErrors.generateErrorFromResponse)(json);
      callback(err);
    } else {
      callback(null, json);
    }
  }).catch(callback);
}

function createIndex(db, requestDef, callback) {
  requestDef = massageCreateIndexRequest(requestDef);
  dbFetch(db, '_index', {
    method: 'POST',
    body: JSON.stringify(requestDef)
  }, callback);
}

function find(db, requestDef, callback) {
  dbFetch(db, '_find', {
    method: 'POST',
    body: JSON.stringify(requestDef)
  }, callback);
}

function explain(db, requestDef, callback) {
  dbFetch(db, '_explain', {
    method: 'POST',
    body: JSON.stringify(requestDef)
  }, callback);
}

function getIndexes(db, callback) {
  dbFetch(db, '_index', {
    method: 'GET'
  }, callback);
}

function deleteIndex(db, indexDef, callback) {
  var ddoc = indexDef.ddoc;
  var type = indexDef.type || 'json';
  var name = indexDef.name;

  if (!ddoc) {
    return callback(new Error('you must provide an index\'s ddoc'));
  }

  if (!name) {
    return callback(new Error('you must provide an index\'s name'));
  }

  var url = '_index/' + [ddoc, type, name].map(encodeURIComponent).join('/');
  dbFetch(db, url, {
    method: 'DELETE'
  }, callback);
}

function getArguments(fun) {
  return function () {
    var len = arguments.length;
    var args = new Array(len);
    var i = -1;

    while (++i < len) {
      args[i] = arguments[i];
    }

    return fun.call(this, args);
  };
}

function callbackify(fun) {
  return getArguments(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);
    promisedCallback(promise, cb);
    return promise;
  });
}

function promisedCallback(promise, callback) {
  promise.then(function (res) {
    (0, _pouchdbUtils.nextTick)(function () {
      callback(null, res);
    });
  }, function (reason) {
    (0, _pouchdbUtils.nextTick)(function () {
      callback(reason);
    });
  });
  return promise;
}

var flatten = getArguments(function (args) {
  var res = [];

  for (var i = 0, len = args.length; i < len; i++) {
    var subArr = args[i];

    if (Array.isArray(subArr)) {
      res = res.concat(flatten.apply(null, subArr));
    } else {
      res.push(subArr);
    }
  }

  return res;
});

function mergeObjects(arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    res = (0, _pouchdbUtils.assign)(res, arr[i]);
  }

  return res;
} // Selects a list of fields defined in dot notation from one doc
// and copies them to a new doc. Like underscore _.pick but supports nesting.


function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var parsedField = (0, _pouchdbSelectorCore.parseField)(arr[i]);
    var value = (0, _pouchdbSelectorCore.getFieldFromDoc)(obj, parsedField);

    if (typeof value !== 'undefined') {
      (0, _pouchdbSelectorCore.setFieldInDoc)(res, parsedField, value);
    }
  }

  return res;
} // e.g. ['a'], ['a', 'b'] is true, but ['b'], ['a', 'b'] is false


function oneArrayIsSubArrayOfOther(left, right) {
  for (var i = 0, len = Math.min(left.length, right.length); i < len; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return true;
} // e.g.['a', 'b', 'c'], ['a', 'b'] is false


function oneArrayIsStrictSubArrayOfOther(left, right) {
  if (left.length > right.length) {
    return false;
  }

  return oneArrayIsSubArrayOfOther(left, right);
} // same as above, but treat the left array as an unordered set
// e.g. ['b', 'a'], ['a', 'b', 'c'] is true, but ['c'], ['a', 'b', 'c'] is false


function oneSetIsSubArrayOfOther(left, right) {
  left = left.slice();

  for (var i = 0, len = right.length; i < len; i++) {
    var field = right[i];

    if (!left.length) {
      break;
    }

    var leftIdx = left.indexOf(field);

    if (leftIdx === -1) {
      return false;
    } else {
      left.splice(leftIdx, 1);
    }
  }

  return true;
}

function arrayToObject(arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    res[arr[i]] = true;
  }

  return res;
}

function max(arr, fun) {
  var max = null;
  var maxScore = -1;

  for (var i = 0, len = arr.length; i < len; i++) {
    var element = arr[i];
    var score = fun(element);

    if (score > maxScore) {
      maxScore = score;
      max = element;
    }
  }

  return max;
}

function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function uniq(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj['$' + arr[i]] = true;
  }

  return Object.keys(obj).map(function (key) {
    return key.substring(1);
  });
} //
// One thing about these mappers:
//
// Per the advice of John-David Dalton (http://youtu.be/NthmeLEhDDM),
// what you want to do in this case is optimize for the smallest possible
// function, since that's the thing that gets run over and over again.
//
// This code would be a lot simpler if all the if/elses were inside
// the function, but it would also be a lot less performant.
//


function createDeepMultiMapper(fields, emit) {
  return function (doc) {
    var toEmit = [];

    for (var i = 0, iLen = fields.length; i < iLen; i++) {
      var parsedField = (0, _pouchdbSelectorCore.parseField)(fields[i]);
      var value = doc;

      for (var j = 0, jLen = parsedField.length; j < jLen; j++) {
        var key = parsedField[j];
        value = value[key];

        if (typeof value === 'undefined') {
          return; // don't emit
        }
      }

      toEmit.push(value);
    }

    emit(toEmit);
  };
}

function createDeepSingleMapper(field, emit) {
  var parsedField = (0, _pouchdbSelectorCore.parseField)(field);
  return function (doc) {
    var value = doc;

    for (var i = 0, len = parsedField.length; i < len; i++) {
      var key = parsedField[i];
      value = value[key];

      if (typeof value === 'undefined') {
        return; // do nothing
      }
    }

    emit(value);
  };
}

function createShallowSingleMapper(field, emit) {
  return function (doc) {
    emit(doc[field]);
  };
}

function createShallowMultiMapper(fields, emit) {
  return function (doc) {
    var toEmit = [];

    for (var i = 0, len = fields.length; i < len; i++) {
      toEmit.push(doc[fields[i]]);
    }

    emit(toEmit);
  };
}

function checkShallow(fields) {
  for (var i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];

    if (field.indexOf('.') !== -1) {
      return false;
    }
  }

  return true;
}

function createMapper(fields, emit) {
  var isShallow = checkShallow(fields);
  var isSingle = fields.length === 1; // notice we try to optimize for the most common case,
  // i.e. single shallow indexes

  if (isShallow) {
    if (isSingle) {
      return createShallowSingleMapper(fields[0], emit);
    } else {
      // multi
      return createShallowMultiMapper(fields, emit);
    }
  } else {
    // deep
    if (isSingle) {
      return createDeepSingleMapper(fields[0], emit);
    } else {
      // multi
      return createDeepMultiMapper(fields, emit);
    }
  }
}

function mapper(mapFunDef, emit) {
  // mapFunDef is a list of fields
  var fields = Object.keys(mapFunDef.fields);
  return createMapper(fields, emit);
}
/* istanbul ignore next */


function reducer()
/*reduceFunDef*/
{
  throw new Error('reduce not supported');
}

function ddocValidator(ddoc, viewName) {
  var view = ddoc.views[viewName]; // This doesn't actually need to be here apparently, but
  // I feel safer keeping it.

  /* istanbul ignore if */

  if (!view.map || !view.map.fields) {
    throw new Error('ddoc ' + ddoc._id + ' with view ' + viewName + ' doesn\'t have map.fields defined. ' + 'maybe it wasn\'t created by this plugin?');
  }
}

var abstractMapper = (0, _pouchdbAbstractMapreduce.default)(
/* localDocName */
'indexes', mapper, reducer, ddocValidator); // normalize the "sort" value

function massageSort(sort) {
  if (!Array.isArray(sort)) {
    throw new Error('invalid sort json - should be an array');
  }

  return sort.map(function (sorting) {
    if (typeof sorting === 'string') {
      var obj = {};
      obj[sorting] = 'asc';
      return obj;
    } else {
      return sorting;
    }
  });
}

function massageUseIndex(useIndex) {
  var cleanedUseIndex = [];

  if (typeof useIndex === 'string') {
    cleanedUseIndex.push(useIndex);
  } else {
    cleanedUseIndex = useIndex;
  }

  return cleanedUseIndex.map(function (name) {
    return name.replace('_design/', '');
  });
}

function massageIndexDef(indexDef) {
  indexDef.fields = indexDef.fields.map(function (field) {
    if (typeof field === 'string') {
      var obj = {};
      obj[field] = 'asc';
      return obj;
    }

    return field;
  });
  return indexDef;
}

function getKeyFromDoc(doc, index) {
  var res = [];

  for (var i = 0; i < index.def.fields.length; i++) {
    var field = (0, _pouchdbSelectorCore.getKey)(index.def.fields[i]);
    res.push(doc[field]);
  }

  return res;
} // have to do this manually because REASONS. I don't know why
// CouchDB didn't implement inclusive_start


function filterInclusiveStart(rows, targetValue, index) {
  var indexFields = index.def.fields;

  for (var i = 0, len = rows.length; i < len; i++) {
    var row = rows[i]; // shave off any docs at the beginning that are <= the
    // target value

    var docKey = getKeyFromDoc(row.doc, index);

    if (indexFields.length === 1) {
      docKey = docKey[0]; // only one field, not multi-field
    } else {
      // more than one field in index
      // in the case where e.g. the user is searching {$gt: {a: 1}}
      // but the index is [a, b], then we need to shorten the doc key
      while (docKey.length > targetValue.length) {
        docKey.pop();
      }
    } //ABS as we just looking for values that don't match


    if (Math.abs((0, _pouchdbCollate.collate)(docKey, targetValue)) > 0) {
      // no need to filter any further; we're past the key
      break;
    }
  }

  return i > 0 ? rows.slice(i) : rows;
}

function reverseOptions(opts) {
  var newOpts = (0, _pouchdbUtils.clone)(opts);
  delete newOpts.startkey;
  delete newOpts.endkey;
  delete newOpts.inclusive_start;
  delete newOpts.inclusive_end;

  if ('endkey' in opts) {
    newOpts.startkey = opts.endkey;
  }

  if ('startkey' in opts) {
    newOpts.endkey = opts.startkey;
  }

  if ('inclusive_start' in opts) {
    newOpts.inclusive_end = opts.inclusive_start;
  }

  if ('inclusive_end' in opts) {
    newOpts.inclusive_start = opts.inclusive_end;
  }

  return newOpts;
}

function validateIndex(index) {
  var ascFields = index.fields.filter(function (field) {
    return (0, _pouchdbSelectorCore.getValue)(field) === 'asc';
  });

  if (ascFields.length !== 0 && ascFields.length !== index.fields.length) {
    throw new Error('unsupported mixed sorting');
  }
}

function validateSort(requestDef, index) {
  if (index.defaultUsed && requestDef.sort) {
    var noneIdSorts = requestDef.sort.filter(function (sortItem) {
      return Object.keys(sortItem)[0] !== '_id';
    }).map(function (sortItem) {
      return Object.keys(sortItem)[0];
    });

    if (noneIdSorts.length > 0) {
      throw new Error('Cannot sort on field(s) "' + noneIdSorts.join(',') + '" when using the default index');
    }
  }

  if (index.defaultUsed) {
    return;
  }
}

function validateFindRequest(requestDef) {
  if (typeof requestDef.selector !== 'object') {
    throw new Error('you must provide a selector when you find()');
  }
  /*var selectors = requestDef.selector['$and'] || [requestDef.selector];
  for (var i = 0; i < selectors.length; i++) {
    var selector = selectors[i];
    var keys = Object.keys(selector);
    if (keys.length === 0) {
      throw new Error('invalid empty selector');
    }
    //var selection = selector[keys[0]];
    /*if (Object.keys(selection).length !== 1) {
      throw new Error('invalid selector: ' + JSON.stringify(selection) +
        ' - it must have exactly one key/value');
    }
  }*/

} // determine the maximum number of fields
// we're going to need to query, e.g. if the user
// has selection ['a'] and sorting ['a', 'b'], then we
// need to use the longer of the two: ['a', 'b']


function getUserFields(selector, sort) {
  var selectorFields = Object.keys(selector);
  var sortFields = sort ? sort.map(_pouchdbSelectorCore.getKey) : [];
  var userFields;

  if (selectorFields.length >= sortFields.length) {
    userFields = selectorFields;
  } else {
    userFields = sortFields;
  }

  if (sortFields.length === 0) {
    return {
      fields: userFields
    };
  } // sort according to the user's preferred sorting


  userFields = userFields.sort(function (left, right) {
    var leftIdx = sortFields.indexOf(left);

    if (leftIdx === -1) {
      leftIdx = Number.MAX_VALUE;
    }

    var rightIdx = sortFields.indexOf(right);

    if (rightIdx === -1) {
      rightIdx = Number.MAX_VALUE;
    }

    return leftIdx < rightIdx ? -1 : leftIdx > rightIdx ? 1 : 0;
  });
  return {
    fields: userFields,
    sortOrder: sort.map(_pouchdbSelectorCore.getKey)
  };
}

function createIndex$1(db, requestDef) {
  requestDef = massageCreateIndexRequest(requestDef);
  var originalIndexDef = (0, _pouchdbUtils.clone)(requestDef.index);
  requestDef.index = massageIndexDef(requestDef.index);
  validateIndex(requestDef.index); // calculating md5 is expensive - memoize and only
  // run if required

  var md5;

  function getMd5() {
    return md5 || (md5 = (0, _pouchdbMd.stringMd5)(JSON.stringify(requestDef)));
  }

  var viewName = requestDef.name || 'idx-' + getMd5();
  var ddocName = requestDef.ddoc || 'idx-' + getMd5();
  var ddocId = '_design/' + ddocName;
  var hasInvalidLanguage = false;
  var viewExists = false;

  function updateDdoc(doc) {
    if (doc._rev && doc.language !== 'query') {
      hasInvalidLanguage = true;
    }

    doc.language = 'query';
    doc.views = doc.views || {};
    viewExists = !!doc.views[viewName];

    if (viewExists) {
      return false;
    }

    doc.views[viewName] = {
      map: {
        fields: mergeObjects(requestDef.index.fields)
      },
      reduce: '_count',
      options: {
        def: originalIndexDef
      }
    };
    return doc;
  }

  db.constructor.emit('debug', ['find', 'creating index', ddocId]);
  return (0, _pouchdbUtils.upsert)(db, ddocId, updateDdoc).then(function () {
    if (hasInvalidLanguage) {
      throw new Error('invalid language for ddoc with id "' + ddocId + '" (should be "query")');
    }
  }).then(function () {
    // kick off a build
    // TODO: abstract-pouchdb-mapreduce should support auto-updating
    // TODO: should also use update_after, but pouchdb/pouchdb#3415 blocks me
    var signature = ddocName + '/' + viewName;
    return abstractMapper.query.call(db, signature, {
      limit: 0,
      reduce: false
    }).then(function () {
      return {
        id: ddocId,
        name: viewName,
        result: viewExists ? 'exists' : 'created'
      };
    });
  });
}

function getIndexes$1(db) {
  // just search through all the design docs and filter in-memory.
  // hopefully there aren't that many ddocs.
  return db.allDocs({
    startkey: '_design/',
    endkey: '_design/\uffff',
    include_docs: true
  }).then(function (allDocsRes) {
    var res = {
      indexes: [{
        ddoc: null,
        name: '_all_docs',
        type: 'special',
        def: {
          fields: [{
            _id: 'asc'
          }]
        }
      }]
    };
    res.indexes = flatten(res.indexes, allDocsRes.rows.filter(function (row) {
      return row.doc.language === 'query';
    }).map(function (row) {
      var viewNames = row.doc.views !== undefined ? Object.keys(row.doc.views) : [];
      return viewNames.map(function (viewName) {
        var view = row.doc.views[viewName];
        return {
          ddoc: row.id,
          name: viewName,
          type: 'json',
          def: massageIndexDef(view.options.def)
        };
      });
    })); // these are sorted by view name for some reason

    res.indexes.sort(function (left, right) {
      return (0, _pouchdbSelectorCore.compare)(left.name, right.name);
    });
    res.total_rows = res.indexes.length;
    return res;
  });
} // couchdb lowest collation value


var COLLATE_LO = null; // couchdb highest collation value (TODO: well not really, but close enough amirite)

var COLLATE_HI = {
  "\uffff": {}
}; // couchdb second-lowest collation value

function checkFieldInIndex(index, field) {
  var indexFields = index.def.fields.map(_pouchdbSelectorCore.getKey);

  for (var i = 0, len = indexFields.length; i < len; i++) {
    var indexField = indexFields[i];

    if (field === indexField) {
      return true;
    }
  }

  return false;
} // so when you do e.g. $eq/$eq, we can do it entirely in the database.
// but when you do e.g. $gt/$eq, the first part can be done
// in the database, but the second part has to be done in-memory,
// because $gt has forced us to lose precision.
// so that's what this determines


function userOperatorLosesPrecision(selector, field) {
  var matcher = selector[field];
  var userOperator = (0, _pouchdbSelectorCore.getKey)(matcher);
  return userOperator !== '$eq';
} // sort the user fields by their position in the index,
// if they're in the index


function sortFieldsByIndex(userFields, index) {
  var indexFields = index.def.fields.map(_pouchdbSelectorCore.getKey);
  return userFields.slice().sort(function (a, b) {
    var aIdx = indexFields.indexOf(a);
    var bIdx = indexFields.indexOf(b);

    if (aIdx === -1) {
      aIdx = Number.MAX_VALUE;
    }

    if (bIdx === -1) {
      bIdx = Number.MAX_VALUE;
    }

    return (0, _pouchdbSelectorCore.compare)(aIdx, bIdx);
  });
} // first pass to try to find fields that will need to be sorted in-memory


function getBasicInMemoryFields(index, selector, userFields) {
  userFields = sortFieldsByIndex(userFields, index); // check if any of the user selectors lose precision

  var needToFilterInMemory = false;

  for (var i = 0, len = userFields.length; i < len; i++) {
    var field = userFields[i];

    if (needToFilterInMemory || !checkFieldInIndex(index, field)) {
      return userFields.slice(i);
    }

    if (i < len - 1 && userOperatorLosesPrecision(selector, field)) {
      needToFilterInMemory = true;
    }
  }

  return [];
}

function getInMemoryFieldsFromNe(selector) {
  var fields = [];
  Object.keys(selector).forEach(function (field) {
    var matcher = selector[field];
    Object.keys(matcher).forEach(function (operator) {
      if (operator === '$ne') {
        fields.push(field);
      }
    });
  });
  return fields;
}

function getInMemoryFields(coreInMemoryFields, index, selector, userFields) {
  var result = flatten( // in-memory fields reported as necessary by the query planner
  coreInMemoryFields, // combine with another pass that checks for any we may have missed
  getBasicInMemoryFields(index, selector, userFields), // combine with another pass that checks for $ne's
  getInMemoryFieldsFromNe(selector));
  return sortFieldsByIndex(uniq(result), index);
} // check that at least one field in the user's query is represented
// in the index. order matters in the case of sorts


function checkIndexFieldsMatch(indexFields, sortOrder, fields) {
  if (sortOrder) {
    // array has to be a strict subarray of index array. furthermore,
    // the sortOrder fields need to all be represented in the index
    var sortMatches = oneArrayIsStrictSubArrayOfOther(sortOrder, indexFields);
    var selectorMatches = oneArrayIsSubArrayOfOther(fields, indexFields);
    return sortMatches && selectorMatches;
  } // all of the user's specified fields still need to be
  // on the left side of the index array, although the order
  // doesn't matter


  return oneSetIsSubArrayOfOther(fields, indexFields);
}

var logicalMatchers = ['$eq', '$gt', '$gte', '$lt', '$lte'];

function isNonLogicalMatcher(matcher) {
  return logicalMatchers.indexOf(matcher) === -1;
} // check all the index fields for usages of '$ne'
// e.g. if the user queries {foo: {$ne: 'foo'}, bar: {$eq: 'bar'}},
// then we can neither use an index on ['foo'] nor an index on
// ['foo', 'bar'], but we can use an index on ['bar'] or ['bar', 'foo']


function checkFieldsLogicallySound(indexFields, selector) {
  var firstField = indexFields[0];
  var matcher = selector[firstField];

  if (typeof matcher === 'undefined') {
    /* istanbul ignore next */
    return true;
  }

  var hasLogicalOperator = Object.keys(matcher).some(function (matcherKey) {
    return !isNonLogicalMatcher(matcherKey);
  });

  if (!hasLogicalOperator) {
    return false;
  }

  var isInvalidNe = Object.keys(matcher).length === 1 && (0, _pouchdbSelectorCore.getKey)(matcher) === '$ne';
  return !isInvalidNe;
}

function checkIndexMatches(index, sortOrder, fields, selector) {
  var indexFields = index.def.fields.map(_pouchdbSelectorCore.getKey);
  var fieldsMatch = checkIndexFieldsMatch(indexFields, sortOrder, fields);

  if (!fieldsMatch) {
    return false;
  }

  return checkFieldsLogicallySound(indexFields, selector);
} //
// the algorithm is very simple:
// take all the fields the user supplies, and if those fields
// are a strict subset of the fields in some index,
// then use that index
//
//


function findMatchingIndexes(selector, userFields, sortOrder, indexes) {
  return indexes.reduce(function (res, index) {
    var indexMatches = checkIndexMatches(index, sortOrder, userFields, selector);

    if (indexMatches) {
      res.push(index);
    }

    return res;
  }, []);
} // find the best index, i.e. the one that matches the most fields
// in the user's query


function findBestMatchingIndex(selector, userFields, sortOrder, indexes, useIndex) {
  var matchingIndexes = findMatchingIndexes(selector, userFields, sortOrder, indexes);

  if (matchingIndexes.length === 0) {
    if (useIndex) {
      throw {
        error: "no_usable_index",
        message: "There is no index available for this selector."
      };
    } //return `all_docs` as a default index;
    //I'm assuming that _all_docs is always first


    var defaultIndex = indexes[0];
    defaultIndex.defaultUsed = true;
    return defaultIndex;
  }

  if (matchingIndexes.length === 1 && !useIndex) {
    return matchingIndexes[0];
  }

  var userFieldsMap = arrayToObject(userFields);

  function scoreIndex(index) {
    var indexFields = index.def.fields.map(_pouchdbSelectorCore.getKey);
    var score = 0;

    for (var i = 0, len = indexFields.length; i < len; i++) {
      var indexField = indexFields[i];

      if (userFieldsMap[indexField]) {
        score++;
      }
    }

    return score;
  }

  if (useIndex) {
    var useIndexDdoc = '_design/' + useIndex[0];
    var useIndexName = useIndex.length === 2 ? useIndex[1] : false;
    var index = matchingIndexes.find(function (index) {
      if (useIndexName && index.ddoc === useIndexDdoc && useIndexName === index.name) {
        return true;
      }

      if (index.ddoc === useIndexDdoc) {
        /* istanbul ignore next */
        return true;
      }

      return false;
    });

    if (!index) {
      throw {
        error: "unknown_error",
        message: "Could not find that index or could not use that index for the query"
      };
    }

    return index;
  }

  return max(matchingIndexes, scoreIndex);
}

function getSingleFieldQueryOptsFor(userOperator, userValue) {
  switch (userOperator) {
    case '$eq':
      return {
        key: userValue
      };

    case '$lte':
      return {
        endkey: userValue
      };

    case '$gte':
      return {
        startkey: userValue
      };

    case '$lt':
      return {
        endkey: userValue,
        inclusive_end: false
      };

    case '$gt':
      return {
        startkey: userValue,
        inclusive_start: false
      };
  }
}

function getSingleFieldCoreQueryPlan(selector, index) {
  var field = (0, _pouchdbSelectorCore.getKey)(index.def.fields[0]); //ignoring this because the test to exercise the branch is skipped at the moment

  /* istanbul ignore next */

  var matcher = selector[field] || {};
  var inMemoryFields = [];
  var userOperators = Object.keys(matcher);
  var combinedOpts;
  userOperators.forEach(function (userOperator) {
    if (isNonLogicalMatcher(userOperator)) {
      inMemoryFields.push(field);
      return;
    }

    var userValue = matcher[userOperator];
    var newQueryOpts = getSingleFieldQueryOptsFor(userOperator, userValue);

    if (combinedOpts) {
      combinedOpts = mergeObjects([combinedOpts, newQueryOpts]);
    } else {
      combinedOpts = newQueryOpts;
    }
  });
  return {
    queryOpts: combinedOpts,
    inMemoryFields: inMemoryFields
  };
}

function getMultiFieldCoreQueryPlan(userOperator, userValue) {
  switch (userOperator) {
    case '$eq':
      return {
        startkey: userValue,
        endkey: userValue
      };

    case '$lte':
      return {
        endkey: userValue
      };

    case '$gte':
      return {
        startkey: userValue
      };

    case '$lt':
      return {
        endkey: userValue,
        inclusive_end: false
      };

    case '$gt':
      return {
        startkey: userValue,
        inclusive_start: false
      };
  }
}

function getMultiFieldQueryOpts(selector, index) {
  var indexFields = index.def.fields.map(_pouchdbSelectorCore.getKey);
  var inMemoryFields = [];
  var startkey = [];
  var endkey = [];
  var inclusiveStart;
  var inclusiveEnd;

  function finish(i) {
    if (inclusiveStart !== false) {
      startkey.push(COLLATE_LO);
    }

    if (inclusiveEnd !== false) {
      endkey.push(COLLATE_HI);
    } // keep track of the fields where we lost specificity,
    // and therefore need to filter in-memory


    inMemoryFields = indexFields.slice(i);
  }

  for (var i = 0, len = indexFields.length; i < len; i++) {
    var indexField = indexFields[i];
    var matcher = selector[indexField];

    if (!matcher || !Object.keys(matcher).length) {
      // fewer fields in user query than in index
      finish(i);
      break;
    } else if (i > 0) {
      if (Object.keys(matcher).some(isNonLogicalMatcher)) {
        // non-logical are ignored
        finish(i);
        break;
      }

      var usingGtlt = '$gt' in matcher || '$gte' in matcher || '$lt' in matcher || '$lte' in matcher;
      var previousKeys = Object.keys(selector[indexFields[i - 1]]);
      var previousWasEq = arrayEquals(previousKeys, ['$eq']);
      var previousWasSame = arrayEquals(previousKeys, Object.keys(matcher));
      var gtltLostSpecificity = usingGtlt && !previousWasEq && !previousWasSame;

      if (gtltLostSpecificity) {
        finish(i);
        break;
      }
    }

    var userOperators = Object.keys(matcher);
    var combinedOpts = null;

    for (var j = 0; j < userOperators.length; j++) {
      var userOperator = userOperators[j];
      var userValue = matcher[userOperator];
      var newOpts = getMultiFieldCoreQueryPlan(userOperator, userValue);

      if (combinedOpts) {
        combinedOpts = mergeObjects([combinedOpts, newOpts]);
      } else {
        combinedOpts = newOpts;
      }
    }

    startkey.push('startkey' in combinedOpts ? combinedOpts.startkey : COLLATE_LO);
    endkey.push('endkey' in combinedOpts ? combinedOpts.endkey : COLLATE_HI);

    if ('inclusive_start' in combinedOpts) {
      inclusiveStart = combinedOpts.inclusive_start;
    }

    if ('inclusive_end' in combinedOpts) {
      inclusiveEnd = combinedOpts.inclusive_end;
    }
  }

  var res = {
    startkey: startkey,
    endkey: endkey
  };

  if (typeof inclusiveStart !== 'undefined') {
    res.inclusive_start = inclusiveStart;
  }

  if (typeof inclusiveEnd !== 'undefined') {
    res.inclusive_end = inclusiveEnd;
  }

  return {
    queryOpts: res,
    inMemoryFields: inMemoryFields
  };
}

function getDefaultQueryPlan(selector) {
  //using default index, so all fields need to be done in memory
  return {
    queryOpts: {
      startkey: null
    },
    inMemoryFields: [Object.keys(selector)]
  };
}

function getCoreQueryPlan(selector, index) {
  if (index.defaultUsed) {
    return getDefaultQueryPlan(selector, index);
  }

  if (index.def.fields.length === 1) {
    // one field in index, so the value was indexed as a singleton
    return getSingleFieldCoreQueryPlan(selector, index);
  } // else index has multiple fields, so the value was indexed as an array


  return getMultiFieldQueryOpts(selector, index);
}

function planQuery(request, indexes) {
  var selector = request.selector;
  var sort = request.sort;
  var userFieldsRes = getUserFields(selector, sort);
  var userFields = userFieldsRes.fields;
  var sortOrder = userFieldsRes.sortOrder;
  var index = findBestMatchingIndex(selector, userFields, sortOrder, indexes, request.use_index);
  var coreQueryPlan = getCoreQueryPlan(selector, index);
  var queryOpts = coreQueryPlan.queryOpts;
  var coreInMemoryFields = coreQueryPlan.inMemoryFields;
  var inMemoryFields = getInMemoryFields(coreInMemoryFields, index, selector, userFields);
  var res = {
    queryOpts: queryOpts,
    index: index,
    inMemoryFields: inMemoryFields
  };
  return res;
}

function indexToSignature(index) {
  // remove '_design/'
  return index.ddoc.substring(8) + '/' + index.name;
}

function doAllDocs(db, originalOpts) {
  var opts = (0, _pouchdbUtils.clone)(originalOpts); // CouchDB responds in weird ways when you provide a non-string to _id;
  // we mimic the behavior for consistency. See issue66 tests for details.

  if (opts.descending) {
    if ('endkey' in opts && typeof opts.endkey !== 'string') {
      opts.endkey = '';
    }

    if ('startkey' in opts && typeof opts.startkey !== 'string') {
      opts.limit = 0;
    }
  } else {
    if ('startkey' in opts && typeof opts.startkey !== 'string') {
      opts.startkey = '';
    }

    if ('endkey' in opts && typeof opts.endkey !== 'string') {
      opts.limit = 0;
    }
  }

  if ('key' in opts && typeof opts.key !== 'string') {
    opts.limit = 0;
  }

  return db.allDocs(opts).then(function (res) {
    // filter out any design docs that _all_docs might return
    res.rows = res.rows.filter(function (row) {
      return !/^_design\//.test(row.id);
    });
    return res;
  });
}

function find$1(db, requestDef, explain) {
  if (requestDef.selector) {
    requestDef.selector = (0, _pouchdbSelectorCore.massageSelector)(requestDef.selector);
  }

  if (requestDef.sort) {
    requestDef.sort = massageSort(requestDef.sort);
  }

  if (requestDef.use_index) {
    requestDef.use_index = massageUseIndex(requestDef.use_index);
  }

  validateFindRequest(requestDef);
  return getIndexes$1(db).then(function (getIndexesRes) {
    db.constructor.emit('debug', ['find', 'planning query', requestDef]);
    var queryPlan = planQuery(requestDef, getIndexesRes.indexes);
    db.constructor.emit('debug', ['find', 'query plan', queryPlan]);
    var indexToUse = queryPlan.index;
    validateSort(requestDef, indexToUse);
    var opts = (0, _pouchdbUtils.assign)({
      include_docs: true,
      reduce: false
    }, queryPlan.queryOpts);

    if ('startkey' in opts && 'endkey' in opts && (0, _pouchdbCollate.collate)(opts.startkey, opts.endkey) > 0) {
      // can't possibly return any results, startkey > endkey

      /* istanbul ignore next */
      return {
        docs: []
      };
    }

    var isDescending = requestDef.sort && typeof requestDef.sort[0] !== 'string' && (0, _pouchdbSelectorCore.getValue)(requestDef.sort[0]) === 'desc';

    if (isDescending) {
      // either all descending or all ascending
      opts.descending = true;
      opts = reverseOptions(opts);
    }

    if (!queryPlan.inMemoryFields.length) {
      // no in-memory filtering necessary, so we can let the
      // database do the limit/skip for us
      if ('limit' in requestDef) {
        opts.limit = requestDef.limit;
      }

      if ('skip' in requestDef) {
        opts.skip = requestDef.skip;
      }
    }

    if (explain) {
      return Promise.resolve(queryPlan, opts);
    }

    return Promise.resolve().then(function () {
      if (indexToUse.name === '_all_docs') {
        return doAllDocs(db, opts);
      } else {
        var signature = indexToSignature(indexToUse);
        return abstractMapper.query.call(db, signature, opts);
      }
    }).then(function (res) {
      if (opts.inclusive_start === false) {
        // may have to manually filter the first one,
        // since couchdb has no true inclusive_start option
        res.rows = filterInclusiveStart(res.rows, opts.startkey, indexToUse);
      }

      if (queryPlan.inMemoryFields.length) {
        // need to filter some stuff in-memory
        res.rows = (0, _pouchdbSelectorCore.filterInMemoryFields)(res.rows, requestDef, queryPlan.inMemoryFields);
      }

      var resp = {
        docs: res.rows.map(function (row) {
          var doc = row.doc;

          if (requestDef.fields) {
            return pick(doc, requestDef.fields);
          }

          return doc;
        })
      };

      if (indexToUse.defaultUsed) {
        resp.warning = 'no matching index found, create an index to optimize query time';
      }

      return resp;
    });
  });
}

function explain$1(db, requestDef) {
  return find$1(db, requestDef, true).then(function (queryPlan) {
    return {
      dbname: db.name,
      index: queryPlan.index,
      selector: requestDef.selector,
      range: {
        start_key: queryPlan.queryOpts.startkey,
        end_key: queryPlan.queryOpts.endkey
      },
      opts: {
        use_index: requestDef.use_index || [],
        bookmark: "nil",
        //hardcoded to match CouchDB since its not supported,
        limit: requestDef.limit,
        skip: requestDef.skip,
        sort: requestDef.sort || {},
        fields: requestDef.fields,
        conflicts: false,
        //hardcoded to match CouchDB since its not supported,
        r: [49] // hardcoded to match CouchDB since its not support

      },
      limit: requestDef.limit,
      skip: requestDef.skip || 0,
      fields: requestDef.fields
    };
  });
}

function deleteIndex$1(db, index) {
  if (!index.ddoc) {
    throw new Error('you must supply an index.ddoc when deleting');
  }

  if (!index.name) {
    throw new Error('you must supply an index.name when deleting');
  }

  var docId = index.ddoc;
  var viewName = index.name;

  function deltaFun(doc) {
    if (Object.keys(doc.views).length === 1 && doc.views[viewName]) {
      // only one view in this ddoc, delete the whole ddoc
      return {
        _id: docId,
        _deleted: true
      };
    } // more than one view here, just remove the view


    delete doc.views[viewName];
    return doc;
  }

  return (0, _pouchdbUtils.upsert)(db, docId, deltaFun).then(function () {
    return abstractMapper.viewCleanup.apply(db);
  }).then(function () {
    return {
      ok: true
    };
  });
}

var createIndexAsCallback = callbackify(createIndex$1);
var findAsCallback = callbackify(find$1);
var explainAsCallback = callbackify(explain$1);
var getIndexesAsCallback = callbackify(getIndexes$1);
var deleteIndexAsCallback = callbackify(deleteIndex$1);
var plugin = {};
plugin.createIndex = (0, _pouchdbUtils.toPromise)(function (requestDef, callback) {
  if (typeof requestDef !== 'object') {
    return callback(new Error('you must provide an index to create'));
  }

  var createIndex$$1 = (0, _pouchdbUtils.isRemote)(this) ? createIndex : createIndexAsCallback;
  createIndex$$1(this, requestDef, callback);
});
plugin.find = (0, _pouchdbUtils.toPromise)(function (requestDef, callback) {
  if (typeof callback === 'undefined') {
    callback = requestDef;
    requestDef = undefined;
  }

  if (typeof requestDef !== 'object') {
    return callback(new Error('you must provide search parameters to find()'));
  }

  var find$$1 = (0, _pouchdbUtils.isRemote)(this) ? find : findAsCallback;
  find$$1(this, requestDef, callback);
});
plugin.explain = (0, _pouchdbUtils.toPromise)(function (requestDef, callback) {
  if (typeof callback === 'undefined') {
    callback = requestDef;
    requestDef = undefined;
  }

  if (typeof requestDef !== 'object') {
    return callback(new Error('you must provide search parameters to explain()'));
  }

  var find$$1 = (0, _pouchdbUtils.isRemote)(this) ? explain : explainAsCallback;
  find$$1(this, requestDef, callback);
});
plugin.getIndexes = (0, _pouchdbUtils.toPromise)(function (callback) {
  var getIndexes$$1 = (0, _pouchdbUtils.isRemote)(this) ? getIndexes : getIndexesAsCallback;
  getIndexes$$1(this, callback);
});
plugin.deleteIndex = (0, _pouchdbUtils.toPromise)(function (indexDef, callback) {
  if (typeof indexDef !== 'object') {
    return callback(new Error('you must provide an index to delete'));
  }

  var deleteIndex$$1 = (0, _pouchdbUtils.isRemote)(this) ? deleteIndex : deleteIndexAsCallback;
  deleteIndex$$1(this, indexDef, callback);
});
var _default = plugin;
exports.default = _default;
},{"pouchdb-utils":"../../node_modules/pouchdb-utils/lib/index-browser.es.js","pouchdb-errors":"../../node_modules/pouchdb-errors/lib/index.es.js","pouchdb-fetch":"../../node_modules/pouchdb-fetch/lib/index-browser.es.js","pouchdb-selector-core":"../../node_modules/pouchdb-selector-core/lib/index.es.js","pouchdb-abstract-mapreduce":"../../node_modules/pouchdb-abstract-mapreduce/lib/index.es.js","pouchdb-collate":"../../node_modules/pouchdb-collate/lib/index.es.js","pouchdb-md5":"../../node_modules/pouchdb-md5/lib/index-browser.es.js"}],"../data/product_data.json":[function(require,module,exports) {
module.exports = [{
  "product_id": 1,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Long Sleeved Wrap Top",
  "brand": "Hipcrave",
  "price_sale": 36.99,
  "price_actual": 79.99,
  "price_savings": 43,
  "short_desc": "Mumblecore pok pok kombucha letterpress, distillery live-edge yuccie iceland air plant chicharrones hella lo-fi brooklyn tilde everyday carry. DIY tilde tattooed meh, fashion axe godard next level slow-carb...",
  "long_desc": "Mumblecore pok pok kombucha letterpress, distillery live-edge yuccie iceland air plant chicharrones hella lo-fi brooklyn tilde everyday carry. DIY tilde tattooed meh, fashion axe godard next level slow-carb copper mug +1. VHS pork belly poke la croix street art celiac, vaporware vice. Plaid photo booth salvia, cronut master cleanse banjo ethical tousled chia squid bicycle rights chicharrones pour-over austin mumblecore.",
  "rating": 4.9,
  "rating_count": 61,
  "color": ["blue", "yellow"],
  "size": ["small", "large", "x-large", "medium"],
  "thumbnail_url": "blue-t-shirt_4460x4460.jpg",
  "image_url": "blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 2,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "High Neck Blouse",
  "brand": "Bouture",
  "price_sale": 59.99,
  "price_actual": 83.99,
  "price_savings": 24,
  "short_desc": "Banh mi artisan godard stumptown, polaroid woke food truck 8-bit subway tile sustainable you probably haven't heard of them keffiyeh literally. Cliche williamsburg cornhole austin fanny pack. Selfies next...",
  "long_desc": "Banh mi artisan godard stumptown, polaroid woke food truck 8-bit subway tile sustainable you probably haven't heard of them keffiyeh literally. Cliche williamsburg cornhole austin fanny pack. Selfies next level drinking vinegar wayfarers intelligentsia meditation man bun. Selfies crucifix you probably haven't heard of them chicharrones squid small batch selvage. Keffiyeh lo-fi iceland scenester VHS.",
  "rating": 2.2,
  "rating_count": 79,
  "color": ["yellow", "green"],
  "size": ["x-large", "medium", "large", "x-small"],
  "thumbnail_url": "bright-purple-t-shirt_4460x4460.jpg",
  "image_url": "bright-purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 3,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Preppy Top",
  "brand": "Wovest",
  "price_sale": 30.99,
  "price_actual": 55.99,
  "price_savings": 25,
  "short_desc": "Glossier ennui you probably haven't heard of them flannel coloring book salvia. Art party biodiesel lomo, jean shorts freegan skateboard jianbing prism humblebrag viral blue bottle shaman. Viral tumeric...",
  "long_desc": "Glossier ennui you probably haven't heard of them flannel coloring book salvia. Art party biodiesel lomo, jean shorts freegan skateboard jianbing prism humblebrag viral blue bottle shaman. Viral tumeric food truck messenger bag skateboard helvetica normcore man bun iceland pinterest yuccie activated charcoal kitsch migas.",
  "rating": 4.8,
  "rating_count": 47,
  "color": ["red", "blue", "green"],
  "size": ["x-small", "large", "medium"],
  "thumbnail_url": "cobalt-blue-t-shirt_4460x4460.jpg",
  "image_url": "cobalt-blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 4,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Hooded Sweatshirt",
  "brand": "Bouture",
  "price_sale": 41.99,
  "price_actual": 80.99,
  "price_savings": 39,
  "short_desc": "Lomo venmo literally bitters jean shorts shabby chic ennui enamel pin vegan roof party VHS four dollar toast ethical. Asymmetrical bitters franzen tacos. Coloring book normcore chia unicorn, 8-bit iceland...",
  "long_desc": "Lomo venmo literally bitters jean shorts shabby chic ennui enamel pin vegan roof party VHS four dollar toast ethical. Asymmetrical bitters franzen tacos. Coloring book normcore chia unicorn, 8-bit iceland cronut brooklyn. Dreamcatcher austin banh mi XOXO bicycle rights. Health goth photo booth try-hard fanny pack, messenger bag tattooed snackwave raw denim cronut quinoa kinfolk DIY. Try-hard food truck blue bottle kogi pickled.",
  "rating": 4.1,
  "rating_count": 98,
  "color": ["green", "blue"],
  "size": ["medium", "x-small", "large"],
  "thumbnail_url": "green-t-shirt_4460x4460.jpg",
  "image_url": "green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 5,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Floral-print Wrap Top",
  "brand": "Wovest",
  "price_sale": 47.99,
  "price_actual": 84.99,
  "price_savings": 37,
  "short_desc": "Try-hard YOLO pinterest mlkshk pabst humblebrag. Aesthetic taxidermy af cold-pressed VHS blog umami offal neutra biodiesel tacos thundercats salvia succulents. Portland hella mixtape sartorial vinyl jianbing...",
  "long_desc": "Try-hard YOLO pinterest mlkshk pabst humblebrag. Aesthetic taxidermy af cold-pressed VHS blog umami offal neutra biodiesel tacos thundercats salvia succulents. Portland hella mixtape sartorial vinyl jianbing listicle +1. Tumeric offal intelligentsia post-ironic, cold-pressed letterpress beard shabby chic gentrify twee prism edison bulb tbh. Messenger bag coloring book kitsch hot chicken vaporware taiyaki.",
  "rating": 3.3,
  "rating_count": 11,
  "color": ["green", "blue", "yellow"],
  "size": ["x-small", "x-large"],
  "thumbnail_url": "grey-t-shirt_4460x4460.jpg",
  "image_url": "grey-t-shirt_4460x4460.jpg"
}, {
  "product_id": 6,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Sleeveless T-Shirt",
  "brand": "Hipcrave",
  "price_sale": 33.99,
  "price_actual": 47.99,
  "price_savings": 14,
  "short_desc": "Af williamsburg meditation activated charcoal. Vice banh mi subway tile ethical pabst, tattooed salvia hot chicken hoodie health goth hella prism artisan crucifix small batch. Skateboard succulents la...",
  "long_desc": "Af williamsburg meditation activated charcoal. Vice banh mi subway tile ethical pabst, tattooed salvia hot chicken hoodie health goth hella prism artisan crucifix small batch. Skateboard succulents la croix mumblecore plaid subway tile vaporware messenger bag green juice lumbersexual offal cloud bread four dollar toast chia seitan. Raclette ethical la croix plaid chia, green juice cray echo park iceland kitsch.",
  "rating": 2.2,
  "rating_count": 102,
  "color": ["yellow", "blue", "red"],
  "size": ["x-small", "medium", "large", "small"],
  "thumbnail_url": "light-green-t-shirt_4460x4460.jpg",
  "image_url": "light-green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 7,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Short Sleeved Blouse",
  "brand": "Wovest",
  "price_sale": 45.99,
  "price_actual": 62.99,
  "price_savings": 17,
  "short_desc": "Pug cray jianbing prism hammock vice roof party narwhal forage chicharrones gluten-free. Portland everyday carry letterpress squid, offal bicycle rights cardigan neutra roof party hoodie adaptogen tacos...",
  "long_desc": "Pug cray jianbing prism hammock vice roof party narwhal forage chicharrones gluten-free. Portland everyday carry letterpress squid, offal bicycle rights cardigan neutra roof party hoodie adaptogen tacos franzen. 3 wolf moon kinfolk actually crucifix tattooed selfies. Migas ennui poke, live-edge hot chicken franzen cray pinterest man braid stumptown adaptogen tumblr letterpress.",
  "rating": 4.2,
  "rating_count": 35,
  "color": ["red", "green", "yellow"],
  "size": ["large", "x-small", "small", "x-large"],
  "thumbnail_url": "purple-t-shirt_4460x4460.jpg",
  "image_url": "purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 8,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Smocked T-Shirt",
  "brand": "Hipcrave",
  "price_sale": 48.99,
  "price_actual": 86.99,
  "price_savings": 38,
  "short_desc": "Pickled put a bird on it man braid, intelligentsia retro art party quinoa shoreditch readymade. Hoodie yuccie selfies, microdosing pickled neutra deep v kitsch sriracha letterpress cold-pressed offal next...",
  "long_desc": "Pickled put a bird on it man braid, intelligentsia retro art party quinoa shoreditch readymade. Hoodie yuccie selfies, microdosing pickled neutra deep v kitsch sriracha letterpress cold-pressed offal next level +1. Shabby chic raclette affogato pork belly meditation whatever. Meh intelligentsia church-key, kinfolk ramps hell of direct trade seitan mixtape pinterest XOXO marfa.",
  "rating": 3.3,
  "rating_count": 57,
  "color": ["red", "yellow"],
  "size": ["medium", "x-small"],
  "thumbnail_url": "red-t-shirt_4460x4460.jpg",
  "image_url": "red-t-shirt_4460x4460.jpg"
}, {
  "product_id": 9,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Pleated T-Shirt",
  "brand": "Knitage",
  "price_sale": 12.99,
  "price_actual": 26.99,
  "price_savings": 14,
  "short_desc": "Messenger bag lyft franzen, synth raw denim viral unicorn knausgaard irony hell of leggings selvage yr. Microdosing woke single-origin coffee skateboard hella slow-carb. Vegan tousled irony occupy asymmetrical...",
  "long_desc": "Messenger bag lyft franzen, synth raw denim viral unicorn knausgaard irony hell of leggings selvage yr. Microdosing woke single-origin coffee skateboard hella slow-carb. Vegan tousled irony occupy asymmetrical retro you probably haven't heard of them try-hard typewriter selfies air plant. Roof party four loko schlitz DIY chia.",
  "rating": 3.3,
  "rating_count": 43,
  "color": ["green", "yellow", "blue"],
  "size": ["x-large", "x-small", "medium", "small"],
  "thumbnail_url": "teal-t-shirt_4460x4460.jpg",
  "image_url": "teal-t-shirt_4460x4460.jpg"
}, {
  "product_id": 10,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Pleated Shirt",
  "brand": "Garmtech",
  "price_sale": 16.99,
  "price_actual": 29.99,
  "price_savings": 13,
  "short_desc": "90's lyft butcher scenester williamsburg cornhole. La croix yr small batch, brooklyn schlitz hammock before they sold out jean shorts leggings portland vinyl synth shaman blue bottle bushwick. Schlitz...",
  "long_desc": "90's lyft butcher scenester williamsburg cornhole. La croix yr small batch, brooklyn schlitz hammock before they sold out jean shorts leggings portland vinyl synth shaman blue bottle bushwick. Schlitz church-key artisan fanny pack palo santo. Pork belly selfies ennui tacos, woke raw denim fam hell of polaroid 8-bit kogi butcher lyft readymade.",
  "rating": 4.7,
  "rating_count": 53,
  "color": ["green", "yellow"],
  "size": ["large", "small"],
  "thumbnail_url": "blue-t-shirt_4460x4460.jpg",
  "image_url": "blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 11,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "High Neck Blouse",
  "brand": "Coutique",
  "price_sale": 24.99,
  "price_actual": 31.99,
  "price_savings": 7,
  "short_desc": "Man braid affogato pour-over sartorial leggings tumblr irony aesthetic authentic umami chartreuse gochujang. Sustainable gastropub fingerstache, blog literally activated charcoal small batch skateboard...",
  "long_desc": "Man braid affogato pour-over sartorial leggings tumblr irony aesthetic authentic umami chartreuse gochujang. Sustainable gastropub fingerstache, blog literally activated charcoal small batch skateboard thundercats. Bitters food truck pok pok pinterest umami kogi succulents kitsch, air plant iceland. Tumblr irony hoodie hell of vegan. Four dollar toast yuccie YOLO mumblecore.",
  "rating": 2.2,
  "rating_count": 21,
  "color": ["blue", "green", "red"],
  "size": ["small", "x-small", "x-large"],
  "thumbnail_url": "bright-purple-t-shirt_4460x4460.jpg",
  "image_url": "bright-purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 12,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Lace Trim Button-up Shirt",
  "brand": "Bouture",
  "price_sale": 39.99,
  "price_actual": 86.99,
  "price_savings": 47,
  "short_desc": "Artisan woke tattooed health goth 3 wolf moon fingerstache umami lumbersexual stumptown godard deep v air plant. Truffaut slow-carb put a bird on it aesthetic scenester meh blue bottle squid keytar banh...",
  "long_desc": "Artisan woke tattooed health goth 3 wolf moon fingerstache umami lumbersexual stumptown godard deep v air plant. Truffaut slow-carb put a bird on it aesthetic scenester meh blue bottle squid keytar banh mi master cleanse YOLO. Fashion axe celiac kogi heirloom, tilde pinterest prism viral organic palo santo green juice venmo thundercats.",
  "rating": 3.6,
  "rating_count": 49,
  "color": ["green", "yellow"],
  "size": ["medium", "x-small"],
  "thumbnail_url": "cobalt-blue-t-shirt_4460x4460.jpg",
  "image_url": "cobalt-blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 13,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Preppy T-Shirt",
  "brand": "Bouture",
  "price_sale": 12.99,
  "price_actual": 26.99,
  "price_savings": 14,
  "short_desc": "Gluten-free hella unicorn glossier taiyaki bespoke skateboard bushwick godard organic ugh single-origin coffee artisan VHS chia. Vaporware crucifix farm-to-table you probably haven't heard of them. Truffaut...",
  "long_desc": "Gluten-free hella unicorn glossier taiyaki bespoke skateboard bushwick godard organic ugh single-origin coffee artisan VHS chia. Vaporware crucifix farm-to-table you probably haven't heard of them. Truffaut irony cloud bread try-hard.",
  "rating": 3.8,
  "rating_count": 50,
  "color": ["blue", "yellow", "green"],
  "size": ["x-small", "medium"],
  "thumbnail_url": "green-t-shirt_4460x4460.jpg",
  "image_url": "green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 14,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "High Neck T-Shirt",
  "brand": "Garmtech",
  "price_sale": 25.99,
  "price_actual": 50.99,
  "price_savings": 25,
  "short_desc": "Artisan viral umami ennui, yuccie hella prism copper mug. Pug food truck bicycle rights unicorn, lyft glossier raw denim raclette man bun blog hell of. Fashion axe offal hexagon shaman DIY, ramps live-edge...",
  "long_desc": "Artisan viral umami ennui, yuccie hella prism copper mug. Pug food truck bicycle rights unicorn, lyft glossier raw denim raclette man bun blog hell of. Fashion axe offal hexagon shaman DIY, ramps live-edge small batch mumblecore 90's gastropub. +1 biodiesel etsy cold-pressed, DIY distillery tattooed semiotics cloud bread organic kogi kale chips subway tile PBR&B messenger bag. Mumblecore forage tote bag echo park iceland williamsburg asymmetrical.",
  "rating": 2.2,
  "rating_count": 102,
  "color": ["blue", "red", "yellow"],
  "size": ["large", "x-large", "small", "medium"],
  "thumbnail_url": "grey-t-shirt_4460x4460.jpg",
  "image_url": "grey-t-shirt_4460x4460.jpg"
}, {
  "product_id": 15,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Cozy Sweater",
  "brand": "Wovest",
  "price_sale": 31.99,
  "price_actual": 44.99,
  "price_savings": 13,
  "short_desc": "Lomo celiac hexagon hashtag thundercats brunch fingerstache forage PBR&B live-edge. Migas four loko mumblecore tacos, synth forage asymmetrical kogi 3 wolf moon. Polaroid tattooed man braid subway tile,...",
  "long_desc": "Lomo celiac hexagon hashtag thundercats brunch fingerstache forage PBR&B live-edge. Migas four loko mumblecore tacos, synth forage asymmetrical kogi 3 wolf moon. Polaroid tattooed man braid subway tile, williamsburg four dollar toast fanny pack gochujang. Dreamcatcher cray four dollar toast chicharrones iceland. Pok pok blog XOXO banh mi mixtape hot chicken plaid gochujang.",
  "rating": 4.8,
  "rating_count": 75,
  "color": ["red", "yellow", "blue"],
  "size": ["small", "x-small", "x-large"],
  "thumbnail_url": "light-green-t-shirt_4460x4460.jpg",
  "image_url": "light-green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 16,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Long Sleeved Shirt",
  "brand": "Frockzy",
  "price_sale": 37.99,
  "price_actual": 59.99,
  "price_savings": 22,
  "short_desc": "Jianbing readymade church-key helvetica. Venmo palo santo blue bottle artisan, selfies bespoke sartorial mixtape tumeric. Vinyl cred heirloom, fanny pack chambray locavore bushwick four loko meggings pop-up....",
  "long_desc": "Jianbing readymade church-key helvetica. Venmo palo santo blue bottle artisan, selfies bespoke sartorial mixtape tumeric. Vinyl cred heirloom, fanny pack chambray locavore bushwick four loko meggings pop-up. Wayfarers chia before they sold out, adaptogen gentrify etsy waistcoat subway tile viral hashtag. Tattooed taxidermy narwhal raclette, jean shorts prism messenger bag blog waistcoat wayfarers air plant pickled fixie lomo.",
  "rating": 4.1,
  "rating_count": 17,
  "color": ["red", "blue", "green"],
  "size": ["medium", "small", "x-large"],
  "thumbnail_url": "purple-t-shirt_4460x4460.jpg",
  "image_url": "purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 17,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Slim Sweatshirt",
  "brand": "Bouture",
  "price_sale": 24.99,
  "price_actual": 32.99,
  "price_savings": 8,
  "short_desc": "Fashion axe tumeric raclette actually vape letterpress tbh hell of health goth. Ethical la croix iPhone sustainable four dollar toast cronut freegan selfies poutine quinoa glossier pabst food truck austin...",
  "long_desc": "Fashion axe tumeric raclette actually vape letterpress tbh hell of health goth. Ethical la croix iPhone sustainable four dollar toast cronut freegan selfies poutine quinoa glossier pabst food truck austin dreamcatcher.",
  "rating": 5.0,
  "rating_count": 116,
  "color": ["green", "red"],
  "size": ["medium", "small"],
  "thumbnail_url": "red-t-shirt_4460x4460.jpg",
  "image_url": "red-t-shirt_4460x4460.jpg"
}, {
  "product_id": 18,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Linen T-Shirt",
  "brand": "Garmtech",
  "price_sale": 39.99,
  "price_actual": 49.99,
  "price_savings": 10,
  "short_desc": "Truffaut man braid heirloom af bespoke asymmetrical. Trust fund umami gastropub unicorn drinking vinegar. Truffaut poke beard, whatever drinking vinegar fam hell of man bun schlitz bicycle rights coloring...",
  "long_desc": "Truffaut man braid heirloom af bespoke asymmetrical. Trust fund umami gastropub unicorn drinking vinegar. Truffaut poke beard, whatever drinking vinegar fam hell of man bun schlitz bicycle rights coloring book hashtag chartreuse. Aesthetic truffaut kitsch, poutine chillwave meh semiotics squid.",
  "rating": 3.5,
  "rating_count": 196,
  "color": ["red", "blue", "yellow"],
  "size": ["x-large", "small", "large", "x-small"],
  "thumbnail_url": "teal-t-shirt_4460x4460.jpg",
  "image_url": "teal-t-shirt_4460x4460.jpg"
}, {
  "product_id": 19,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Smocked Blouse",
  "brand": "Coutique",
  "price_sale": 14.99,
  "price_actual": 21.99,
  "price_savings": 7,
  "short_desc": "Narwhal echo park fashion axe try-hard prism chambray woke gastropub hexagon. Jean shorts adaptogen shabby chic waistcoat locavore single-origin coffee freegan try-hard cardigan mlkshk aesthetic unicorn....",
  "long_desc": "Narwhal echo park fashion axe try-hard prism chambray woke gastropub hexagon. Jean shorts adaptogen shabby chic waistcoat locavore single-origin coffee freegan try-hard cardigan mlkshk aesthetic unicorn. Glossier fanny pack portland austin retro squid cliche shaman schlitz kale chips listicle seitan vegan everyday carry XOXO. Bicycle rights bushwick scenester twee roof party shoreditch chillwave thundercats distillery dreamcatcher tacos mlkshk austin.",
  "rating": 3.8,
  "rating_count": 38,
  "color": ["blue", "yellow", "red"],
  "size": ["x-small", "small"],
  "thumbnail_url": "blue-t-shirt_4460x4460.jpg",
  "image_url": "blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 20,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Long Sleeved Wrap Top",
  "brand": "Frockzy",
  "price_sale": 16.99,
  "price_actual": 29.99,
  "price_savings": 13,
  "short_desc": "Mustache marfa narwhal portland pitchfork fixie tote bag authentic asymmetrical prism. Wayfarers neutra retro pour-over distillery cardigan tote bag pork belly ethical church-key unicorn +1 tofu af health...",
  "long_desc": "Mustache marfa narwhal portland pitchfork fixie tote bag authentic asymmetrical prism. Wayfarers neutra retro pour-over distillery cardigan tote bag pork belly ethical church-key unicorn +1 tofu af health goth. Pork belly 3 wolf moon hammock, tote bag sriracha food truck VHS jianbing godard cornhole chia gochujang yuccie taiyaki.",
  "rating": 3.6,
  "rating_count": 92,
  "color": ["red", "blue", "yellow"],
  "size": ["large", "x-large", "medium", "x-small"],
  "thumbnail_url": "bright-purple-t-shirt_4460x4460.jpg",
  "image_url": "bright-purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 21,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Hooded Sweater",
  "brand": "Hipcrave",
  "price_sale": 36.99,
  "price_actual": 67.99,
  "price_savings": 31,
  "short_desc": "Dreamcatcher leggings fixie fashion axe bicycle rights hoodie. Affogato helvetica pok pok, letterpress crucifix meggings drinking vinegar leggings. Quinoa pinterest green juice sustainable next level,...",
  "long_desc": "Dreamcatcher leggings fixie fashion axe bicycle rights hoodie. Affogato helvetica pok pok, letterpress crucifix meggings drinking vinegar leggings. Quinoa pinterest green juice sustainable next level, forage hell of semiotics crucifix taiyaki typewriter lo-fi gentrify shaman mumblecore. Cornhole marfa wolf bespoke asymmetrical beard ramps yuccie hella roof party air plant.",
  "rating": 3.5,
  "rating_count": 99,
  "color": ["yellow", "red"],
  "size": ["large", "medium", "small"],
  "thumbnail_url": "cobalt-blue-t-shirt_4460x4460.jpg",
  "image_url": "cobalt-blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 22,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Striped Peasant Top",
  "brand": "Frockzy",
  "price_sale": 31.99,
  "price_actual": 43.99,
  "price_savings": 12,
  "short_desc": "Succulents aesthetic wayfarers, celiac synth vaporware quinoa disrupt unicorn iPhone. Occupy leggings literally, keytar kogi actually mustache. Flexitarian cardigan adaptogen listicle air plant taiyaki....",
  "long_desc": "Succulents aesthetic wayfarers, celiac synth vaporware quinoa disrupt unicorn iPhone. Occupy leggings literally, keytar kogi actually mustache. Flexitarian cardigan adaptogen listicle air plant taiyaki. Intelligentsia unicorn thundercats farm-to-table, organic church-key jianbing fashion axe fixie readymade typewriter.",
  "rating": 3.1,
  "rating_count": 66,
  "color": ["yellow", "red"],
  "size": ["small", "x-small", "large"],
  "thumbnail_url": "green-t-shirt_4460x4460.jpg",
  "image_url": "green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 23,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Linen Peasant Top",
  "brand": "Hipcrave",
  "price_sale": 18.99,
  "price_actual": 33.99,
  "price_savings": 15,
  "short_desc": "Biodiesel shabby chic cliche vaporware. Snackwave four loko cardigan gastropub, fixie crucifix adaptogen poke fam seitan yr. Letterpress gluten-free portland tumblr roof party freegan ramps. Fanny pack...",
  "long_desc": "Biodiesel shabby chic cliche vaporware. Snackwave four loko cardigan gastropub, fixie crucifix adaptogen poke fam seitan yr. Letterpress gluten-free portland tumblr roof party freegan ramps. Fanny pack poutine taxidermy raclette vexillologist, offal schlitz mixtape.",
  "rating": 2.7,
  "rating_count": 111,
  "color": ["green", "blue"],
  "size": ["x-large", "x-small", "small"],
  "thumbnail_url": "grey-t-shirt_4460x4460.jpg",
  "image_url": "grey-t-shirt_4460x4460.jpg"
}, {
  "product_id": 24,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "High Neck Peplum",
  "brand": "Hipcrave",
  "price_sale": 14.99,
  "price_actual": 22.99,
  "price_savings": 8,
  "short_desc": "Drinking vinegar slow-carb put a bird on it actually hammock. Schlitz marfa tumeric austin meh small batch cliche jean shorts. Activated charcoal bitters disrupt banjo tote bag raw denim gochujang organic...",
  "long_desc": "Drinking vinegar slow-carb put a bird on it actually hammock. Schlitz marfa tumeric austin meh small batch cliche jean shorts. Activated charcoal bitters disrupt banjo tote bag raw denim gochujang organic migas slow-carb ethical. Kinfolk organic gochujang lumbersexual. Chia affogato flexitarian fanny pack shabby chic copper mug. Keytar single-origin coffee normcore health goth.",
  "rating": 4.1,
  "rating_count": 104,
  "color": ["yellow", "red"],
  "size": ["large", "small", "x-small"],
  "thumbnail_url": "light-green-t-shirt_4460x4460.jpg",
  "image_url": "light-green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 25,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Knit T-Shirt",
  "brand": "Hipcrave",
  "price_sale": 39.99,
  "price_actual": 83.99,
  "price_savings": 44,
  "short_desc": "Cardigan fingerstache vice, distillery vaporware photo booth keffiyeh. Godard vice pok pok quinoa. Four dollar toast cloud bread pork belly, offal fashion axe shaman kogi bicycle rights you probably haven't...",
  "long_desc": "Cardigan fingerstache vice, distillery vaporware photo booth keffiyeh. Godard vice pok pok quinoa. Four dollar toast cloud bread pork belly, offal fashion axe shaman kogi bicycle rights you probably haven't heard of them stumptown iceland. Freegan chillwave food truck lomo typewriter forage raclette bicycle rights tacos fixie try-hard marfa four loko scenester gentrify.",
  "rating": 2.8,
  "rating_count": 59,
  "color": ["blue", "yellow"],
  "size": ["small", "x-small"],
  "thumbnail_url": "purple-t-shirt_4460x4460.jpg",
  "image_url": "purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 26,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Short Sleeved Tunic",
  "brand": "Frockzy",
  "price_sale": 32.99,
  "price_actual": 49.99,
  "price_savings": 17,
  "short_desc": "Irony artisan gluten-free cold-pressed vaporware tattooed, kogi edison bulb af chicharrones forage intelligentsia kombucha hot chicken try-hard. Ramps trust fund fanny pack pug poutine microdosing tattooed...",
  "long_desc": "Irony artisan gluten-free cold-pressed vaporware tattooed, kogi edison bulb af chicharrones forage intelligentsia kombucha hot chicken try-hard. Ramps trust fund fanny pack pug poutine microdosing tattooed pitchfork vape dreamcatcher drinking vinegar banh mi copper mug disrupt actually. Neutra palo santo man bun chia photo booth master cleanse ramps echo park heirloom cornhole.",
  "rating": 4.3,
  "rating_count": 37,
  "color": ["green", "yellow"],
  "size": ["medium", "x-large", "x-small", "large"],
  "thumbnail_url": "red-t-shirt_4460x4460.jpg",
  "image_url": "red-t-shirt_4460x4460.jpg"
}, {
  "product_id": 27,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Striped Wrap Top",
  "brand": "Frockzy",
  "price_sale": 54.99,
  "price_actual": 73.99,
  "price_savings": 19,
  "short_desc": "Chambray ennui distillery vice, bespoke slow-carb helvetica. Vexillologist palo santo authentic, listicle 8-bit fanny pack food truck bushwick pok pok. Photo booth bushwick jean shorts, austin actually...",
  "long_desc": "Chambray ennui distillery vice, bespoke slow-carb helvetica. Vexillologist palo santo authentic, listicle 8-bit fanny pack food truck bushwick pok pok. Photo booth bushwick jean shorts, austin actually wolf selvage. Helvetica next level brunch four dollar toast poutine messenger bag mustache sriracha try-hard selfies copper mug scenester cold-pressed mlkshk chillwave.",
  "rating": 3.1,
  "rating_count": 73,
  "color": ["red", "yellow"],
  "size": ["large", "medium", "small"],
  "thumbnail_url": "teal-t-shirt_4460x4460.jpg",
  "image_url": "teal-t-shirt_4460x4460.jpg"
}, {
  "product_id": 28,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Wool Sweatshirt",
  "brand": "Bouture",
  "price_sale": 32.99,
  "price_actual": 63.99,
  "price_savings": 31,
  "short_desc": "Umami green juice put a bird on it bicycle rights street art lo-fi. Hoodie iPhone hashtag neutra, trust fund ethical williamsburg austin drinking vinegar crucifix. Lo-fi mixtape XOXO retro. Truffaut slow-carb...",
  "long_desc": "Umami green juice put a bird on it bicycle rights street art lo-fi. Hoodie iPhone hashtag neutra, trust fund ethical williamsburg austin drinking vinegar crucifix. Lo-fi mixtape XOXO retro. Truffaut slow-carb put a bird on it aesthetic scenester meh blue bottle squid keytar banh mi master cleanse YOLO. Fashion axe celiac kogi heirloom, tilde pinterest prism viral organic palo santo green juice venmo thundercats.",
  "rating": 4.4,
  "rating_count": 98,
  "color": ["yellow", "red"],
  "size": ["large", "x-small", "medium", "small"],
  "thumbnail_url": "blue-t-shirt_4460x4460.jpg",
  "image_url": "blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 29,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Square Neck Peasant Top",
  "brand": "Knitage",
  "price_sale": 32.99,
  "price_actual": 62.99,
  "price_savings": 30,
  "short_desc": "Hot chicken shaman banh mi, pok pok green juice tote bag taxidermy photo booth freegan. Lumbersexual affogato vaporware adaptogen. Godard normcore kinfolk af poutine farm-to-table. Paleo succulents edison...",
  "long_desc": "Hot chicken shaman banh mi, pok pok green juice tote bag taxidermy photo booth freegan. Lumbersexual affogato vaporware adaptogen. Godard normcore kinfolk af poutine farm-to-table. Paleo succulents edison bulb, farm-to-table mumblecore umami cloud bread. Sartorial hell of +1 activated charcoal cornhole leggings put a bird on it kitsch franzen raclette man bun.",
  "rating": 3.7,
  "rating_count": 115,
  "color": ["yellow", "blue", "green"],
  "size": ["small", "x-large"],
  "thumbnail_url": "bright-purple-t-shirt_4460x4460.jpg",
  "image_url": "bright-purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 30,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Striped Peasant Top",
  "brand": "Frockzy",
  "price_sale": 17.99,
  "price_actual": 24.99,
  "price_savings": 7,
  "short_desc": "Swag cred pop-up try-hard sriracha four loko neutra farm-to-table. Vaporware 8-bit fam freegan neutra cloud bread gentrify cray la croix. Tumblr cliche letterpress banh mi YOLO, air plant pop-up tbh fingerstache...",
  "long_desc": "Swag cred pop-up try-hard sriracha four loko neutra farm-to-table. Vaporware 8-bit fam freegan neutra cloud bread gentrify cray la croix. Tumblr cliche letterpress banh mi YOLO, air plant pop-up tbh fingerstache iceland mixtape pour-over freegan. Cliche drinking vinegar pork belly locavore tumeric jianbing viral mumblecore quinoa shoreditch master cleanse photo booth keytar.",
  "rating": 3.8,
  "rating_count": 38,
  "color": ["blue", "red", "yellow"],
  "size": ["x-small", "medium", "large"],
  "thumbnail_url": "cobalt-blue-t-shirt_4460x4460.jpg",
  "image_url": "cobalt-blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 31,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Short Sleeved Peasant Top",
  "brand": "Coutique",
  "price_sale": 20.99,
  "price_actual": 39.99,
  "price_savings": 19,
  "short_desc": "Fixie tilde selvage, godard +1 tote bag fam schlitz. Jean shorts neutra dreamcatcher literally biodiesel, wolf flannel whatever four loko chartreuse raw denim. Authentic activated charcoal wolf bushwick...",
  "long_desc": "Fixie tilde selvage, godard +1 tote bag fam schlitz. Jean shorts neutra dreamcatcher literally biodiesel, wolf flannel whatever four loko chartreuse raw denim. Authentic activated charcoal wolf bushwick copper mug tumblr.",
  "rating": 4.9,
  "rating_count": 82,
  "color": ["green", "blue", "red"],
  "size": ["small", "x-large"],
  "thumbnail_url": "green-t-shirt_4460x4460.jpg",
  "image_url": "green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 32,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Pocket Sweater",
  "brand": "Wovest",
  "price_sale": 26.99,
  "price_actual": 36.99,
  "price_savings": 10,
  "short_desc": "Fam prism man bun pork belly pok pok yuccie retro snackwave cred mustache ennui craft beer fashion axe ugh. Skateboard master cleanse salvia, messenger bag af live-edge wolf fam echo park. Af YOLO shoreditch...",
  "long_desc": "Fam prism man bun pork belly pok pok yuccie retro snackwave cred mustache ennui craft beer fashion axe ugh. Skateboard master cleanse salvia, messenger bag af live-edge wolf fam echo park. Af YOLO shoreditch gastropub wolf. Cardigan microdosing small batch pug, hoodie tumblr church-key bitters glossier stumptown. VHS viral photo booth copper mug, poutine tote bag gastropub twee food truck slow-carb helvetica raw denim.",
  "rating": 2.8,
  "rating_count": 91,
  "color": ["red", "green"],
  "size": ["small", "x-large", "medium", "x-small"],
  "thumbnail_url": "grey-t-shirt_4460x4460.jpg",
  "image_url": "grey-t-shirt_4460x4460.jpg"
}, {
  "product_id": 33,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Linen T-Shirt",
  "brand": "Garmtech",
  "price_sale": 48.99,
  "price_actual": 78.99,
  "price_savings": 30,
  "short_desc": "Pork belly hot chicken polaroid skateboard tousled yr. Mustache fanny pack activated charcoal, normcore taiyaki adaptogen man bun. Slow-carb trust fund post-ironic, plaid kombucha put a bird on it fanny...",
  "long_desc": "Pork belly hot chicken polaroid skateboard tousled yr. Mustache fanny pack activated charcoal, normcore taiyaki adaptogen man bun. Slow-carb trust fund post-ironic, plaid kombucha put a bird on it fanny pack poutine helvetica lumbersexual flannel fashion axe. Asymmetrical street art flexitarian art party, organic four dollar toast mixtape pork belly lo-fi you probably haven't heard of them biodiesel cardigan small batch.",
  "rating": 2.1,
  "rating_count": 34,
  "color": ["red", "yellow"],
  "size": ["x-large", "medium"],
  "thumbnail_url": "light-green-t-shirt_4460x4460.jpg",
  "image_url": "light-green-t-shirt_4460x4460.jpg"
}, {
  "product_id": 34,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Floral-print Button-up Shirt",
  "brand": "Frockzy",
  "price_sale": 16.99,
  "price_actual": 33.99,
  "price_savings": 17,
  "short_desc": "Intelligentsia adaptogen kitsch, typewriter four dollar toast unicorn viral tacos crucifix pug. Quinoa man bun ramps distillery seitan, migas bitters cliche four dollar toast echo park shoreditch. Mixtape...",
  "long_desc": "Intelligentsia adaptogen kitsch, typewriter four dollar toast unicorn viral tacos crucifix pug. Quinoa man bun ramps distillery seitan, migas bitters cliche four dollar toast echo park shoreditch. Mixtape celiac church-key health goth enamel pin tilde freegan bespoke blue bottle typewriter. Pickled umami tbh cred pour-over irony art party actually ethical gochujang.",
  "rating": 4.2,
  "rating_count": 69,
  "color": ["red", "blue"],
  "size": ["x-large", "large", "small"],
  "thumbnail_url": "purple-t-shirt_4460x4460.jpg",
  "image_url": "purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 35,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Drapey Blouse",
  "brand": "Wovest",
  "price_sale": 14.99,
  "price_actual": 32.99,
  "price_savings": 18,
  "short_desc": "Mumblecore pok pok kombucha letterpress, distillery live-edge yuccie iceland air plant chicharrones hella lo-fi brooklyn tilde everyday carry. DIY tilde tattooed meh, fashion axe godard next level slow-carb...",
  "long_desc": "Mumblecore pok pok kombucha letterpress, distillery live-edge yuccie iceland air plant chicharrones hella lo-fi brooklyn tilde everyday carry. DIY tilde tattooed meh, fashion axe godard next level slow-carb copper mug +1. VHS pork belly poke la croix street art celiac, vaporware vice. Plaid photo booth salvia, cronut master cleanse banjo ethical tousled chia squid bicycle rights chicharrones pour-over austin mumblecore.",
  "rating": 2.6,
  "rating_count": 23,
  "color": ["green", "yellow"],
  "size": ["x-small", "small", "large"],
  "thumbnail_url": "red-t-shirt_4460x4460.jpg",
  "image_url": "red-t-shirt_4460x4460.jpg"
}, {
  "product_id": 36,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Short Sleeved T-Shirt",
  "brand": "Bouture",
  "price_sale": 36.99,
  "price_actual": 72.99,
  "price_savings": 36,
  "short_desc": "Banh mi artisan godard stumptown, polaroid woke food truck 8-bit subway tile sustainable you probably haven't heard of them keffiyeh literally. Cliche williamsburg cornhole austin fanny pack. Selfies next...",
  "long_desc": "Banh mi artisan godard stumptown, polaroid woke food truck 8-bit subway tile sustainable you probably haven't heard of them keffiyeh literally. Cliche williamsburg cornhole austin fanny pack. Selfies next level drinking vinegar wayfarers intelligentsia meditation man bun. Selfies crucifix you probably haven't heard of them chicharrones squid small batch selvage. Keffiyeh lo-fi iceland scenester VHS.",
  "rating": 2.9,
  "rating_count": 159,
  "color": ["yellow", "blue", "green"],
  "size": ["medium", "small", "large", "x-small"],
  "thumbnail_url": "teal-t-shirt_4460x4460.jpg",
  "image_url": "teal-t-shirt_4460x4460.jpg"
}, {
  "product_id": 37,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "T-Shirts",
  "product_name": "Long Sleeved T-Shirt",
  "brand": "Bouture",
  "price_sale": 34.99,
  "price_actual": 51.99,
  "price_savings": 17,
  "short_desc": "Glossier ennui you probably haven't heard of them flannel coloring book salvia. Art party biodiesel lomo, jean shorts freegan skateboard jianbing prism humblebrag viral blue bottle shaman. Viral tumeric...",
  "long_desc": "Glossier ennui you probably haven't heard of them flannel coloring book salvia. Art party biodiesel lomo, jean shorts freegan skateboard jianbing prism humblebrag viral blue bottle shaman. Viral tumeric food truck messenger bag skateboard helvetica normcore man bun iceland pinterest yuccie activated charcoal kitsch migas.",
  "rating": 5.0,
  "rating_count": 87,
  "color": ["red", "green", "yellow"],
  "size": ["medium", "x-large", "small", "x-small"],
  "thumbnail_url": "blue-t-shirt_4460x4460.jpg",
  "image_url": "blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 38,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Linen Button-up Shirt",
  "brand": "Bouture",
  "price_sale": 52.99,
  "price_actual": 87.99,
  "price_savings": 35,
  "short_desc": "Lomo venmo literally bitters jean shorts shabby chic ennui enamel pin vegan roof party VHS four dollar toast ethical. Asymmetrical bitters franzen tacos. Coloring book normcore chia unicorn, 8-bit iceland...",
  "long_desc": "Lomo venmo literally bitters jean shorts shabby chic ennui enamel pin vegan roof party VHS four dollar toast ethical. Asymmetrical bitters franzen tacos. Coloring book normcore chia unicorn, 8-bit iceland cronut brooklyn. Dreamcatcher austin banh mi XOXO bicycle rights. Health goth photo booth try-hard fanny pack, messenger bag tattooed snackwave raw denim cronut quinoa kinfolk DIY. Try-hard food truck blue bottle kogi pickled.",
  "rating": 3.8,
  "rating_count": 69,
  "color": ["green", "blue", "red"],
  "size": ["medium", "x-small", "large", "x-large"],
  "thumbnail_url": "bright-purple-t-shirt_4460x4460.jpg",
  "image_url": "bright-purple-t-shirt_4460x4460.jpg"
}, {
  "product_id": 39,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Blouses",
  "product_name": "Sleeveless Boyfriend Shirt",
  "brand": "Knitage",
  "price_sale": 39.99,
  "price_actual": 81.99,
  "price_savings": 42,
  "short_desc": "Try-hard YOLO pinterest mlkshk pabst humblebrag. Aesthetic taxidermy af cold-pressed VHS blog umami offal neutra biodiesel tacos thundercats salvia succulents. Portland hella mixtape sartorial vinyl jianbing...",
  "long_desc": "Try-hard YOLO pinterest mlkshk pabst humblebrag. Aesthetic taxidermy af cold-pressed VHS blog umami offal neutra biodiesel tacos thundercats salvia succulents. Portland hella mixtape sartorial vinyl jianbing listicle +1. Tumeric offal intelligentsia post-ironic, cold-pressed letterpress beard shabby chic gentrify twee prism edison bulb tbh. Messenger bag coloring book kitsch hot chicken vaporware taiyaki.",
  "rating": 2.1,
  "rating_count": 24,
  "color": ["red", "yellow", "blue"],
  "size": ["small", "x-large"],
  "thumbnail_url": "cobalt-blue-t-shirt_4460x4460.jpg",
  "image_url": "cobalt-blue-t-shirt_4460x4460.jpg"
}, {
  "product_id": 40,
  "category": "Women",
  "subcategory": "Women’s Tops",
  "product_type": "Sweaters and Cardigans",
  "product_name": "Cozy Cardigan",
  "brand": "Coutique",
  "price_sale": 28.99,
  "price_actual": 40.99,
  "price_savings": 12,
  "short_desc": "Af williamsburg meditation activated charcoal. Vice banh mi subway tile ethical pabst, tattooed salvia hot chicken hoodie health goth hella prism artisan crucifix small batch. Skateboard succulents la...",
  "long_desc": "Af williamsburg meditation activated charcoal. Vice banh mi subway tile ethical pabst, tattooed salvia hot chicken hoodie health goth hella prism artisan crucifix small batch. Skateboard succulents la croix mumblecore plaid subway tile vaporware messenger bag green juice lumbersexual offal cloud bread four dollar toast chia seitan. Raclette ethical la croix plaid chia, green juice cray echo park iceland kitsch.",
  "rating": 4.6,
  "rating_count": 65,
  "color": ["yellow", "blue"],
  "size": ["large", "x-large", "medium"],
  "thumbnail_url": "green-t-shirt_4460x4460.jpg",
  "image_url": "green-t-shirt_4460x4460.jpg"
}];
},{}],"../js/pouchdb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.query = query;
exports.getSingleRow = getSingleRow;

var _pouchdb = _interopRequireDefault(require("pouchdb"));

var _pouchdbFind = _interopRequireDefault(require("pouchdb-find"));

var _product_data = _interopRequireDefault(require("../data/product_data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import pouchDebugPlugin from 'pouchdb-debug';
_pouchdb.default.plugin(_pouchdbFind.default);
/*
// POUCH DB DEBUGGING
PouchDB.plugin(pouchDebugPlugin);
PouchDB.debug.enable('*');
 */


var db = new _pouchdb.default('eStore');

function getOrCreateProductDB() {
  return db.info().then(function (dbInfo) {
    if (dbInfo.doc_count > 0) {
      console.info('DATABASE EXISTS');
      return {
        success: true
      };
    } else {
      console.info('CREATE NEW DATABASE');
      return db.bulkDocs(_product_data.default).then(function () {
        return {
          success: true
        };
      }).catch(function (error) {
        return {
          success: false,
          error: error
        };
      });
    }
  }).catch(function (error) {
    return {
      success: false,
      error: error
    };
  });
}

function init() {
  return getOrCreateProductDB();
}

function query(fields, query) {
  return db.createIndex({
    index: {
      fields: fields
    }
  }).then(function () {
    return db.find(query);
  });
}

function getSingleRow(product_id) {
  return db.find({
    selector: {
      product_id: product_id
    }
  });
}
},{"pouchdb":"../../node_modules/pouchdb/lib/index-browser.es.js","pouchdb-find":"../../node_modules/pouchdb-find/lib/index-browser.es.js","../data/product_data.json":"../data/product_data.json"}],"pdp/pdp.js":[function(require,module,exports) {
"use strict";

var breadcrumb = _interopRequireWildcard(require("../../components/breadcrumb/breadcrumb"));

var productDetails = _interopRequireWildcard(require("../../components/product-details/product-details"));

var productDetailsAccordion = _interopRequireWildcard(require("../../components/product-details-accordion/product-details-accordion"));

var productGallery = _interopRequireWildcard(require("../../components/gallery/gallery"));

var productForm = _interopRequireWildcard(require("../../components/product-form/product-form"));

var _utils = require("../../js/utils");

var productDB = _interopRequireWildcard(require("../../js/pouchdb"));

var Modal = _interopRequireWildcard(require("../../components/modal/modal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function pdpPage() {
  var urlParams = new URLSearchParams(window.location.search);
  var product_id = parseInt(urlParams.get('product_id'));
  var mediaQueryList = window.matchMedia('(min-width: 760px)');
  var galleryPusher = {};

  var isGalleryMoved = function isGalleryMoved() {
    return galleryPusher.elem.parentNode !== galleryPusher.parent;
  };

  if (!product_id) {
    document.querySelector('.error-message').classList.remove('hidden');
    return false;
  }

  function doSingleColumn() {
    if (!isGalleryMoved()) {
      galleryPusher.targetParent.insertBefore(galleryPusher.elem, galleryPusher.targetSibling);
    }
  }

  function doTwoColumns() {
    if (isGalleryMoved()) {
      galleryPusher.parent.insertBefore(galleryPusher.elem, galleryPusher.sibling);
    }
  }

  function setupDOMColumns() {
    galleryPusher.elem = document.querySelector('[data-component="gallery"]');
    galleryPusher.parent = galleryPusher.elem.parentNode;
    galleryPusher.sibling = galleryPusher.elem.nextSibling;
    galleryPusher.targetSibling = document.querySelector('[data-js="gallery-target-sibling"]');
    galleryPusher.targetParent = galleryPusher.targetSibling.parentNode;

    if (!mediaQueryList.matches) {
      doSingleColumn();
    }
  }

  function onBreakpointToggle(event) {
    var isTwoColumnWidth = event.currentTarget.matches;

    if (!isTwoColumnWidth && !isGalleryMoved()) {
      doSingleColumn();
    } else if (isTwoColumnWidth && isGalleryMoved()) {
      doTwoColumns();
    }
  }

  function loadProductData() {
    productDB.getSingleRow(product_id).then(function (res) {
      var productData = res.docs[0];
      var breadcrumbs = [{
        label: 'Home',
        link: '../index.html'
      }, {
        label: productData.category,
        link: '../plp/index.html'
      }, {
        label: productData.subcategory,
        link: '../plp/index.html'
      }, {
        label: productData.product_name
      }];
      (0, _utils.setPageTitle)(['Women', 'Women’s Tops', productData.product_name]);
      breadcrumb.init(breadcrumbs);
      productDetails.init(productData);
      productGallery.init(productData);
      var productFormEl = document.querySelector('[data-component="product-form"]');
      setupDOMColumns();
      productForm.init(productFormEl);
      productDetailsAccordion.init(productData);
      mediaQueryList.addListener(onBreakpointToggle);
      Modal.init('construction-modal');
    });
  }

  productDB.init().then(loadProductData);
})();
},{"../../components/breadcrumb/breadcrumb":"../components/breadcrumb/breadcrumb.js","../../components/product-details/product-details":"../components/product-details/product-details.js","../../components/product-details-accordion/product-details-accordion":"../components/product-details-accordion/product-details-accordion.js","../../components/gallery/gallery":"../components/gallery/gallery.js","../../components/product-form/product-form":"../components/product-form/product-form.js","../../js/utils":"../js/utils.js","../../js/pouchdb":"../js/pouchdb.js","../../components/modal/modal":"../components/modal/modal.js"}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50324" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","pdp/pdp.js"], null)
//# sourceMappingURL=/pdp.731bdccb.js.map
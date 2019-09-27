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
},{}],"../components/header/header.hbs":[function(require,module,exports) {
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
    return "<a class=\"skip-link\" id=\"skip-to-main\" href=\"#skip-to-nav\" tabindex=\"0\">Skip navigation menu</a>\n<header class=\"global-header\" data-component=\"global-header\">\n  <a class=\"global-header__logo\" href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/index.html\">\n    <span class=\"global-header__site-icon\" aria-hidden=\"true\">A</span>\n    <h1 class=\"global-header__site-name\">\n      The <br />Accessible <br />eStore\n    </h1>\n  </a>\n  <div class=\"global-header__mobile-toggles\">\n    <button class=\"btn btn--mobile btn--mobile-search\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"search\" aria-label=\"search\">\n      Search\n      <svg class=\"icon icon--menu-btn\">\n        <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#search\"></use>\n      </svg>\n    </button>\n    <button class=\"btn btn--mobile btn--menu-toggle\" data-js=\"hamburger-toggle\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"menu\" aria-label=\"Navigation\">\n      Menu\n      <svg class=\"icon icon--menu-btn\">\n        <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#menu\"></use>\n      </svg>\n    </button>\n  </div>\n\n  <form action=\"\" id=\"global-header__search-form\" class=\"global-header__search-form\">\n    <label for=\"global-header__search-input\">Search</label>\n    <input type=\"text\" id=\"global-header__search-input\" class=\"global-header__search-input\" />\n    <button class=\"global-header__search-btn\" data-modal-show=\"construction-modal\">\n      <span class=\"sr-only\">Search</span>\n      <svg class=\"icon icon--search-btn\">\n        <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#search\"></use>\n      </svg>\n    </button>\n  </form>\n\n  <nav class=\"primary-nav\" aria-label=\"Primary\" data-js=\"hamburger-dropdown\">\n    <ul class=\"primary-nav__items\">\n      <li class=\"primary-nav__item has-submenu\">\n        <button class=\"primary-nav__heading\" id=\"main-nav-women\" data-js=\"dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Women\n          <svg class=\"icon icon--chevron\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#chevron\"></use>\n          </svg>\n        </button>\n        <ul class=\"primary-nav__submenu\">\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Womens</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Tops</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Pants</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Dresses</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Shoes</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"primary-nav__item has-submenu\">\n        <button class=\"primary-nav__heading\" data-js=\"dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Men\n          <svg class=\"icon icon--chevron\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#chevron\"></use>\n          </svg>\n        </button>\n        <ul class=\"primary-nav__submenu\">\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Mens</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Tops</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Pants</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Kilts</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Shoes</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"primary-nav__item has-submenu\">\n        <button class=\"primary-nav__heading\" data-js=\"dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Girls\n          <svg class=\"icon icon--chevron\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#chevron\"></use>\n          </svg>\n        </button>\n        <ul class=\"primary-nav__submenu\">\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Girls</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Tops</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Pants</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Dresses</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Shoes</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"primary-nav__item has-submenu\">\n        <button class=\"primary-nav__heading\" data-js=\"dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Boys\n          <svg class=\"icon icon--chevron\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#chevron\"></use>\n          </svg>\n        </button>\n        <ul class=\"primary-nav__submenu\">\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Boys</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Tops</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Pants</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Dresses</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Shoes</a>\n          </li>\n          <li class=\"submenu-item\">\n            <a href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/plp/index.html\">Hats</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n  <nav class=\"secondary-nav\" aria-label=\"Secondary\" data-js=\"hamburger-dropdown\">\n    <ul class=\"secondary-nav__items\">\n      <li class=\"secondary-nav__item\">\n        <button class=\"secondary-nav__button\" data-modal-show=\"construction-modal\">\n          <svg class=\"icon icon--menu-btn\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#account\"></use>\n          </svg> Account\n        </button>\n      </li>\n      <li class=\"secondary-nav__item secondary-nav__mini-cart mini-cart__toggle\" data-component=\"mini-cart\">\n        <button aria-label=\"Mini Cart, 2 items, estimated subtotal: $42.92\" data-js=\"mini-cart-toggle\" class=\"secondary-nav__button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span aria-live=\"assertive\" aria-atomic=\"true\" class=\"element-invisible mini-cart__aria\">You have 0 items in\n            your cart.</span>\n          <svg class=\"icon icon--menu-btn\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#cart\"></use>\n          </svg>\n          Cart\n          <span class=\"mini-cart__visible-label--amount\" data-js=\"cart-item-count\">0</span>\n        </button>\n        <div data-template=\"mini-cart\"></div>\n      </li>\n      <li class=\"secondary-nav__item secondary-nav__stores\">\n        <button class=\"secondary-nav__button\" data-modal-show=\"construction-modal\">\n          <svg class=\"icon icon--menu-btn\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#stores\"></use>\n          </svg> Stores\n        </button>\n      </li>\n      <li class=\"secondary-nav__item secondary-nav__contact\">\n        <button class=\"secondary-nav__button\" data-modal-show=\"construction-modal\">\n          <svg class=\"icon icon--menu-btn\">\n            <use xlink:href=\"" + alias4((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#contact\"></use>\n          </svg> Contact\n        </button>\n      </li>\n    </ul>\n  </nav>\n</header>\n<a class=\"skip-link\" id=\"skip-to-nav\" href=\"#skip-to-main\" tabindex=\"0\">Return to navigation menu</a>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/footer/footer.hbs":[function(require,module,exports) {
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
    return "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"footer__link-container\">\n            <ul class=\"footer__main-links\">\n                <li class=\"footer__main-link-item\">\n                    <a href=\"#\" class=\"footer__main-link\" data-modal-show=\"construction-modal\">Site Map</a>\n                </li>\n                <li class=\"footer__main-link-item\">\n                    <a href=\"" + container.escapeExpression((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/index.html\" class=\"footer__main-link\">About</a>\n                </li>\n                <li class=\"footer__main-link-item\">\n                    <a href=\"mailto:a11yestoredemo@gmail.com\" class=\"footer__main-link\">Contact Us</a>\n                </li>\n            </ul>\n            <div class=\"feedback\">\n                <h3 class=\"feedback__heading\">Feedback</h3>\n                <p class=\"feedback__copy\">Please help us to make our accessible experience even better! If you have any questions, comments or feedback, please send us an email</p>\n                <a href=\"mailto:a11yestoredemo@gmail.com\" class=\"btn btn--black-inverted feedback__submit\" target=\"_blank\">Submit Feedback<span class=\"element-invisible\">. Link opens in a new window.</span></a>\n            </div>\n        </div>\n        <ul class=\"footer__secondary-links\">\n            <li class=\"footer__secondary-link-item\">\n                <a href=\"#\" data-modal-show=\"construction-modal\">Legal</a> |\n            </li>\n            <li class=\"footer__secondary-link-item\">\n                <a href=\"#\" data-modal-show=\"construction-modal\">Privacy Policy</a> |\n            </li>\n            <li class=\"footer__secondary-link-item\">\n                <a href=\"#\" data-modal-show=\"construction-modal\">Cookies</a>\n            </li>\n        </ul>\n        <p class=\"footer__legal\">Publicis Sapient makes no representations or warranties about the content provided on this page. Publicis Sapient does not intend for the prototype or any other information contained on this page to constitute legal advice, nor is this content meant to capture a one-size-fits-all solution to accessibility concerns. Readers of this content should contact independent legal counsel to obtain advice with respect to any particular legal matter, including but not limited to accessibility.</p>\n    </div>\n</footer>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/modal/construction-modal.hbs":[function(require,module,exports) {
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
    return "<div id=\"construction-modal\" class=\"modal construction-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modalTitle\" aria-describedby=\"modalDesc\">\n  <div class=\"modal__flex\">\n    <div class=\"modal__content construction-modal__content\">\n      <button class=\"modal__close\" data-modal-hide=\"construction-modal\">\n        <span class=\"sr-only\">close</span>\n        <svg class=\"icon icon--close\">\n          <use xlink:href=\"" + container.escapeExpression((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#close\"></use>\n        </svg>\n      </button>\n      <h2 id=\"modalTitle\" class=\"construction-modal__title\">Coming soon!</h2>\n      <p id=\"modalDesc\" class=\"construction-modal__description\">This element is under construction. It currently lacks functionality, but it is planned to be developed in the coming months. Check back soon.</p>\n      <button class=\"btn construction-modal__cta-btn\" aria-label=\"close modal\" data-modal-hide=\"construction-modal\">Close</button>\n    </div>\n  </div>\n  <button tabindex=\"-1\" class=\"modal__backdrop-close\" data-modal-hide=\"construction-modal\" aria-hidden=\"true\">close</button>\n</div>\n";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/mini-cart/mini-cart.hbs":[function(require,module,exports) {
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
    return "<div class=\"mini-cart__dropdown\" data-js=\"mini-cart-dropdown\">\n    <h2 class=\"mini-cart__title\">Cart</h2>\n    <button class=\"mini-cart__btn--close\" data-js=\"mini-cart-close\">\n        <span class=\"sr-only\">Close</span>\n        <svg class=\"icon--close-btn\">\n            <use xlink:href=\"" + container.escapeExpression((helper = (helper = helpers.rootPath || (depth0 != null ? depth0.rootPath : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "rootPath",
      "hash": {},
      "data": data
    }) : helper)) + "/sprite.svg#close\"></use>\n        </svg>\n    </button>\n\n    <div data-template=\"mini-cart-items\" class=\"mini-cart__items\"></div>\n    <div class=\"mini-cart__summary-controls\">\n        <a href=\"../cart/index.html\" class=\"mini-cart__cta-btn btn btn--outline-black\" data-modal-show=\"construction-modal\">View Cart</a>\n        <a href=\"../checkout/index.html\" class=\"mini-cart__cta-btn mini-cart__checkout btn btn--primary\">Checkout</a>\n    </div>\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/mini-cart/mini-cart-items.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        alias5 = container.lambda;
    return "  <li class=\"mini-cart__item\">\n    <a class=\"mini-cart__item-link\" href=\"../pdp/index.html?product_id=" + alias4((helper = (helper = helpers.product_id || (depth0 != null ? depth0.product_id : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_id",
      "hash": {},
      "data": data
    }) : helper)) + "\" aria-label=\"Shirt Malo. Size: Medium, Color: blue, quantity: 1, Item unit price: $36.95, Item total price: $36.95\">\n      <img class=\"mini-cart__image\" alt=\"\" src=\"" + alias4(alias5(depths[1] != null ? depths[1].rootPath : depths[1], depth0)) + "/" + alias4((helper = (helper = helpers.thumbnail_url || (depth0 != null ? depth0.thumbnail_url : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "thumbnail_url",
      "hash": {},
      "data": data
    }) : helper)) + "\">\n      <div class=\"mini-cart__description\">\n        <p class=\"mini-cart__item-title\">" + alias4((helper = (helper = helpers.product_name || (depth0 != null ? depth0.product_name : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_name",
      "hash": {},
      "data": data
    }) : helper)) + "</p>\n        <dl class=\"mini-cart__details\">\n          <div class=\"mini-cart__detail\">\n            <dt>Price</dt>\n            <dd class=\"detail__price\">$" + alias4((helper = (helper = helpers.price_sale || (depth0 != null ? depth0.price_sale : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "price_sale",
      "hash": {},
      "data": data
    }) : helper)) + "</dd>\n          </div>\n          <div class=\"mini-cart__detail\">\n            <dt>Color</dt>\n            <dd>" + alias4((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "color",
      "hash": {},
      "data": data
    }) : helper)) + "</dd>\n          </div>\n          <div class=\"mini-cart__detail\">\n            <dt>Size</dt>\n            <dd>" + alias4((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "size",
      "hash": {},
      "data": data
    }) : helper)) + "</dd>\n          </div>\n        </dl>\n        <dl class=\"mini-cart__details\">\n          <div class=\"mini-cart__detail\">\n            <dt>Qty</dt>\n            <dd>" + alias4((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "quantity",
      "hash": {},
      "data": data
    }) : helper)) + "</dd>\n          </div>\n          <div class=\"mini-cart__detail\">\n            <dt>Total</dt>\n            <dd class=\"detail__price\">$" + alias4((helper = (helper = helpers.total_price || (depth0 != null ? depth0.total_price : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "total_price",
      "hash": {},
      "data": data
    }) : helper)) + "</dd>\n          </div>\n        </dl>\n      </div>\n    </a>\n    <div class=\"mini-cart__controls\">\n      <button class=\"mini-cart__control btn--link\" data-remove=\"" + alias4((helper = (helper = helpers.cart_id || (depth0 != null ? depth0.cart_id : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "cart_id",
      "hash": {},
      "data": data
    }) : helper)) + "\">\n        <svg class=\"icon mini-cart__control-icon\">\n          <use xlink:href=\"" + alias4(alias5(depths[1] != null ? depths[1].rootPath : depths[1], depth0)) + "/sprite.svg#trash\"></use>\n        </svg>\n        Remove\n      </button>\n      <a class=\"mini-cart__control btn--link\" href=\"../pdp/index.html?product_id=" + alias4((helper = (helper = helpers.product_id || (depth0 != null ? depth0.product_id : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "product_id",
      "hash": {},
      "data": data
    }) : helper)) + "\">\n        <svg class=\"icon mini-cart__control-icon\">\n          <use xlink:href=\"" + alias4(alias5(depths[1] != null ? depths[1].rootPath : depths[1], depth0)) + "/sprite.svg#edit\"></use>\n        </svg>\n        Edit\n      </a>\n      <button class=\"mini-cart__control btn--link\" data-modal-show=\"construction-modal\">\n        <svg class=\"icon mini-cart__control-icon icon--heart-outline\">\n          <use xlink:href=\"" + alias4(alias5(depths[1] != null ? depths[1].rootPath : depths[1], depth0)) + "/sprite.svg#heart\"></use>\n        </svg>\n        Save\n      </button>\n    </div>\n  </li>\n";
  },
  "compiler": [7, ">= 4.0.0"],
  "main": function main(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
    return "<p class=\"mini-cart__total-quantity\">" + alias4((helper = (helper = helpers.cartItemCount || (depth0 != null ? depth0.cartItemCount : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "cartItemCount",
      "hash": {},
      "data": data
    }) : helper)) + " " + alias4((helper = (helper = helpers.cartItemsLabel || (depth0 != null ? depth0.cartItemsLabel : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "cartItemsLabel",
      "hash": {},
      "data": data
    }) : helper)) + "</p>\n<ul class=\"mini-cart__item-list\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.cartItems : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0, blockParams, depths),
      "inverse": container.noop,
      "data": data
    })) != null ? stack1 : "") + "</ul>\n\n<div class=\"mini-cart__summary-subtotal\">\n  <p class=\"mini-cart__subtotal-title\">Estimated Total</p>\n  <p class=\"mini-cart__subtotal\">$" + alias4((helper = (helper = helpers.cartSubtotal || (depth0 != null ? depth0.cartSubtotal : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "cartSubtotal",
      "hash": {},
      "data": data
    }) : helper)) + "</p>\n</div>\n";
  },
  "useData": true,
  "useDepths": true
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
},{"handlebars/dist/handlebars.runtime":"../../node_modules/handlebars/dist/handlebars.runtime.js"}],"../components/cart/cart.js":[function(require,module,exports) {
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
},{"../../js/utils":"../js/utils.js"}],"../components/mini-cart/mini-cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _miniCart = _interopRequireDefault(require("./mini-cart.hbs"));

var _miniCartItems = _interopRequireDefault(require("./mini-cart-items.hbs"));

var _cart = require("../cart/cart");

var _utils = require("../../js/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdownEl;
var buttonEl;
var miniCartItems;
var cartCountEl;
var globalVariables = {
  rootPath: window.location.pathname === '/index.html' || window.location.pathname === '/accessible-ecommerce-demo/' || window.location.pathname === '/accessible-ecommerce-demo/index.html' ? '.' : '..'
};

function testClick(event) {
  var clickInsideDropdown = event.target.matches('.mini-cart__dropdown, .mini-cart__dropdown *');

  if (!clickInsideDropdown) {
    closeMiniCart();
  }
}

function testBlur() {
  (0, _utils.activeElementMatches)('.mini-cart__dropdown *').then(function (focusInDropdown) {
    if (!focusInDropdown) {
      closeMiniCart();
    }
  });
}

function openMiniCart() {
  dropdownEl.classList.add('expanded');
  buttonEl.setAttribute('aria-expanded', 'true');
  document.addEventListener('click', testClick);
}

function onClose(event) {
  event.stopPropagation();
  closeMiniCart();
}

function closeMiniCart() {
  dropdownEl.classList.remove('expanded');
  buttonEl.setAttribute('aria-expanded', 'false');
  document.removeEventListener('click', testClick);
}

function toggleMenu(event) {
  event.stopPropagation();

  if (dropdownEl.classList.contains('expanded')) {
    closeMiniCart();
  } else {
    openMiniCart();
  }
}

function miniCartActions(event) {
  if (event.target.matches('[data-remove]')) {
    (0, _cart.removeFromCart)(event.target.dataset.remove);
    event.stopPropagation();
  }
}

function onCartUpdate(event) {
  updateMiniCart(event.detail);
}

function updateMiniCart(cartData) {
  cartData.rootPath = globalVariables.rootPath;
  cartCountEl.innerHTML = cartData.cartItemCount;
  miniCartItems.innerHTML = (0, _miniCartItems.default)(cartData);
}

function init() {
  var cartData = (0, _cart.getCartFromStorage)();
  var templateEl = document.querySelector('[data-template="mini-cart"]');
  templateEl.outerHTML = (0, _miniCart.default)(globalVariables);
  var miniCartEl = document.querySelector('[data-component="mini-cart"]');
  buttonEl = miniCartEl.querySelector('[data-js="mini-cart-toggle"]');
  dropdownEl = miniCartEl.querySelector('[data-js="mini-cart-dropdown"]');
  miniCartItems = miniCartEl.querySelector('[data-template="mini-cart-items"]');
  cartCountEl = miniCartEl.querySelector('[data-js="cart-item-count"]');
  updateMiniCart(cartData);
  dropdownEl.addEventListener('click', miniCartActions);
  buttonEl.addEventListener('click', toggleMenu);
  buttonEl.addEventListener('blur', testBlur);
  var miniCartClose = miniCartEl.querySelector('[data-js="mini-cart-close"]');
  miniCartClose.addEventListener('click', onClose); // Add blur check to last focusable item in the dropdown

  var focusableItems = miniCartEl.querySelectorAll('button, [href]');
  focusableItems[focusableItems.length - 1].addEventListener('blur', testBlur);
  document.addEventListener('update:cart', onCartUpdate);
}
},{"./mini-cart.hbs":"../components/mini-cart/mini-cart.hbs","./mini-cart-items.hbs":"../components/mini-cart/mini-cart-items.hbs","../cart/cart":"../components/cart/cart.js","../../js/utils":"../js/utils.js"}],"../components/header/global-navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

/* Global Nav Functions */
var componentEl;
var hamburgerDropdown;
var isMenuOpen = false;
var activeMenuItem = null;

function onHamburgerMenuClick(event) {
  isMenuOpen = !isMenuOpen;
  event.currentTarget.setAttribute('aria-expanded', isMenuOpen);
  hamburgerDropdown.forEach(function (dropdown) {
    dropdown.classList.toggle('open');
  });
}

function onDocumentClick(event) {
  var target = event.target;

  if (!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('primary-nav__heading')) {
    closeMenu(activeMenuItem);
    removeDocumentClickHandler();
  }
}

function addDocumentClickHandler() {
  setTimeout(function () {
    window.addEventListener('click', onDocumentClick);
  }, 1);
}

function removeDocumentClickHandler() {
  window.removeEventListener('click', onDocumentClick);
}

function getActiveElement() {
  // the active element (with focus) isn't available yet when the blur event fires
  // so we kick this function down the stack a little with setTimeout
  return new Promise(function (resolve) {
    setTimeout(function () {
      var activeFocusElement = document.activeElement;
      resolve({
        inOpenMenu: activeFocusElement.matches('.has-submenu.open *')
      });
    }, 1);
  });
}

function onMenuItemBlur(event) {
  var blurFromOpenMenu = event.currentTarget.matches('.has-submenu.open *');
  getActiveElement().then(function (focusElement) {
    if (blurFromOpenMenu && !focusElement.inOpenMenu) {
      closeMenu(activeMenuItem);
    }
  });
}

function closeMenu(element) {
  if (element && element.parentNode.classList.contains('open')) {
    element.parentNode.classList.remove('open');
    element.setAttribute('aria-expanded', 'false');
    activeMenuItem = null;
  }
}

function openMenu(element) {
  var parent = element.parentNode;
  closeMenu(activeMenuItem);
  parent.classList.add('open');
  element.setAttribute('aria-expanded', 'true');
  activeMenuItem = element;
  addDocumentClickHandler();
}

function onClickMenuItemWithSubmenu(event) {
  event.stopPropagation();
  var target = event.currentTarget;
  target.parentNode.classList.contains('open') ? closeMenu(target) : openMenu(target);
  return false;
}

function setActiveClass() {
  // temporary way to set active class on "Women" nav item when in PLP or PDP page
  var pathname = window.location.pathname;

  if (pathname.indexOf("/plp/") >= 0 || pathname.indexOf("/pdp/") >= 0) {
    document.querySelector('#main-nav-women').className += " active";
  }
}

function init() {
  componentEl = document.querySelector('[data-component="global-header"]');
  var menuItems = componentEl.querySelectorAll('[data-js="dropdown-toggle"]');
  var submenuLastChildren = componentEl.querySelectorAll('.submenu-item:last-child a');
  var hamburgerMenuButton = componentEl.querySelector('[data-js="hamburger-toggle"]');
  hamburgerDropdown = componentEl.querySelectorAll('[data-js="hamburger-dropdown"]');
  menuItems.forEach(function (el) {
    el.addEventListener('click', onClickMenuItemWithSubmenu);
    el.addEventListener('blur', onMenuItemBlur);
  });
  submenuLastChildren.forEach(function (el) {
    el.addEventListener('blur', onMenuItemBlur);
  });
  hamburgerMenuButton.addEventListener('click', onHamburgerMenuClick);
  setActiveClass();
}
},{}],"../scripts.js":[function(require,module,exports) {
"use strict";

var _header = _interopRequireDefault(require("./components/header/header.hbs"));

var _footer = _interopRequireDefault(require("./components/footer/footer.hbs"));

var _constructionModal = _interopRequireDefault(require("./components/modal/construction-modal.hbs"));

var MiniCart = _interopRequireWildcard(require("./components/mini-cart/mini-cart"));

var GlobalNav = _interopRequireWildcard(require("./components/header/global-navigation"));

var _utils = require("./js/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Global templating
var headerDOM = document.querySelector('[data-template="global-header"]');
var footerDOM = document.querySelector('[data-template="footer"]');
var constructionModalDOM = document.querySelector('[data-template="construction-modal"]');
var globalVariables = {
  rootPath: window.location.pathname === '/index.html' || window.location.pathname === '/accessible-ecommerce-demo/' || window.location.pathname === '/accessible-ecommerce-demo/index.html' ? '.' : '..'
};
if (headerDOM) headerDOM.outerHTML = (0, _header.default)(globalVariables);
if (footerDOM) footerDOM.outerHTML = (0, _footer.default)(globalVariables);
if (constructionModalDOM) constructionModalDOM.outerHTML = (0, _constructionModal.default)(globalVariables); // Global components

GlobalNav.init();
MiniCart.init();
(0, _utils.enableSkipLinks)();
},{"./components/header/header.hbs":"../components/header/header.hbs","./components/footer/footer.hbs":"../components/footer/footer.hbs","./components/modal/construction-modal.hbs":"../components/modal/construction-modal.hbs","./components/mini-cart/mini-cart":"../components/mini-cart/mini-cart.js","./components/header/global-navigation":"../components/header/global-navigation.js","./js/utils":"../js/utils.js"}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","../scripts.js"], null)
//# sourceMappingURL=/scripts.7ada455b.js.map
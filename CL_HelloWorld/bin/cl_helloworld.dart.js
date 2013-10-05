// Generated by dart2js, the Dart to JavaScript compiler.
// The code supports the following hooks:
// dartPrint(message)   - if this function is defined it is called
//                        instead of the Dart [print] method.
// dartMainRunner(main) - if this function is defined, the Dart [main]
//                        method will not be invoked directly.
//                        Instead, a closure that will invoke [main] is
//                        passed to [dartMainRunner].
(function($) {
var A = {};
delete A.x;
var B = {};
delete B.x;
var C = {};
delete C.x;
var D = {};
delete D.x;
var E = {};
delete E.x;
var F = {};
delete F.x;
var G = {};
delete G.x;
var H = {};
delete H.x;
var J = {};
delete J.x;
var K = {};
delete K.x;
var L = {};
delete L.x;
var M = {};
delete M.x;
var N = {};
delete N.x;
var O = {};
delete O.x;
var P = {};
delete P.x;
var Q = {};
delete Q.x;
var R = {};
delete R.x;
var S = {};
delete S.x;
var T = {};
delete T.x;
var U = {};
delete U.x;
var V = {};
delete V.x;
var W = {};
delete W.x;
var X = {};
delete X.x;
var Y = {};
delete Y.x;
var Z = {};
delete Z.x;
function Isolate() {}
init();

$ = Isolate.$isolateProperties;
// Bound closures
(function (reflectionData) {
  function map(x){x={x:x};delete x.x;return x}
  if (!init.libraries) init.libraries = [];
  if (!init.mangledNames) init.mangledNames = map();
  if (!init.mangledGlobalNames) init.mangledGlobalNames = map();
  if (!init.statics) init.statics = map();
  if (!init.interfaces) init.interfaces = map();
  if (!init.globalFunctions) init.globalFunctions = map();
  var libraries = init.libraries;
  var mangledNames = init.mangledNames;
  var mangledGlobalNames = init.mangledGlobalNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var globalObject = data[3];
    var descriptor = data[4];
    var isRoot = !!data[5];
    var fields = descriptor && descriptor[""];
    var classes = [];
    var functions = [];
    function processStatics(descriptor) {
      for (var property in descriptor) {
        if (!hasOwnProperty.call(descriptor, property)) continue;
        if (property === "") continue;
        var element = descriptor[property];
        var firstChar = property.substring(0, 1);
        var previousProperty;
        if (firstChar === "+") {
          mangledGlobalNames[previousProperty] = property.substring(1);
          if (descriptor[property] == 1) descriptor[previousProperty].$reflectable = 1;
          if (element && element.length) init.interfaces[previousProperty] = element;
        } else if (firstChar === "@") {
          property = property.substring(1);
          $[property]["@"] = element;
        } else if (firstChar === "*") {
          globalObject[previousProperty].$defaultValues = element;
          var optionalMethods = descriptor.$methodsWithOptionalArguments;
          if (!optionalMethods) {
            descriptor.$methodsWithOptionalArguments = optionalMethods = {}
          }
          optionalMethods[property] = previousProperty;
        } else if (typeof element === "function") {
          globalObject[previousProperty = property] = element;
          functions.push(property);
          init.globalFunctions[property] = element;
        } else {
          previousProperty = property;
          var newDesc = {};
          var previousProp;
          for (var prop in element) {
            if (!hasOwnProperty.call(element, prop)) continue;
            firstChar = prop.substring(0, 1);
            if (prop === "static") {
              processStatics(init.statics[property] = element[prop]);
            } else if (firstChar === "+") {
              mangledNames[previousProp] = prop.substring(1);
              if (element[prop] == 1) element[previousProp].$reflectable = 1;
            } else if (firstChar === "@" && prop !== "@") {
              newDesc[prop.substring(1)]["@"] = element[prop];
            } else if (firstChar === "*") {
              newDesc[previousProp].$defaultValues = element[prop];
              var optionalMethods = newDesc.$methodsWithOptionalArguments;
              if (!optionalMethods) {
                newDesc.$methodsWithOptionalArguments = optionalMethods={}
              }
              optionalMethods[prop] = previousProp;
            } else {
              newDesc[previousProp = prop] = element[prop];
            }
          }
          $$[property] = [globalObject, newDesc];
          classes.push(property);
        }
      }
    }
    processStatics(descriptor);
    libraries.push([name, uri, classes, functions, metadata, fields, isRoot,
                    globalObject]);
  }
})([
["_js_helper", "dart:_js_helper", , H, {
Primitives_printString: function(string) {
  if (typeof dartPrint == "function") {
    dartPrint(string);
    return;
  }
  if (typeof console == "object" && typeof console.log == "function") {
    console.log(string);
    return;
  }
  if (typeof window == "object")
    return;
  if (typeof print == "function") {
    print(string);
    return;
  }
  throw "Unable to print message: " + String(string);
}}],
["cl_helloworld.dart", "cl_helloworld.dart", , E, {
main: function() {
  H.Primitives_printString("Hello, World!");
}},
1],
]);
// Static function getters
// Runtime type support
// getInterceptor methods
$.mapTypeToInterceptor = [];

init.functionAliases = {};
;
init.metadata = [];
$ = null;
Isolate = Isolate.$finishIsolateConstructor(Isolate);
$ = new Isolate();
function convertToFastObject(properties) {
  function MyClass() {};
  MyClass.prototype = properties;
  new MyClass();
  return properties;
}
A = convertToFastObject(A);
B = convertToFastObject(B);
C = convertToFastObject(C);
D = convertToFastObject(D);
E = convertToFastObject(E);
F = convertToFastObject(F);
G = convertToFastObject(G);
H = convertToFastObject(H);
J = convertToFastObject(J);
K = convertToFastObject(K);
L = convertToFastObject(L);
M = convertToFastObject(M);
N = convertToFastObject(N);
O = convertToFastObject(O);
P = convertToFastObject(P);
Q = convertToFastObject(Q);
R = convertToFastObject(R);
S = convertToFastObject(S);
T = convertToFastObject(T);
U = convertToFastObject(U);
V = convertToFastObject(V);
W = convertToFastObject(W);
X = convertToFastObject(X);
Y = convertToFastObject(Y);
Z = convertToFastObject(Z);
// BEGIN invoke [main].
;(function (callback) {
  if (typeof document === "undefined") {
    callback(null);
    return;
  }
  if (document.currentScript) {
    callback(document.currentScript);
    return;
  }

  var scripts = document.scripts;
  function onLoad(event) {
    for (var i = 0; i < scripts.length; ++i) {
      scripts[i].removeEventListener("load", onLoad, false);
    }
    callback(event.target);
  }
  for (var i = 0; i < scripts.length; ++i) {
    scripts[i].addEventListener("load", onLoad, false);
  }
})(function(currentScript) {
  init.currentScript = currentScript;

  if (typeof dartMainRunner === "function") {
    dartMainRunner(function() { E.main(); });
  } else {
    E.main();
  }
});
// END invoke [main].
function init() {
  Isolate.$isolateProperties = {};
  Isolate.$finishIsolateConstructor = function(oldIsolate) {
    var isolateProperties = oldIsolate.$isolateProperties;
    function Isolate() {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var staticName in isolateProperties)
        if (hasOwnProperty.call(isolateProperties, staticName))
          this[staticName] = isolateProperties[staticName];
      function ForceEfficientMap() {
      }
      ForceEfficientMap.prototype = this;
      new ForceEfficientMap();
    }
    Isolate.prototype = oldIsolate.prototype;
    Isolate.prototype.constructor = Isolate;
    Isolate.$isolateProperties = isolateProperties;
    return Isolate;
  };
}
})()

//# sourceMappingURL=cl_helloworld.dart.js.map
//@ sourceMappingURL=cl_helloworld.dart.js.map

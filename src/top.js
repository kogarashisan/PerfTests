
// it must be inlined, cause otherwise closure-wrapped classes like TypeScript will have to look it up to the window scope
//var THRESHOLD = 99;

var DUMMY_VAR = 0;
var dummy = {
	// this will never be executed
	method: function() {DUMMY_VAR = 123}
};
// classical John Resig's extend
function __extend(Child, Parent) {
	var F = function() { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}
// In ClassManager all classes belong to a namespace
Lava.ClassManager.registerRootNamespace("global", typeof window != "undefined" ? window : global);
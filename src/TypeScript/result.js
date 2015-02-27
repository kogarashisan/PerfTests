var __extends = this.__extends || function (d, b) {
		for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		function __() { this.constructor = d; }
		__.prototype = b.prototype;
		d.prototype = new __();
	};
var TypeScriptParent = (function () {
	function TypeScriptParent(instance_string) {
		this.counter = 0;
		this.instance_array = [];
		this.instance_string = instance_string;
	}
	TypeScriptParent.prototype.method = function (prevent_inline) {
		if (this.counter > THRESHOLD)
			this.counter = this.counter / 2;
		else
			this.counter++;
		if (prevent_inline) {
			var i = 0;
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
			for (i = 0; i < 1; i++) dummy.method();
		}
	};
	return TypeScriptParent;
})();
var TypeScriptChildA = (function (_super) {
	__extends(TypeScriptChildA, _super);
	function TypeScriptChildA(instance_string) {
		_super.call(this, instance_string);
		this.member_a = 1;
	}
	TypeScriptChildA.prototype.method = function () {
		this.member_a = -this.member_a;
		_super.prototype.method.call(this, false);
	};
	return TypeScriptChildA;
})(TypeScriptParent);
var TypeScriptChildB = (function (_super) {
	__extends(TypeScriptChildB, _super);
	function TypeScriptChildB(instance_string) {
		_super.call(this, instance_string);
		this.member_b = -1;
	}
	TypeScriptChildB.prototype.method = function () {
		this.member_b = -this.member_b;
		_super.prototype.method.call(this, false);
	};
	return TypeScriptChildB;
})(TypeScriptParent);

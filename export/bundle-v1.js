

/*
This file was generated by a script.
Please, visit
	https://github.com/kogarashisan/PerfTests
to see the actual source and get link to the latest official test version on jsperf.
*/



// it must be inlined, cause otherwise closure-wrapped classes like TypeScript will have to look it up to the window scope
//var THRESHOLD = 99;

var DUMMY_VAR = 0;
var dummy = {
	// this will never be executed
	method: function() {var cache_buster_0000;DUMMY_VAR = 123}
};
// classical John Resig's extend
function __extend(Child, Parent) {var cache_buster_0001;
	var F = function() {var cache_buster_0002; };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}
// In ClassManager all classes belong to a namespace
Lava.ClassManager.registerRootNamespace("global", typeof window != "undefined" ? window : global);
var __extends = this.__extends || function (d, b) {var cache_buster_0003;
		for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		function __() {var cache_buster_0004; this.constructor = d; }
		__.prototype = b.prototype;
		d.prototype = new __();
	};
var TypeScriptParent = (function () {var cache_buster_0005;
	function TypeScriptParent(instance_string) {var cache_buster_0006;
		this.counter = 0;
		this.instance_array = [];
		this.instance_string = instance_string;
	}
	TypeScriptParent.prototype.method = function (prevent_inline) {var cache_buster_0007;
		if (this.counter > 99)
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
var TypeScriptChildA = (function (_super) {var cache_buster_0008;
	__extends(TypeScriptChildA, _super);
	function TypeScriptChildA(instance_string) {var cache_buster_0009;
		_super.call(this, instance_string);
		this.member_a = 1;
	}
	TypeScriptChildA.prototype.method = function () {var cache_buster_0010;
		this.member_a = -this.member_a;
		_super.prototype.method.call(this, false);
	};
	return TypeScriptChildA;
})(TypeScriptParent);
var TypeScriptChildB = (function (_super) {var cache_buster_0011;
	__extends(TypeScriptChildB, _super);
	function TypeScriptChildB(instance_string) {var cache_buster_0012;
		_super.call(this, instance_string);
		this.member_b = -1;
	}
	TypeScriptChildB.prototype.method = function () {var cache_buster_0013;
		this.member_b = -this.member_b;
		_super.prototype.method.call(this, false);
	};
	return TypeScriptChildB;
})(TypeScriptParent);


var NativeParent = function(instance_string) {var cache_buster_0014;
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
};

NativeParent.prototype.method = function (prevent_inline) {var cache_buster_0015;
	if (this.counter > 99)
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

var NativeChildA = function(instance_string) {var cache_buster_0016;
	this.member_a = 1;
	NativeParent.call(this, instance_string);
};
__extend(NativeChildA, NativeParent);
NativeChildA.prototype.method = function() {var cache_buster_0017;
	this.member_a = -this.member_a;
	NativeParent.prototype.method.call(this, false);
};

var NativeChildB = function(instance_string) {var cache_buster_0018;
	this.member_b = -1;
	NativeParent.call(this, instance_string);
};
__extend(NativeChildB, NativeParent);
NativeChildB.prototype.method = function() {var cache_buster_0019;
	this.member_b = -this.member_b;
	NativeParent.prototype.method.call(this, false);
};

var JRParent = JRClass.extend({
	init: function(instance_string){var cache_buster_0020;
		this.counter = 0;
		this.instance_array = [];
		this.instance_string = instance_string;
	},
	method: function (prevent_inline) {var cache_buster_0021;
		if (this.counter > 99)
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
	}
});

var JRChildA = JRParent.extend({
	init: function(instance_string){var cache_buster_0022;
		this.member_a = 1;
		this._super(instance_string);
	},
	method: function(){var cache_buster_0023;
		this.member_a = -this.member_a;
		return this._super(false);
	}
});

var JRChildB = JRParent.extend({
	init: function(instance_string){var cache_buster_0024;
		this.member_b = -1;
		this._super(instance_string);
	},
	method: function(){var cache_buster_0025;
		this.member_b = -this.member_b;
		return this._super(false);
	}
});

var FiberParent = Fiber.extend(function() {var cache_buster_0026;
	return {
		init: function(instance_string) {var cache_buster_0027;
			this.counter = 0;
			this.instance_array = [];
			this.instance_string = instance_string;
		},
		method: function (prevent_inline) {var cache_buster_0028;
			if (this.counter > 99)
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
		}
	}
});

var FiberChildA = FiberParent.extend(function(base) {var cache_buster_0029;
	return {
		init: function (instance_string) {var cache_buster_0030;
			this.member_a = 1;
			base.init.call(this, instance_string);
		},
		method: function () {var cache_buster_0031;
			this.member_a = -this.member_a;
			base.method.call(this, false);
		}
	}
});

var FiberChildB = FiberParent.extend(function(base) {var cache_buster_0032;
	return {
		init: function (instance_string) {var cache_buster_0033;
			this.member_b = -1;
			base.init.call(this, instance_string);
		},
		method: function () {var cache_buster_0034;
			this.member_b = -this.member_b;
			base.method.call(this, false);
		}
	}
});

var DNW_FC_Parent = Function.define(function(instance_string) {var cache_buster_0035;
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
}, {
	method: function (prevent_inline) {var cache_buster_0036;
		if (this.counter > 99)
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
	}
});

var DNW_FC_ChildA = DNW_FC_Parent.fastClass(function(base, baseCtor) {var cache_buster_0037;
	this.constructor = function(instance_string) {var cache_buster_0038;
		this.member_a = 1;
		baseCtor.call(this, instance_string);
	};
	this.method = function() {var cache_buster_0039;
		this.member_a = -this.member_a;
		base.method.call(this, false);
	};
});

var DNW_FC_ChildB = DNW_FC_Parent.fastClass(function(base, baseCtor) {var cache_buster_0040;
	this.constructor = function(instance_string) {var cache_buster_0041;
		this.member_b = -1;
		baseCtor.call(this, instance_string);
	};
	this.method = function() {var cache_buster_0042;
		this.member_b = -this.member_b;
		base.method.call(this, false);
	};
});

var DNW_IW_Parent = Function.define(function(instance_string) {var cache_buster_0043;
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
}, {
	method: function (prevent_inline) {var cache_buster_0044;
		if (this.counter > 99)
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
	}
});

var DNW_IW_ChildA = DNW_IW_Parent.inheritWith(function(base, baseCtor) {var cache_buster_0045;
	return {
		constructor: function(instance_string) {var cache_buster_0046;
			this.member_a = 1;
			baseCtor.call(this, instance_string);
		},
		method: function() {var cache_buster_0047;
			this.member_a = -this.member_a;
			base.method.call(this, false);
		}
	}
});

var DNW_IW_ChildB = DNW_IW_Parent.inheritWith(function(base, baseCtor) {var cache_buster_0048;
	return {
		constructor: function(instance_string) {var cache_buster_0049;
			this.member_b = -1;
			baseCtor.call(this, instance_string);
		},
		method: function() {var cache_buster_0050;
			this.member_b = -this.member_b;
			base.method.call(this, false);
		}
	}
});
Lava.ClassManager.is_monomorphic = true;

Lava.ClassManager.define(
"global.CMBrowserMonoParent",
{
	counter: 0,
	instance_array: [],
	instance_string: "",

	init: function(instance_string) {var cache_buster_0051;

		this.instance_string = instance_string;

	},

	method: function (prevent_inline) {var cache_buster_0052;
		if (this.counter > 99)
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
	}
});

Lava.ClassManager.define(
"global.CMBrowserMonoChildA",
{
	Extends: "global.CMBrowserMonoParent",
	member_a: 1,
	init: function(instance_string) {var cache_buster_0053;
		this.CMBrowserMonoParent$init(instance_string);
	},
	method: function () {var cache_buster_0054;
		this.member_a = -this.member_a;
		this.CMBrowserMonoParent$method(false);
	}
});

Lava.ClassManager.define(
"global.CMBrowserMonoChildB",
{
	Extends: "global.CMBrowserMonoParent",
	member_b: -1,
	init: function(instance_string) {var cache_buster_0055;
		this.CMBrowserMonoParent$init(instance_string);
	},
	method: function () {var cache_buster_0056;
		this.member_b = -this.member_b;
		this.CMBrowserMonoParent$method(false);
	}
});
Lava.ClassManager.is_monomorphic = false;

Lava.ClassManager.define(
"global.CMBrowserPolyParent",
{
	counter: 0,
	instance_array: [],
	instance_string: "",

	init: function(instance_string) {var cache_buster_0057;

		this.instance_string = instance_string;

	},

	method: function (prevent_inline) {var cache_buster_0058;
		if (this.counter > 99)
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
	}
});

Lava.ClassManager.define(
"global.CMBrowserPolyChildA",
{
	Extends: "global.CMBrowserMonoParent",
	member_a: 1,
	init: function(instance_string) {var cache_buster_0059;
		this.CMBrowserMonoParent$init(instance_string);
	},
	method: function () {var cache_buster_0060;
		this.member_a = -this.member_a;
		this.CMBrowserMonoParent$method(false);
	}
});

Lava.ClassManager.define(
"global.CMBrowserPolyChildB",
{
	Extends: "global.CMBrowserMonoParent",
	member_b: -1,
	init: function(instance_string) {var cache_buster_0061;
		this.CMBrowserMonoParent$init(instance_string);
	},
	method: function () {var cache_buster_0062;
		this.member_b = -this.member_b;
		this.CMBrowserMonoParent$method(false);
	}
});
Lava.ClassManager.loadClasses([
	{
		path: "global.CMServerFullrefMonoParent",
		"extends": null,
		"implements": null,
		references: [
			function (instance_string) {var cache_buster_0063;

		this.instance_string = instance_string;

	},
			function (prevent_inline) {var cache_buster_0064;
		if (this.counter > 99)
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
	}
		],
		constructor: function() {var cache_buster_0065;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0066;
	var r=cd.references,
		s=cd.shared;

	p.init = r[0];
	p.method = r[1];

}
	},
	{
		path: "global.CMServerFullrefMonoChildA",
		"extends": "global.CMServerFullrefMonoParent",
		"implements": null,
		references: [
			function (instance_string) {var cache_buster_0067;

		this.instance_string = instance_string;

	},
			function (prevent_inline) {var cache_buster_0068;
		if (this.counter > 99)
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
	},
			function (instance_string) {var cache_buster_0069;
		this.CMServerFullrefMonoParent$init(instance_string);
	},
			function () {var cache_buster_0070;
		this.member_a = -this.member_a;
		this.CMServerFullrefMonoParent$method(false);
	}
		],
		constructor: function() {var cache_buster_0071;
this.member_a = 1;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0072;
	var r=cd.references,
		s=cd.shared;

	p.init = r[2];
	p.method = r[3];
	p.CMServerFullrefMonoParent$init = r[0];
	p.CMServerFullrefMonoParent$method = r[1];

}
	},
	{
		path: "global.CMServerFullrefMonoChildB",
		"extends": "global.CMServerFullrefMonoParent",
		"implements": null,
		references: [
			function (instance_string) {var cache_buster_0073;

		this.instance_string = instance_string;

	},
			function (prevent_inline) {var cache_buster_0074;
		if (this.counter > 99)
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
	},
			function (instance_string) {var cache_buster_0075;
		this.CMServerFullrefMonoParent$init(instance_string);
	},
			function () {var cache_buster_0076;
		this.member_b = -this.member_b;
		this.CMServerFullrefMonoParent$method(false);
	}
		],
		constructor: function() {var cache_buster_0077;
this.member_b = -1;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0078;
	var r=cd.references,
		s=cd.shared;

	p.init = r[2];
	p.method = r[3];
	p.CMServerFullrefMonoParent$init = r[0];
	p.CMServerFullrefMonoParent$method = r[1];

}
	},
	{
		path: "global.CMServerPartialrefMonoParent",
		"extends": null,
		"implements": null,
		constructor: function() {var cache_buster_0079;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0080;
	var r=cd.references,
		s=cd.shared;

	p.init = r[0];
	p.method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0081;

		this.instance_string = instance_string;

	},
			function (prevent_inline) {var cache_buster_0082;
		if (this.counter > 99)
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
	}
		]
	},
	{
		path: "global.CMServerPartialrefMonoChildA",
		"extends": "global.CMServerPartialrefMonoParent",
		"implements": null,
		constructor: function() {var cache_buster_0083;
this.member_a = 1;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0084;
	var r=cd.references,
		s=cd.shared;

	p.init = r[2];
	p.method = r[3];
	p.CMServerPartialrefMonoParent$init = r[0];
	p.CMServerPartialrefMonoParent$method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0085;
		this.CMServerPartialrefMonoParent$init(instance_string);
	},
			function () {var cache_buster_0086;
		this.member_a = -this.member_a;
		this.CMServerPartialrefMonoParent$method(false);
	}
		]
	},
	{
		path: "global.CMServerPartialrefMonoChildB",
		"extends": "global.CMServerPartialrefMonoParent",
		"implements": null,
		constructor: function() {var cache_buster_0087;
this.member_b = -1;
this.counter = 0;
this.instance_array = [];
this.instance_string = "";
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0088;
	var r=cd.references,
		s=cd.shared;

	p.init = r[2];
	p.method = r[3];
	p.CMServerPartialrefMonoParent$init = r[0];
	p.CMServerPartialrefMonoParent$method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0089;
		this.CMServerPartialrefMonoParent$init(instance_string);
	},
			function () {var cache_buster_0090;
		this.member_b = -this.member_b;
		this.CMServerPartialrefMonoParent$method(false);
	}
		]
	},
	{
		path: "global.CMServerPartialrefPolyParent",
		"extends": null,
		"implements": null,
		constructor: function() {var cache_buster_0091;
this.instance_array = [];
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0092;
	var r=cd.references,
		s=cd.shared;

	p.counter = 0;
	p.instance_string = "";
	p.init = r[0];
	p.method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0093;

		this.instance_string = instance_string;

	},
			function (prevent_inline) {var cache_buster_0094;
		if (this.counter > 99)
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
	}
		]
	},
	{
		path: "global.CMServerPartialrefPolyChildA",
		"extends": "global.CMServerPartialrefPolyParent",
		"implements": null,
		constructor: function() {var cache_buster_0095;
this.instance_array = [];
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0096;
	var r=cd.references,
		s=cd.shared;

	p.member_a = 1;
	p.init = r[2];
	p.method = r[3];
	p.counter = 0;
	p.instance_string = "";
	p.CMServerPartialrefPolyParent$init = r[0];
	p.CMServerPartialrefPolyParent$method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0097;
		this.CMServerPartialrefPolyParent$init(instance_string);
	},
			function () {var cache_buster_0098;
		this.member_a = -this.member_a;
		this.CMServerPartialrefPolyParent$method(false);
	}
		]
	},
	{
		path: "global.CMServerPartialrefPolyChildB",
		"extends": "global.CMServerPartialrefPolyParent",
		"implements": null,
		constructor: function() {var cache_buster_0099;
this.instance_array = [];
this.init.apply(this, arguments);
},
		prototype_generator: function(cd,p) {var cache_buster_0100;
	var r=cd.references,
		s=cd.shared;

	p.member_b = -1;
	p.init = r[2];
	p.method = r[3];
	p.counter = 0;
	p.instance_string = "";
	p.CMServerPartialrefPolyParent$init = r[0];
	p.CMServerPartialrefPolyParent$method = r[1];

},
		own_references: [
			function (instance_string) {var cache_buster_0101;
		this.CMServerPartialrefPolyParent$init(instance_string);
	},
			function () {var cache_buster_0102;
		this.member_b = -this.member_b;
		this.CMServerPartialrefPolyParent$method(false);
	}
		]
	}
]);
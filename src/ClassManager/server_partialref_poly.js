Lava.ClassManager.is_monomorphic = false;

Lava.ClassManager.define(
"global.CMServerPartialrefPolyParent",
{
	counter: 0,
	instance_array: [],
	instance_string: "",

	init: function(instance_string) {

		this.instance_string = instance_string;

	},

	method: function (prevent_inline) {
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
	}
});

Lava.ClassManager.define(
"global.CMServerPartialrefPolyChildA",
{
	Extends: "global.CMServerPartialrefPolyParent",
	member_a: 1,
	init: function(instance_string) {
		this.CMServerPartialrefPolyParent$init(instance_string);
	},
	method: function () {
		this.member_a = -this.member_a;
		this.CMServerPartialrefPolyParent$method(false);
	}
});

Lava.ClassManager.define(
"global.CMServerPartialrefPolyChildB",
{
	Extends: "global.CMServerPartialrefPolyParent",
	member_b: -1,
	init: function(instance_string) {
		this.CMServerPartialrefPolyParent$init(instance_string);
	},
	method: function () {
		this.member_b = -this.member_b;
		this.CMServerPartialrefPolyParent$method(false);
	}
});
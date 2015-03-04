
// WARNING! You do not construct these objects with "new" operator, instead you should do it like this:
// var instance = AugmentPrototypalChildA.create("a");

// This is slower than augment/classical_inheritance.js,
// so there is no reason to include it.

function _augment_constructor(args, base) {
	base.init.apply(this, args);
}

var _augment_instance = {
	is: function (object) {
		return object.isPrototypeOf(this);
	},
	create: function () {
		return augment(this, _augment_constructor, arguments);
	}
};

var AugmentPrototypalParent = augment(_augment_instance, function () {
	this.init = function (instance_string) {
		this.counter = 0;
		this.instance_array = [];
		this.instance_string = instance_string;
	};
	this.method = function (prevent_inline) {
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
});

var AugmentPrototypalChildA = augment(AugmentPrototypalParent, function (parent) {
	this.init = function (instance_string) {
		this.member_a = 1;
		parent.init.call(this, instance_string);
	};

	this.method = function () {
		this.member_a = -this.member_a;
		parent.method.call(this, false);
	};
});

var AugmentPrototypalChildB = augment(AugmentPrototypalParent, function (parent) {
	this.init = function (instance_string) {
		this.member_b = -1;
		parent.init.call(this, instance_string);
	};

	this.method = function () {
		this.member_b = -this.member_b;
		parent.method.call(this, false);
	};
});
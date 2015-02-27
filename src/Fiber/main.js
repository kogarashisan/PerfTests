
var FiberParent = Fiber.extend(function() {
	return {
		init: function(instance_string) {
			this.counter = 0;
			this.instance_array = [];
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
	}
});

var FiberChildA = FiberParent.extend(function(base) {
	return {
		init: function (instance_string) {
			this.member_a = 1;
			base.init.call(this, instance_string);
		},
		method: function () {
			this.member_a = -this.member_a;
			base.method.call(this, false);
		}
	}
});

var FiberChildB = FiberParent.extend(function(base) {
	return {
		init: function (instance_string) {
			this.member_b = -1;
			base.init.call(this, instance_string);
		},
		method: function () {
			this.member_b = -this.member_b;
			base.method.call(this, false);
		}
	}
});
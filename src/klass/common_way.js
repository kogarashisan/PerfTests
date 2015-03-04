
var KlassParent = klass(function (instance_string) {
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
})
.methods({
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

var KlassChildA = KlassParent.extend(function (name) {
	this.member_a = 1;
})
.methods({
	method: function() {
		this.member_a = -this.member_a;
		this.supr(false);
	}
});

var KlassChildB = KlassParent.extend(function (name) {
	this.member_b = 1;
})
.methods({
	method: function() {
		this.member_b = -this.member_b;
		this.supr(false);
	}
});
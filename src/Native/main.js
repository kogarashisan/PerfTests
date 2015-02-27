
var NativeParent = function(instance_string) {
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
};

NativeParent.prototype.method = function (prevent_inline) {
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

var NativeChildA = function(instance_string) {
	this.member_a = 1;
	NativeParent.call(this, instance_string);
};
__extend(NativeChildA, NativeParent);
NativeChildA.prototype.method = function() {
	this.member_a = -this.member_a;
	NativeParent.prototype.method.call(this, false);
};

var NativeChildB = function(instance_string) {
	this.member_b = -1;
	NativeParent.call(this, instance_string);
};
__extend(NativeChildB, NativeParent);
NativeChildB.prototype.method = function() {
	this.member_b = -this.member_b;
	NativeParent.prototype.method.call(this, false);
};
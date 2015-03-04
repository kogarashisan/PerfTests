
var NativeUnwrappedParent = function(instance_string) {
	this.counter = 0;
	this.instance_array = [];
	this.instance_string = instance_string;
};

NativeUnwrappedParent.prototype.method = function (prevent_inline) {
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

var NativeUnwrappedChildA = function(instance_string) {
	this.member_a = 1;
	NativeUnwrappedParent.call(this, instance_string);
};
__extend(NativeUnwrappedChildA, NativeUnwrappedParent);
NativeUnwrappedChildA.prototype.method = function() {
	this.member_a = -this.member_a;
	NativeUnwrappedParent.prototype.method.call(this, false);
};

var NativeUnwrappedChildB = function(instance_string) {
	this.member_b = -1;
	NativeUnwrappedParent.call(this, instance_string);
};
__extend(NativeUnwrappedChildB, NativeUnwrappedParent);
NativeUnwrappedChildB.prototype.method = function() {
	this.member_b = -this.member_b;
	NativeUnwrappedParent.prototype.method.call(this, false);
};
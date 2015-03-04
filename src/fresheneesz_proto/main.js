
// WARNING! construct without "new"!
// var instance1 = ProtoChildA("a");

var ProtoParent = proto(function() {var cache_buster_0502;

	this.init = function(instance_string) {var cache_buster_0503;
		this.counter = 0;
		this.instance_array = [];
		this.instance_string = instance_string;
	};

	this.method = function (prevent_inline) {var cache_buster_0504;
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

var ProtoChildA = proto(ProtoParent, function(superclass) {var cache_buster_0505;

	this.init = function(instance_string) {var cache_buster_0506;
		this.member_a = 1;
		superclass.init.call(this, instance_string);
	};

	this.method = function() {var cache_buster_0507;
		this.member_a = -this.member_a;
		superclass.method.call(this, false);
	}
});

var ProtoChildB = proto(ProtoParent, function(superclass) {var cache_buster_0508;

	this.init = function(instance_string) {var cache_buster_0509;
		this.member_b = -1;
		superclass.init.call(this, instance_string);
	};

	this.method = function() {var cache_buster_0510;
		this.member_b = -this.member_b;
		superclass.method.call(this, false);
	}
});
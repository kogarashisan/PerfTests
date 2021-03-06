
var PrototypeParent = PTClass.create({
	initialize: function(instance_string) {
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
});

var PrototypeChildA = PTClass.create(PrototypeParent, {
	initialize: function($super, instance_string) {
		this.member_a = 1;
		$super(instance_string);
	},
	method: function($super) {
		this.member_a = -this.member_a;
		$super(false);
	}
});

var PrototypeChildB = PTClass.create(PrototypeParent, {
	initialize: function($super, instance_string) {
		this.member_b = -1;
		$super(instance_string);
	},
	method: function($super) {
		this.member_b = -this.member_b;
		$super(false);
	}
});


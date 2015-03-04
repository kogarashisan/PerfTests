
/*
Each model exports two children into window, for example:
	TypeScriptChildA and TypeScriptChildB

This code creates 5 instances of each child for each model
and stores them in global model_instances array.

Model test then can be done as follows:

var instances = model_instances[0]; // TypeScript
// just a large loop
for (var i = 0; i < 100000; i++) {
	// call `method` on each of 10 different instances
	for (var c = 0; c < 10; c++) {
		instances[c].method();
	}
}
*/

var model_names = [
	/* 0  */'TypeScript',
	/* 1  */'CMBrowserMono', // ClassManager
	/* 2  */'CMBrowserPoly', // ClassManager
	/* 3  */'CMServerFullrefMono', // ClassManager
	/* 4  */'CMServerPartialrefMono', // ClassManager
	/* 5  */'CMServerPartialrefPoly', // ClassManager
	/* 6  */'DNW_IW_', // DotNetWise inheritWith
	/* 7  */'DNW_FC_', // DotNetWise fastClass
	/* 8  */'Fiber',
	/* 9  */'JR', // John Resig
	/* 10 */'NativeUnwrapped',
	/* 11 */'NativeWrapped',
	/* 12 */'Klass', // klass
	/* 13 */'AugmentClassical' // augment
];

var model_instances = [];

for (var model_index = 0; model_index < model_names.length; model_index++) {
	var constructorA = window[model_names[model_index] + 'ChildA'];
	var constructorB = window[model_names[model_index] + 'ChildB'];
	model_instances[model_index] = [
		new constructorA("a1"),
		new constructorB("b1"),
		new constructorA("a2"),
		new constructorB("b2"),
		new constructorA("a3"),
		new constructorB("b3"),
		new constructorA("a4"),
		new constructorB("b4"),
		new constructorA("a5"),
		new constructorB("b5")
	];

	// warm-up loop
	for (var dummy = 0; dummy < 5; dummy++) {
		for (var c = 0; c < 10; c++) {
			model_instances[model_index][c].method();
		}
	}
}
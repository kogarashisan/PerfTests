
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

var model_constructors = [];

for (var model_index = 0; model_index < model_names.length; model_index++) {
	var constructorA = window[model_names[model_index] + 'ChildA'];
	var constructorB = window[model_names[model_index] + 'ChildB'];
	model_constructors[model_index] = {
		A: constructorA,
		B: constructorB
	}
}
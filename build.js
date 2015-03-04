
var fs = require('fs'),
	Lava = require('lava');

Lava.ClassManager.registerRootNamespace("global", global);

function readFile(path) {

	return fs.readFileSync(path, {encoding: 'utf8'});

}

function exportClassManagerClasses() {

	var batchExport = function(class_names) {

		var result = [],
			export_data;

		for (var i = 0, count = class_names.length; i < count; i++) {
			export_data = Lava.ClassManager.exportClass(class_names[i]);
			delete export_data.source_object;
			delete export_data.skeleton;
			result.push(export_data);
		}

		return result;

	};

	eval(readFile("src/ClassManager/server_fullref_mono.js"));
	eval(readFile("src/ClassManager/server_partialref_mono.js"));
	eval(readFile("src/ClassManager/server_partialref_poly.js"));

	var exported_classes = batchExport([
		"global.CMServerFullrefMonoParent",
		"global.CMServerFullrefMonoChildA",
		"global.CMServerFullrefMonoChildB",
		"global.CMServerPartialrefMonoParent",
		"global.CMServerPartialrefMonoChildA",
		"global.CMServerPartialrefMonoChildB",
		"global.CMServerPartialrefPolyParent",
		"global.CMServerPartialrefPolyChildA",
		"global.CMServerPartialrefPolyChildB"
	]);

	for (var i = 0; i < 3; i++) {
		delete exported_classes[i].own_references;
	}
	for (i = 3; i < 9; i++) {
		delete exported_classes[i].references;
	}

	return "Lava.ClassManager.loadClasses(" + Lava.serializer.serialize(exported_classes) + ");"

}

var result = [
	"\n\n/*\nThis file was generated by a script.\n" +
	"Please, visit\n\thttps://github.com/kogarashisan/PerfTests\n" +
	"to see the actual source and get link to the latest official test version on jsperf.\n*/\n\n",
	readFile("src/top.js"),
	readFile("src/TypeScript/result.js"),
	//readFile("src/Prototype/main.js"), // it's too slow, like 1% of native. No reason to include it with the others.
	readFile("src/Native/unwrapped.js"),
	readFile("src/Native/wrapped.js"),
	readFile("src/JRClass/main.js"),
	readFile("src/Fiber/main.js"),
	readFile("src/DotNetWise/fastClass.js"),
	readFile("src/DotNetWise/inheritWith.js"),
	readFile("src/ClassManager/browser_mono.js"),
	readFile("src/ClassManager/browser_poly.js"),
	exportClassManagerClasses(),
	readFile("src/klass/common_way.js"),
	readFile("src/augment/classical_inheritance.js")
	//readFile("src/fresheneesz_proto/main.js"), // it's just another one from over 100 class systems. Here by accident.
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// append unique var declarations to each method in the tests to prevent the source being reused by Chrome compiler

var bundle_content = result.join("\n");
var cache_buster_id = 0;
function getNextCacheBuster() {
	var s = "000000000" + (cache_buster_id++);
	return "var cache_buster_" + s.substr(s.length-4) + ";";
}

bundle_content = bundle_content.replace(/function[^\(]*\([^\)]*\)\s*\{/g, function (all) {
	return all + getNextCacheBuster();
});

// end
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// it must be inlined, cause otherwise closure-wrapped classes like TypeScript will have to look it up to the window scope
bundle_content = bundle_content.replace(/\>\s+THRESHOLD/g, "> 99");

fs.writeFileSync("export/inheritance-bundle.js", bundle_content);

result = [
	readFile("dependencies/jrclass.js"),
	readFile("dependencies/ptclass.js"),
	readFile("node_modules/fast-class/FastClass.js"),
	readFile("node_modules/fiber/src/fiber.js"),
	readFile("node_modules/lava-class-manager/lib/class_manager.js"),
	readFile("dependencies/augment.js"),
	readFile("dependencies/klass.js")
];

fs.writeFileSync("export/inheritance-dependencies.js", result.join("\n"));
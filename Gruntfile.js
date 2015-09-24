var grunt = require("grunt");

module.exports = function(){
	grunt.initConfig({
		nodemon:{
			dev:{
				src:["server.js"],
				ignore:["public/**/**/**"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-nodemon");
	grunt.registerTask("serve", ["nodemon"]);
};

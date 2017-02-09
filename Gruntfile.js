module.exports = function (grunt) {
	//Configure the Grunt Files
    grunt.initConfig({

        //Ready the package
        pkg: grunt.file.readJSON('package.json'),

		//Name of the grunt plugin
    	cssmin: {
        	combine: {
            	files:{
                	"css/main.css": ['css/testOne.css','css/testTwo.css']
            	}
        	}
    	},

    	//uglify
    	uglify: {
        	dist: {
            	files:{
                	"js/Test.min.js": ['js/Test.js']
            	}
        	}
    	}

	});

    //Load the grunt
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    //Run the tasks
    grunt.registerTask('default',['cssmin', 'uglify']);

};
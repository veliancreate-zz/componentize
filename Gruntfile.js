module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/angular_app/**/*.js']
    },
    
    sass: {
      dist:{
        files: {
          'app/site/public/css/main.css' : 'sass/main.scss'
        }
      }
    },

    watch: {
      source: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['jshint']
      }
    },

    protractor: {
      options: {
        // Location of your protractor config file
        configFile: "conf.js",

        // Do you want the output to use fun colors?
        noColor: false,

        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,

        // Additional arguments that are passed to the webdriver command
        args: { }
      },
      e2e: {
        options: {
          // Stops Grunt process if a test fails
          keepAlive: false
        }
      },
      continuous: {
        options: {
          keepAlive: true
        }
      }
    },

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      },
      prod: {
        options: {
          script: 'path/to/prod/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },

    protractor_webdriver: {
      options: {
        // Task-specific options go here. 
      },
      your_target: {
        // Target-specific file lists and/or options go here. 
      },
    },

    jasmine: {
      files: 'spec/cartSpec.js'
    },

  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['jshint', 'express:dev', 'protractor_webdriver', 'protractor:e2e']);
  grunt.registerTask('travis', ['jshint', 'express:dev', 'protractor:e2e']);

};
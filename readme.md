# How to set up Gulp with an ExpressionEngine project

I freaking love working with technologies like Grunt and Gulp, and wanted to share how to get my current EE front-end workflow set up. With a few tweaks, this can also be used with virtually any other sites (I've used it with Laravel, static sites, Craft, etc).

## Install Node.js

* If Node is not yet installed on the machine, it will need to be [installed](http://nodejs.org/download/)


## Install Gulp (if needed)

* If Gulp has never been set up on the machine, the gulp CLI will also need to be installed by running `npm install gulp -g`

### Install Gulp for the project (if needed)

If a package.json file already exists with list of all of the dependencies that Gulp will need for the project, then you can simply switch to the project root directory in the site terminal and run the command `npm install`. This only needs to happen once so that the dependencies can be downloaded for the project.

If a package.json file does not exist, switch to the project root directory for the site in a terminal. For this configuration, you can install gulp and the needed dependencies using the command `npm install gulp gulp-compass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-notify gulp-livereload gulp-plumber --save-dev`. You only need to do this once so that the dependencies can be downloaded for the project.


## Add the gulp.js file

Copy the gulp.js file (below) to the base of your site. The provided gulp.js file is set up to work with the following project directory structure.


## Project Directory Structure

* project root/
  * html/ (web root)
    * css/
    * js/
    * images/
  * src/
    * js/
      * plugins.js
      * site.js
      * [various .js files]
    * scss/
      * [various .scss files]
      * styles.scss
  * system/ (EE system folder)
  * templates/ (EE templates)
  * gulpfile.js
  * package.json (will be added when gulp is installed via CLI)
  * (gulp.png)[https://dl.dropboxusercontent.com/u/12922578/gulp.png]


## Start Growl

Make sure Growl is running, as notification will appear in it whenever the browser is livereloaded or whenever there is an error.


## Run Gulp

* To just compile the scripts and SCSS one time, simply run the default command `gulp`. You can also run any of the other task names, like `gulp styles`.
* To watch the templates, .scss, and .js files for changes, and to automatically compile and minify the relevant files, run the command `gulp live`. If the livereload browser extensions are installed and enabled, the browser will automatically refresh when any changes are made to style and javascript files in the *src* directory, or to any template files in the *templates* directory.


## Customize

You can change the title and image that show up in the Growl messages, by editing the `notifyInfo` object values. :)
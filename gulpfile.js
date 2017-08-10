var gulp = require("gulp");

gulp.task("say",function(){
        console.log(1111111);
});

var browserSync = require("browser-sync").create();

gulp.task("serve",function () {
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    buildblocks = require('html-build-blocks');

gulp.task('default', function () {
    var blocks = buildblocks.parseBlocks('src/**/*.html'),
        p = gulp.src(['/css/**/*.css', '/js/**/*.js']),
        add_block_pipe = function(path, asset_paths) {
            var f = filter(asset_paths),
                r = f.restore();
            p = p.pipe(f).pipe(concat(path)).pipe(r)
        };

    Object.keys(blocks).forEach(function(block) {
        
            console.log(block);
        //add_block_pipe(path, blocks[path])
    });

    return p.pipe(gulp.dest('dist'));
});
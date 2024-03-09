const path = require('path'); // import the path module

const myPath =
    '/home/tanmoy_og/Documents/Coding/Web Dev/test/chapter_02-important-core modules-and-server/path.js'; // path to the file

console.log(path.basename(myPath)); // get the base name of the file
console.log(path.dirname(myPath)); // get the directory name of the file
console.log(path.extname(myPath)); // get the extension of the file
console.log(path.parse(myPath)); // get the parsed object of the file
console.log(path.join(__dirname, 'test', 'hello.html')); // join the paths
console.log(path.resolve(__dirname, 'test', 'hello.html')); // resolve the paths
console.log(
    path.normalize(
        '/home/tanmoy_og/Documents/Coding/Web Dev/test/chapter_02-important-core modules-and-server/path.js',
    ), // normalize the path
);
console.log(
    path.isAbsolute(
        '/home/tanmoy_og/Documents/Coding/Web Dev/test/chapter_02-important-core modules-and-server/path.js'
    ), // check if the path is absolute
);
console.log(path.isAbsolute('chapter_02-important-core modules-and-server/path.js'));
console.log(
    path.relative(
        '/home/tanmoy_og/Documents/Coding/Web Dev/test/chapter_02-important-core modules-and-server/path.js',
        '/home/tanmoy_og/Documents/Coding/Web Dev/test/chapter_02-important-core modules-and-server/os.js'
    ), // get the relative path
);
console.log(path.sep); // get the separator
console.log(path.delimiter); // get the delimiter
console.log(path.posix); // get the posix object
console.log(path.win32); // get the win32 object
console.log(path.win32.basename('C:\\temp\\myfile.html')); // get the basename for win32

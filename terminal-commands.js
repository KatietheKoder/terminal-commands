const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (error, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = (fileNameAndType) => {
    fs.writeFile(fileNameAndType, '', 'utf8', error => {
        if (error)
            throw error;

        console.log(`${fileNameAndType} was created!`);
    });
};

module.exports.mkdir = (directoryName) => {
    fs.mkdir('./' + directoryName, error => {
        if (error)
            throw error;

        console.log('new directory made');
    });
};
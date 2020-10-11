var gProjs = [];

_createProjects();

function getProjects() {
    return gProjs;
}

function _createProject(id, name, title, url, labels) {
    return {
        id,
        name,
        title,
        desc: makeLorem(),
        url,
        publishedAt: Date.now(),
        labels
    }
}

function _createProjects() {
    gProjs.push(_createProject('minesweeper', 'Minesweeper', 'Open all safe squares,avoid the mines!', 'https://danadubrov.github.io/minesweeper/', ['matrixes']));
    gProjs.push(_createProject('inPictureGame', 'In-Picture Game', 'Guess the Fruit', 'https://danadubrov.github.io/picture-game/', ['matrixes']));
    gProjs.push(_createProject('touchNums', 'Touch Nums', 'Lets count', 'https://danadubrov.github.io/touch-the-numbers/', ['matrixes']));
    gProjs.push(_createProject('guessMe', 'Guess Me', 'Playing a guessing game', 'https://danadubrov.github.io/guess-me/', ['MVC']));
    gProjs.push(_createProject('ballBoard', 'Ball Board', 'Collect those flowers', 'https://danadubrov.github.io/ball-board/', ['matrixes']));
}

function getProjById(id) {
    return gProjs.find(function (project) {
        return id === project.id;
    })
}
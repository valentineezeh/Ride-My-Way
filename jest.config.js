module.exports = {
    setupFiles: [
        'raf/polyfill',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/e2e-test/'
    ],
    collectCoverage: true,
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>./client/tests/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/client/tests/__mocks__/styleMock.js'
    }
};

module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(js|jsx|ts|tsx)', '**/?(*.)+(spec|test).+(js|jsx|ts|tsx)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};

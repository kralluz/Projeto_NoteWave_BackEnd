module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globalSetup: './src/__tests__/initializeTestDb.js'
};

const databaseconfig = {
    test: {
        dialect: 'sqlite',
        storage: ':memory:',
    }
}
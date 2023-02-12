module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
    ],
    'overrides': [],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react/jsx-indent': [2, 4],
        'object-curly-spacing': [2, 'always'],
        'comma-dangle': [2, 'always-multiline'],
        'no-unused-vars': 1,
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 0,
        'i18next/no-literal-string': ['error', {
            markUpOnly: true,
        }],
        'max-len': [2, {
            'code': 120,
            'ignoreComments': true,
        }],
    },
};

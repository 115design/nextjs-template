module.exports = {
	ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', '!.storybook'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	plugins: ['@typescript-eslint', 'react'],
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// 必要に応じてルールを追加
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// 'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': [2], // consoleの利用を許可しない。node環境ならデフォルトで無効
		// 'brace-style': ['error', 'stroustrup'], // elseの直前を改行しないことを許可しない。同行{}を置くことを許可しない
		// 'comma-style': [2, 'last'], // カンマのスタイル(行頭/行末)を指定する
		'consistent-this': ['error', 'self'], // 一貫性のないthisのエイリアスを許可しない
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 関数宣言か関数式かスタイルを統一することを要求する
		// 'indent': ['error', 'tab'], // インデントをタブかスペースn個かを指定する
		'new-cap': [2], // 小文字始まりのコンストラクタ関数を許可しない
		'no-continue': [2], // continueの使用を許可しない
		// 'no-trailing-spaces': ['error', { skipBlankLines: true }], // 行末の不要なスペースを許可しない
		// 'semi': [2, 'always'], // セミコロンの省略を許可しない
		'wrap-regex': [2], // 括弧で囲われていない正規表現リテラルを許可しない
		'object-shorthand': [0, 'always'], // objectリテラルのショートハンドを強制する
		'prefer-const': [2], // letで宣言されている変数で、変更されることのないものに対してconstへの変更を強制する
		'no-bitwise': [2], // ビット演算を許可しない
	},
};

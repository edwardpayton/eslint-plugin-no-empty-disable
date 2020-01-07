"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const no_empty_eslint_disable_1 = require("./no-empty-eslint-disable");
const eslint_1 = require("eslint");
const ruleTester = new eslint_1.RuleTester({
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {}
    }
});
ruleTester.run('no-empty-eslint-disable', no_empty_eslint_disable_1.noEmptyEslintDisable, {
    invalid: [
        {
            code: `var x = 1; // eslint-disable-line`,
            errors: [{ messageId: 'messageDisable' }]
        },
        {
            code: `// eslint-disable-next-line`,
            errors: [{ messageId: 'messageDisable' }]
        },
        {
            code: `/* eslint-disable */`,
            errors: [{ messageId: 'messageDisable' }]
        }
    ],
    valid: [
        {
            code: `console.log('a') // eslint-disable-line no-console`
        },
        {
            code: `// eslint-disable-next-line no-console`
        },
        {
            code: `/* eslint-disable no-console */`
        }
    ]
});
//# sourceMappingURL=no-eslint-disable.test.js.map
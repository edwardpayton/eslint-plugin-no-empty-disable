import { noEmptyEslintDisable } from './no-empty-eslint-disable';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {}
  }
});

ruleTester.run('no-empty-eslint-disable', noEmptyEslintDisable, {
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

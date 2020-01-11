<p style="float: left; margin-bottom: 50px">
<a href="https://www.npmjs.com/package/eslint-plugin-no-empty-disable" target="_blank">
<img src="https://badgen.net/npm/v/eslint-plugin-no-empty-disable" /> 
</a>
<a href="https://www.npmjs.com/package/eslint-plugin-no-empty-disable" target="_blank">
<img src="https://badgen.net/npm/license/eslint-plugin-no-empty-disable" /> 
</a>
<a href="https://www.npmjs.com/package/eslint-plugin-no-empty-disable" target="_blank">
<img src="https://badgen.net/npm/types/eslint-plugin-no-empty-disable"/>
</a>
<a href="https://packagephobia.now.sh/result?p=eslint-plugin-no-empty-disable" target="_blank">
<img src="https://badgen.net/packagephobia/install/eslint-plugin-no-empty-disable" /> 
</a>
<a href="https://circleci.com/gh/edwardpayton/eslint-plugin-no-empty-disable" target="_blank">
<img src="https://badgen.net/circleci/github/edwardpayton/eslint-plugin-no-empty-disable"/> 
</a>
<a href="https://app.codacy.com/manual/edwardjpayton/eslint-plugin-no-empty-disable/dashboard" target="_blank">
 <img src="https://badgen.net/codacy/grade/f76460171bb84f2480d03e67e5227497" />
</a>
<img src="https://badgen.net/dependabot/edwardpayton/eslint-plugin-no-empty-disable/?icon=dependabot"/>
</p>

# eslint-plugin-no-eslint-disable

Disallow `eslint-disable` comments without at least one rule.

## INSTALL

`npm i -D eslint-plugin-no-empty-disable`

## RULE ID

`no-empty-eslint-disable/no-empty-eslint-disable`

## USAGE

```jsonc
// .eslintrc
{
  ...
  "plugins": ["no-empty-eslint-disable"]
  ...
  "rules": {
    ...
    "no-empty-eslint-disable/no-empty-eslint-disable": "error"
    ...
  }
}
```

## EXAMPLES

### These will error

- `const x = 1; // eslint-disable-line`
- `// eslint-disable-next-line`
- `/* eslint-disable */`

### These are okay

- `console.log('') // eslint-disable-line no-console`
- `// eslint-disable-next-line eqeqeq`
- `/* eslint-disable no-empty */`

## TODO

- Uses tslint which has now been depecated. Migrate to eslint

Heavily inspired by [https://github.com/unlight/eslint-plugin-no-eslint-disable]

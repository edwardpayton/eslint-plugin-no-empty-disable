# eslint-plugin-no-eslint-disable

Disallow `eslint-disable` comments without at least one rule.

## RULE ID

`no-empty-eslint-disable/no-empty-eslint-disable`

## USAGE

```
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

### TODO

- Uses tslint which has now been depecated. Migrate to eslint

Heavily inspired by [https://github.com/unlight/eslint-plugin-no-eslint-disable]

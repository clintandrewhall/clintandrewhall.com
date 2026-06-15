const { RuleTester } = require('eslint');
const rules = require('./eslint-local-rules.cjs');

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

const rule = rules['no-multi-value-css-properties'];

ruleTester.run('no-multi-value-css-properties', rule, {
  valid: [
    {
      code: `
            const styles = css\`
              margin-top: 10px;
              margin-bottom: 20px;
            \`;
          `,
    },
    {
      code: `
            const styles = css\`
              padding-left: 15px;
              padding-right: 25px;
            \`;
          `,
    },
    {
      code: `
            const styles = css\`
              background-color: red;
              background-image: url('image.png');
            \`;
          `,
    },
  ],
  invalid: [
    {
      code: `
            const styles = css\`
              margin: 10px 20px;
            \`;
          `,
      errors: [
        {
          messageId: 'disallowedProperty',
          data: {
            property: 'margin',
          },
        },
      ],
    },
    {
      code: `
            const styles = css\`
              padding: 10px 20px 30px 40px;
            \`;
          `,
      errors: [
        {
          messageId: 'disallowedProperty',
          data: {
            property: 'padding',
          },
        },
      ],
    },
    {
      code: `
            const styles = css\`
              background: red url('image.png') no-repeat;
            \`;
          `,
      errors: [
        {
          messageId: 'disallowedProperty',
          data: {
            property: 'background',
          },
        },
      ],
    },
  ],
});

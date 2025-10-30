/**
 * Unit tests for eslint-local-rules
 */

const { RuleTester } = require('eslint');
const rules = require('./eslint-local-rules.cjs');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

describe('no-multi-value-css-properties', () => {
  const rule = rules['no-multi-value-css-properties'];

  it('correctly identifies multi-value margin in CSS template literals', () => {
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
      ],
    });
  });

  it('correctly identifies multi-value padding in CSS template literals', () => {
    ruleTester.run('no-multi-value-css-properties', rule, {
      valid: [
        {
          code: `
            const styles = css\`
              padding-left: 15px;
              padding-right: 25px;
            \`;
          `,
        },
      ],
      invalid: [
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
      ],
    });
  });

  it('correctly identifies multi-value background in CSS template literals', () => {
    ruleTester.run('no-multi-value-css-properties', rule, {
      valid: [
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
  });
});

module.exports = {
  'no-multi-value-css-properties': {
    meta: {
      type: 'problem',
      docs: {
        description:
          'Disallow multi-value CSS properties (margin, padding, background, border) in Linaria atomic styles',
        category: 'Possible Errors',
        recommended: true,
      },
      messages: {
        disallowedProperty:
          'Property "{{ property }}" is disallowed in Linaria atomic styles. Use individual properties (e.g., margin-top, padding-left) instead.',
      },
      schema: [],
    },
    create(context) {
      const disallowedProperties = ['margin', 'padding', 'background', 'border'];
      const disallowedPattern = new RegExp(`^\\s*(${disallowedProperties.join('|')})\\s*:`, 'gm');

      return {
        TaggedTemplateExpression(node) {
          if (node.tag.name !== 'css') {
            return;
          }

          const quasis = node.quasi.quasis;
          quasis.forEach((quasi) => {
            const content = quasi.value.raw;
            let match;

            disallowedPattern.lastIndex = 0;

            while ((match = disallowedPattern.exec(content)) !== null) {
              const property = match[1];

              context.report({
                node: quasi,
                messageId: 'disallowedProperty',
                data: {
                  property,
                },
              });
            }
          });
        },
      };
    },
  },
};

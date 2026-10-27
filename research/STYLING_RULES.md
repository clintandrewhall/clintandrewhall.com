# Styling Rules

This project uses custom tooling to enforce CSS rules for Linaria atomic styles, replacing the problematic stylelint setup.

## Why Not Stylelint?

The linaria stylelint parser has a critical bug where the auto-fixer corrupts CSS template literal interpolations:

- Before: `var(${vars.spacing.step6})`
- After: `var(/* ${vars.spacing.step6}:3 */)`

This breaks the styling system, so we use alternative tools instead.

## Solutions

### 1. Alphabetical CSS Property Ordering

**Tool:** Prettier with `prettier-plugin-css-order`

**How it works:** Automatically sorts CSS properties alphabetically when you format your code.

**Usage:**

```bash
# Format all files
yarn format

# Check formatting without making changes
yarn format:check
```

**Configuration:** See `.prettierrc` - the plugin is configured with `cssDeclarationSorterOrder: "alphabetical"`

### 2. Disallowed Multi-Value Properties

**Tool:** Custom ESLint rule (`local-rules/no-multi-value-css-properties`)

**Why:** In Linaria atomic styles, multi-value properties like `margin: 10px 20px` generate multiple atomic classes instead of one, which is problematic.

**Disallowed properties:**

- `margin` → Use `margin-top`, `margin-right`, `margin-bottom`, `margin-left` instead
- `padding` → Use `padding-top`, `padding-right`, `padding-bottom`, `padding-left` instead
- `background` → Use `background-color`, `background-image`, etc. instead
- `border` → Use `border-top`, `border-right`, `border-bottom`, `border-left` instead

**How it works:** The custom ESLint rule scans CSS template literals tagged with `css` and reports errors for disallowed properties.

**Usage:**

```bash
# Run linting (includes the custom rule)
yarn lint
```

**Implementation:** See `eslint-local-rules.cjs` and `eslint.config.js`

## Example

```typescript
// ❌ BAD - Will trigger ESLint error
const badStyle = css`
  margin: 10px 20px;
  padding: 5px;
  background: red;
  border: 1px solid black;
`;

// GOOD - Individual properties
const goodStyle = css`
  background-color: red;
  border-top: 1px solid black;
  margin-top: 10px;
  padding-left: 5px;
`;
```

## Benefits

- No CSS corruption from buggy stylelint auto-fixer
- Alphabetical ordering still enforced via Prettier
- Multi-value properties still caught via ESLint
- TypeScript catches variable reference errors
- Runs in your existing lint workflow

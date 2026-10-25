# Shot & Sell Theme

Shared design tokens for Shot & Sell Web and Mobile.

## Scope

This package intentionally contains design foundations only. Web and React Native components remain platform-specific.

## Tokens

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Common sizes

## Usage

```ts
import { colors, spacing, typography } from "@shot-and-sell/theme";

const styles = {
  price: {
    color: colors.brand.primary,
    marginTop: spacing.sm,
    fontSize: typography.price.fontSize,
  },
};
```

## Design rules

- Brand red is used for Shot & Sell identity and price emphasis.
- Action blue is used for primary actions and interactive emphasis.
- Verified green is reserved for verified-account indicators and success states.
- White, neutral surfaces and dark text remain dominant.
- Listings are video-first; presentation components are implemented by each client application.

The token values are expected to evolve as the product is tested. Consumers should reference semantic tokens rather than hard-coded values.

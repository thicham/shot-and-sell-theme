export const typography = {
  fontFamily: "Inter",
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  web: {
    h1: { fontSize: 40, lineHeight: 48, fontWeight: 700 },
    h2: { fontSize: 28, lineHeight: 36, fontWeight: 700 },
  },
  mobile: {
    h1: { fontSize: 30, lineHeight: 36, fontWeight: 700 },
    h2: { fontSize: 24, lineHeight: 32, fontWeight: 700 },
  },
  cardTitle: { fontSize: 16, lineHeight: 24, fontWeight: 600 },
  body: { fontSize: 16, lineHeight: 24, fontWeight: 400 },
  metadata: { fontSize: 14, lineHeight: 20, fontWeight: 400 },
  price: { fontSize: 20, lineHeight: 28, fontWeight: 700 },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: 400 },
} as const;

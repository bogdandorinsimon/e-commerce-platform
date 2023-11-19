import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle?: true;
    body?: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: "IBM Plex Sans",
  h1: {
    fontSize: 34,
    fontWeight: 500
  },
  h2: {
    fontSize: 24,
    fontWeight: 500
  },
  h3: {
    fontSize: 20,
    fontWeight: 500
  },
  h4: {
    fontSize: 18,
    fontWeight: 500
  },
  h5: undefined,
  h6: undefined,
  subtitle: {
    fontSize: 16,
    fontWeight: 400
  },
  body: {
    fontSize: 16,
    fontWeight: 400
  },
  overline: {
    fontSize: 12,
    fontWeight: 400
  },
  caption: {
    fontSize: 12,
    fontWeight: 600
  }
};

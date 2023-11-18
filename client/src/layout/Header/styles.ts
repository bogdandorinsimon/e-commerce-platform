import { SxProps } from "@mui/material";

export const sxStyles = (): { [_: string]: SxProps } => ({
  title: {
    mr: 2,
    textDecoration: "none"
  },
  icon: {
    display: { xs: "none", md: "flex" },
    mr: 2
  },
  visibleOnMobile: {
    display: { xs: "flex", md: "none" }
  },
  desktopMenuContainer: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" }
  },
  navItem: {
    py: 2
  }
});

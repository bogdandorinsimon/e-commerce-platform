import { SxProps } from "@mui/material";

const DRAWER_WIDTH = 728;

export const sxStyles = (): { [_: string]: SxProps } => ({
  drawerContainer: {
    width: "100vw",
    height: "100vh",
    maxWidth: DRAWER_WIDTH
  },
  content: {
    height: "100%",
    p: 6
  },
  header: {
    px: 6,
    py: 4
  }
});

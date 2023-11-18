import { SxProps } from "@mui/material";

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    flexGrow: 1,
    p: "24px 40px 24px 16px",
    overflow: "auto",
    position: "relative"
  }
});

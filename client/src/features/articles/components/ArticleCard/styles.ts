import { SxProps } from "@mui/material";

const IMAGE_HEIGHT = 240;

export const sxStyles = (): { [_: string]: SxProps } => ({
  cardMedia: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    objectFit: "contain",
    height: IMAGE_HEIGHT,
    pb: 4
  }
});

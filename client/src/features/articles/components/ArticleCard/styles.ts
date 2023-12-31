import { SxProps } from "@mui/material";

const IMAGE_HEIGHT = 240;

export const sxStyles = (): { [_: string]: SxProps } => ({
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical"
  },
  cardMedia: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    objectFit: "contain",
    height: IMAGE_HEIGHT,
    p: 2,
    pb: 4
  },
  favoriteContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%"
  }
});

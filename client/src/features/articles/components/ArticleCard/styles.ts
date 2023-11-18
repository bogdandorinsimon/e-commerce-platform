import { SxProps } from "@mui/material";

const CARD_MAX_WIDTH = 345;
const IMAGE_HEIGHT = 240;

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    // maxWidth: CARD_MAX_WIDTH
  },
  image: {
    height: IMAGE_HEIGHT
  }
});

import { SxProps } from "@mui/material";

const ITEM_HEIGHT = 230;

export const sxStyles = (): { [_: string]: SxProps } => ({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: ITEM_HEIGHT
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  itemInfo: {
    flex: 1
  },
  rowSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 4
  },
  divider: {
    width: "100%",
    mb: 4
  },
  submit: {
    m: 8
  }
});

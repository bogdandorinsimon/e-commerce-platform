import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { SideDrawerOptions } from "models/components";
import { sxStyles } from "./styles";

export type Props = SideDrawerOptions & {
  open: boolean;
  onClose: () => void;
};

export const SideDrawer = ({ open, onClose, content, title }: Props) => {
  const classes = sxStyles();

  const renderHeader = () => (
    <Box sx={classes.header}>
      <Typography variant="h2">{title}</Typography>
      <IconButton onClick={onClose} size="small">
        <CloseIcon />
      </IconButton>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack sx={classes.drawerContainer}>
        {renderHeader()}
        <Box sx={classes.content}>{content}</Box>
      </Stack>
    </Drawer>
  );
};

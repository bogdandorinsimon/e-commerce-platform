import { AlertColor, ModalProps } from "@mui/material";
import { ReactNode } from "react";

export type HeaderNavItem = {
  id: string;
  title: string;
  onClick: () => void;
};

export type SnackbarOptions = {
  type: AlertColor;
  title: string;
  message?: string;
  vertical?: "bottom" | "top";
  horizontal?: "center" | "right" | "left";
};

export type DialogOptions = {
  title?: ModalProps["title"];
  description?: ModalProps["content"];
  confirmText?: string;
  cancelText?: string;
  permanentAction?: boolean;
};

export type SideDrawerOptions = {
  title: string;
  content: ReactNode;
};

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "helpers/constants";
import { useTranslate } from "hooks/useTranslate";
import { HeaderNavItem } from "models/components";

export const useNavItems = (): HeaderNavItem[] => {
  const { translate } = useTranslate();
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        id: "home",
        title: translate("home.title", "Home"),
        onClick: () => {
          navigate(ROUTER_PATH.ARTICLES);
        }
      },
      {
        id: "contact",
        title: translate("contact.title", "Contact"),
        onClick: () => {
          navigate(ROUTER_PATH.CONTACT);
        }
      },
      {
        id: "about",
        title: translate("about.title", "About"),
        onClick: () => {
          navigate(ROUTER_PATH.ABOUT);
        }
      }
    ],
    []
  );
};

import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";

const ContactPage = () => {
  const { translate } = useTranslate();

  return (
    <PageWrapper>
      <Typography>{translate("common.hello_world", "Hello World!")}</Typography>
    </PageWrapper>
  );
};

export default ContactPage;

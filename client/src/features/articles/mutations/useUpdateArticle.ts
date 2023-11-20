import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useSnackbar } from "context/SnackbarProvider/useSnackbar";
import { ARTICLE_KEYS } from "helpers/constants";
import { useTranslate } from "hooks/useTranslate";
import { Article } from "models/business";
import { updateArticle } from "../services";

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslate();
  const { openSnackbar } = useSnackbar();

  const { isLoading, isError, isSuccess, mutate } = useMutation<
    Article,
    AxiosError,
    Article
  >(updateArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(ARTICLE_KEYS.all);

      openSnackbar({
        type: "success",
        title: translate(
          "articles.updated_successfully",
          "Item updated successfully!"
        )
      });
    },
    onError: (fetchError: AxiosError) => {
      openSnackbar({
        type: "error",
        title: translate("common.error", "An error has occurred!"),
        message: fetchError.message
      });
    }
  });

  return { isLoading, isError, isSuccess, updateArticle: mutate };
};

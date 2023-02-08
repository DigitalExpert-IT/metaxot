import { Button, FormControl, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type FormType = {
  email: string;
};

export const FooterDropEmail = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = data => console.log(data);

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align={"start"} mt={"4"}>
        <Text>{t("common.footer.dropYourEmail")}</Text>
        <FormControl isRequired>
          <Input variant={"outline"} rounded="xl" {...register("email")} />
        </FormControl>
        <Button
          type="submit"
          colorScheme={"metaxot"}
          size="sm"
          textTransform={"capitalize"}
        >
          {t("common.send")}
        </Button>
      </VStack>
    </Stack>
  );
};

import { Button, ButtonProps } from "@chakra-ui/react";

export const ButtonShadow = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      colorScheme={"yellowMetaxot"}
      boxShadow={"yellow"}
      display={"block"}
      mx={"auto"}
      {...rest}
    >
      {children}
    </Button>
  );
};

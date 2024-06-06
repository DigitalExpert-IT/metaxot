import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Input, Button, Image, InputProps } from "@chakra-ui/react";
import { BNB_LOGO, XPC_LOGO } from "constant/tokenLogo";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TokenListType } from "./TokenList";

interface ITokenInput extends Omit<InputProps, "placeholder" | "label"> {
  name: string;
  selectedToken: TokenListType;
  // onClickToken: (origin: string) => void;
  origin: string;
  control?: Control<FieldValues, any>;
  defaultValue?: string | number;
  rules?: any;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
}

const TokenInput: React.FC<ITokenInput> = ({
  name,
  selectedToken,
  // onClickToken,
  control,
  defaultValue,
  value,
  origin,
  rules,
  disabled,
  placeholder,
  ...props
}) => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      borderRadius={15}
      background={"#424343"}
      my={2}
    >
      <Button
        minH={50}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        background={"#6779F3"}
        _hover={{ background: "#6779F3" }}
        gap={5}
        // onClick={() => onClickToken(origin)}
      >
        <Image
          src={selectedToken.iconUrl ?? XPC_LOGO}
          alt={`${selectedToken.name} logo`}
          maxW={8}
        />
        {selectedToken.name}
        {/* <ChevronDownIcon /> */}
      </Button>

      <Controller
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        name={name}
        render={({ field: { value, ...rest } }) => (
          <Input
            minH={50}
            background={"transparent"}
            _focus={{ background: "transparent", border: "unset" }}
            _hover={{ background: "transparent" }}
            placeholder={placeholder}
            disabled={disabled}
            value={value ?? ""}
            {...rest}
            {...props}
          />
        )}
      />
    </Box>
  );
};

export default TokenInput;

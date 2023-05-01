import React from "react";
import { Box } from "@mui/system";

import Input from "@/common/components/input";
import { wrapper } from "@/common/pages/test/input-page/InputPage.style";

const InputPage = () => {
  return (
    <Box sx={wrapper}>
      <Input placeholder="Enter username..." size="large" isDisabled />
      <br />
      <Input placeholder="Enter email..." type="email" isRequired />
      <br />
      <Input
        placeholder="Enter password..."
        variant="standard"
        type="password"
      />
      <br />
      <Input placeholder="Enter something..." variant="standard" size="small" />
      <br />
      <Input
        placeholder="Enter something..."
        variant="standard"
        size="small"
        type="date"
      />
    </Box>
  );
};

export default InputPage;

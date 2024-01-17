import React from "react";
import { Stack, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const TextComponent = ({
  id,
  headingValue,
  handleHeadingChange,
  paragraphValue,
  handleParagraphChange,
  isPreviewMode,
}) => {
  const inputBorderStyle = {
    "& .MuiOutlinedInput-root": {
      border: "none",
      "& fieldset": {
        border: "none",
      },
    },
  };

  const headingText = "Heading";
  const paragraphText =
    "When we show up to the present moment with all of our senses, we invite the world to fill us with joy. The pains of the past are behind us. The future has yet to unfold. But the now is full of beauty simply waiting for our attention.";

  const theme = createTheme(); // Customize the theme options as needed

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          placeholder={headingText}
          value={headingValue}
          onChange={handleHeadingChange}
          sx={inputBorderStyle}
          InputProps={{
            style: {
              fontSize: "1.8rem",
              fontWeight: "500",
              fontFamily: "inherit",
              color: "inherit",
            },
            readOnly: isPreviewMode,
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          multiline
          placeholder={paragraphText}
          value={paragraphValue}
          onChange={handleParagraphChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "none",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            style: {
              fontFamily: "inherit",
              color: "inherit",
            },
            readOnly: isPreviewMode,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default TextComponent;

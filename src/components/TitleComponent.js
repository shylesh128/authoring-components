import React from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "4px",
  padding: "8px",
  fontSize: "1.8rem",
  fontWeight: "500",
  fontFamily: "Roboto, Arial, sans-serif",
  color: "rgba(0, 0, 0, 0.87)",
  outline: "none",
  marginBottom: "16px",
};

const headingText = "Heading";
const paragraphText =
  "When we show up to the present moment with all of our senses, we invite the world to fill us with joy. The pains of the past are behind us. The future has yet to unfold. But the now is full of beauty simply waiting for our attention.";

const TextComponent = ({
  id,
  headingValue,
  handleHeadingChange,
  paragraphValue,
  handleParagraphChange,
  isPreviewMode,
}) => {
  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder={headingText}
        value={headingValue}
        onChange={handleHeadingChange}
        style={inputStyle}
        readOnly={isPreviewMode}
      />
      <textarea
        placeholder={paragraphText}
        value={paragraphValue}
        onChange={handleParagraphChange}
        style={{
          ...inputStyle,
          height: "150px",
          resize: "none",
        }}
        readOnly={isPreviewMode}
      ></textarea>
    </div>
  );
};

export default TextComponent;

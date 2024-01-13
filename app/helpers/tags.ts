const TAGS = {
  design: "設計",
  fend: "前端開發",
  book: "讀書筆記",
  life: "生活",
};

function isKeyOfTags(key: string): key is keyof typeof TAGS {
  return key in TAGS;
}

function getTagStyle(value: string) {
  switch (value) {
    case "design":
      return {};
    case "fend":
      return {
        background: "#F0FCFE",
        borderColor: "#B7D9E2",
        color: "#0C3756",
      };
    case "book":
      return {
        background: "#EDFBED",
        borderColor: "#B7E2C7",
        color: "#084A0D",
      };
    case "life":
      return {
        background: "#FEF0F0",
        borderColor: "#E2B7B7",
        color: "#6D0C12",
      };
    default:
      return {};
  }
}

function getTagName(value: string) {
  return isKeyOfTags(value) ? TAGS[value] : "";
}

export { getTagName, getTagStyle };

const TAGS = { design: "設計", fend: "前端開發", htdt: "HTDT", life: "生活" };

function isKeyOfTags(key: string): key is keyof typeof TAGS {
  return key in TAGS;
}

function getTagName(value: string) {
  return isKeyOfTags(value) ? TAGS[value] : "";
}

export { getTagName };

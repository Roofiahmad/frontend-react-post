export const LIMIT = 5;

export const STATUS = {
  PUBLISH: "publish",
  DRAFT: "draft",
  TRASH: "thrash",
};

export const TABS_LABEL = {
  [STATUS.PUBLISH]: "Published",
  [STATUS.DRAFT]: "Drafts",
  [STATUS.TRASH]: "Trashed",
};

export const TABS_LIST = [STATUS.PUBLISH, STATUS.DRAFT, STATUS.TRASH];

export const ENDPOINTS = {
  ARTICLES: "/articles/",
  ARTICLE: "/article/",
};

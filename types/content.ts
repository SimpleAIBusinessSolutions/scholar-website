export type ContentValue =
  | string
  | number
  | boolean
  | string[]
  | Record<string, unknown>
  | Record<string, unknown>[];

export type ContentData = Record<string, ContentValue>;

export type ContentRow = {
  id: number;
  site_key: string;
  page: string;
  section: string;
  key: string;
  published: ContentData;
  page_order?: number;
  section_order?: number;
  field_order?: string[];
};

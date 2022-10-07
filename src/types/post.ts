import { RenderRichTextData, ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text";

export type BodyType = RenderRichTextData<ContentfulRichTextGatsbyReference>;

export type ContentfulPost = {
    id: string;
    title: string;
    body: BodyType;
    feelsLike: string;
    publishDate: number;
  };

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
}

export enum ArticleBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

interface IArticleBlockBase {
    id: string,
    type: ArticleBlockTypes,
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.TEXT
    paragraphs: Array<string>,
    title?: string,
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.CODE
    code: string,
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.IMAGE
    src: string,
    title?: string,
}

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock

export type TArticleBlocks = Array<TArticleBlock>;

export interface IArticle {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: Array<ArticleTypes>,
    blocks: TArticleBlocks,
}

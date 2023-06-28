import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleTypes } from 'entities/Article/model/types/Article';
import {
    articleDetailsErrorSelector,
    articleDetailsSelector,
    isArticleDetailsErrorSelector,
    isArticleDetailsLoadingSelector,
} from 'entities/Article/model/selectors/selectors';

describe('test article details data selector', () => {
    test('with data', () => {
        const data = {
            id: '1',
            title: 'Breaking NEWS',
            subtitle: 'Тестовая новость',
            img: 'https://as2.ftcdn.net/v2/jpg/03/88/26/77/1000_F_388267776_xuhQxwv0lNonSAk7MFeW63FoMTDaabQN.jpg',
            views: 42,
            createdAt: '12.05.2023',
            type: [ArticleTypes.IT, ArticleTypes.SCIENCE],
        };

        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                article: data,
            },
        };

        expect(articleDetailsSelector(state as IStateSchema)).toEqual(data);
    });

    test('without data', () => {
        const data = {};

        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                article: data,
            },
        };

        expect(articleDetailsSelector(state as IStateSchema)).toEqual({});
    });
});

describe('test is article details loading selector', () => {
    test('isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(isArticleDetailsLoadingSelector(state as IStateSchema)).toBe(true);
    });

    test('not loading', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                isLoading: false,
            },
        };

        expect(isArticleDetailsLoadingSelector(state as IStateSchema)).toBe(false);
    });
});

describe('test article details error selector', () => {
    test('have error', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                error: 'Ошибка',
            },
        };

        expect(articleDetailsErrorSelector(state as IStateSchema)).toBe('Ошибка');
    });

    test('without error', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                error: '',
            },
        };

        expect(articleDetailsErrorSelector(state as IStateSchema)).toBe('');
    });
});

describe('test is article details error selector', () => {
    test('have error', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                error: 'Ошибка',
            },
        };

        expect(isArticleDetailsErrorSelector(state as IStateSchema)).toBe(true);
    });

    test('without error', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                error: '',
            },
        };

        expect(isArticleDetailsErrorSelector(state as IStateSchema)).toBe(false);
    });
});

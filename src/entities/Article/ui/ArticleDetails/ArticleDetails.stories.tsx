import React from 'react';
import {
    ComponentMeta, ComponentStory,
} from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { IStateSchema } from 'app/providers/StoreProvider';
import {
    ArticleBlockTypes, ArticleTypes,
} from 'entities/Article/model/types/Article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const ArticleDetailsState: DeepPartial<IStateSchema> = {
    articleDetails: {
        article: {
            id: '1',
            title: 'Breaking NEWS',
            subtitle: 'Тестовая новость',
            img: 'https://as2.ftcdn.net/v2/jpg/03/88/26/77/1000_F_388267776_xuhQxwv0lNonSAk7MFeW63FoMTDaabQN.jpg',
            views: 42,
            createdAt: '12.05.2023',
            type: [ArticleTypes.IT, ArticleTypes.SCIENCE],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockTypes.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'В этой статье хотелось бы обсудить несколько привычек, которые есть у нас всех и которые, возможно, пора переосмыслить',
                        'Начнем с кастомных хуков, которым надо вернуть результат, в частности пару значений. Классическим примером может быть хук для запроса данных по сети и отслеживания в процессе ли этот запрос сейчас, чтобы добавить на страницу лоадер.',
                    ],
                },
                {
                    id: '2',
                    type: ArticleBlockTypes.CODE,
                    code: 'function useClient(clientId) {\n  const [loadedClient, setLoadedClient] = useState(null)\n  const [isLoading, setIsLoading] = useState(false)\n\n  useEffect(() => {\n    const loadClient = async () => {\n      try {\n        setIsLoading(true)\n        const clientData = {} // actual data loading call goes here\n        setLoadedClient(clientData)\n      }\n      finally {\n        setIsLoading(false)\n      }\n    }\n\n    loadClient()\n  }, [clientId])\n\n  return [loadedClient, isLoading]\n}',
                },
                {
                    id: '3',
                    type: ArticleBlockTypes.TEXT,
                    paragraphs: ['В итоге вызываем его вот как-то так:'],
                },
                {
                    id: '4',
                    type: ArticleBlockTypes.CODE,
                    code: 'const [loadedClient, isLoading] = useClient(clientId)\n',
                },
                {
                    id: '5',
                    type: ArticleBlockTypes.IMAGE,
                    src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/a66/a8d/ab1/a66a8dab15656fb895b396b8e7fe75db.png',
                    title: 'Картинка',
                },
            ],
        },
    },
};

const reducersMap = {
    articleDetails: articleDetailsReducer,
};

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator(ArticleDetailsState, reducersMap), RouterDecorator];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: { isLoading: true },
}, reducersMap), RouterDecorator];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: { error: 'Ошибка' },
}, reducersMap), RouterDecorator];

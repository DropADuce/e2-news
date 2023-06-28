import {
    mockedAxios, testAsyncThunk,
} from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { fetchArticleById } from 'entities/Article/model/service/fetchArticleById/fetchArticleById';

const payload = {
    id: '1',
    title: 'Breaking NEWS',
    subtitle: 'Тестовая новость',
    img: 'https://as2.ftcdn.net/v2/jpg/03/88/26/77/1000_F_388267776_xuhQxwv0lNonSAk7MFeW63FoMTDaabQN.jpg',
    views: 42,
    createdAt: '12.05.2023',
    type: ['IT', 'SCIENCE'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'В этой статье хотелось бы обсудить несколько привычек, которые есть у нас всех и которые, возможно, пора переосмыслить',
                'Начнем с кастомных хуков, которым надо вернуть результат, в частности пару значений. Классическим примером может быть хук для запроса данных по сети и отслеживания в процессе ли этот запрос сейчас, чтобы добавить на страницу лоадер.',
            ],
        },
        {
            id: '2',
            type: 'CODE',
            code: 'function useClient(clientId) {\n  const [loadedClient, setLoadedClient] = useState(null)\n  const [isLoading, setIsLoading] = useState(false)\n\n  useEffect(() => {\n    const loadClient = async () => {\n      try {\n        setIsLoading(true)\n        const clientData = {} // actual data loading call goes here\n        setLoadedClient(clientData)\n      }\n      finally {\n        setIsLoading(false)\n      }\n    }\n\n    loadClient()\n  }, [clientId])\n\n  return [loadedClient, isLoading]\n}',
        },
        {
            id: '3',
            type: 'TEXT',
            paragraphs: ['В итоге вызываем его вот как-то так:'],
        },
        {
            id: '4',
            type: 'CODE',
            code: 'const [loadedClient, isLoading] = useClient(clientId)\n',
        },
        {
            id: '5',
            type: 'IMAGE',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/a66/a8d/ab1/a66a8dab15656fb895b396b8e7fe75db.png',
            title: 'Картинка',
        },
    ],
};

describe('fetch article by id', () => {
    test('fetch article', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: payload,
        }));

        const {
            thunk,
            dispatch,
        } = testAsyncThunk(fetchArticleById);

        const result = await thunk('1');

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(dispatch).toBeCalledTimes(2);
        expect(result.payload).toEqual(payload);
    });
});

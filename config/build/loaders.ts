import webpack from 'webpack';

import { buildCssLoaders } from './loaders/buildCssLoaders';
import { IBuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const getBuildLoaders = ({ isDev }: IBuildOptions): Array<webpack.RuleSetRule> => {
    const cssLoaders = buildCssLoaders(isDev);

    const assetsLoaders = [
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        buildSvgLoader(),
    ];

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    return [
        babelLoader,
        typeScriptLoader,
        cssLoaders,
        ...assetsLoaders,
    ];
};

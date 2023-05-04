import webpack from 'webpack';

import { buildCssLoaders } from './loaders/buildCssLoaders';
import { IBuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabaelLoader';

export const getBuildLoaders = ({ isDev }: IBuildOptions): Array<webpack.RuleSetRule> => {
    const cssLoaders = buildCssLoaders(isDev);
    const babelLoader = buildBabelLoader(isDev);

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

    return [
        babelLoader,
        typeScriptLoader,
        cssLoaders,
        ...assetsLoaders,
    ];
};

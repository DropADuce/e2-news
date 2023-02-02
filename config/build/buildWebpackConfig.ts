import webpack from 'webpack';

import {getBuildPlugins} from './plugins';
import {getBuildLoaders} from './loaders';
import {getBuildResolvers} from './resolvers';
import {IBuildOptions} from './types/config';
import {getBuildWatcher} from "./watcher";

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {

    const {
        mode,
        paths,
        isDev,
    } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: getBuildPlugins(options),
        module: {
            rules: getBuildLoaders(options),
        },
        resolve: getBuildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? getBuildWatcher(options) : undefined,
    }
}

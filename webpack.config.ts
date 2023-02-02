import path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildEnv, IBuildPaths} from "./config/build/types/config";

export default ({ mode: buildMode, port }: IBuildEnv) => {
    const mode = buildMode || 'development';
    const isDev = mode === 'development';
    const PORT = port || 3000;

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    return  buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
}

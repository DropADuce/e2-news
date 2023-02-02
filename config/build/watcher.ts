import {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {IBuildOptions} from "./types/config";

export const getBuildWatcher = ({port}: IBuildOptions): DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}

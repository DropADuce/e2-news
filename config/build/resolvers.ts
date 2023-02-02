import {ResolveOptions} from "webpack";

export const getBuildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}

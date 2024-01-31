import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: false, // Вимкнути HMR
        client: {
            overlay: false, // Вимкнути overlay
        },
    };
}

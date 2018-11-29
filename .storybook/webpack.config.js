const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src')
    });

    config.resolve.plugins = [new TsConfigPathsPlugin()];
    
    return config;
};
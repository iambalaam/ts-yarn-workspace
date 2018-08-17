// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules\/(?!dependency)/,
                use: [{
                    loader: 'ts-loader',
                    options: {allowTsInNodeModules: true}
                }]
            }
        ]
    },

    // plugins: [new BundleAnalyzerPlugin()],

    optimization: {
        splitChunks: {
            minSize: 10,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = {
    mode: 'development',
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
    }
}

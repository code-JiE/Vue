module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/components/common',
                'assets': '@/assets',
                'views': '@/views'
            }
        }
    }
}
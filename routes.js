const ROUTES = [
    {
        url: '/categories/:id',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 20
        },
        proxy: {
            target: "https://api.mercadolibre.com/",
            changeOrigin: true,
            pathRewrite: {
                [`^/categories/:id`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;
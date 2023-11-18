const Router = require('express')
const router = new Router()

const modules = ['games','category']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router
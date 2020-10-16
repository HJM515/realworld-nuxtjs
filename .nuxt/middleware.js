const middleware = {}

middleware['authorized'] = require('..\\middleware\\authorized.js')
middleware['authorized'] = middleware['authorized'].default || middleware['authorized']

middleware['unAuthorized'] = require('..\\middleware\\unAuthorized.js')
middleware['unAuthorized'] = middleware['unAuthorized'].default || middleware['unAuthorized']

export default middleware

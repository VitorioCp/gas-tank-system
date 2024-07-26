(async () => {
    const database = require('../database')
    const user = require('./tables/user')
    await database.sync();
})();
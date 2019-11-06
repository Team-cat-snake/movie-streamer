const Pool = require("pg").Pool;
let url = 'postgres://ilrzpkrq:h0lWgIGzZsskQ4rX_CtzRMN9aYcermbP@salt.db.elephantsql.com:5432/ilrzpkrq';
const pool = new Pool({
    connectionString: url
});
module.exports = pool;
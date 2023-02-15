import pgPromise from 'pg-promise';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER, URLDB } from './config.js'
const pgp = pgPromise({});
const db = pgp(URLDB);

export default db;



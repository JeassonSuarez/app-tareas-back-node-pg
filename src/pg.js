import pgPromise from 'pg-promise';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config.js'
const pgp = pgPromise({});
const db = pgp(`postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

export default db;



import pgPromise from 'pg-promise';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config.js'
const pgp = pgPromise({});
const db = pgp("postgresql://postgres:7soJpdeak11MXW22HVS0@containers-us-west-171.railway.app:5993/railway");

export default db;



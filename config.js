const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';
const APP_ID = process.env.APP_ID || 'uenglish';
const MASTER_KEY = process.env.MASTER_KEY || '70c6093dba5a7e55968a1c7ad3dd3e5a74ef5cac';
const FILE_KEY = process.env.FILE_KEY || 'f33fc1a9-9ba9-4589-95ca-9976c0d52cd5';
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/parse-stack';
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const DASHBOARD_AUTH = process.env.DASHBOARD_AUTH; // DASHBOARD_AUTH = 'user:pass'

export const config = {
	SERVER_PORT,
	SERVER_HOST,
	APP_ID,
	MASTER_KEY,
	FILE_KEY,
	DATABASE_URI,
	IS_DEVELOPMENT,
	DASHBOARD_AUTH
};
import path from 'node:path';

const STORAGE_DIR_PATH = path.resolve(import.meta.dirname, '../../data/storage');
const FILES_DB_PATH = path.resolve(import.meta.dirname, '../../data/filesDB.json');;
const DIRECTORIES_DB_PATH = path.resolve(import.meta.dirname, '../../data/directoriesDB.json');

export { STORAGE_DIR_PATH, FILES_DB_PATH, DIRECTORIES_DB_PATH }

// console.log(STORAGE_DIR_PATH)
// console.log(FILES_DB_PATH)
// console.log(DIRECTORIES_DB_PATH)
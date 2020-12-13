/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import config from '../globals/config';
import loading from '../script/loading';

const { databaseName, databaseVersion, objekStoreName } = config;

const dbPromise = openDB(databaseName, databaseVersion, {
  upgrade(database) {
    database.createObjectStore(objekStoreName, { keyPath: 'id' });
  },
});

const restoFavoriteDB = {
  async getResto(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(objekStoreName, id);
  },
  async getAllResto() {
    loading(true);

    return (await dbPromise).getAll(objekStoreName);
  },
  async putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(objekStoreName, restaurant);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(objekStoreName, id);
  },
};

export default restoFavoriteDB;

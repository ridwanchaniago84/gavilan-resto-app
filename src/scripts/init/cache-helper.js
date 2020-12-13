import config from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this.openCache();
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== config.cacheName)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }
    return this.fetchRequest(request);
  },

  async openCache() {
    return caches.open(config.cacheName);
  },

  async fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this.addCache(request);
    return response;
  },

  async addCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },
};

export default CacheHelper;

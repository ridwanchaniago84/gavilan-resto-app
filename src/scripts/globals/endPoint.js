import config from './config';

const endPoint = {
  listRestaurant: `${config.baseURL}list`,
  insertReview: `${config.baseURL}review`,
  detail: (id) => `${config.baseURL}detail/${id}`,
};

export default endPoint;

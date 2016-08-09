import 'whatwg-fetch';
import { checkStatus, parseJSON, getQueryString } from 'actions/utils';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';

const appPublicKey = 'jcEq1JegpdswAniAlL4EHePRy3bfgorCbQrcPWFU';
const endpoint = 'https://api.500px.com/v1';
const randomInt = (max, min) => (Math.floor(Math.random() * ((max - min) + 1)) + min);
const params = {
  feature: 'editors',
  rpp: 6,
  page: randomInt(50, 1),
  image_size: '1080,20',
  only: 'City%20and%20Architecture',
  consumer_key: appPublicKey,
};


export default function getImages() {
  return fetch(`${endpoint}/photos${getQueryString(params)}`, {
    method: 'get',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      const images = flow(
        filter(p => (
          p.nsfw === false &&
          p.width / p.height > 1.4
        )),
        map(p => ({ small: p.images[0].url, large: p.images[1].url }))
      )(data.photos);
      return images;
    })
    .catch(err => console.log(err));
}

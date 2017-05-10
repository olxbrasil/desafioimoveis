import data from './data.json'

class RegionsController {
  static getRegions(req, res, next) {
    res.json(data);
  }
}

export default RegionsController;

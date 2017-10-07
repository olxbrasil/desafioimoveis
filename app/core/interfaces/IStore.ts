interface IStore {
  state: {
    list: {}
  }
  simulator: {
    selectedState: string,
    purchase: number,
    rental: number,
    time: number,
    tax: number,
  }
}

export default IStore;
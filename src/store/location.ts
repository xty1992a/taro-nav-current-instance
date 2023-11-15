import { observable, action } from 'mobx'
import { createContext } from 'react';

interface Location {
  lat: number
  lng: number
}

class LocationStore {
  @observable location: Location

  @action.bound
  set(loc: Location) {
    this.location = loc
  }
}

export default createContext(new LocationStore())

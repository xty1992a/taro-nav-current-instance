import {useContext, useEffect, useState} from "react";
import locationStore from "../store/location";

export function useModules() {
  const {location} = useContext(locationStore)
  const [modules, setmodules] = useState<number[]>([])

  useEffect(() => {
    setmodules(m => Array(m.length+1).fill(0).map((_,i) => i))
  }, [location])

  return modules
}

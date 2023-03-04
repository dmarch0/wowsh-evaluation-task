import {Nations} from "../../const/ships/Nations";
import {ShipTypes} from "../../const/ships/shipTypes";

type StringMap = {
  [key: string]: string
}

export interface Ship {
  id: string,
  level: number,
  icons: StringMap,
  nation: Nations,
  type: ShipTypes,
  localization: {
    shortMark: StringMap,
    description: StringMap,
    mark: StringMap,
  }
}

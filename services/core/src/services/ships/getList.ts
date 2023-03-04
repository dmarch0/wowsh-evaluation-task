import { ShipTypes } from "../../const/ships/shipTypes";
import {Nations} from "../../const/ships/Nations";
import {getShipsListFromApi} from "../../utils/ships/getShipsListFromApi";
import {Ship} from "./ships.types";

interface IArgs {
  types?: ShipTypes[],
  nations?: Nations[],
  name?: string,
  offset?: number,
  limit?: number,
}

interface IResult {
  list: Ship[],
  totalCount: number,
}


export const getList = async ({ types, nations, offset, limit, name }: IArgs): Promise<IResult> => {
  let list = await getShipsListFromApi();

  if (types && types.length) list = list.filter(typeFilter(types));
  if (nations && nations.length) list = list.filter(nationFilter(nations));
  if (name) list = list.filter(nameFilter(name));
  const totalCount = list.length;
  if (offset) list = list.slice(offset);
  if (limit) list = list.slice(0, limit);

  return { list, totalCount };
};

function typeFilter(types: ShipTypes[]) {
  return function (ship: Ship) {
    return types.includes(ship.type);
  }
}

function nationFilter(nations: Nations[]) {
  return function (ship: Ship) {
    return nations.includes(ship.nation);
  }
}

function nameFilter(name: string) {
  return function (ship: Ship) {
    return ship.localization.mark.en.toUpperCase().includes(name.toUpperCase());
  }
}
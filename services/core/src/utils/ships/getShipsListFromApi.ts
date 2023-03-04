import NodeCache from "node-cache";
import {sendHttpRequest} from "../http/sendHttpRequest";
import {Ship} from "../../services/ships/ships.types";
import {Nations} from "../../const/ships/Nations";
import {ShipTypes} from "../../const/ships/shipTypes";

const CACHE_KEY = 'ships';
const API_URL = 'https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/';
const shipsCache = new NodeCache({
  deleteOnExpire: true,
  stdTTL: 60 * 60 * 24,
});

export async function getShipsListFromApi(): Promise<Ship[]> {
  const cached = shipsCache.get(CACHE_KEY);
  if (cached) {
    return cached as Ship[];
  }

  try {
    const { data: { data } } = await sendHttpRequest({
      url: API_URL,
      method: "GET",
      data: null,
    });

    const list: Ship[] = Object.keys(data).map(id => ({
      id,
      level: data[id].level,
      nation: data[id].nation as Nations,
      localization: data[id].localization,
      icons: data[id].icons,
      type: getTypeFromTags(data[id].tags)
    }))

    shipsCache.set(CACHE_KEY, list);
    return list;
  } catch (e) {
    return [];
  }
}

function getTypeFromTags(tags: string[]): ShipTypes {
  if (tags.includes(ShipTypes.Destroyer)) return ShipTypes.Destroyer;
  if (tags.includes(ShipTypes.Cruiser)) return ShipTypes.Cruiser;
  if (tags.includes(ShipTypes.Carrier)) return ShipTypes.Carrier;
  if (tags.includes(ShipTypes.Battleship)) return ShipTypes.Battleship;
  return ShipTypes.Submarine;
}
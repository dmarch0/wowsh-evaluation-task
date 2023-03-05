import httpStatus from 'http-status';

import { sendResponse } from '../../../utils/rest/http/sendResponse';
import { wrapAsyncMiddleware } from '../../../utils/rest/middlewares/wrapAsyncMiddleware';
import { getList } from '../../../services/ships/getList';
import {Nations} from "../../../const/ships/Nations";
import {ShipTypes} from "../../../const/ships/shipTypes";
import {parseNumber} from "../../../utils/parsers/parseNumber";

export const getRoot = wrapAsyncMiddleware(async (req, res) => {
  const { offset, limit, nations, types, name, minLevel, maxLevel }  = req.query;

  const result = await getList({
    nations: nations as Nations[],
    types: types as ShipTypes[],
    name: name as string,
    offset: parseNumber(offset as string, 0),
    limit: parseNumber(limit as string, 30),
    minLevel: parseNumber(minLevel as string, 1),
    maxLevel: parseNumber(maxLevel as string, 11),
  });

  return sendResponse(res, httpStatus.OK, { result });
});

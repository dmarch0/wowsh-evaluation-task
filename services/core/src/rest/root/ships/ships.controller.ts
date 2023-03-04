import httpStatus from 'http-status';

import { sendResponse } from '../../../utils/rest/http/sendResponse';
import { wrapAsyncMiddleware } from '../../../utils/rest/middlewares/wrapAsyncMiddleware';
import { getList } from '../../../services/ships/getList';
import {Nations} from "../../../const/ships/Nations";
import {ShipTypes} from "../../../const/ships/shipTypes";

export const getRoot = wrapAsyncMiddleware(async (req, res) => {
  const { offset, limit, nations, types, name }  = req.query;

  const offsetInt = parseInt(offset as string)
  const offsetValue = isNaN(offsetInt) ? 0 : offsetInt;

  const limitInt = parseInt(limit as  string);
  const limitValue = isNaN(limitInt) ? 30 : limitInt;

  const result = await getList({
    nations: nations as Nations[],
    types: types as ShipTypes[],
    name: name as string,
    offset: offsetValue,
    limit: limitValue,
  });

  return sendResponse(res, httpStatus.OK, { result });
});

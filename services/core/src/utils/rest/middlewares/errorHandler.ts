import httpStatus from 'http-status';

import { ApiError } from '../../errors/ApiError';
import { CommonErrors } from '../../../const/errors/common';
import { sendResponse } from '../http/sendResponse';
import { INextFunction, IRequest, IResponse } from '../../../../types/express';
import { logger } from '../../../config/logger';

function processError(err: Error) {
    if (err instanceof ApiError) {
        return err;
    }

    return {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        errors: [CommonErrors.service],
    };
}

function logError(err: Error, req: IRequest) {
    const body = typeof req.body === 'object' && { ...req.body };
    const reqData = {
        url: req.originalUrl,
        method: req.method,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
        headers: req.headers,
        body,
    };

    logger.info(
        `\t*1.Stack*:\n\t${err.stack}`
        + `\n\t*2.Req data*:\n${JSON.stringify(reqData, null, '   ')}`
        + `\n\t*3.Message*:\n\t${err.message}\n`,
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function onApiError(err: Error, req: IRequest, res: IResponse, next: INextFunction) {
    const error = processError(err);

    const isInternal = error.status === httpStatus.INTERNAL_SERVER_ERROR;
    if (isInternal) {
        logError(err, req);
    }

    await sendResponse(res, error.status, { errors: error.errors });
}

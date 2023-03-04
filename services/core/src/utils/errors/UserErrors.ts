/* eslint-disable max-classes-per-file */
import httpStatus from 'http-status';
import { ApiError } from './ApiError';
import { UserErrors } from '../../const/errors/user';

export class UserBlockedError extends ApiError {
    constructor() {
        super(httpStatus.FORBIDDEN, [UserErrors.userBlocked]);
    }
}

export class UserDeletedError extends ApiError {
    constructor() {
        super(httpStatus.FORBIDDEN, [UserErrors.userDeleted]);
    }
}

export class UserNotConfirmedError extends ApiError {
    constructor() {
        super(httpStatus.FORBIDDEN, [UserErrors.userNotConfirmed]);
    }
}

export class UserNotFoundError extends ApiError {
    constructor() {
        super(httpStatus.UNAUTHORIZED, [UserErrors.notFound]);
    }
}

export class UserIncorrectCredentialsError extends ApiError {
    constructor() {
        super(httpStatus.UNAUTHORIZED, [UserErrors.userIncorrectCredentials]);
    }
}

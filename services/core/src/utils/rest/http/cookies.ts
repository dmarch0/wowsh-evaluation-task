import { vars } from '../../../config/vars';
import { IResponse } from '../../../../types/express';

export interface ICookieToken {
    token: string;
    expiresAt: Date;
}

const { isLocal } = vars;
const ADMIN_AUTH_COOKIE_NAME = 'ADMIN_AUTHENTICATION';

export const removeAdminAuthCookie = (res: IResponse) => {
    res.cookie(ADMIN_AUTH_COOKIE_NAME, '', {
        expires: new Date(),
    });
};

export const setAdminAuthCookie = (res: IResponse, accessToken: ICookieToken) => {
    if (accessToken) {
        res.cookie(ADMIN_AUTH_COOKIE_NAME, accessToken.token, {
            expires: accessToken.expiresAt,
            httpOnly: true,
            sameSite: true,
            secure: !isLocal,
            signed: true,
        });
    }
};

import { auth } from 'express-oauth2-jwt-bearer';

const { AUTH0_DOMAIN } = process.env;

const DOMAIN = AUTH0_DOMAIN;
const AUDIENCE = `${AUTH0_DOMAIN}/api/v2/`;

export const checkJwt = auth({
    audience: AUDIENCE,
    issuerBaseURL: DOMAIN,
    tokenSigningAlg: 'RS256',
});
import * as crypto from 'crypto';

export function encodePassword(password: string) {
    try {
        return crypto
            .createHmac('sha256', process.env.SECRETE_KEY)
            .update(password)
            .digest('hex');
    } catch (e) {
        console.log(e);
    }
}

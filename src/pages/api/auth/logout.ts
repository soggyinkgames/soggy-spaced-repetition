import { serialize } from 'cookie';

export async function get() {
    const clearAccessToken = serialize('accessToken', '', {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        path: '/',
        expires: new Date(0),
    });

    const clearIdToken = serialize('idToken', '', {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        path: '/',
        expires: new Date(0),
    });

    return new Response(null, {
        status: 302,
        headers: {
            Location: '/',
            'Set-Cookie': [clearAccessToken, clearIdToken].join('; '),
        },
    });
}

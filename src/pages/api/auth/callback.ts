import { OAuth2Client } from 'google-auth-library';
import { serialize } from 'cookie';

const client = new OAuth2Client(
    import.meta.env.CLIENT_ID,
    import.meta.env.CLIENT_SECRET,
    import.meta.env.REDIRECT_URI
);

export async function get({ request }: { request: Request }) {
    try {
        const url = new URL(request.url);
        const code = url.searchParams.get('code');

        if (!code) {
            return new Response('Missing authorization code', { status: 400 });
        }

        // Exchange code for tokens
        const { tokens } = await client.getToken(code);

        // Set tokens as HTTP-only cookies
        const accessTokenCookie = serialize('accessToken', tokens.access_token || '', {
            httpOnly: true,
            secure: import.meta.env.PROD,
            sameSite: 'lax',
            path: '/',
            maxAge: 3600, // 1 hour
        });

        const idTokenCookie = serialize('idToken', tokens.id_token || '', {
            httpOnly: true,
            secure: import.meta.env.PROD,
            sameSite: 'lax',
            path: '/',
            maxAge: 3600,
        });

        return new Response(null, {
            status: 302,
            headers: {
                Location: '/dashboard', // Redirect to dashboard after login
                'Set-Cookie': [accessTokenCookie, idTokenCookie].join('; '),
            },
        });
    } catch (error) {
        console.error('Error handling callback:', error);
        return new Response('Authentication failed', { status: 500 });
    }
}

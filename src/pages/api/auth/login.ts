import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
    import.meta.env.CLIENT_ID,
    import.meta.env.CLIENT_SECRET,
    import.meta.env.REDIRECT_URI
);

export async function get() {
    const authUrl = client.generateAuthUrl({
        access_type: 'offline',
        scope: ['openid', 'email', 'profile'],
    });

    return new Response(null, {
        status: 302,
        headers: { Location: authUrl },
    });
}

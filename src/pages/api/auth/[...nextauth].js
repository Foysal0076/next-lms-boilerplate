import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Providers from "next-auth/providers"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),

        // ...add more providers here

        // Email Password (Credential) Login
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "yourmail@example.com" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                const { email, password, ...rest } = credentials //Destructure properties from login form field which was previously added in credentials object

                // Add own logic for successful login into your backend server

                // After authorization return user data from this block

                // return user
            },
            pages: {
                signIn: '/login',
                error: '/login',
            },
            session: {
                jwt: true,
                maxAge: 60 * 60 * 24 * 7 // 7 days
            },
            callbacks: {
                async signIn(user, account, profile) {
                    const isAllowedToSignIn = true
                    if (isAllowedToSignIn) {
                        return true
                    } else {
                        // Return false to display a default error message
                        return false
                        // Or you can return a URL to redirect to:
                        // return '/unauthorized'
                    }
                },
                /*
                    *This JSON Web Token callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
                    * @param  {object}  token     Decrypted JSON Web Token
                    * @param  {object}  user      User object      (only available on sign in)
                    * @param  {object}  account   Provider account (only available on sign in)
                    * @param  {object}  profile   Provider profile (only available on sign in)
                    * @param  {boolean} isNewUser True if new user (only available on sign in)
                    * @return {object}            JSON Web Token that will be saved
                */
                async jwt(token, user, account, profile, isNewUser) {

                    // Add access_token to the token right after signin
                    if (account?.accessToken) {
                        token.accessToken = account.accessToken
                    }
                    return token
                },

                /*
                    *The session callback is called whenever a session is checked. By default, only a subset of the token is returned for increased security. If you want to make something available you added to the token through the jwt() callback, you have to explicitly forward it here to make it available to the client.

                     * @param  {object} session      Session object
                     * @param  {object} token        User object    (if using database sessions)
                     *                               JSON Web Token (if not using database sessions)
                     * @return {object}              Session that will be returned to the client
                 */
                async session(session, token) {

                    // Add property to session, like an access_token from a provider.
                    session.accessToken = token.accessToken
                    return session
                }
            }
        })
    ],
})
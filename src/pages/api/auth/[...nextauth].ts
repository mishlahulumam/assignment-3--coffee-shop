import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
	CredentialsProvider({
	  name: 'Credentials',
	  credentials: {
		email: { label: 'Email', type: 'email' },
		password: { label: 'Password', type: 'password' },
	  },
	  async authorize(credentials) {
		// Ensure credentials are defined
		if (!credentials?.email || !credentials?.password) {
		  return null;
		}

		// Replace this with your own logic to validate credentials
		const res = await fetch('https://fakestoreapi.com/auth/login', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			username: credentials.email,
			password: credentials.password,
		  }),
		});

		const user = await res.json();

		// If no error and we have user data, return it
		if (res.ok && user) {
		  return user;
		}
		// Return null if user data could not be retrieved
		return null;
	  },
	}),
  ],
  session: {
	strategy: 'jwt', // Use 'strategy' instead of 'jwt'
  },
  pages: {
	signIn: '/login',
  },
});
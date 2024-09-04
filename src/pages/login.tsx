import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Navbar from '../components/Navbar';

// Define the form data type
interface LoginFormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormInputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.ok) {
            router.push('/');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <div className="mb-4">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
import AuthForm from "@/components/features/auth/AuthForm"

const Login = async ({ searchParams }: { searchParams: { email: string } }) => {
  const email = (await searchParams).email ?? null
  return <AuthForm isLogin={true} userEmail={email} />
}

export default Login

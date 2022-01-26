import { Button } from 'ui';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Web() {
  const router = useRouter()
  const loginUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/github`
  return (
    <div>
      <h1>Landing Page for Absolute0</h1>
      <button
        onClick={() => {
          router.push(loginUrl)
        }}
      >Log In</button>
    </div>
  );
}

import { Button } from 'ui';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Web() {
  const router = useRouter()
  const loginUrl = `${process.env.NEXT_PUBLIC_STUDIO_BASE_URL}/api/auth/login`
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

import { useRouter } from 'next/router'

export default function ProjectOverview() {
  const router = useRouter()
  const { pid } = router.query

  return <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">

  </div>
}

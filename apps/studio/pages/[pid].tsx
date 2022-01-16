import { useRouter } from 'next/router'

export default function ProjectOverview() {
  const router = useRouter()
  const { pid } = router.query

  return <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
    <div
      className="w-full h-full rounded border-dashed border-2 border-gray-300 h-96"
    >
      Create your Organization
    </div>
    <div
      className="w-full h-full rounded border-dashed border-2 border-gray-300 h-96"
    >
      Create your Organization
    </div>
    <div
      className="w-full h-full rounded border-dashed border-2 border-gray-300 h-96"
    >
      Create your Organization
    </div>
  </div>
}

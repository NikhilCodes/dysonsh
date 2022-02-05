import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import graphqlClient from '../lib/graphql'
import Suspense from '../components/suspense'

export default function ProjectOverview() {
  const router = useRouter()
  const { pid } = router.query

  const [project, setProject] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    graphqlClient.query({
      query: gql`query Project($pid: ID!) {
          project(id: $pid) {
              id
              name
              region
              pricing
              is_running
          }
      }`,
      variables: {
        pid,
      },
    }).then(({ data }) => {
      setProject(data.project)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [pid])

  if (isLoading) {
    return <Suspense />
  }

  return <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
    {JSON.stringify(project)}
  </div>
}

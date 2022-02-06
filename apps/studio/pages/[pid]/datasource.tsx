import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProjectType } from '../../lib/types'
import graphqlClient from '../../lib/graphql'
import { gql } from '@apollo/client'
import Suspense from '../../components/suspense'

export default function ProjectDatasource() {
  const router = useRouter()
  const { pid } = router.query

  const [project, setProject] = useState<ProjectType>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (pid) {
      graphqlClient.query({
        query: gql`query Project($id: ID!) {
            project(id: $id) {
                id
                name
                region
                pricing
                is_running
            }
        }`,
        variables: {
          id: pid,
        },
      }).then(({ data }) => {
        setProject(data.project)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }, [pid])

  if (isLoading) {
    return <Suspense />
  }

  return <div className={'p-20'}>
    <div className={'text-4xl font-bold'}>{project?.name}</div>
    <div className={'text-xl text-gray-400'}>Datasource</div>

    <div className={'mt-10 flex'}>
      <div className={'tile'}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Add Master
      </div>

      <div className={'tile'}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Read Replica
      </div>
    </div>
  </div>
}

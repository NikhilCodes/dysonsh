import Link from 'next/link';
import { Button } from 'ui';
import { useEffect, useState } from 'react'
import graphqlClient from '../lib/graphql'
import { gql } from '@apollo/client'
import Suspense from '../components/suspense'
import ProjectTile from '../components/projectTile'

export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    graphqlClient.query({
      query: gql`query QueryProjects {
          projects {
              id
              name
              region
              pricing
              is_running
          }
      }`,
    })
    .then(({ data }) => setProjects(data.projects))
    .finally(() => {
      setIsLoading(false)
    })
  }, [])


  if (isLoading) {
    return <Suspense />
  }

  return (
    <div className={'container mx-auto p-32'}>
      <h1>Dashboard</h1>
      {projects.length === 0 && <Link
        href={'/new'}
        passHref
      >
        <div
          className="rounded border-dashed bg-opacity-10 bg-gray-400 border-2 border-gray-300 text-xl p-20 text-center rounded-2xl cursor-pointer"
        >
          <div className={'flex justify-center align-middle mb-4'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                 fill="currentColor" className="bi bi-plus-circle"
                 viewBox="0 0 16 16">
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
          <div>{'Let\'s Build Something Cool!'}</div>
          <div className={'text-gray-500 text-sm mt-1'}>Start a project by
            clicking here
          </div>
        </div>
      </Link>}
      <div className={'flex flex-wrap'}>
        {projects.map((project) => {
          return <ProjectTile
            key={project.id}
            title={project.name}
            is_running={project.is_running}
          />
        })}
      </div>
    </div>
  );
}

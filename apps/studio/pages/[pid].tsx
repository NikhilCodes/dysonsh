import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import graphqlClient from '../lib/graphql'
import Suspense from '../components/suspense'
import Image from 'next/image'
import GraphIcon from '../assets/graph-icon.svg'
import DbIcon from '../assets/db-icon.svg'
import SettingsIcon from '../assets/setting-icon.svg'

export default function ProjectOverview() {
  const router = useRouter()
  const { pid } = router.query

  const [project, setProject] = useState()
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

  return <div className="container flex justify-evenly p-20">
    <ActionCards
      className={'from-emerald-500 to-emerald-700 shadow-emerald-300'}
      icon={DbIcon}
    />
    <ActionCards
      className={'from-fuchsia-700 to-fuchsia-900 shadow-fuchsia-300'}
      icon={GraphIcon}
    />
    <ActionCards
      className={'from-cyan-500 to-cyan-700 shadow-cyan-300'}
      icon={SettingsIcon}
    />
  </div>
}


function ActionCards(props) {
  return <div
    {...props}
    className={`p-10 w-1/4 h-96 rounded-3xl shadow-2xl bg-gradient-to-br ${props.className}`}
  >
    <div className={'bg-white w-20 h-20 p-5 rounded-2xl'}>
      <Image height={'200px'} width={'200px'} src={props.icon} alt={'icon'} />
    </div>
  </div>
}

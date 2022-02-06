import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import graphqlClient from '../../lib/graphql'
import Suspense from '../../components/suspense'
import Image from 'next/image'
import GraphIcon from '../../assets/graph-icon.svg'
import DbIcon from '../../assets/db-icon.svg'
import SettingsIcon from '../../assets/setting-icon.svg'
import { ProjectType } from '../../lib/types'
import { regionParser } from '../../lib/helpers'
import Link from 'next/link'

export default function ProjectOverview() {
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
    <div className={'text-4xl font-bold'}>{project.name}</div>
    <div className={'flex'}>
      <div className={'flex mt-4'}>
        <div
          className={`${project.is_running ? 'bg-emerald-500' : 'bg-yellow-500'} cell`}
        >
          {project.is_running
            ? <div className={'w-2 h-2 rounded-full bg-white mr-1.5'} />
            : <>
              <div className={'w-0.5 h-2 bg-white mr-0.5'} />
              <div className={'w-0.5 h-2 bg-white mr-1.5'} />
            </>}
          <div
            className={'font-extrabold text-white '}>{project.is_running ? 'RUNNING' : 'PAUSED'}</div>
        </div>

        <div className={'cell bg-gray-200 ml-2'}>
          {regionParser(project.region)}
        </div>
      </div>
    </div>

    <div className="container flex justify-between p-10 w-4/5">
      <ActionCards
        className={'from-emerald-500 to-emerald-700 shadow-emerald-300'}
        icon={DbIcon}
        name={'Datastore'}
        href={'[slug]/datasource'}
        as={`${pid}/datasource`}
      />
      <ActionCards
        className={'from-fuchsia-700 to-fuchsia-900 shadow-fuchsia-300'}
        icon={GraphIcon}
        name={'Graph'}
        href={'[slug]/graph'}
        as={`${pid}/graph`}
      />
      <ActionCards
        className={'from-cyan-500 to-cyan-700 shadow-cyan-300'}
        icon={SettingsIcon}
        name={'Configuration'}
        href={'[slug]/configuration'}
        as={`${pid}/configuration`}
      />
    </div>
  </div>
}


function ActionCards(props) {
  return <Link passHref href={props.href} as={props.as}>
    <div
      {...props}
      className={`m-7 p-10 flex-1 h-56 rounded-3xl shadow-2xl bg-gradient-to-br cursor-pointer ${props.className}`}
    >
      <div className={'bg-white w-20 h-20 p-5 rounded-2xl'}>
        <Image height={'200px'} width={'200px'} src={props.icon} alt={'icon'} />
      </div>
      <br />
      <div className={'text-white text-2xl font-bold'}>{props.name}</div>
    </div>
  </Link>
}

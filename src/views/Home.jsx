import React from 'react'
import Banner from '../components/Banner'
import CreateProposal from '../components/CreateProposal'
import Proposals from '../components/Proposals'

const Home = () => {
  return (
    <>
        <Banner></Banner>
        <Proposals></Proposals>
        <CreateProposal></CreateProposal>
    </>
  )
}

export default Home
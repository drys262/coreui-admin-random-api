import React, { useEffect, useState } from 'react'

import Tables from '../base/tables/Tables'
import AddressChart from './AddressChart'

const BASE_URL = `${process.env.API_BASE_URL}/api`

const Dashboard = () => {
  const [address, setAddress] = useState([])
  const [states, setStates] = useState([])
  const tableHeaders = ['ID', 'UID', 'CITY', 'STREET NAME', 'STATE']

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASE_URL}/address/all`)
      const address = await response.json()
      const filteredStates = [...new Set(address.map((item) => item.state))]
      setStates(filteredStates)
      setAddress(address)
    }

    fetchData()
  }, [])

  return (
    <>
      <Tables
        heading="Addresses"
        description="List of address"
        headers={tableHeaders}
        data={address}
      />

      <AddressChart states={states} address={address} />
    </>
  )
}

export default Dashboard

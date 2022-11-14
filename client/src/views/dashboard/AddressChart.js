import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody, CCol, CCardHeader } from '@coreui/react'
import { CChartDoughnut } from '@coreui/react-chartjs'

const AddressChart = ({ states, address }) => {
  const calculateStateCount = () => {
    const stateCount = states.map((state) => {
      const count = address.filter((item) => item.state === state).length
      return count
    })

    return stateCount
  }

  const stateCount = useMemo(() => calculateStateCount(), [states])

  return (
    <CCol xs={6}>
      <CCard className="mb-4">
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody>
          <CChartDoughnut
            data={{
              labels: states,
              datasets: [
                {
                  backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                  data: stateCount,
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </CCol>
  )
}

AddressChart.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AddressChart

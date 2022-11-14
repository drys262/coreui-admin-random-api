import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const generateHeaders = (headers: any[]) => {
  return headers.map((header, index) => (
    <CTableHeaderCell key={index} scope="col">
      {header}
    </CTableHeaderCell>
  ))
}

const generateRow = (data: any[]) => {
  return data.map((value, index) => (
    <CTableRow key={value.uid}>
      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
      <CTableDataCell>{value.id}</CTableDataCell>
      <CTableDataCell>{value.uid}</CTableDataCell>
      <CTableDataCell>{value.city}</CTableDataCell>
      <CTableDataCell>{value.street_name}</CTableDataCell>
      <CTableDataCell>{value.state}</CTableDataCell>
    </CTableRow>
  ))
}

const Tables = ({ heading, description, headers, data }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{heading}</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">{description}</p>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  {generateHeaders(headers)}
                </CTableRow>
              </CTableHead>
              <CTableBody>{generateRow(data)}</CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

Tables.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
}

export default Tables

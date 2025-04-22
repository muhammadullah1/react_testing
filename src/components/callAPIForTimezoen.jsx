import React, { useState } from 'react'
import axios from 'axios'

const CallAPIForTimezone = () => {
  const [response, setResponse] = useState(null)
  const [getResponse, setGetResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const callAppointmentAPI = async () => {
    setLoading(true)
    setError(null)

    try {
      // Get tomorrow's date in UTC
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)

      // Set tomorrow at 9:00 AM UTC
      const tomorrowAt9UTC = new Date(
        Date.UTC(
          tomorrow.getUTCFullYear(),
          tomorrow.getUTCMonth(),
          tomorrow.getUTCDate(),
          9,
          0,
          0,
          0
        )
      )

      // Set tomorrow at 10:00 AM UTC
      const tomorrowAt10UTC = new Date(
        Date.UTC(
          tomorrow.getUTCFullYear(),
          tomorrow.getUTCMonth(),
          tomorrow.getUTCDate(),
          10,
          0,
          0,
          0
        )
      )

      // Convert to Unix timestamps (seconds)
      const appointmentFromTime = Math.floor(tomorrowAt9UTC.getTime() / 1000)
      const appointmentToTime = Math.floor(tomorrowAt10UTC.getTime() / 1000)

      console.log('UTC Appointment times:', {
        from: new Date(appointmentFromTime * 1000).toISOString(),
        to: new Date(appointmentToTime * 1000).toISOString(),
      })

      const payload = {
        type: 'consultation',
        appointmentType: 'routine',
        fkPatientId: 1,
        fkDepartmentId: 1,
        fkDoctorId: 27,
        fkClinicId: 1,
        billingCode: 'cons1234',
        appointmentColor: '#0000FF',
        fkPatientConsentId: 1,
        fee: 500,
        date: 1744696825,
        duration: 30,
        patientType: 'outpatient',
        offset: 5,
      }

      const token = null
      const response = await axios.post(
        'https://e7c5-2407-d000-506-6044-d4b7-91d1-6a5a-17a8.ngrok-free.app/api/receptionist/appointment',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setResponse(response.data)
    } catch (err) {
      setError(err.message || 'An error occurred')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const getAppointmentAPI = async () => {
    setLoading(true)
    setError(null)

    try {
      const token = null
      const response = await axios.get(
        'https://e7c5-2407-d000-506-6044-d4b7-91d1-6a5a-17a8.ngrok-free.app/api/receptionist/appointment',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setGetResponse(response.data)
    } catch (err) {
      setError(err.message || 'An error occurred')
      console.error('GET API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Timezone API Test</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={callAppointmentAPI} disabled={loading}>
          {loading ? 'Loading...' : 'Create Appointment'}
        </button>

        <button onClick={getAppointmentAPI} disabled={loading}>
          {loading ? 'Loading...' : 'Get Appointment'}
        </button>
      </div>

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>Error: {error}</div>
      )}

      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>Create Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {getResponse && (
        <div style={{ marginTop: '20px' }}>
          <h3>Get Response:</h3>
          <pre>{JSON.stringify(getResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default CallAPIForTimezone

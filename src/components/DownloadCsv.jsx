import React from 'react'
import axios from 'axios'

const DownloadCsv = () => {
  const apiUrl = 'http://localhost:4000/api/organizations/1/contacts/exports'
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJBcnpvbyIsImxhc3ROYW1lIjoiVXJmYSIsImVtYWlsIjoiYXJ6b28udXJmYUBwdXBweWRvZy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aFNvdXJjZSI6Ik5vcm1hbCIsImpvYlRpdGxlIjoiU1FBIiwib3JnYW5pemF0aW9uIjp7ImlkIjoxLCJuYW1lIjoiUHVwcHlkb2dfZGV2In0sInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6Ik93bmVyIn1dLCJwZXJtaXNzaW9ucyI6WyJvcmc6b3duZXIiXX0sImlhdCI6MTcxMDkyNDg0M30.5ANY6Y1-524VTPeS_N4ccxtmAG3ZHGv-kGEpFHIYK4k'

  const handleDownloadCsv = async () => {
    try {
      const payload = {
        contactIds: [287, 286, 285, 284, 283],
      }

      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: token,
        },
        responseType: 'blob',
        withCredentials: true,
      })

      const blob = new Blob([response.data], { type: 'text/csv' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'contacts.csv';
      downloadLink.click();
      
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h1 className='m-5'>Download csv Test</h1>
      <button
        onClick={handleDownloadCsv}
        className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
      >
        Download CSV
      </button>
    </div>
  )
}

export default DownloadCsv

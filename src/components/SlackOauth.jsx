import React, { useState } from 'react'
import axios from 'axios'

const SlackOauth = () => {
  const [authUrl, setAuthUrl] = useState('');
 const [loading, setLoading] = useState(false);

  const apiAuthUrl =
    'http://localhost:4000/api/organizations/1/integrations/slack/getauthlink'
  const apiAuthCallbackUrl = 'http://localhost:4000/api/oauth/callback/slack'
  const getSlackDataUrl =
    'http://localhost:4000/api/organizations/1/integrations/slack'
  const postDataUrl =
    'http://localhost:4000/api/organizations/1/integrations/slack'
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJBcnpvbyIsImxhc3ROYW1lIjoiVXJmYSIsImVtYWlsIjoiYXJ6b28udXJmYUBwdXBweWRvZy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aFNvdXJjZSI6Ik5vcm1hbCIsImpvYlRpdGxlIjoiU1FBIiwib3JnYW5pemF0aW9uIjp7ImlkIjoxLCJuYW1lIjoiUHVwcHlkb2dfZGV2In0sInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6Ik93bmVyIn1dLCJwZXJtaXNzaW9ucyI6WyJvcmc6b3duZXIiXX0sImlhdCI6MTcxMDkyNDg0M30.5ANY6Y1-524VTPeS_N4ccxtmAG3ZHGv-kGEpFHIYK4k'

  const handleGetauthUrl = async () => {
    try {
      const response = await axios.get(apiAuthUrl, {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      })
      setAuthUrl(response.data.data);
    } catch (error) {
      console.error('Error in handleGetauthUrl:', error)
    }
  }

  const handleConfigauth = async () => {
    try {
        window.open(authUrl, '_blank');
    } catch (error) {
      console.error('Error in handleConfigauth:', error)
    }
  }

  const handleAuthClick = async () => {
    try {
      const payload = {
        channel: '#puppydog-notifications',
        summaryFrequency: 'hourly',
      }

      const response = await axios.post(postDataUrl, payload, {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      })

      console.log("-----response--postdata--", response);

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h1 className='m-5'>Handle Slack Outh</h1>
      <button
        onClick={handleGetauthUrl}
        className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 my-5'
      >
        Get Slack Auth Url{' '}
      </button>
      <p className='m-8'>{authUrl && JSON.stringify(authUrl)}</p>

      <button
        onClick={handleConfigauth}
        className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
      >
        Click Slack Oauth{' '}
      </button>

      <p className='m-8'>-------------</p>


      <button
        onClick={handleAuthClick}
        className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
        disabled={loading}
      >
      {loading ? 'Loading...' : 'Authorize Slack'}
      </button>
    </div>
  )
}

export default SlackOauth

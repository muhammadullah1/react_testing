import React, {useEffect} from "react"
import axios from "axios"

const Report = () => {
  const data = {
    playlistId: 1,
    actionTaken: true,
    contactInfo: {
      firstName: "firstName",
      lastName: "lastName",
      email: "emai123@gmail.com",
    },
  }

  useEffect(() => {
    const postData = async () => {
      try {
        // const apiUrl =
        //   "http://localhost:4000/api/reports/views/dcad443e-d159-4b9d-88c0-734cc9e8244b"
        // await axios.put(apiUrl, data)

        // const response = await axios.get('https://httpbin.org/cookies/set?testcookie=testingcookie');
        const response = await axios.get('https://uqgwkt33cv.us-east-1.awsapprunner.com/api/demo/cbx07c/playerconfig');

        console.log("Response:", response)
        // console.log("Cookies:", response.headers["set-cookie"])

        // const payload = {
        //   shareKey: "d44h1q",
        //   type: "demo",
        // }
        // const apiUrl = "http://localhost:4000/api/reports/views"
        // await axios.post(apiUrl, payload)
      } catch (error) {
        console.error("Error in api:", error)
      }
    }

    postData()
  }, [])

  return (
    <div>
      <h1>Report IP Test</h1>
    </div>
  )
}

export default Report

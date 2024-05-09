import React, {useEffect} from "react"
import axios from "axios"
import Cookies from "js-cookie"

const CoolkiesCors = () => {
  const data = {
    shareKey: "d44h1q", //"cbx07c", //
    location: "",
    type: "demo",
  }

  console.log("-----cookies-----", Cookies.get("visiterId"))
  console.log("-----cookies-----", Cookies.get())

  useEffect(() => {
    const postData = async () => {
      try {
        const apiUrl = "http://localhost:4000/api/reports/views"
        // const apiUrl =
          // "https://uqgwkt33cv.us-east-1.awsapprunner.com/api/reports/views"
           await axios.post(apiUrl, data, {
            withCredentials: true,
            credentials: 'include'
          })
        } catch (error) {
          console.error("Error in api:", error)
        }

        // const response = await fetch(apiUrl, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   credentials: "include", // Include credentials (cookies)
        //   withCredentials: true,
        //   body: JSON.stringify(data),
        // })

        // if (!response.ok) {
        //   throw new Error("Network response was not ok")
        // }
      // } catch (error) {
      //   console.error("Error in api:", error)
      // }
    }

    postData()
  }, [])

  return (
    <div>
      <h1>Create Report View, Cookies and Cores ERROR Testing</h1>
    </div>
  )
}

export default CoolkiesCors

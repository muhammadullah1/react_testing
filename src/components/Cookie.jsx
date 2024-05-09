import React, {useEffect} from "react"
import axios from "axios"
import Cookies from "js-cookie"

const CookieTest = () => {
  // Cookies.set("visitorId", "2")
  // const cook = Cookies.get("visitorId")
  // console.log("---cookie------", cook)

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        // const response = await axios.get("http://localhost:4000/api/reports/cookies/1");
        // const response = await axios.get("https://uqgwkt33cv.us-east-1.awsapprunner.com/api/demo/cbx07c/playerconfig");
    
        // console.log('Response:', response);
        // console.log('Cookies in get api:', response.headers['set-cookie']);

        const payload = {
          shareKey: "cbx07c",
          type: "demo",
        }
        // const apiUrl = "https://uqgwkt33cv.us-east-1.awsapprunner.com/api/reports/views";
        const apiUrl = "http://localhost:4000/api/reports/views";
      //   // const apiUrl = await axios.get("http://localhost:4000/api/demo/v2/cbx07c");
      //   const created = await axios.post(apiUrl, payload)

      //   console.log("------created------", created)
      //   console.log('Cookies:', created.headers['set-cookie']);


      axios.post(apiUrl, payload, {
        withCredentials: true
      })
        .then(response => {
          // const cookies = response.headers['set-cookie'];
          console.log("------response------", response)

          const { data } = response.data;

          // Cookies.set("visitorId", data.visitorId)



          // const cook = Cookies.get("visitorId")
        })
        .catch(error => {
          console.error('Error:', error);
        }); 


          } catch (error) {
        console.error("Error fetching cookies:", error)
      }
    }

    fetchCookies()
  }, [])

  return (
    <div>
      <h1>Create Cookie Test</h1>
    </div>
  )
}

export default CookieTest

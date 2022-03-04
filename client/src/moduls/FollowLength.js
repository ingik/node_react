import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FollowLength(props) {
  const [Length, setLength] = useState("")

  useEffect(() => {
    if(props.followerId){
    axios.get('/api/users/followLength/'+props.followerId).then(response => {
      console.log(response.data[0].following.length)
      setLength(response.data[0].following.length)
    })
  }
  },[props.followerId,props.getData])

  return (
    <React.Fragment>
      { Length }
    </React.Fragment>     
  )
}

export default FollowLength
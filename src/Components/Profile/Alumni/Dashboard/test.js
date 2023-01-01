import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { axiosGetRequest } from '../../../../apiHelper.js';

function AlumniMyCard() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function getUser(){
      const response = await axiosGetRequest("/alumni/get/")
      console.log(response);
    }
    getUser()
  }, [])
  return (
    <Heading>Alumni Dashboard</Heading>
  )
}

export default AlumniMyCard
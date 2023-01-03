import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { axiosGetRequest } from '../../../apiHelper.js';

function MyCard() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function getUser(){
      const response = await axiosGetRequest("/student/get/")
    }
    getUser()
  }, [])
  return (
    <Heading>Dashboard</Heading>
  )
}

export default MyCard
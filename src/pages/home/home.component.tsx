import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './home.style'

export default memo(function Home() {
  return (
    <HomeWrapper>
      <h2>Home</h2>
    </HomeWrapper>
  )
})

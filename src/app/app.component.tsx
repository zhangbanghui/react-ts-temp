import React, { memo } from 'react'

import AppWrapper from './app.style'

export default memo(function App() {
  return (
    <AppWrapper>
      <div className="content">Hello World</div>
    </AppWrapper>
  )
})

import type { AppProps } from 'next/app'
import * as React from 'react'
import Header from "../Header/StorefrontHeader"

type Props = {
  children?: React.ReactNode
}

const MainComponent: React.FC<Props> = ({children}) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />

      <div className="container flex-fill">
        {children}
      </div>
    </div>
  )
}

export default MainComponent

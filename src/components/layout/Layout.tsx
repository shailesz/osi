import { MantineProvider } from '@mantine/core'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
    </MantineProvider>
  )
}

export default Layout

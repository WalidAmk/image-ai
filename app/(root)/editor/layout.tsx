import React from 'react'
import { CombinedContextProvider } from '@/context/FullContext';

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <CombinedContextProvider>
            {children}
        </CombinedContextProvider>
    )
}

export default Layout

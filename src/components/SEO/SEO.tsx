import React from 'react'
import { Helmet } from "react-helmet";

type TSEO = {
    title?: string;
    description?: string;
}

const SEO: React.FC<TSEO> = ({title, description}) => {
  return (
    <Helmet>
        <title>{Boolean(title?.length) ? `${title} | shailesz` : 'shailesz'}</title>
    </Helmet>
  )
}

export default SEO

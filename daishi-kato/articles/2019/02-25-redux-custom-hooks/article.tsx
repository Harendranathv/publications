import * as React from 'react'
import { createDocumentPage } from 'shared/pages/createDocumentPage'

export default createDocumentPage({
  title: "Creating a react-redux alternative with Hooks and Proxies",
  tags: ['react', 'redux'],
  blurb: (
    <p>
      Learn to create a simple React/Redux integration using Hooks, then improve the performance using JavaScript Proxies.
    </p>
  ),

  metaDescription: "Create a simple React/Redux integration with Hooks, then improve its performance with Proxies.",

  // socialImageURL: require('./social-media-card.png'),
  // socialTitle: "",
  // socialDescription: "",
  
  importMDX: () => import('./document.mdx'),
})
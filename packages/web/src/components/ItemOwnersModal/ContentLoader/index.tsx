import React from 'react'
import ContentLoader from 'react-content-loader'
import { theme } from '../../../../stitches.config'

import { Container } from './styles'

const ContentLoaderComponent: React.FC = () => {
  const nameWidth = [155, 175, 165, 135, 130]

  return (
    <Container>
      {[...Array(5)].map((_, i) => (
        <ContentLoader
          key={i.toString()}
          speed={2}
          style={{ width: '100%', height: '40px', margin: '10px 0 11px' }}
          backgroundColor={theme.colors['background-tertiary'].value}
          foregroundColor={theme.colors['background-quaternary'].value}
        >
          <rect x="0" y="0" rx="40" ry="40" width="40" height="40" />
          <rect x="55" y="5" rx="2" ry="2" width={nameWidth[i]} height="13" />
          <rect x="55" y="25" rx="2" ry="2" width="80" height="10" />
        </ContentLoader>
      ))}
    </Container>
  )
}

export { ContentLoaderComponent as ContentLoader }

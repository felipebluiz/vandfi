import React from 'react'
import ContentLoader from 'react-content-loader'
import { theme } from '../../../../stitches.config'

import { Container } from './styles'

const ContentLoaderComponent: React.FC = () => {
  const nameWidth = [155, 175, 165]

  return (
    <div className="search-results-container">
      <div className="search-results">
        <div className="section-title">
          <span>Items</span>
        </div>
        <Container>
          {[...Array(3)].map((_, i) => (
            <ContentLoader
              key={i.toString()}
              speed={2}
              style={{ width: '100%', height: '40px', margin: '10px 0 5px' }}
              backgroundColor={theme.colors['background-tertiary'].value}
              foregroundColor={theme.colors['background-quaternary'].value}
            >
              <rect x="20" y="0" rx="5" ry="5" width="40" height="40" />
              <rect
                x="80"
                y="5"
                rx="2"
                ry="2"
                width={nameWidth[i]}
                height="13"
              />
              <rect x="80" y="25" rx="2" ry="2" width="85" height="10" />
            </ContentLoader>
          ))}
        </Container>
        <div className="section-title">
          <span>Collections</span>
        </div>
        <Container>
          {[...Array(3)].map((_, i) => (
            <ContentLoader
              key={i.toString()}
              speed={2}
              style={{ width: '100%', height: '40px', margin: '10px 0 5px' }}
              backgroundColor={theme.colors['background-tertiary'].value}
              foregroundColor={theme.colors['background-quaternary'].value}
            >
              <rect x="20" y="0" rx="40" ry="40" width="40" height="40" />
              <rect
                x="80"
                y="5"
                rx="2"
                ry="2"
                width={nameWidth[i]}
                height="13"
              />
              <rect x="80" y="25" rx="2" ry="2" width="150" height="10" />
            </ContentLoader>
          ))}
        </Container>
        <div className="section-title">
          <span>Creators</span>
        </div>
        <Container>
          {[...Array(3)].map((_, i) => (
            <ContentLoader
              key={i.toString()}
              speed={2}
              style={{ width: '100%', height: '40px', margin: '10px 0 5px' }}
              backgroundColor={theme.colors['background-tertiary'].value}
              foregroundColor={theme.colors['background-quaternary'].value}
            >
              <rect x="20" y="0" rx="40" ry="40" width="40" height="40" />
              <rect
                x="80"
                y="5"
                rx="2"
                ry="2"
                width={nameWidth[i]}
                height="13"
              />
              <rect x="80" y="25" rx="2" ry="2" width="80" height="10" />
            </ContentLoader>
          ))}
        </Container>
      </div>
    </div>
  )
}

export { ContentLoaderComponent as ContentLoader }

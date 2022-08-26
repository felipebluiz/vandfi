import { styled } from '../../../stitches.config'

export const Container = styled('footer', {
  borderTop: '1px solid var(--colors-background-quaternary)',
  paddingTop: '80px',
  paddingBottom: '20px',

  a: {
    fontSize: 'var(--fontSizes-sm)',
    color: 'var(--colors-regular)',

    '&:hover': {
      color: 'var(--colors-white)'
    }
  },

  '.content': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
      'company company'
      'marketplace resources'
      'newsletter newsletter'
    `,
    gap: '50px',
    marginBottom: '50px',

    '.company': {
      gridArea: 'company / company / company / company'
    },

    '.marketplace': {
      gridArea: 'marketplace / marketplace / marketplace / marketplace'
    },

    '.resources': {
      gridArea: 'resources / resources / resources / resources'
    },

    '.newsletter': {
      gridArea: 'newsletter / newsletter / newsletter / newsletter'
    },

    '.title': {
      color: 'var(--colors-white)',
      paddingBottom: '20px'
    },

    '.logo-container': {
      marginBottom: '20px'
    },

    '.socials-container': {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',

      '.fa-instagram': {
        fontSize: 'var(--fontSizes-lg)'
      }
    },

    ul: {
      listStyle: 'none',
      padding: '0',

      li: {
        marginBottom: '10px',

        '&:last-child': {
          marginBottom: '0'
        }
      }
    },

    '.input': {
      position: 'relative',
      marginTop: '30px',

      input: {
        paddingRight: '125px'
      },

      button: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        padding: '10px 20px'
      }
    }
  },

  '.copyright': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateAreas: `
      'copy flag'
      'links links'
    `,
    rowGap: '5px',

    '.copy': {
      fontFamily: 'Arial'
    },

    '.brasil-icon': {
      width: '20px',
      marginLeft: '8px',
      marginTop: '1px'
    },

    '.links': {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',

      a: {
        fontSize: 'var(--fontSizes-xs)'
      },

      '.dot': {
        paddingTop: '2px'
      }
    }
  },

  '@bp990': {
    '.content': {
      gridTemplate:
        '"company marketplace resources newsletter" / minmax(auto, 380px) minmax(auto, 220px) minmax(auto, 220px) minmax(280px, auto)',
      marginBottom: '80px'
    },

    '.copyright': {
      gridTemplate: '"copy flag links" / auto 1fr auto'
    }
  }
})

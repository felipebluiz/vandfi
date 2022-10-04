import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas: `
    'image info'
    'tabs tabs'
    'more more'
  `,
  gap: '50px',
  padding: '45px 0',

  '.image-container': {
    flex: 1,
    position: 'relative',

    '.buttons': {
      position: 'absolute',
      transition: 'opacity 0.25s ease-in-out 0s',

      span: {
        fontWeight: 'var(--fontWeights-regular)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--colors-white)',
        marginTop: '1px'
      }
    },

    '.rarity': {
      top: '20px',
      left: '20px',

      button: {
        padding: '8px 14px',

        img: {
          filter: 'brightness(0) invert(1)',
          marginLeft: '-2px',
          marginTop: '-1px',
          marginRight: '8px'
        }
      }
    },

    '.like': {
      top: '20px',
      right: '20px',
      padding: '8px 14px',

      '.fa': {
        fontSize: '14px',
        marginRight: '8px'
      }
    },

    '.image-item': {
      width: '100%',
      maxWidth: '633px',
      maxHeight: '633px',
      borderRadius: '15px'
    }
  },

  '.content-container': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '25px',

    '.title': {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },

    '.action': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: 'fit-content',
      height: '44px',
      padding: '0 15px',
      border: '1px solid var(--colors-background-quaternary)',
      borderRadius: '100px',
      color: 'var(--colors-regular)'
    },

    '.rarity': {
      backgroundColor: 'var(--colors-background-tertiary)',
      borderColor: 'var(--colors-background-tertiary)',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: 'var(--colors-hover-background-tertiary)'
      }
    },

    '.actions-container': {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '10px',
      marginTop: '-5px'
    },

    '.description': {
      marginTop: '-2px',

      '.show-more': {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: 'var(--fontSizes-md)',
        color: 'var(--colors-white)',

        '&:hover': {
          color: 'var(--colors-hover-white)'
        }
      }
    },

    '.info-container': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',

      '.owner, .creator, .collection': {
        maxWidth: '204px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: 'var(--colors-background-tertiary)',
        borderRadius: '10px',
        cursor: 'pointer',

        '> button': {
          cursor: 'pointer'
        },

        '&:hover': {
          backgroundColor: 'var(--colors-hover-background-tertiary)'
        },

        '> div': {
          overflow: 'hidden',

          '.value': {
            color: 'var(--colors-white)',
            lineHeight: 'var(--lineHeights-short)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }
      }
    },

    '.price-container': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginTop: '5px',

      '.price, .countdown': {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--colors-background-quaternary)',
        borderRadius: '10px',
        height: '65px',

        '.label': {
          padding: '20px 20px 18px'
        },

        '.value': {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '18px 20px'
        },

        '.separator': {
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--colors-background-quaternary)'
        },

        p: {
          paddingTop: '1px',
          whiteSpace: 'nowrap'
        }
      },

      '.price .value': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        gap: '6px',

        '.fa': {
          fontSize: '14px'
        },

        '.fa, .amount': {
          color: 'var(--colors-white)'
        },

        '.convertedAmount': {
          letterSpacing: '0.5px'
        }
      },

      '.countdown .value p': {
        color: 'var(--colors-white)',
        letterSpacing: '0.5px'
      }
    },

    '.buttons-container': {
      display: 'flex',
      marginTop: '5px',

      button: {
        flex: 1,
        padding: '21px 20px',
        borderRadius: '10px',
        position: 'relative',

        '&:first-child': {
          backgroundColor: 'var(--colors-primary)',

          '&:hover': {
            backgroundColor: 'var(--colors-hover-primary)'
          },

          '.icon-container': {
            backgroundColor: 'var(--colors-white) !important',

            '.fa': {
              color: 'var(--colors-primary) !important'
            }
          }
        },

        '.icon-container': {
          position: 'absolute',
          left: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '34px',
          height: '34px',
          borderRadius: '100px',

          '&.tag': {
            backgroundColor: 'var(--colors-background-primary)'
          },

          '.fa': {
            marginRight: 0,

            '&.fa-ethereum': {
              fontSize: '1.2rem'
            },

            '&.fa-tag': {
              color: 'var(--colors-white)',
              fontSize: 'var(--fontSizes-md)'
            }
          }
        },

        span: {
          fontSize: 'var(--fontSizes-lg)',
          fontWeight: 'var(--fontWeights-bold)',
          color: 'var(--colors-white)',
          textTransform: 'uppercase'
        }
      }
    },

    '.unlockable-content': {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '18px 20px',
      marginTop: '5px',
      border: '1px solid var(--colors-background-quaternary)',
      borderRadius: '10px',

      '.fa-lock': {
        fontSize: '20px'
      },

      '.title': {
        color: 'var(--colors-white)'
      }
    }
  },

  '.tabs-container': {
    gridArea: 'tabs / tabs',

    '.tabs': {
      display: 'flex',
      alignItems: 'center',
      padding: '0',
      marginBottom: '15px',
      borderBottom: '1px solid var(--colors-background-quaternary)',
      gap: '30px',

      li: {
        display: 'inherit',
        listStyle: 'none',

        '&:first-child a': {
          paddingLeft: '0'
        },

        button: {
          padding: '15px 0 18px',
          background: 'none',
          border: 'none',
          marginBottom: '-1px',

          span: {
            fontWeight: 'var(--fontWeights-medium)',
            fontSize: 'var(--fontSizes-md)',
            color: 'var(--colors-regular)'
          },

          '&:hover span': {
            color: 'var(--colors-white)'
          }
        },

        '&.active button': {
          padding: '15px 0',
          borderBottom: '3px solid var(--colors-white)',

          span: {
            color: 'var(--colors-white)'
          }
        }
      }
    },

    '.table-container': {
      maxHeight: '367px',
      overflow: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor:
        'var(--colors-background-quaternary) var(--colors-background-primary)',

      '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
        backgroundColor: 'var(--colors-background-primary)'
      },

      '&::-webkit-scrollbar-thumb': {
        background: 'var(--colors-background-quaternary)',
        borderRadius: '5px'
      },

      '&::-webkit-scrollbar-corner': {
        background: 'var(--colors-background-primary)'
      },

      '&.table-padding': {
        paddingRight: '10px'
      },

      table: {
        width: '100%',
        minWidth: '910px',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',

        'th, td': {
          padding: '10px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },

        th: {
          position: 'sticky',
          top: '0',
          padding: '6px 10px 4px',
          background: 'var(--colors-background-quaternary)',
          textAlign: 'left',
          zIndex: '2',

          '&:first-child': {
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px'
          },

          '&:last-child': {
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px'
          }
        },

        'th:last-child': {
          border: '0'
        },

        td: {
          paddingTop: '12px',
          paddingBottom: '12px',

          '.event': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '5px 10px',
            borderRadius: '30px',

            '.fa': {
              fontSize: '12px',

              '&.fa-dollar-sign': {
                fontSize: '14px'
              }
            },

            p: {
              textTransform: 'capitalize',
              lineHeight: 'initial'
            },

            '&.sale': {
              border: '1px solid var(--colors-sucess-primary)',

              '.fa, p': {
                color: 'var(--colors-sucess-primary)'
              }
            },

            '&.transfer': {
              border: '1px solid var(--colors-primary)',

              '.fa, p': {
                color: 'var(--colors-primary)'
              }
            },

            '&.list': {
              border: '1px solid var(--colors-warning-primary)',

              '.fa, p': {
                color: 'var(--colors-warning-primary)'
              }
            },

            '&.bid': {
              border: '1px solid #e207fa',

              '.fa, p': {
                color: '#e207fa'
              }
            },

            '&.mint': {
              border: '1px solid var(--colors-error-primary)',

              '.fa, p': {
                color: 'var(--colors-error-primary)'
              }
            }
          },

          '.date': {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',

            'p, .fa': {
              color: 'var(--colors-white)'
            },

            '.fa': {
              marginTop: '-2px'
            },

            '&:hover': {
              'p, .fa': {
                color: 'var(--colors-hover-white)'
              }
            }
          },

          '.user': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            '.name': {
              color: 'var(--colors-white)',
              lineHeight: 'var(--lineHeights-shorter)',
              paddingTop: '3px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '80px'
            }
          },

          '.expired': {
            textDecoration: 'line-through'
          },

          '.price': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            gap: '6px',

            '.fa': {
              fontSize: '14px'
            },

            'p > .amount': {
              fontWeight: 'var(--fontWeights-bold)',
              paddingRight: '5px'
            }
          },

          '.buy-button': {
            padding: '10px 20px 10px 18px',

            '.fa-ethereum': {
              marginTop: '-1px'
            }
          }
        },

        tr: {
          td: {
            borderBottom: '1px solid var(--colors-background-quaternary)'
          },

          '&:last-child td': {
            borderBottom: 'none'
          }
        }
      }
    }
  },

  '.more-items': {
    gridArea: 'more / more'
  },

  '@bp990': {
    '.tabs-container .table-container': {
      maxHeight: '361px',

      'table td .user .name': {
        maxWidth: '130px'
      }
    }
  },

  variants: {
    multipleOwners: {
      true: {
        '.content-container': {
          '.actions-container': {
            gridTemplateColumns: 'auto auto 1fr auto auto !important',

            '.owners': {
              backgroundColor: 'var(--colors-background-tertiary)',
              borderColor: 'var(--colors-background-tertiary)',
              cursor: 'pointer',

              '&:hover': {
                backgroundColor: 'var(--colors-hover-background-tertiary)'
              }
            }
          },

          '.info-container': {
            justifyContent: 'start'
          }
        }
      }
    },
    rarity: {
      true: {
        '.content-container .actions-container': {
          gridTemplateColumns: 'auto 1fr auto auto'
        }
      }
    }
  }
})

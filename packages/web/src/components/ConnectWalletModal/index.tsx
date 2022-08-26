import React, { useRef } from 'react'

import { Modal, ModalHandle } from '@/components/Modal'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'

import { Container } from './styles'

interface ConnectWalletModalProps {
  modalIsChildren?: boolean
  connectWalletModalIsOpen: boolean
  setConnectWalletModalIsOpen: (value: boolean) => void
}

export const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  modalIsChildren,
  connectWalletModalIsOpen,
  setConnectWalletModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)

  return (
    <Modal
      ref={modalRef}
      modalIsOpen={connectWalletModalIsOpen}
      setModalIsOpen={setConnectWalletModalIsOpen}
      modalIsChildren={modalIsChildren}
      hideActions
      width="420"
      title="Connect Wallet"
    >
      <Container>
        <Text size="md">
          Sign in with one of available wallet providers or create a new wallet.{' '}
          <Link href="#">What is a wallet?</Link>
        </Text>
        <div className="buttons-container">
          <Text size="xs">Popular</Text>
          <Button variant="tertiary" size="md" radius="semiRounded" custom>
            <img src="/icons/metamask.svg" className="fa wallet-icon" />
            <span>MetaMask</span>
          </Button>
          <Button variant="tertiary" size="md" radius="semiRounded" custom>
            <img src="/icons/coinbase.svg" className="wallet-icon" />
            <span>Coinbase Wallet</span>
          </Button>
          <Button variant="tertiary" size="md" radius="semiRounded" custom>
            <img
              src="/icons/wallet-connect.svg"
              className="wallet-icon wallet-connect"
            />
            <span>WalletConnect</span>
          </Button>
          <Text size="xs">Others</Text>
          <Button variant="tertiary" size="md" radius="semiRounded" custom>
            <img src="/icons/torus.svg" className="wallet-icon" />
            <span>Torus</span>
          </Button>
          <Button variant="tertiary" size="md" radius="semiRounded" custom>
            <img src="/icons/portis.svg" className="wallet-icon portis" />
            <span>Portis</span>
          </Button>
        </div>
      </Container>
    </Modal>
  )
}

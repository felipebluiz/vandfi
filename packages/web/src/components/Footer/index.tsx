import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { Text } from '@/components/Text'
import { IconButton } from '@/components/IconButton'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'
import { socialLinks } from '../../__mocks__'
import { patterns } from '../../utils'

import { Container } from './styles'

interface FormValues {
  email: string
}

export const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const [formLoading, setFormLoading] = useState(false)

  const onSubmit: SubmitHandler<FormValues> = data => {
    setFormLoading(true)

    setTimeout(() => {
      console.log(data)

      setFormLoading(false)
    }, 2000)
  }

  return (
    <Container>
      <div className="content">
        <div className="company">
          <Logo animation={false} size="sm" />
          <Text size="sm">
            Lorem ipsum dolor sit amet. Consectur adipiscing elit. Quis non,
            fugit totam vel laboriosam vitae.
          </Text>
          <div className="socials-container">
            <IconButton
              icon={faFacebookF as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socialLinks.facebook, '_blank')}
            />
            <IconButton
              icon={faTwitter as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socialLinks.twitter, '_blank')}
            />
            <IconButton
              icon={faInstagram as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socialLinks.instagram, '_blank')}
            />
            <IconButton
              icon={faDiscord as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socialLinks.discord, '_blank')}
            />
            <IconButton
              icon={faYoutube as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socialLinks.youtube, '_blank')}
            />
          </div>
        </div>
        <div className="marketplace">
          <Text size="lg" weight="medium" className="title">
            Marketplace
          </Text>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/how-it-works">
                <a>How it works</a>
              </Link>
            </li>
            <li>
              <a
                href="https://blog.vandfi.com"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="resources">
          <Text size="lg" weight="medium" className="title">
            Resources
          </Text>
          <ul>
            <li>
              <Link href="/help-center">
                <a>Help center</a>
              </Link>
            </li>
            <li>
              <Link href="/become-a-partner">
                <a>Become a partner</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <Text size="lg" weight="medium" className="title">
            Join Newsletter
          </Text>
          <Text size="sm">
            Subscribe our newsletter to get notified about news, hot
            collections, live bids and more.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <TextField
                {...register('email', {
                  required: 'This field is required',
                  pattern: patterns.email
                })}
                type="email"
                name="email"
                label="Enter Your E-mail"
              />
              <Button variant="primary" size="md" loading={formLoading}>
                Subscribe
              </Button>
              {errors.email && (
                <Text size="xs" className="error-message">
                  {errors?.email.message}
                </Text>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="copyright">
        <Text size="sm">
          <span className="copy">&copy;</span> Vandfi, Inc. All rights reserved.
        </Text>
        <img
          src="/icons/brazil.svg"
          alt="Brasil flag"
          title="Made in Brazil"
          className="brasil-icon"
        />
        <div className="links">
          <Link href="/">
            <a>Terms of service</a>
          </Link>
          <Text>&#x2022;</Text>
          <Link href="/">
            <a>Privacy policy</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

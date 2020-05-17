import React from 'react'

import { Layout } from '../components/Layout'
import { ButtonLink, UnstyledLink } from '../components/Link';
import { Activity } from '../components/Activity';
import { Image } from '../components/Image';

import notFound from '../../static/not-found.png';

export default () => {
  return (
      <Layout>
        <div className="top grid">
          <UnstyledLink to="/">
            <h1 className="title full-area">Bored in Quarantine?</h1>
          </UnstyledLink>
        </div>

        <div className="middle">
          <Image src={ notFound } alt="Man holding up a blank page, frowning" />
          <Activity>
            This page doesn't exist.
          </Activity>
        </div>

        <div className="indicators grid">
          <ButtonLink to='/'>
            Take me home
          </ButtonLink>
        </div>
      </Layout>
  )
}

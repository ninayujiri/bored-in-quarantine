import React, { useState } from 'react'

import { Layout, TitleContainer } from '../components/Layout'
import { Button } from '../components/Button'
import { Activity } from '../components/Activity'
import { Image } from '../components/Image'

import placeholder from '../../static/placeholder.png'

export default () => {
  const [text, setText] = useState();

  const getSoloActivity = () => {
    fetch(`https://www.boredapi.com/api/activity?participants=1&minaccessibility=0&maxaccessibility=0.1`)
        .then(response => {
          return response.json()
        })
        .then(json => {
          setText(json.activity);
        })
        .catch(error => {
          console.log(error);
        })
  };

  return (
      <Layout>
        <div className="top grid">
          <TitleContainer onClick={ () => setText(null) }>
            <h1 className="title full-area">Bored in Quarantine?</h1>
          </TitleContainer>
        </div>

        <div className="middle">
          {
            text
                ? <Activity>
                  { text }
                </Activity>
                : <Image src={ placeholder } alt="Girl sitting on the couch with laptop, frowning" />
          }
        </div>

        <div className="indicators grid">
          <Button onClick={ getSoloActivity } type="button">
            Find me something to do
          </Button>
        </div>
      </Layout>
  )
}

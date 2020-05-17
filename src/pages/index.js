import React, { useState } from 'react'

import { Layout, TitleContainer } from '../components/Layout'
import { Button } from '../components/Button'
import { Activity } from '../components/Activity'
import { Image } from '../components/Image'

import placeholder from '../../static/placeholder.png'
import { Form, FormGroup, Label, Select } from '../components/Form';

export default () => {
  const [text, setText] = useState();
  const [participants, setParticipants] = useState(1);

  const getSoloActivity = (e) => {
    e.preventDefault();

    fetch(`https://www.boredapi.com/api/activity?participants=${ participants }&minaccessibility=0&maxaccessibility=0.1`)
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
          <TitleContainer onClick={ () => setText(null) } type="button">
            <h1 className="title full-area">
              Bored in Quarantine?
            </h1>
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
          <Form>
            <FormGroup>
              <Label htmlFor="participants">
                Participants
              </Label>
              <Select
                  id="participants"
                  name="participants"
                  value={ participants }
                  onChange={ (e) => setParticipants(e.target.value) }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </FormGroup>
            <Button
                onClick={ getSoloActivity }
                type="submit"
            >
              Find me something to do
            </Button>
          </Form>
        </div>
      </Layout>
  )
}

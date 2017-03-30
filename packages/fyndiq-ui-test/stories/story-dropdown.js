import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from 'fyndiq-component-dropdown'
import Button from 'fyndiq-component-button'

storiesOf('Dropdown', module)
  .addWithInfo('default', () => (
    <Dropdown button="Click me">
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('no down arrow', () => (
    <Dropdown button="Click me" noArrow>
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('opened', () => (
    <Dropdown button="Click me" opened>
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('custom button', () => (
    <Dropdown button={<Button type="primary">Open me</Button>}>
      Dropdown content
    </Dropdown>
  ))

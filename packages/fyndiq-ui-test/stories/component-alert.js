import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Alert from 'fyndiq-component-alert'

storiesOf('Alert', module)
  .addDecorator(story => (
    // This decorator is here to avoid clashing the alert message with the info
    // button on the top right
    <div style={{ paddingTop: 30 }}>
      {story()}
    </div>
  ))
  .addWithInfo('default', () => (
    <Alert onClose={action('closed')}>Your message here</Alert>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Alert type="info">Info alert</Alert>
      <Alert type="good">Good alert</Alert>
      <Alert type="warning">Warning alert</Alert>
      <Alert type="bad">Bad alert</Alert>
    </div>
  ))
  .addWithInfo('custom content', () => (
    <Alert>
      <h3>Alert title</h3>
      <p>This is an alert. The text can spawn over several different lines.</p>
      <p>You can put <strong>watever you want</strong> really, it&apos;s fine.</p>
      <p>You can show alert for a specific number of times.</p>
    </Alert>
  ))
  .addWithInfo('repeatable alert', () => (
    <Alert stopShowingAfter={2} stopShowingAfterKey="Sample_alert">
      <h3>Alert Repeatable</h3>
      <p>This alert will be availble for specific number of times.</p>
      <p>This alert need two props one for to display for specific time.</p>
      <p>Second for a unique key name for alert component.</p>
    </Alert>
  ))
  .addWithInfo('unclosable alert', () => (
    <Alert unclosable>
      You can&apos;t close me!
    </Alert>
  ))

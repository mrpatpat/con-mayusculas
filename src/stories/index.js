import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import AddPlayers from "../add-players/AddPlayers";
import PlayerNames from "../add-players/PlayerNames";
import Card from "../cards/Card";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('AddPlayers', module)
    .add('full form with no players', () => <AddPlayers/>)
    .add('full form with some players', () => <AddPlayers players={["Kenneth", "Yung A", "Staiger"]}/>)
    .add('three player names', () => <PlayerNames players={["Kenneth", "Yung A", "Staiger"]}/>)
    .add('zero player names', () => <PlayerNames players={[]}/>);

storiesOf('Cards', module)
    .add('simple card', () => <Card players={["Kenneth", "Yung A", "Staiger"]}/>);

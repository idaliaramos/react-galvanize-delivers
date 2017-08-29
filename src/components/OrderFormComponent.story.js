import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';
import { action } from '@storybook/addon-actions';

storiesOf('OrderFormComponent', module).add('Happy Path', () =>
  <OrderFormComponent
    id="order form compnent 1"
    onSubmit={action('WAS_SUBMITTED')}
  />
);

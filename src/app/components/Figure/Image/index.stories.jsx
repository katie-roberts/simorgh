import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Img } from './index';
import {
  imageAltLandscape,
  imageSrcLandscape,
  imageAltPortrait,
  imageSrcPortrait,
  imageAltSquare,
  imageSrcSquare,
  imageAltCustom,
  imageSrcCustom,
} from './fixtureData';

storiesOf('Image - Img', module)
  .add('16:9 landscape image', () => (
    <Img alt={imageAltLandscape} src={imageSrcLandscape} />
  ))
  .add('16:9 portrait image', () => (
    <Img alt={imageAltPortrait} src={imageSrcPortrait} />
  ))
  .add('1:1 square image', () => (
    <Img alt={imageAltSquare} src={imageSrcSquare} />
  ))
  .add('custom ratio image', () => (
    <Img alt={imageAltCustom} src={imageSrcCustom} />
  ));

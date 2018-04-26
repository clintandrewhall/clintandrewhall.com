// @flow

import React from 'react';

import Header from './../core/Header';

import type {PortfolioItemType} from './PortfolioItem';

type Props = {
  entry: PortfolioItemType,
};

export default (props: Props) => {
  console.log('entry', props.entry);
  const {entry} = props;
  return (
    <div>
      <Header />
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: entry.__content }}
      />
    </div>
  );
};

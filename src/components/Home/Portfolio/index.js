// @flow

import React from 'react';
import Masonry from 'react-masonry-component';
import { PhotoSwipe } from 'react-photoswipe';

import PortfolioItem from './PortfolioItem';

import 'react-photoswipe/lib/photoswipe.css';

import styles from './index.module.css';

const masonryOptions = {
  resize: true,
};

type Props = {};

type State = {
  isOpen: boolean,
  index: number,
};

class Portfolio extends React.Component<Props, State> {
  state = {
    isOpen: false,
    index: 0,
  };

  _openSwipe(index: number) {
    this.setState({ index, isOpen: true });
  }

  render() {
    // $FlowFixMe
    const portfolioContext = require.context(
      '!markdown-with-front-matter-loader!./../../../_content/portfolio',
      false,
      /.md$/,
    );

    const entries = portfolioContext
      .keys()
      .reduce(
        (memo, fileName) =>
          memo.set(
            fileName.match(/.\/([^.]+).*/)[1],
            portfolioContext(fileName),
          ),
        new Map(),
      );

    const swipes = [...entries.values()].map(entry => ({
      src: entry.coverSrc,
      w: entry.coverSize.split('x')[0],
      h: entry.coverSize.split('x')[1],
      title: entry.title,
    }));

    const items = [...entries.values()].map((entry, index) => (
      <PortfolioItem
        item={entry}
        key={entry.timestamp + '_' + index}
        onClick={() => this._openSwipe(index)}
      />
    ));

    return [
      <section className={styles.root} id="works" key="root">
        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h2 className={styles.title}>Portfolio</h2>
            <h3 className={styles.subtitle}>See My Latest Projects</h3>
            <p className={styles.lead}>
              Here are a few of the things I've been working on recently.
            </p>
          </div>
        </div>
        <div className={styles.portfolio}>
          <Masonry className={styles.masonry} options={masonryOptions}>
            {items}
          </Masonry>
        </div>
      </section>,
      <PhotoSwipe
        isOpen={this.state.isOpen}
        onClose={() => {
          this.setState({ isOpen: false });
        }}
        items={swipes}
        key="swipe"
      />,
    ];
  }
}

export default Portfolio;

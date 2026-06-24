import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@components/button';
import { cx } from '@lib/css';

import styles from './people_line.styles';

export interface PeopleLineProps {
  people: Record<string, React.ReactNode>;
}

export const PeopleLine = ({ people }: PeopleLineProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const items = useMemo(() => Object.entries(people), [people]);
  const itemCount = items.length;
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(itemCount);

  const getScrollPositions = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return [];
    }

    const maxScrollLeft = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);

    return Array.from(scroller.children).reduce<number[]>((positions, child) => {
      if (!(child instanceof HTMLElement)) {
        return positions;
      }

      const position = Math.min(Math.max(child.offsetLeft - scroller.offsetLeft, 0), maxScrollLeft);
      const previousPosition = positions.at(-1);

      if (previousPosition === undefined || Math.abs(previousPosition - position) > 1) {
        positions.push(position);
      }

      return positions;
    }, []);
  }, []);

  const updatePageState = useCallback(() => {
    const scroller = scrollerRef.current;
    const positions = getScrollPositions();

    setPageCount(positions.length);

    if (!scroller || positions.length === 0) {
      setActivePage(0);
      return;
    }

    const nextPage = positions.reduce(
      (nearest, position, index) => {
        const distance = Math.abs(position - scroller.scrollLeft);
        return distance < nearest.distance ? { distance, index } : nearest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    ).index;

    setActivePage(nextPage);
  }, [getScrollPositions]);

  const scrollToPage = useCallback(
    (page: number) => {
      const scroller = scrollerRef.current;
      const positions = getScrollPositions();

      if (!scroller || positions.length === 0) {
        return;
      }

      const nextPage = Math.min(Math.max(page, 0), positions.length - 1);

      scroller.scrollTo({ behavior: 'auto', left: positions[nextPage] });
      setActivePage(nextPage);
    },
    [getScrollPositions],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    updatePageState();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updatePageState);
      return () => window.removeEventListener('resize', updatePageState);
    }

    const resizeObserver = new ResizeObserver(updatePageState);

    resizeObserver.observe(scroller);
    Array.from(scroller.children).forEach((child) => resizeObserver.observe(child));

    return () => resizeObserver.disconnect();
  }, [items, updatePageState]);

  return (
    <div {...cx(styles.root, 'peopleline')}>
      <div {...styles.scroller} ref={scrollerRef} onScroll={updatePageState}>
        {items.map(([key, item]) => (
          <div {...styles.item} key={key}>
            {item}
          </div>
        ))}
      </div>
      {pageCount > 1 ? (
        <div {...styles.controls} data-peopleline-controls="">
          <Button
            variant="icon"
            aria-label="Previous reference"
            disabled={activePage === 0}
            onClick={() => scrollToPage(activePage - 1)}
          >
            <span {...styles.buttonGlyph} aria-hidden="true">
              ‹
            </span>
          </Button>
          <div {...styles.pagination} aria-label="Reference pages">
            {Array.from({ length: pageCount }, (_, page) => (
              <button
                {...styles.dot(page === activePage)}
                type="button"
                aria-label={`Show reference page ${page + 1}`}
                aria-current={page === activePage ? 'true' : undefined}
                key={page}
                onClick={() => scrollToPage(page)}
              />
            ))}
          </div>
          <Button
            variant="icon"
            aria-label="Next reference"
            disabled={activePage === pageCount - 1}
            onClick={() => scrollToPage(activePage + 1)}
          >
            <span {...styles.buttonGlyph} aria-hidden="true">
              ›
            </span>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

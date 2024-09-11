/**
  Derived from `use-slots`: https://www.npmjs.com/package/use-slots
  Altered to divide non-slot children into a `children` slot.

  MIT License

  Copyright (c) 2021 Hyan Mandian

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 */

import React from 'react';
import type { ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

type Slot = { slot?: string } & ReactNode;
type Slots = { [key: string]: Slot[] };

export function useSlots(children: ReactNode): Slots {
  const slots = flattenChildren(children).reduce((acc, child) => {
    const slot = (child as any).type?.slot;

    return slot ? { ...acc, [slot]: acc[slot] ? [...acc[slot], child] : [child] } : acc;
  }, {} as Slots);

  const remaining = React.Children.toArray(children).filter((child) => {
    return !(child as any).type?.slot;
  });

  return { ...slots, children: remaining };
}

export function slot<T>(Component: T, name: string) {
  (Component as unknown as Slot).slot = name;

  return Component;
}

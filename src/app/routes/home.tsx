import { Home as HomePage } from '@pages/home';

import { getMeta } from './meta';

export const meta = getMeta();

export default function Home() {
  return <HomePage />;
}

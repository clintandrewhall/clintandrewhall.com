import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/home';
import { routes } from './routes';

function fade(
  element: HTMLElement,
  callback: (() => void) | null = null,
): void {
  let opacity = parseFloat(element.style.opacity);
  opacity -= 0.1;

  if (opacity < 0) {
    element.style.display = 'none';
    callback && callback();
  } else {
    setTimeout(() => fade(element, callback), 40);
  }

  element.style.opacity = `${opacity}`;
}

window.addEventListener('load', () => {
  const html = document.getElementsByTagName('html')[0];
  const loader = document.getElementById('loader');
  const preloader = document.getElementById('preloader');
  html.classList.add('preload');

  // force page scroll position to top at page refresh
  // $('html, body').animate({ scrollTop: 0 }, 'normal');
  if (loader && preloader) {
    loader.style.opacity = '1';
    preloader.style.opacity = '1';

    fade(loader, () => {
      html.classList.remove('preload');
      html.classList.add('loaded');
      fade(preloader);
      const event = new Event('fade-finished');
      window.dispatchEvent(event);
    });
  }
});

export const App = () => (
  <Router>
    <div style={{ height: '100%' }}>
      <Route path="/" component={Home} exact />
      {routes()}
      <div id="preloader">
        <div id="loader" />
      </div>
    </div>
  </Router>
);

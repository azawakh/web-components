import platform from 'platform';
import 'js/elements/my-app';

document.addEventListener('DOMContentLoaded', () => {
  {
    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    app.innerHTML = 'DOMContentLoaded';
    document.body.appendChild(app);
  }

  {
    const app = document.getElementById('app');
    const platformElm = document.createElement('p');
    if (platform.name) {
      platformElm.innerHTML = platform.name;
    }
    if (app) {
      app.appendChild(platformElm);
    }
  }

  {
    const app = document.getElementById('app');
    const myApp = document.createElement('my-app');
    if (app) {
      app.appendChild(myApp);
    }
  }
});

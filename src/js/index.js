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
    platformElm.innerHTML = platform.name;
    app.appendChild(platformElm);
  }

  {
    const app = document.getElementById('app');
    const myApp = document.createElement('my-app');
    app.appendChild(myApp);
  }
});

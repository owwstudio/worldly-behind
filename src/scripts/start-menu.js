/** Native popover navigation: Tab follows links, Escape restores focus. */
class WorldlyStart extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';
    const button = this.querySelector('button');
    const navigation = this.querySelector('nav');
    if (!button || !navigation) return;
    const links = [...navigation.querySelectorAll('a')];

    navigation.addEventListener('toggle', () => {
      button.setAttribute('aria-expanded', String(navigation.matches(':popover-open')));
    });

    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      navigation.showPopover();
      (event.key === 'ArrowDown' ? links[0] : links.at(-1))?.focus();
    });

    navigation.addEventListener('keydown', (event) => {
      const index = links.indexOf(/** @type {HTMLAnchorElement} */ (document.activeElement));
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % links.length;
      if (event.key === 'ArrowUp') next = (index - 1 + links.length) % links.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = links.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        links[next]?.focus();
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        navigation.hidePopover();
        button.focus();
      }
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) navigation.hidePopover();
    });
  }
}

if (!customElements.get('worldly-start')) customElements.define('worldly-start', WorldlyStart);

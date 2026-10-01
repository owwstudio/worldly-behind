/** Make overflowing Notepad panels named keyboard regions; leave copying to Starlight. */
class WorldlyCodePanels extends HTMLElement {
  /** @type {ResizeObserver | undefined} */
  observer;

  connectedCallback() {
    const blocks = [...this.querySelectorAll('.expressive-code pre')];
    const labelRegions = () => blocks.forEach((block, index) => {
      if (block.scrollWidth > block.clientWidth) {
        block.setAttribute('role', 'region');
        block.setAttribute('tabindex', '0');
        block.setAttribute('aria-label', `Blok kode ${index + 1}`);
      } else {
        block.removeAttribute('role');
        block.removeAttribute('tabindex');
        block.removeAttribute('aria-label');
      }
    });
    this.observer = new ResizeObserver(labelRegions);
    blocks.forEach((block) => this.observer?.observe(block));
    labelRegions();
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }
}

if (!customElements.get('worldly-code-panels')) {
  customElements.define('worldly-code-panels', WorldlyCodePanels);
}

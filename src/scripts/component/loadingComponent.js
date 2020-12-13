class loadingWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="backgrondLoad">
            <div class="circle"></div>
        </div>
    `;
  }
}

customElements.define('loading-web', loadingWeb);

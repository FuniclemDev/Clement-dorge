class AnnouncementBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="cv.html">
          <p style="margin-left: 10px; margin-right: 10px">
            Je suis actuellement à la recherche d'un stage 
            <strong>à temps plein</strong> en développement informatique entre le 
            <strong>30 mars</strong> et le <strong>30 juillet 2026</strong>.
          </p>
        </a>
    `;
  }
}
customElements.define('announcement-banner', AnnouncementBanner);

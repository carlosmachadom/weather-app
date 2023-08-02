class DayLocation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['degrees', 'city', 'country', 'state', 'state-image'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal;
        }
    }

    getStyles() {
        return `
            <style>
                :host {
                    width: 100%;
                }

                .rb{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .general-status {
                    width: 100%;
                }

                .status--title {
                    font-size: 3rem;
                    word-break: break-word;
                    line-height: 3.2rem;
                    color: var(--white);
                    font-weight: bold;
                    text-align: center;
                }

                .status--img {
                    width: 100%;
                    display: grid;
                    place-items: center;
                }

                .status--img img{
                    width: 100%;
                    max-width: 160px;
                    object-fit: contain;
                    object-position: center;
                }

                .status--degrees {
                    font-size: 6rem;
                    text-align: center;
                }

                .status-location {
                    text-align: center;
                    font-size: 1.6rem;
                    padding-block-start: 1rem;
                }

                @media (max-width: 598px) {
                    .general-status {
                        max-width: 360px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr 1fr;
                        place-items: center;
                    }

                    .status--title {
                        grid-column: 1 / 3;
                        grid-row: 1 / 2;
                    }

                    .status--img {
                        grid-column: 1 / 2;
                        grid-row: 2 / 4;
                    }

                    .status--degrees {
                        grid-column: 2 / 3;
                        grid-row: 2 / 3;
                    }

                    .status-location {
                        grid-column: 2 / 3;
                        grid-row: 3 / 4;
                    }
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <article class="rb general-status">
                <h2 class="rb status--title">${this.dataset.state}</h2>
                <figure class="rb status--img">
                    <img class="rb" src="${this.dataset.stateImage}" title="${this.dataset.state}" alt=""/>
                </figure>
                <h4 class="rb status--degrees">${this.dataset.degrees}</h4>
                <p class="rb status-location">
                    <span class="rb status--city">${this.dataset.city}</span> /
                    <span class="rb status--country">${this.dataset.country}</span>
                </p>
            </article>
        
            ${this.getStyles()}
        `;

        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('date-location-component', DayLocation);

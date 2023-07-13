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

                .reset-box {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .general-status {
                    width: 100%;
                }

                .status--img {
                    width: 100%;
                    display: grid;
                    place-items: center;
                }

                .status--img img{
                    width: 160px;
                    object-fit: contain;
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
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <article class="reset-box general-status">
                <figure class="reset-box status--img">
                    <img class="reset-box" src="${this.dataset.stateImage}" alt="${this.dataset.state}" />
                </figure>
                <h4 class="reset-box status--degrees">${this.dataset.degrees}</h4>
                <p class="reset-box status-location">
                    <span class="reset-box status--city">${this.dataset.city}</span> /
                    <span class="reset-box status--country">${this.dataset.country}</span>
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

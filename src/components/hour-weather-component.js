class HourWeatherComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['hour', 'icon', 'temp', 'condition'];
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
                    
                }

                .rb {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }     
                
                .card {
                    padding: 1.2rem;
                    background-color: var(--gray);
                    text-align: center;
                }

                .card--hour {
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--white);
                    font-weight: bold;
                }

                .card--img {
                    width: 100%;
                    max-width: 42px;
                }

                .card--temp {
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--white);
                    font-weight: bold;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="rb card">
                <p class="rb card--hour">${this.dataset.hour}</p>
                <img class="rb card--img" src="${this.dataset.icon}" title="${this.dataset.condition}" alt="${this.dataset.condition}"/>
                <p class="rb card--temp">${this.dataset.temp}</p>
            </div>
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

customElements.define('hour-weather-component', HourWeatherComponent);
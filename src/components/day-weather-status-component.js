class DayWeatherStatus extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['wind-status', 'humidity', 'visibility', 'air-presure'];
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
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="status-wrapper">
                <article class="status-card">
                    <h3 class="card--title">Wind Status</h3>
                    <p class="card--number">${this.dataset.windStatus} mps</p>
                </article>

                <article class="status-card">
                    <h3 class="card--title">Humidity</h3>
                    <p class="card--number">${this.dataset.humidity} %</p>
                </article>

                <article class="status-card">
                    <h3 class="card--title">Visibility</h3>
                    <p class="card--number">${this.dataset.visibility} miles</p>
                </article>

                <article class="status-card">
                    <h3 class="card--title">Air Pressure</h3>
                    <p class="card--number">${this.dataset.airPressure} mb</p>
                </article>
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

customElements.define('day-weather-status-component', DayWeatherStatus);
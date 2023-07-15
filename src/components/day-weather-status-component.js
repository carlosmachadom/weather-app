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

                .rb {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .title-container {
                    width: 100%;
                    padding: 2rem 0 0 0;
                }

                .title-container h3 {
                    font-size: 2.4rem;
                    text-align: center;
                    margin-block-end: 2rem;
                }

                .status-wrapper {
                    width: 100%;
                    padding: 2rem 0;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .status-card {
                    padding: 2.6rem 2rem;
                    background-color: var(--gray);
                    width: 100%;
                    max-width: 320px;
                }

                .card--title {
                    font-size: 1.6rem;
                    text-align: center;
                    margin-block-end: 2rem;
                }

                .card--number {
                    text-align: center;
                    font-size: 7.2rem;
                    font-weight: bold;
                    line-height: 8rem;
                    letter-spacing: 1px;
                }

                .meassure-text {
                    font-size: 3.6rem;
                    font-weight: 400; 
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="rb title-container">
                <h3 class="rb">Today's Highlights</h3>
            </div>
            <div class="rb status-wrapper">
                <article class="rb status-card">
                    <h3 class="rb card--title">Wind Status</h3>
                    <p class="rb card--number">${this.dataset.windStatus}<span class="meassure-text">mps</span></p>
                </article>

                <article class="rb status-card">
                    <h3 class="rb card--title">Humidity</h3>
                    <p class="rb card--number">${this.dataset.humidity}<span class="meassure-text">%</span></p>
                </article>

                <article class="rb status-card">
                    <h3 class="rb card--title">Visibility</h3>
                    <p class="rb card--number">${this.dataset.visibility}<span class="meassure-text">miles</span></p>
                </article>

                <article class="rb status-card">
                    <h3 class="rb card--title">Air Pressure</h3>
                    <p class="rb card--number">${this.dataset.airPressure}<span class="meassure-text">mb</span></p>
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
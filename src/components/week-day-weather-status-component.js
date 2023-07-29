class WeekDayWeatherComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['icon', 'day', 'condition', 'min-temp', 'max-temp'];
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
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--black);
                    border-radius: 8px;
                }

                .card:not(:last-child) {
                    margin-block-end: 1rem;
                }

                .image-container {
                    width: 25%;
                    padding: 1rem;
                }

                .card--img {
                    width: 100%;
                    min-width: 24px;
                    max-width: 34px;
                }

                .data-container {
                    width: 50%;
                    padding: 1rem;
                }

                .card--day {
                    margin-block-end: .5rem;
                }

                .card--condition,
                .card--day {
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                .temp-container {
                    width: 25%;
                    padding: 1rem;
                    text-align: center;
                }

                .card--temp {
                    font-size: 1.4rem;
                    font-weight:bold;
                }     
                
                .card--temp:first-child {
                    margin-block-end: .5rem;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="rb card">
                <figure class="rb image-container">
                    <img class="rb card--img" src="${this.dataset.icon}" title="${this.dataset.condition}" alt="" draggable="false"/>
                </figure>

                <section class="rb data-container">
                    <p class="rb card--day">${this.dataset.day}</p>
                    <p class="rb card--condition">${this.dataset.condition}</p>
                </section>

                <section class="rb temp-container">
                    <p class="rb card--temp">${this.dataset.minTemp}°C</p>
                    <p class="rb card--temp">${this.dataset.maxTemp}°C</p>
                </section>
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

customElements.define('week-day-weather-component', WeekDayWeatherComponent);
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
                    margin-block-start: 0;
                    width: 100%;
                }

                .title-container h3 {
                    font-size: 2.4rem;
                    text-align: center;
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
                    background-color: var(--bg-light);
                    flex-grow: 2;
                    border-radius: 8px;
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

                @media (max-width: 598px) {
                    .title-container h3 {
                        font-size: 1.8rem;
                        text-align: left;
                    }
                    
                    .day-highlights-container {
                        background-color: var(--bg-light);
                        padding: 2rem;
                        border-radius: 20px;
                    }

                    .status-wrapper {
                        width: 100%;
                        padding: 2rem 0 0 0;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                    }

                    .status-card {
                        width: 45%;
                        padding: 0;
                        border-radius: 0;
                        margin-block-end: 1rem;
                    }

                    .wind-status-icon {
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-image: var(--wind-status-icon-dark-mode);
                    }

                    .card--title {
                        font-size: 1.6rem;
                        text-align: left;
                        margin-block-end: .5rem;
                    }

                    .card--number {
                        text-align: left;
                        font-size: 1.4rem;
                        font-weight: bold;
                        line-height: 1.6rem;
                        letter-spacing: 1px;
                    }

                    .meassure-text {
                        font-size: 1.4rem;
                        font-weight: 400; 
                    }

                    @media screen and (min-width: 370px) and (max-width: 597px) {
                        .card--title {
                            font-size: 2rem;
                        }

                        .card--number {
                            font-size: 1.6rem;
                            font-weight: bold;
                            line-height: 1.6rem;
                        }

                        .meassure-text {
                            font-size: 1.4rem;
                            font-weight: 400; 
                        }
                    }
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="day-highlights-container">            
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
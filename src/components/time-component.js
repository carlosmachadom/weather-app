class TimeComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['hours', 'minutes', 'seconds', 'ds'];
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
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .time-container {
                    padding: 0;
                }

                .time--text {
                    margin: 0;
                    padding: 0;
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--white);
                    font-weight: bold;
                }
            </style>
        `
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
        <div class="time-container" >
            <p class="time--text">${this.dataset.hours}:${this.dataset.minutes}:${this.dataset.seconds} ${this.dataset.ds}</p>
        </div>
        ${this.getStyles()}
        `

        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("time-component", TimeComponent);
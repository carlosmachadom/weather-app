class DateComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['day', 'month', 'year'];
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

                .date-container {
                    padding: 0;
                }

                .date--text {
                    margin: 0;
                    padding: 0;
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--gray);
                    font-weight: bold;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="date-container">
                <p class="date--text">${this.dataset.day} ${this.dataset.month} ${this.dataset.year}</p>
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

customElements.define('date-component', DateComponent);
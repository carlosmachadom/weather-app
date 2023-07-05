class DateComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['date'];
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
                    padding: 0 2rem;
                }

                .date--text {
                    margin: 0;
                    padding: 0;
                    font-size: 2.8rem;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="date-container">
                <p class="date--text">${this.dataset.date}</p>
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
class clockViewComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['hours', 'minutes', 'seconds', 'ds'];
    }

    attributeChangesCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal
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

                .clock-container {
                    padding: 1rem 2rem;
                }

                .clock--text {
                    margin: 0;
                    padding: 0;
                    font-size: 4.5rem;
                }
            </style>
        `
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
        <div class="clock-container" >
            <p class="clock--text">${this.dataset.hours}:${this.dataset.minutes}:${this.dataset.seconds} ${this.dataset.ds}</p>
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

customElements.define("clock-tag", clockViewComponent);
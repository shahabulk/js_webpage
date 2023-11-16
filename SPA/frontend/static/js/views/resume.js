import abstractview from "./abstractview.js";

export default class extends abstractview {
    constructor() {
        super();
        this.setTitle("Resume");

    }

    async getHtml() {
        return `
            <h1>Resume</h1>
            <p>
                I promise I have qualifications, they'll be here very soon.
            </p>
            <p>
                <a href="/posts" data-link>Download link for a pdf of my resume should probably go here</a>.
            </p>
            <p> 
                a little embedded pdf viewing window here that shows it
            </p>
        `;
    }
        
}
import abstractview from "./abstractview.js";

export default class extends abstractview {
    constructor() {
        super();
        this.setTitle("Dashboard");

    }

    async getHtml() {
        return `
            <h1>Do you like french fries?</h1>
            <p>
                Good, because that's all they feed us in this facility. I've been searching for a way out for the last sixteen years but there isn't so much as a crack in the tiling for a hair to pass through.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
        
}
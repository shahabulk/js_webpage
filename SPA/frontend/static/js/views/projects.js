import abstractview from "./abstractview.js";

export default class extends abstractview {
    constructor() {
        super();
        this.setTitle("Projects");

    }

    async getHtml() {
        return `
            <h1>Do you like milk?</h1>
            <p>
                Good, because that's all they feed us in this facility. I've been searching for a way out for the last sixteen years but there isn't so much as a crack in the tiling for a hair to pass through.
            </p>
            <p>
                <a href="/posts" data-link>(link to project goes here with a brief blurb with pictures below)</a>.
            </p>
            <p>
                address spreadsheet folium mapper
            </p>
            <p>
                <a href="/posts" data-link>(link to project goes here with a brief blurb with pictures below)</a>.
            </p>
            <p> 
                address spreadsheet placekey generator
            </p> 
            <p>
                <a href="/posts" data-link>(link to project goes here with a brief blurb with pictures below)</a>.
            </p>
            <p> 
                flask orm project
            </p>

        `;
    }
        
}
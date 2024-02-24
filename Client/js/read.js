import {getQueryParams} from "./Const.js";
const queryParams = getQueryParams();
console.log(queryParams);
const read = document.querySelector("#read");
let html = `
    <p class="read-title">
    <iframe class="read__image" scrolling="no"
    src="${queryParams.description}"
    width="100%" height="1000px" allow="autoplay" title=overflow="hidden"></iframe>
    </p>
`;
read.innerHTML = html;
console.log(html);

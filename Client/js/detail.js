const queryParams = new URLSearchParams(window.location.search);

import { getQueryParams } from "./Const.js";
async function getChapterByNovelID() {
  try {
    const listChapter = await fetchApi(
        "http://18.136.196.199:4000/novels/get-chapter-in-novel",
        "GET",
        { novelCode: item.novelCode }
    );
    console.log(listChapter);
    // Handle the response
} catch (error) {
    console.error('Error fetching chapters:', error);
    // Handle the error
}

  return listChapter;
}
console.log(getChapterByNovelID());
const item = getQueryParams();
console.log(item);

let detail = document.querySelector("#detail");
let html = `
<div class="detail-top">
  <iframe class="detail-image" scrolling="no"
    src="${item.descriptionImage}"
    width="176px" height="270" allow="autoplay" title=overflow="hidden"></iframe>
  <div class="detail-content">
    <h3 class="detail-title">${item.name}</h3>
    <p class="detail-author">Tác giả: <a href="">${item.author}</a></p>
    <button class="read" onclick="location.href='./read.html?description=${item.description}'"
    >Đọc truyện</button>
  </div>
</div>
<div class="detail-bottom">
  <h2>Mô tả truyện</h2>
  <h3>${item.name}</h3>
  <iframe class="detail-image" scrolling="no"
      src="${item.description}"
      width="100%" height="1000px" allow="autoplay" title=overflow="hidden"></iframe>
</div>

`;

detail.innerHTML = html;
console.log(html);

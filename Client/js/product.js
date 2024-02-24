import { fetchApi } from "./Const.js";
const listNovel = document.querySelector("#list__Novel");
fetchApi("http://18.136.196.199:4000/novels/get-list-novel-id")
  .then(data => {
    let htmls = data.map(item => {
      return `
      <div class="novel__item" onclick="location.href='./detail.html?id=${item._id.toString()}&name=${item.novelName}&author=${item.authorName}&status=${item.status}&view=${item.view}&description=${item.descriptionURL}&descriptionImage=${item.descriptionImage}'">
        <iframe class="novel__image" scrolling="no" src="${item.descriptionImage}" width="176px" height="270" allow="autoplay" title="${item.novelName} overflow="hidden""></iframe>
        <div class="novel__title">
          <a><h3 id="h3">${item.novelName}</h3></a>
        </div>
        <div class="novel__content">
          <div class="novel__author">
            <h4>Tác giả: <a>${item.authorName}</a></h4>
          </div>
            <div class="view">
              <p>Luợt xem: <span>${item.view}</span></p>
            </div>                                                            
            <div class="status">
              <p>Trạng thái: <span>${item.status}</span></p>
            </div>
    
        </div>
      </div>
      `;
    })
    listNovel.innerHTML = htmls.join("");
  })                                                                               
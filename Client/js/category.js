import { fetchApi } from "./Const.js";


const typeNovel = document.querySelector("#type__Novel");
fetchApi("http://18.136.196.199:4000/novels/get-all-category")
  .then(data => {
    let htmls = data.map(item => {
      // console.log(item);
      return `
        
        <div class="type__item">
            <a>${item.categoryName}</a>
        </div>
      `;
    })
    typeNovel.innerHTML = htmls.join("");
  })                                                                               
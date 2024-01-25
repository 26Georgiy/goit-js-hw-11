import{i as n,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();n.settings({position:"topRight",timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const u="https://pixabay.com/api/",m="42023783-b9c00e928a7588807e7031c34",l=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=document.querySelector(".gallery"),d=new f(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",y);function y(o){o.preventDefault();const s=l.elements.searchStr.value.trim();if(!s){l.reset(),n.error({message:"The search field cannot be empty!"});return}p.innerHTML="",c.style.display="block";const i=new URLSearchParams({key:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30,q:s});fetch(`${u}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(c.style.display="none",t.hits.length==0){n.warning({message:"Sorry, there are no images matching<br> your search query.Please try again!"});return}h(t.hits)}).catch(t=>n.error({message:`Api request error: ${t}`})).finally(()=>{l.reset()})}function h(o){p.insertAdjacentHTML("beforeend",o.map(g).join("")),d.refresh()}const g=({largeImageURL:o,webformatURL:s,tags:i,likes:t,views:e,comments:r,downloads:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <div class="item-wrap">
          <div class="image-wrap">
            <img class="gallery-image" src="${s}" alt="${i}" />
          </div>
          <ul class="metabox-list">
            <li class="mbox-info">
              <p class="mbox-info-title">Likes</p>
              <span class="mbox-info-descr">${t}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Views</p>
              <span class="mbox-info-descr">${e}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Comments</p>
              <span class="mbox-info-descr">${r}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Downloads</p>
              <span class="mbox-info-descr">${a}</span>
            </li>
          </ul>
        </div>
      </a>
    </li>`;
//# sourceMappingURL=commonHelpers.js.map

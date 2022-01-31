window.addEventListener('DOMContentLoaded', function () {
  let changeTextBtn = document.querySelector('.btn-change');
  let createTextBtn = document.querySelector('.btn-create');
  let textEl = document.querySelector('.text');
  let var1Changed = document.querySelector('#var1');

  createTextBtn.addEventListener("click", function () {
    textEl.insertAdjacentHTML('afterbegin',
      `<div>
    Жили-были <span class="sded">{var1}</span> да <span class="sbaba">{var2}</span>,
    Была у них <span class="schick">{var3}</span>,
    Снесла <span class="schick">{var3}</span> <span class="segg">{var4}</span>, не простое - золотое,
    - <span class="sded">{var1}</span> бил, бил - не разбил,
    - <span class="sbaba">{var2}</span> била, била - не разбила,
    <span class="smouse">{var5}</span> бежала, <span class="stail">{var6}</span> задела, <span id="s4">{var4}</span> упало и разбилось.,
    <span class="sded">{var1}</span> плачет, <span class="sbaba">{var2}</span> плачет, а  <span class="schick">{var3}</span> кудахчет:, <span id="sspeech">{speech}</span>
    </div>`);
    changeTextBtn.classList.remove('hidden');
    createTextBtn.classList.add('hidden');
  }, {
    once: true
  })

  changeTextBtn.addEventListener("click", function () {
    var1InputEl = document.querySelector('.ded');
    var2InputEl = document.querySelector('.baba');
    var3InputEl = document.querySelector('.chick');
    var4InputEl = document.querySelector('.egg');
    var5InputEl = document.querySelector('.mouse');
    var6InputEl = document.querySelector('.tail');
    varSpeechInputEl = document.querySelector('#speech');
    span1InputEl = document.querySelector('.sded');
    span2InputEl = document.querySelector('.sbaba');
    span3InputEl = document.querySelector('.schick');
    span4InputEl = document.querySelector('.segg');
    span5InputEl = document.querySelector('.smouse');
    span6InputEl = document.querySelector('.stail');
    spanSpeechInputEl = document.querySelector('#sspeech');

    var1InputEl.value.length !== 0 ? span1InputEl.textContent = var1InputEl.value : "";
    var2InputEl.value.length !== 0 ? span2InputEl.textContent = var2InputEl.value : "";
    var3InputEl.value.length !== 0 ? span3InputEl.textContent = var3InputEl.value : "";
    var4InputEl.value.length !== 0 ? span4InputEl.textContent = var4InputEl.value : "";
    var5InputEl.value.length !== 0 ? span5InputEl.textContent = var5InputEl.value : "";
    var6InputEl.value.length !== 0 ? span6InputEl.textContent = var6InputEl.value : "";
    varSpeechInputEl.value.length !== 0 ? spanSpeechInputEl.textContent = varSpeechInputEl.value : "";
  })
})
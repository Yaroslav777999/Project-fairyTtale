window.addEventListener('DOMContentLoaded', function () {
  let changeTextBtn = document.querySelector('.btn-change');
  let createTextBtn = document.querySelector('.btn-create');
  let textEl = document.querySelector('.text');
  // let var1Changed = document.querySelector('#var1');

  createTextBtn.addEventListener("click", function () {
    textEl.insertAdjacentHTML('afterbegin',
      `<div>
    Жили-были <span class="js-var-1">{var1}</span> да <span class="js-var-2">{var2}</span>,
    Была у них <span class="js-var-3">{var3}</span>,
    Снесла <span class="js-var-3">{var3}</span> <span class="js-var-4">{var4}</span>, не простое - золотое,
    - <span class="js-var-1">{var1}</span> бил, бил - не разбил,
    - <span class="js-var-2">{var2}</span> била, била - не разбила,
    <span class="js-var-5">{var5}</span> бежала, <span class="js-var-6">{var6}</span> задела, <span class="js-var-4">{var4}</span> упало и разбилось.,
    <span class="js-var-1">{var1}</span> плачет, <span class="js-var-2">{var2}</span> плачет, а  <span class="js-var-3">{var3}</span> кудахчет:, <span class="js-var-7">{speech}</span>
    </div>`);
    changeTextBtn.classList.remove('hidden');
    createTextBtn.classList.add('hidden');
  })

  changeTextBtn.addEventListener("click", function () {
    // var1InputEl = document.querySelector('.js-input-1');
    // var2InputEl = document.querySelector('.js-input-2');
    // var3InputEl = document.querySelector('.js-input-3');
    // var4InputEl = document.querySelector('.js-input-4');
    // var5InputEl = document.querySelector('.js-input-5');
    // var6InputEl = document.querySelector('.js-input-6');
    // varSpeechInputEl = document.querySelector('.js-input-7');

    // span1InputEl = document.querySelector('.js-var-1');
    // span2InputEl = document.querySelector('.js-var-2');
    // span3InputEl = document.querySelector('.js-var-3');
    // span4InputEl = document.querySelector('.js-var-4');
    // span5InputEl = document.querySelector('.js-var-5');
    // span6InputEl = document.querySelector('.js-var-6');
    // spanSpeechInputEl = document.querySelector('.js-var-7');

    function check(param) {
      return param.value.length > 0
    }

    function checkBtnPush() {
      let createTextBtn = document.querySelector('.btn-create');
      return createTextBtn.classList.contains('hidden');
    }

    changeTextBtn.addEventListener("click", function () {
      const arr_test = [1, 2, 3, 4, 5, 6, 7]

      arr_test.forEach((element) => {
        let varInput = document.querySelector(`.js-input-${element}`);
        if (checkBtnPush() && check(varInput)) {
          let varTest = document.querySelector(`.js-var-${element}`);
          varTest.textContent = varInput.value;
        }
      });

      // var1InputEl.value.length !== 0 ? span1InputEl.textContent = var1InputEl.value : "";
      // var2InputEl.value.length !== 0 ? span2InputEl.textContent = var2InputEl.value : "";
      // var3InputEl.value.length !== 0 ? span3InputEl.textContent = var3InputEl.value : "";
      // var4InputEl.value.length !== 0 ? span4InputEl.textContent = var4InputEl.value : "";
      // var5InputEl.value.length !== 0 ? span5InputEl.textContent = var5InputEl.value : "";
      // var6InputEl.value.length !== 0 ? span6InputEl.textContent = var6InputEl.value : "";
      // varSpeechInputEl.value.length !== 0 ? spanSpeechInputEl.textContent = varSpeechInputEl.value : "";
    })
  })
})
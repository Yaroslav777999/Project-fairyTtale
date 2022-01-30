window.addEventListener('DOMContentLoaded', function () {
  changeTextBtn = document.querySelector('.btn-change');
  createTextBtn = document.querySelector('.btn-create');
  textEl = document.querySelector('.text');
  var1Changed = document.querySelector('#var1');

  createTextBtn.addEventListener("click", function () {
    textEl.insertAdjacentHTML('afterbegin',
      `<div>
    Жили-были <span id="s1">{var1}</span> да {var2},
    Была у них {var3},
    Снесла {var3} {var4}, не простое - золотое,
    - {var1} бил, бил - не разбил,
    - {var2} била, била - не разбила,
    {var5} бежала, {var6} задела, {var4} упало и разбилось.,
    {var1} плачет, {var2} плачет, а {var3} кудахчет:,{speach}
    </div>`);
  })
  var1InputEl = document.querySelector('#var1');
  span1InputEl = document.querySelector('#s1');

  changeTextBtn.addEventListener("click", function () {
      span1InputEl.textContent = var1InputEl.value;
  })

})

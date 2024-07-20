function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = docu	.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}



function calc() {
  var type_Coffins   = document.getElementById("Coffins");
  var type_Wreaths = document.getElementById("Wreaths");
  var type_tape = document.getElementById("tape");
   
  var price = 0;
  price += parseInt(type_Coffins.options[Coffins.selectedIndex].value);
  price += parseInt(type_Wreaths.options[Wreaths.selectedIndex].value);
  price += parseInt(type_tape.options[tape.selectedIndex].value);
  result.innerHTML = price;
}

var stickyNote = $('.sticky_note')[0].outerHTML;
$('#addBtn').click(function(){
  $stickyNote = $(stickyNote);
  $stickyNote.appendTo($('.sticky_notes_container'))
})


function first(){
  document.getElementById('message')
  .innerHTML="Организация похорон начинается с транспортировки усопшего в морг. Для перевозки покойного наша фирма имеет все необходимое: спецтранспорт, носилки, компетентных сотрудников. Мы гарантируем абсолютную сохранность тела при перевозке, вне зависимости от погодных условий и дорожной обстановки. Цена транспортировки зависит от ряда условий – конкретную сумму для вас сформирует наш менеджер, готовый прийти на помощь в любую минуту;";
}

function second(){
  document.getElementById('message')
  .innerHTML="Для официального подтверждения смерти и законности процессии нужно надлежащим образом оформить все документы в МФЦ и морге. Специалист компании работает по доверенности и быстро получает на руки все похоронные свидетельства, оберегая родственников усопшего от мучительных похождений по всем инстанциям;  ";
}

function third(){
  document.getElementById('message')
  .innerHTML="Для полноценного проведения похоронной церемонии нужно обзавестись местом на кладбище. Сотрудники компании подберут оптимальный участок, опираясь на текущие территориальные сведения от представителей кладбищ Воронежа.";
}
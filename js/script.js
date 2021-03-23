
/* Service item ifChecked state */

$('.custom-checkbox input[type="checkbox"]').click(function(){
    $('#services').find('.item').removeClass('chosen');

    if($(this).prop("checked") == true){
        $(this).closest('.item').addClass('chosen');
        $('.custom-checkbox input').not(this).prop('checked', false);
    }
    else if($(this).prop("checked") == false){
        $(this).closest('.item').removeClass('chosen');
    }
}); 

/* Custom slider color and moving bubble */

$("#slider input[type=range]").mousemove(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #34b233), ' +
        'color-stop(' + percent + '%, #ade0ad)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #34b233 0%, #34b233 ' + percent + '%, #ade0ad ' + percent + '%, #ade0ad 100%)');
});

const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number((range.value - range.min) / (range.max - range.min) * 100),
      newPosition = 15 - (newValue * 0.3);
    rangeV.innerHTML = `<span>${range.value} &euro;</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


/* Custom select dropdown function */

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.setAttribute("id", "current");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  b.setAttribute("id", "dropdown");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


/* Available months??? */

var dropdown = document.getElementById('dropdown'),
    defaultService = document.getElementById('service1'),
    intress = document.getElementById('intress'),
    leping = document.getElementById('leping'),
    haldus = document.getElementById('haldus'),
    periood = document.getElementById('periood'),
    maksumus = document.getElementById('maksumus'),
    kuumakse = document.getElementById('kuumakse'),
    sissemakse = document.getElementById('sissemakse'),
    summa = Number(range.value),
    currentPeriod = document.getElementById('defaultDropdown'),
    euro = '\u20AC',
    percent = '\u0025'


$(document).ready(function () {

    if (defaultService.classList.contains('chosen')){
      DefaultTable();

      kuumakse.textContent = (maksumus.value / periood.textContent.substr(0, 2) + 
                                            Number(haldus.textContent.substr(0, 2)) + 
                                            Number(leping.textContent.substr(0, 2))).toFixed(2) + " " + euro;
    }

    $('#service1 .custom-checkbox').click(function () {
      CleanAndCreateDropdownForService(6, 120);
      UpdateTableData(7.90, 50, 1);
      SetDefaultPeriod(60);
    });

    $('#service2 .custom-checkbox').click(function () {
      CleanAndCreateDropdownForService(6, 120);
      UpdateTableData(5.90, 20, 1);
      SetDefaultPeriod(48);

    });

    // if ($(Number(range.value) >= 600 && Number(range.value) <= 9000)) {
    //   alert('asd');
    // }

    $('#service3 .custom-checkbox').click(function () {
      CleanAndCreateDropdownForService(6, 120);   
      UpdateTableData(3.90, 30, 2);
      SetDefaultPeriod(48);

    });

    $('#service4 .custom-checkbox').click(function () {
      CleanAndCreateDropdownForService(6, 120);  
      UpdateTableData(5.90, 20, 0);
      SetDefaultPeriod(60);

    });

    $('#service5 .custom-checkbox').click(function () {
      CleanAndCreateDropdownForService(6, 120); 
      UpdateTableData(6.90, 20, 0);
      SetDefaultPeriod(48);

    });

    GetDivContent();

});

function between(x, min, max) {
  return x >= min && x <= max;
}

function UpdateTableData(i, l, h) {
  intress.textContent = i.toFixed(2) + " " + percent;
  leping.textContent = l + " " + euro;
  haldus.textContent = h + " " + euro;
}

function DefaultTable() {
  CreateDropdown(6, 120);
  UpdateTableData(7.90, 50, 1);

  maksumus.textContent = summa + " " + euro;
  periood.textContent = currentPeriod.value;
}

function DeleteContentInDropdown() {
  while ( dropdown.firstChild ) dropdown.removeChild( dropdown.firstChild );
}

function CreateDropdown(min, max) {
  for (var i = min; i<=max; i += 6){
    var opt = document.createElement('DIV');
    opt.value = i + " kuud";
    opt.innerHTML = i + " kuud";
    dropdown.appendChild(opt);
  }
}

function CleanAndCreateDropdownForService(min, max) {
  DeleteContentInDropdown();
  CreateDropdown(min, max);
}

function GetDivContent() {
  $('body').on('click', '#dropdown div', function(){
    $('#defaultDropdown').find('option').text($(this).text());
    $('.select-selected').text($(this).text());  
    periood.textContent = currentPeriod.value;
  });
}

function UpdateMaksumusAndKuumakse() {
  maksumus.value = summa - sissemakse.value;
  maksumus.textContent = maksumus.value + " " + euro;
  if (sissemakse.value >= summa) {
    maksumus.textContent = 0 + " " + euro;
    $('.custom-input :input').val(summa);
  }

  kuumakse.textContent = (maksumus.value / periood.textContent.substr(0, 2) + 
                                            Number(haldus.textContent.substr(0, 2)) + 
                                            Number(leping.textContent.substr(0, 2))).toFixed(2) + " " + euro;
}

function SetDefaultPeriod(k) {
  $('#defaultDropdown').find('option').text(k + " kuud");
  $('.select-selected').text(k + " kuud");
}


/* Input onFocus value state */

$('.custom-input :input').focus(function (){
    if ($(this).val() === '-') {
      $(this).val('')
    }
});

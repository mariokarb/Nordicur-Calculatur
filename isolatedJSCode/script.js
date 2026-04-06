const input = document.getElementById("input");
const button = document.getElementById("butt");
const nordic_ur = ["æ","ø","å","ä","ö"];

function calculate_ur(){
    let count_ur = 0;
    for (l of nordic_ur){
      for (le of String(input.value)){
          if (l === le){
              count_ur++
          }
        }
      }
      alert(count_ur);
}
button.onclick = calculate_ur;

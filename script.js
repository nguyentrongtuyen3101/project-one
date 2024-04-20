
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const seconds = now.getSeconds().toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}:${seconds}`; 

    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript bắt đầu từ 0
    const year = now.getFullYear().toString();

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = `${date}/${month}/${year}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
 
function click1() {
    var modalone = document.querySelector('.modalone');
    if (modalone.style.display === "none") {
        modalone.style.display = "block"; 
    } else {
        modalone.style.display = "none"; 
    }
}
function back1() {
    var modalone = document.querySelector('.modalone');
    if (modalone.style.display === "block") {
        modalone.style.display = "none"; 
    } else {
        modalone.style.display = "block"; 
    }
}

function click2() {
    var modaltwo = document.querySelector('.modaltwo');
    if (modaltwo.style.display === "none") {
        modaltwo.style.display = "block"; 
    } else {
        modaltwo.style.display = "none"; 
    }
}
function back2() {
    var modaltwo = document.querySelector('.modaltwo');
    if (modaltwo.style.display === "block") {
        modaltwo.style.display = "none"; 
    } else {
        modaltwo.style.display = "block"; 
    }
}
function setpheptinh(tinh) {
    document.querySelector('.pheptinh').setAttribute('data', tinh);
}

function dapan() {
    var num1 = parseFloat(document.querySelector('.nhap1').value);
    var num2 = parseFloat(document.querySelector('.nhap2').value);

   
    var tinh = document.querySelector('.pheptinh').getAttribute('data');

   
    var result;
    switch(tinh) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    document.querySelector(".ketqua").textContent = "Kết quả: " + result;
}
function click3() {
    var modalthree = document.querySelector('.modalthree');
    if (modalthree.style.display === "none") {
        modalthree.style.display = "block"; 
    } else {
        modalthree.style.display = "none"; 
    }
}
function back3() {
    var modalthree = document.querySelector('.modalthree');
    if (modalthree.style.display === "block") {
        modalthree.style.display = "none"; 
    } else {
        modalthree.style.display = "block"; 
    }
}

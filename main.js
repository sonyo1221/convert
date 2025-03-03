/* 환전 서비스 만들어보기
  1.박스 2개 만들기
  2.드랍다운 리스트 만들기
  3.환율정보 들고오기
  4.드랍다운 리스트에서 아이템 선택했을 시 바뀜
  5.금액을 입력하면 환전이 됨
  6.드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
  7.숫자를 한국어로 읽는 법
  8.반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율 적용이 됨 */


let currencyRatio ={
    USD:{
        KRW:1441.75,
        USD:1,
        VND:25560.02,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00069,
        VND:17.73,
        unit:"원"
    },
    VND:{
        KRW:0.056,
        USD:0.000039,
        VND:1,
        unit:"동"
    }
}
let fromCurrency ='USD';
let toCurrency='USD';
document.querySelectorAll("#from-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
    /*1. 버튼을 가져옴
      2. 버튼에 값을 바꾼다
      3. 선택된 currency값을 변수에 저장*/
    document.getElementById("from-button").textContent=this.textContent;
    fromCurrency = this.textContent;
    convert();
})
);

document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent=this.textContent;
    toCurrency = this.textContent;
    convert();
})
);
/*1.키 입력하는 순간
  2.환전이 돼서
  3.환전된 값이 보임
*/
function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertedAmount;
}

// 전체게시판 더보기 버튼 > 전체게시판 게시글로 이동
const detailBtn = document.querySelector("#detailBtn");
console.log(detailBtn);

function goAllBoard() {
  location.href = "./board/html/All_board.html";
}
detailBtn.addEventListener("click", goAllBoard);

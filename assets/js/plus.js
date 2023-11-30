function scrollToTop() {
    // smooth한 스크롤을 위해 behavior 옵션을 'smooth'로 설정
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    
    // 홈 버튼 클릭 시 페이지 맨 위로 이동하도록 추가
    window.location.href = document.querySelector('.navbar-brand').getAttribute('href');
}

document.addEventListener('DOMContentLoaded', function () {
    // "Home" 링크를 클릭하면 scrollToTop 함수 호출
    document.querySelector('.navbar-brand').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToTop();
    });
});
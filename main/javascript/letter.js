function addComment() {
    // 작성자와 댓글 내용을 가져오기
    var author = document.getElementById('author').value;
    var text = document.getElementById('text').value;

    // 작성자나 댓글 내용이 비어 있으면 경고 후 반환
    if (!author || !text) {
        alert('이름과 댓글 내용을 모두 입력하세요.');
        return;
    }

    // 현재 날짜와 시간을 가져오기
    var currentDate = new Date();
    var dateString = currentDate.getFullYear() + '-' + 
                     ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + 
                     ('0' + currentDate.getDate()).slice(-2) + ' ' + 
                     ('0' + currentDate.getHours()).slice(-2) + ':' + 
                     ('0' + currentDate.getMinutes()).slice(-2);

    // 새로운 댓글 요소 생성
    var newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = '<div class="comment-author">' + author + '</div>' +
                           '<div class="comment-date">' + dateString + '</div>' +
                           '<div class="comment-text">' + text + '</div>';

    // 댓글 섹션에 새로운 댓글 추가
    var commentSection = document.getElementById('commentSection');
    commentSection.insertBefore(newComment, commentSection.querySelector('.comment-form'));

    // 입력 필드 초기화
    document.getElementById('author').value = '';
    document.getElementById('text').value = '';
}
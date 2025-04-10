function oldcommentView() {
    let commentSectionHtml = '';
    const comments = model.data.users;
    for (let i = 0; i < comments.length; i++) {
        commentSectionHtml+= /*HTML*/ `
        <div class="picContainer">
        ${comments[i].pfp}</div>
        <div class="commentContainer">
        ${comments[i].name}
        ${comments[i].comment}
        </div>
        <div class="starsContainer">
        ${comments[i].stars}
        </div>
        `;
    }
    return commentSectionHtml;
    }
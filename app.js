show();
function show() {
    let html = '';
    html = /*HTML*/ `
    <div id = "commentsection">
    ${usercommentView()}
    ${oldcommentView()}
    </div>
    `;
    app.innerHTML = html;
}
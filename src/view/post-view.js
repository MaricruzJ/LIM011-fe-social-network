import { eventUpdatePost, eventDeletePost, eventCountLikes } from '../controller/post-controller.js';

export default (postId, likes, postData) => {
  const postView = `
        <div class='header-post'>
          <span id="user-post">${postData.name}</span>
          <a href='http://' class='delete-post'>x</a>
        </div>
        <div class='detail-post'>
          <textarea name='' id='text-post'>${postData.post}</textarea>
        </div>
        <div class='footer-post'>
          <button class='like-post btn-post'>
          <i class="fas fa-heart icon-general"></i>
          <p>${likes}</p>
          </button>
          <button class='update-post btn-post'>
          <i class='fas fa-edit icon-general'></i>
          </button>
          <button class='comment-post btn-post'>
          <i class='fas fa-comment icon-general'></i>
          </button>
`;
  const divELem = document.createElement('div');
  divELem.setAttribute('class', 'card-post');
  divELem.setAttribute('id', postId);
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);

  const btnUpdate = divELem.querySelector('.update-post');
  btnUpdate.addEventListener('click', eventUpdatePost);

  const btnDelete = divELem.querySelector('.delete-post');
  btnDelete.addEventListener('click', eventDeletePost);

  const btnLike = divELem.querySelector('.like-post');
  btnLike.addEventListener('click', eventCountLikes);

  const btnComment = divELem.querySelector('.comment-post');
  btnComment.addEventListener('click', eventCountLikes);
};

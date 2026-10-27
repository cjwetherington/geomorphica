/**
 * @file /js/geomorphica.js
 *
 * @brief Handle JavaScript functionality unique to this theme.
 */

(function () {
  // Launch thumbnail images in an overlay window.
  document.addEventListener('DOMContentLoaded', function () {
    var coverImg = document.querySelector('article.obj_article_details .item.cover_image img');
    if (!coverImg) return;

    coverImg.style.cursor = 'zoom-in';

    coverImg.addEventListener('click', function (e) {
      e.preventDefault();

      var imgSrc = coverImg.src;
      var zoomed = false;

      var overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.style.cursor = 'zoom-out';
      overlay.style.overflow = 'auto';

      var img = document.createElement('img');
      img.src = imgSrc;
      img.alt = coverImg.alt || '';
      img.style.maxWidth = '95vw';
      img.style.maxHeight = '95vh';
      img.style.boxShadow = '0 0 24px #000';
      img.style.cursor = 'zoom-in';
      img.style.transition = 'all 0.2s';

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      function setZoom(state) {
        zoomed = state;
        if (zoomed) {
          img.style.maxWidth = 'none';
          img.style.maxHeight = 'none';
          img.style.cursor = 'zoom-out';
          overlay.style.cursor = 'default';
          overlay.style.display = 'block';
        } else {
          img.style.maxWidth = '95vw';
          img.style.maxHeight = '95vh';
          img.style.cursor = 'zoom-in';
          overlay.style.cursor = 'zoom-out';
          overlay.style.display = 'flex';
        }
      }

      img.addEventListener('click', function (ev) {
        ev.stopPropagation();
        setZoom(!zoomed);
      });

      function closeOverlay() {
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', onKeyDown);
      }
      overlay.addEventListener('click', closeOverlay);

      function onKeyDown(ev) {
        if (ev.key === 'Escape') closeOverlay();
      }
      document.addEventListener('keydown', onKeyDown);
    });
  });
})();

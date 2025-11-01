  const menuIcon = document.querySelector('.menu-icon');
  const sidebarContainer = document.querySelector('.sidebar-container');
  const closeIcon = document.querySelector('.close-icon');

  menuIcon.addEventListener('click', () => {
    sidebarContainer.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    sidebarContainer.classList.remove('active');
  });
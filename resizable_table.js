const resizableTable = document.querySelector('.resizable');
  const resizableColumns = resizableTable.querySelectorAll('th');
  let startX;
  let startWidth;

  resizableColumns.forEach(column => {
    column.addEventListener('mousedown', function(event) {
      startX = event.pageX;
      startWidth = parseInt(document.defaultView.getComputedStyle(column).width, 10);

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(event) {
      const width = startWidth + (event.pageX - startX);
      column.style.width = width + 'px';
    }

    function handleMouseUp() {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  });

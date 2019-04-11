$(document).ready(
  function () {
    const toDoArray = [];
    const colors = ['#ef6e69', '#f379a2', '#9170cb', '#5eb3f6', '#67d7e5', '#ffe083'];
    let counter = 0;

    $(".todo_text").on('keydown', function (event) {
      if (event.which == 13) {
        addToDo()
      }
    })

    $('.todo_add').on('click', function () {
      addToDo()
    });

    const addToDo = () => {
      const input = $(".todo_text");
      if ($(input).val() != '') {
        $('.todo_add').prop('disabled', false);
      }
      else ($('.todo_add').prop('disabled', true))
      const toAdd = $('.todo_text').val();
      if (toAdd.trim()) {
        const id = counter;
        toDoArray.push({
          id,
          value: toAdd,
          checked: false,
          color: colors[Math.random() * colors.length],
        })
        $('ul').append(
          `<input class="checkbox1"  id="${id}"type="checkbox"><li id="${id}" class='li1'>${toAdd}</li>`
        ),

          counter++;
      }

      $(".checkbox1").on("click", (evt) => {
        const id = +evt.currentTarget.id;
        toDoArray.map(el => {
          if (el.id === id) {
            el.checked = true;
          }
        })
      })

      $(".todo_text").val('');
      const elems = $("li");

      $(elems[elems.length - 1]).css("background-color", function () {
        if ($(this).text())
          return colors[Math.random() * colors.length ^ 0];
      });
    }    

    $(".button-square, .button-square2, .button-square3, .button-square4, .button-square5, .button-square6").on("click", (event) => {

      const arr = [];
      toDoArray.forEach(item => {
        if (item.checked) {
          arr.push(item.id)
        }
      })

      arr.forEach(id =>

        $(`#${id}`).next().css("background-color", function () {
          return event.currentTarget.style.background;
        })
      )
    })
  });

$(document).ready(() => {
  $("form").on("submit", (e) => {
    e.preventDefault();

    const task = $("#input-task").val();
    const itemRender = `<li>${task}</li>`;

    $(itemRender).appendTo("ol");
  });

  $("li").on("click", function (item) {
    $(this).toggleClass("check-item");
  });
});

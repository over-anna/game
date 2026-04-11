export function dragChoice() {

  console.log('ini drag choice f/n');

  $("#draggable1, #draggable2, #draggable3, #draggable4").draggable({ revert: "invalid" });

  $("#droppable1, #droppable2, #droppable3, #droppable4").droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Dropped!");
    }
  });
}


const username = 'anna';
export { username }

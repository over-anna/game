Spotlight
4/13/2026
In this game, the player should organize the four band members however they wish. They each get a place in the spotlight.

Uses Bootstrap styling as well as jquery.

```
<div id="draggable1" class="ui-widget-content">
      <p><img
          src="https://static.vecteezy.com/system/resources/thumbnails/055/281/612/small_2x/silhouette-of-a-man-playing-guitar-on-transparent-background-free-png.png" alt="Silhouette of a man playing guitar">
      </p>
```

```
export function dragChoice() {

  console.log('ini drag stars');

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
```

```
  <script type="module">
    import { dragChoice } from './scripts/choice-script.js';

    document.addEventListener("DOMContentLoaded", () => {
      dragChoice();
    });
  </script>
```

These code snippets work together to create draggable images. It uses the .js function to define draggables and droppables, then creates the actual images as div tags.

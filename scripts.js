$('head').append(`
<link rel="stylesheet" 
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
  crossorigin="anonymous"
/>
`);

let html = `
<script>
  $(function () {
    $("#gfg").dialog({
      autoOpen: false,
      modal: false,
    });
    $("#geeks").click(function () {
      $("#gfg").dialog("open");
    });
  });
</script>
<div class="menu">
  <i class="fa fa-copy fa-2x" id="copy-btn"></i>
  <i class="fa fa-highlighter fa-2x" id="highlight-btn"></i>
</div>
<textarea id="output"></textarea>
<div id="mypopup" class="popup">
  <div class="popup-content">
    <p>Copied!!</p>
    <span class="close-btn">×</span>
  </div>
</div>`;

html += `<div id="gfg" title="GeeksforGeeks">Jquery UI| modal dialog option</div>

`

$(document).ready(function () {

  $('body').append(html);

  var pageX, pageY;
  document.addEventListener("mouseup", (e) => {
    pageX = e.pageX;
    pageY = e.pageY;
    function copyfieldvalue() {
      var field = document.getElementById("output");
      field.focus();
      field.setSelectionRange(0, field.value.length);
      document.execCommand("copy");
    }

    let selection = document.getSelection();
    let selectedText = selection.toString();
    var menu = document.querySelector(".menu");
    if (selectedText !== "") {
      menu.style.display = "block";
      menu.style.left = pageX + "px";
      menu.style.top = pageY - 58 + "px";

      document.getElementById("output").innerHTML = selectedText;

      var popup = document.getElementById("mypopup");
      var copybtn = document.getElementById("copy-btn");

      copybtn.addEventListener("click", () => {
        copyfieldvalue();
        popup.style.display = "block";
      });

      var highlightbtn = document.getElementById("highlight-btn");

      highlightbtn.addEventListener("click", () => {
        
      });
      var span = document.getElementsByClassName("close-btn")[0];

      span.addEventListener("click", () => {
        popup.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target == popup) {
          popup.style.display = "none";
        }
      });
    } else {
      menu.style.display = "none";
    }
  });
  document.addEventListener("mousedown", (e) => {
    pageX = e.pageX;
    pageY = e.pageY;
  });
});

$(document).ready(function () {
  // Create the clock
  setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (hours < 10 ? "0" : "") + minutes;
    seconds = (hours < 10 ? "0" : "") + seconds;
    const currentTime = hours + ":" + minutes + ":" + seconds;
    $(".time").html(currentTime.toString());
  }, 1000);
  // Create the function which work the button
  let airdrop = $(".airdrop");
  airdrop.hide();
  $(".btn").click(function () {
    $btn = $(this);
    $content = $(".row");
    $content.slideToggle(500, function () {
      $btn.text(function () {
        if ($content.is(":visible")) {
          airdrop.hide();
          return "Hide";
        } else {
          airdrop.show();
          return "Collapse";
        }
      });
    });
  });
});

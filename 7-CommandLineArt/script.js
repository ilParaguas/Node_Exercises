let fig = require("figlet");

fig("Wallellujah!", function (err, data) {
  if (err) {
    console.log("Something went wrong");
    console.dir(err);
    return;
  }
  console.log(data);
});

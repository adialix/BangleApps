var images = [
  atob(
    "/wA/AH4A/AH4A/AH4Am5QWVwIWVz/DC6uCq4sTAAOZAQPJDKV7q4vTFgOZzOYzIXRFgIACF6QrBzGYul0va4PLgNRq8tlqOSFoIuQwIOBLQNRltRlgvSLoQvBRSBbBqItBAASQQXQReCXaArDAActGB2Z3q9EF7AwOzIABRwSPQAAIvJGBYuCXwhgRGBYTI4aMBGAgvcAANRLxYvilgTHzAtDAIItBtwvdMA1duldmlXXwYuBF7synM5CIWCnM4nM6mc4q0zmaPamYqBAAIhBF4XDvdWugCCulQmY0BF6QwFDYM5rtenQgBrovCzy6Bz2fRwQwBmVPF6UzFwk6rtdq9XL4IPCFQXDz+lvd0AwNPld6z/DFx6EBQ4U6rwDBmUsh0yqwRDzOYz+fzICBdwIyCAwIuPisyhxWBAAUyA4ICBCYqNBvV6zwsBulzAYIuPAAMyLIQAFlkrCY+eFoN0AQQACXyIAErtWlcrmIyCmdknN7B4dWqDpBGIIsWAAkxlYsBTYLKCWIOfLwVQTQwAYqpfBAAJhCGINWwLMBh4CBF7xgBqoyBldWBIc5nVknUWFz/+p9PF4VVBIYuBslAF8NWL4LDBlYKFrqVBF8BgBmMsg7lEz2Yz/D5PKF8EOisVhzlEz90zwwCF8EPF4MPmVdBAXDugyBz2mF8YwBMAXK4eeAgOlX8MzmYtBhyODvQdTA=="
  ),
  atob(
    "/wA/AH4A/AH4A/AAeSF92Yz4sqFYOfzAADFsulFgJeByV0uhhUwKKSFgOYulutwvSwNWq9WAAKLOFwWSFgIvBGIWmDBYpCqEsAAYtNLYIABFgdttqRB0ovMmQsDlYBBMBLlDF4JdBFoVJqFQul7SJlWlYAGMBAuBzIvBAQIvCLYN7/16vbbNLAIAHqAtFzIACMAa5DCIiOM/wuIAAJMBAAQuDF4SPBLwSIMF6KRDFwgwEF4NKFyS+IAAYuIXoQvCpIvfq3+vd7Lw4vCaAqOYlcynNQq8Wq91dgQACXwVPF70smQxBis5q10zF1LoYvBuiPXkpfGul0q5iBmU4rszqwuDXyZgCg8HXAVWmQvCLAOfz+YXYNPmZkBq4vCXyYvCgJXBruBAANdrtWz/DF4IwBdQNQGAMypIABRyYvCkouBrtXqwyCvYvCzxeBdQVQh0xF4V6F6ouBRoIABGYNdvQvBzOezGeMIN0pLQBqFzumBFiIqBE4WBXoUsMgVWGAIqBzBjBAgLqBvQLB5RcSLQVXFAQuCMQT1BRwN6LwJiBdQN0GgJsBRqaLEFgMyAAMslYvB0t6ul0z2eLwNuAwIvWAAOsRwQrCWAMxL4V7qFQugzCGoWf0wuVAAiKBlUrEIIADHQMyE7QAHvUxqotERQNQmczF8t6FgSYBmc5i0WnIvhrsrmK3Bp8rrtdmdAAAMWsgvhdYIABlUxmYwBFwNkoE/wOf5P+5QvcmQvCAAMySAM5F4JkBTYIABFzeCqwvClQvCGANd/17ul0vWeFzgABrlWqpfDllWBYT3Bz96eMJhBRgQABBQaMeYI1XF4Vdq2CBYfJF8YrBq4DCXwIvEGEGBL4IrBF4SQESIReglksdoUyAoIwCwN6d8QABvTABAIIojAH4A/AA4="
  ),
];

function drawImg(i) {
  g.drawImage(
    {
      width: 48,
      height: 48,
      bpp: 8,
      buffer: require("heatshrink").decompress(images[i]),
    },
    0,
    0,
    { scale: 3 }
  );
}

var currImg = 0;
g.clear();
drawImg(currImg);
setInterval(function () {
  currImg = (currImg + 1) % images.length;
  drawImg(currImg);
}, 200);

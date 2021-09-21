const cursorImgs = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|" ]

for (let i = 0; i < cursorImgs.length; i++) {
  setTimeout(() => process.stdout.write("\r" + cursorImgs[i] + "     "), 100 + 200*i)
}
setTimeout(() => process.stdout.write("\n"), 100 + 200*cursorImgs.length)

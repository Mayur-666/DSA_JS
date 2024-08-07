for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log();
}

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    process.stdout.write("*");
  }
  for (let j = 0; j < 4 - i; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

for (let i = 4; i >= 0; i--) {
  for (let j = 0; j < 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    process.stdout.write("*");
  }
  for (let j = 0; j < 4 - i; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars + spaces);
}
for (let i = 5 - 1; i >= 1; i--) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars + spaces);
}

for (let i = 1; i <= 1; i++) {
  for (let j = 1; j <= 5; j++) {
    let spaces = " ".repeat(5 - j);
    let stars = "*".repeat(j);
    console.log(stars + spaces);
  }
  for (let j = 1; j < 5; j++) {
    let spaces = " ".repeat(j);
    let stars = "*".repeat(5 - j);
    console.log(stars + spaces);
  }
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(((i + j + 1) % 2) + " ");
  }
  console.log();
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "");
  }
  for (let j = 1; j <= 2 * (4 - i); j++) {
    process.stdout.write(" ");
  }
  for (let j = i; j >= 1; j--) {
    process.stdout.write(j + "");
  }
  console.log();
}
let num = 1;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(num + " ");
    num++;
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log();
}

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(String.fromCharCode(65 + i) + " ");
  }
  console.log();
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i == 0 || j == 0 || j == 4 - 1 || i == 4 - 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    let num = Math.min(i, j, 6 - i, 6 - j);
    process.stdout.write(4 - num + " ");
  }
  console.log();
}
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    let num = Math.min(i, j, 6 - i, 6 - j);
    process.stdout.write(num + " ");
  }
  console.log();
}

for (let i = 0; i < 4; i++) {
  let breakpoint = (2*i+1)/2;
  let num = 65;
  for (let j = 1; j <4-i; j++) {
    process.stdout.write(" ");
  }
  for(let j = 1; j <= 2*i+1; j++) {
    process.stdout.write(String.fromCharCode(num)+"")
    if(j<= breakpoint){
      num++;
    }else{
      num--;
    }
  }
  for (let j =1; j <4-i; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

for(let i=4; i>=0; i--){
  for(let j=0; j<=4-i;j++){
    process.stdout.write(String.fromCharCode((65+i+j)+" "))
  }
  console.log();
}

for(let i=0; i<5; i++){
  for(let j=1; j<=5-i; j++){
    process.stdout.write("*")
  }
  for(let j=1; j<=2*i; j++){
    process.stdout.write(" ")
  }
  for(let j=1; j<=5-i; j++){
    process.stdout.write("*")
  }
  console.log()
}
for(let i=4; i>=0; i--){
  for(let j=1; j<=5-i; j++){
    process.stdout.write("*")
  }
  for(let j=1; j<=2*i; j++){
    process.stdout.write(" ")
  }
  for(let j=1; j<=5-i; j++){
    process.stdout.write("*")
  }
  console.log()
}

let flipped = false;
let spaces = 8;
for(let i=1; i<10; i++){
  let stars = flipped ? 5-i%5: i;
  for(let j=0; j<stars; j++){
    process.stdout.write("*")
  }
  for(let j=0; j<spaces; j++){
    process.stdout.write(" ")
  }
  spaces += flipped ? 2 : -2;
  for(let j=0; j<stars; j++){
    process.stdout.write("*")
  }
  console.log()
  if(i==5) {
    flipped = true;
    mod = 10;
    spaces = 2
  }
}
// Please Clone this before start!!
/* a, b, c 是三個 request 的 callback function，
** 分別會延遲 500, 200 300 毫秒回來
** 執行 doByOrder 之後會後依序印出 b, c, a
** 希望能改成印出 a, b, c
** 
*/ 


// DONT' change a, b, c function
const a = callback => {
  setTimeout(() => { callback('a'); }, 500);
};

const b = callback => {
  setTimeout(() => { callback('b'); }, 200);
};

const c = callback => {
  setTimeout(() => { callback('c'); }, 300);
};

const tasks = [a, b, c];


const doByOrder = (tasks, callback) => {
  a(callback)
  setTimeout(() => {
    b(callback)
    c(callback)
  }, 500)
  // modify this function to log "a" => "b" => "c"
}

doByOrder(tasks, console.log.bind(console));

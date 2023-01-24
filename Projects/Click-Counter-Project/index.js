let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function decrement() {
  count -= 1
  countEl.textContent = count
  if (count < 1) {
    count = 0
    countEl.textContent = count
  }
}

function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

function reset() {
  let countStr = 'Previous entries: '
  saveEl.textContent = countStr
  countEl.textContent = 0
  count = 0
}

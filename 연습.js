function mT (words) {
  const root = {};
  for (const word of words){
    let current = root;
    for(const letter of word){
      if(!current[letter]) current[letter] = [0, {}];
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1]
    }
  }

  return root;
}

function sol (words){
  let answer = 0;
  const trie = mT(words);
  for(const word of words){
    let count = 0;
    let current = trie;
    for(const [index, letter] of [...word].entries()){
      count += 1;
      if(current[letter][0] <= 1){
        break;
      }
      current = current[letter][1];
    }
    answer += count;
  }
  return answer;
}

const q1 = ["go", "gone", "guild"];
const q2 = ["abc", "def", "ghi", "jklm"];
const q3 = ["word", "war", "warrior", "world"];

console.log(sol(q1));
console.log(sol(q2));
console.log(sol(q3));
import fs from 'fs';
import path from 'path';
const file = path.join(process.cwd(), 'src', 'components', 'UnifiedMailer.tsx');
const s = fs.readFileSync(file, 'utf8');
console.log('SNIPPET AROUND 2621:\n', s.slice(2600,2660));
const stack = [];
const pairs = { '{': '}', '(': ')', '[': ']' };
for (let i=0;i<s.length;i++){
  const ch = s[i];
  if (ch==='"' || ch==="'" || ch==='`'){
    // skip string literal
    const quote = ch;
    i++;
    while(i<s.length){
      if (s[i]==="\\") { i+=2; continue; }
      if (s[i]===quote) break;
      i++;
    }
    continue;
  }
  if (ch === '{' || ch === '(' || ch === '[') stack.push({ch,i});
  if (ch === '}' || ch === ')' || ch === ']'){
    const last = stack.pop();
    if (!last){
      console.log('Unmatched closing', ch, 'at', i); process.exit(0);
    }
    const expected = pairs[last.ch];
    if (expected !== ch){
      console.log('Mismatched pair', last.ch, 'at', last.i, 'closed by', ch, 'at', i); process.exit(0);
    }
  }
}
if (stack.length) {
  console.log('Unclosed tokens:');
  for (const last of stack) {
    const upto = s.substring(0, last.i);
    const line = upto.split('\n').length;
    const col = last.i - upto.lastIndexOf('\n');
    console.log(last.ch, 'at char', last.i, `line ${line} col ${col}`);
  }
  process.exit(0);
}
console.log('All brackets matched');

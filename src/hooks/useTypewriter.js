import { useEffect, useState } from 'react';

const LINES = [
  'Full-Stack Developer',
  'Backend Microservices Engineer',
  'React Native Builder',
  'Test Automation Expert',
  'Spring Boot Craftsman',
];

export default function useTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let li = 0, ci = 0, del = false;
    let timeoutId;

    function type() {
      const cur = LINES[li];
      if (del) {
        ci--;
        setText(cur.slice(0, ci));
        if (ci === 0) { del = false; li = (li + 1) % LINES.length; }
        timeoutId = setTimeout(type, del ? 38 : 360);
      } else {
        ci++;
        setText(cur.slice(0, ci));
        if (ci === cur.length) { del = true; timeoutId = setTimeout(type, 2200); return; }
        timeoutId = setTimeout(type, 72);
      }
    }

    timeoutId = setTimeout(type, 1600);
    return () => clearTimeout(timeoutId);
  }, []);

  return text;
}

export default function transpile({ key, items }) {
  if (!key || !items || !items.length) {
    throw new Error('Malformed parameter');
  }

  let cmd = `bind "${key[0]}" "`;
  items.forEach((item, index) => {
    cmd += `${index ? ' ' : ''}buy ${item};`;
  });
  cmd += '"';

  return cmd;
}

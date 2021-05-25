function upper(strings, ...values) {

  const uppercased = values.map((word) => word.toUpperCase());

  ret = strings.reduce((ret, val, i) => {
    if (i > 0) {
      ret += uppercased[i - 1];
    }
    ret += strings[i];

    return ret;
  });

  return ret;
}

const name = 'kyle',
  twitter = 'getify',
  topic = 'JS Recent Parts';

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    'Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!'
);

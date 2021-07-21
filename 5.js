function getMiddle(s)
{
  if (s.length % 2 === 1) {
      return s[Math.floor(s.length / 2)]
  } else {
    return s.substr(s.length / 2 - 1, 2)
  }
}
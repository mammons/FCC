function confirmEnding(str, target) {
 var endingIndex = target.length;
  return str.substr(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");
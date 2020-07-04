const dataFromDB = {
  id: "0x4571123498125F92",
  letters: {
    a: "a",
    b: "b",
  },
  numbers: {
    one: 1,
    two: 2,
  },
  array: [1,2,3,4,5,6,7,8,9]
};




const flattenMessages = (nestedMessages, prefix = "") => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}

const messages = flattenMessages(dataFromDB);

console.log(messages);

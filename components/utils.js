export async function getStoriesId(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

export async function getStoriesItems(stories) {
  const storiesItem = await Promise.all(
    stories.map(async (id) => {
      const url = "https://hacker-news.firebaseio.com/v0/item/";
      const response = await fetch(`${url}${id}.json`);
      const json = await response.json();
      return json;
    })
  );
  return storiesItem;
}

export function compare(a, b) {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
}
export function convertHexaCode(regex) {
  let result = [];
  let cleanRegex = regex.replace("&#x", "").replace(";", "");
  for (let i = 0; i < cleanRegex.length - 1; i += 2) {
    result.push(
      String.fromCharCode(
        parseInt(cleanRegex.charAt(i) + cleanRegex.charAt(i + 1), 16)
      )
    );
  }
  return result.join("");
}

export function findHexaCode(text) {
  if (!text) return "";
  const regex = new RegExp(/&#x[\w]+;/g);
  let cleanText = text;
  const hexaCodeList = text.match(regex);

  hexaCodeList.forEach((hexaCodeItem) => {
    cleanText = cleanText.replace(hexaCodeItem, convertHexaCode(hexaCodeItem));
  });
  cleanText = cleanText.replaceAll("<p>", "\n");
  return cleanText;
}

export function unixTimeConverter(timeStamp) {
  const time = new Date(timeStamp * 1000);
  const year = time.getFullYear();
  const month = time.toLocaleDateString("en-US", { month: "short" });
  const date = time.getDate();
  const hour = time.getHours();
  const min =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  const convertedTime =
    month + " " + date + " " + year + " " + hour + ":" + min;
  return convertedTime;
}

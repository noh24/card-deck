//busines logic
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const suits = ["diamonds", "hearts", "spades", "clubs"];

const ul = document.createElement("ul");
ranks.forEach(function(rank) {
  suits.forEach(function(suit) {
    const li = document.createElement("li");
    li.append(rank + " of " + suit);
    ul.append(li);
    document.body.append(ul);
  });
});
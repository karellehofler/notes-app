const headingsAndParagraphs = [
    "# Heading 1",
    "## Heading 2",
    "### Heading 3",
    "#### Heading 4",
    "##### Heading 5",
    "###### Heading 6",
    "Paragraph"
];

const emphasis = [
    "Here's some **bold** text.",
    "Here's some *italicized* text.",
    "Here's some ***bolded and italicized*** text.",
];

const blockquotes = [
    "> Dorothy followed her through many of the beautiful rooms in her castle.",
    "> Dorothy followed her through many of the beautiful rooms in her castle. \r\n > \r\n > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.",
    "> Dorothy followed her through many of the beautiful rooms in her castle. \r\n > \r\n >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood."
];

const lists = [
    {subtitle: "Order Lists", content: "1. Wake up\r\n 2. Bathe and brush teeth\r\n 3. Eat breakfast \r\n 4. Go to Work"},
    {subtitle: "Unordered Lists", content: "- Water the plants\n - Cuddle the cat 😻\n - Eat some 🥑 toast"}
];

const images = {
    subtitle: "Copy + pasting images from the web", 
    content: "![Cute cat caption](http://fenozi.com/wp-content/uploads/2017/04/cute-cats-8.jpg)"
};

const code = "`` use backticks to write code in the editor``";

const taskLists = [
    "- [x] Drink water",
    "- [ ] Write/Chant Affirmations",
    "- [ ] Give Gratitude to the universe"
];


export { headingsAndParagraphs, emphasis, blockquotes, code, lists, images, taskLists };
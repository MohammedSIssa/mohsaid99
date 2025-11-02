import Post from "./Post";

const postImages = [
  {
    src: "https://i.imgur.com/E0Gpg0t.jpeg",
    className: "light",
  },
  {
    src: "https://i.imgur.com/WxvLlqz.jpeg",
    className: "",
  },
  {
    src: "https://i.imgur.com/sMclisf.jpeg",
    className: "",
  },
  {
    src: "https://i.imgur.com/JjHmNWs.jpeg",
    className: "",
  },
  {
    src: "https://i.imgur.com/22R8sAC.jpeg",
    className: "",
  },
  {
    src: "https://i.imgur.com/vzejg6c.jpeg",
    className: "",
  },
];

const postTitle = "مرحبا بالمنشورات ✨";

const postEvents = [
  {
    text: "أول تجربة للمنشورات 🛠️",
  },
  {
    text: "محتاج تحسينات لقدام",
  },
  {
    text: "الشكل بده شغل، وكمان بدي أعمل تغيير بقاعدة البيانات عشان اقدر اعمل منشورات وقت مابدي ✏️",
  },
];

export default function TestingPost() {
  return <Post title={postTitle} images={postImages} events={postEvents} />;
}

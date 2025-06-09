export default function WeekList({ list }) {
  return (
    <ul className="week-list text-center">
      {list.map((listItem, index) => {
        return (
          <li key={index} className="mb-5">
            <a
              href={`${
                listItem.link === "#"
                  ? "https://www.instagram.com/mohsaid.99/"
                  : listItem.link
              }`}
              target="_blank"
              className="text-lg px-5 max-w-[700px] text-center md:text-xl font-bold text-balance"
            >
              {listItem.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

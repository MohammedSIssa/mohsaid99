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
              className={`text-lg px-5 max-w-[700px] text-center md:text-xl font-bold text-balance ${
                listItem?.isGoal
                  ? `week-goal rounded-lg p-0 px-5 ${
                      listItem?.isDone
                        ? "bg-green-400 shadow-2xl shadow-green-800 text-green-900"
                        : "bg-slate-300 shadow-2xl shadow-slate-600 text-slate-900"
                    }`
                  : ""
              }`}
            >
              {listItem.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

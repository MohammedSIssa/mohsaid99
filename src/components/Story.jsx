import { NavLink } from "react-router-dom";

export default function Story({ data, id, type, isSpecial }) {
  let goldStory = isSpecial != null && Boolean(isSpecial);
  const defaultClassName = `w-[240px] min-w-[240px] h-full border-1 rounded-lg p-3 px-4 relative snap-start ${
    goldStory ? "" : ""
  }`;
  const activeClassName = `active brightness-110 ${
    goldStory ? "shadow-yellow-900 shadow-xl" : "shadow-slate-800 shadow-xl"
  }`;
  return (
    <NavLink
      to={`/${type}/${id}`}
      className={({ isActive }) =>
        isActive ? defaultClassName + " " + activeClassName : defaultClassName
      }
      style={{
        backgroundColor: `${
          goldStory ? "var(--gold-story-bg-color)" : "var(--story-bg-color)"
        }`,
        borderColor: `${
          goldStory
            ? "var(--gold-story-border-color)"
            : "var(--story-count-color)"
        }`,
      }}
    >
      <p className="font-bold text-lg mb-1">{data.duration}</p>
      <p className="text-xs mt-1">
        {data?.summary ? data.summary : "🔴"}
      </p>
      <p className="italic absolute bottom-1 left-3 story-count font-bold">
        #{id}
      </p>
      <p className={`italic absolute top-[-21px] left-3 story-year skew-x-[-2deg] font-bold p-[1px] px-[10px] rounded-md ${goldStory ? "bg-yellow-400 text-yellow-900" : "bg-rose-700 text-zinc-50"}`}>
        {data.year}
      </p>
    </NavLink>
  );
}

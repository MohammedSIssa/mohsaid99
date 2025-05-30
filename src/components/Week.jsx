import WeekSection from "./WeekSection";
import PageTransitionWrapper from "../PageTransitionWrapper";

export default function Week({ data }) {
  return (
    <PageTransitionWrapper>
      <div className="week flex flex-col items-center min-h-dvh gap-5 md:gap-8 py-15 pb-30 md:p-20">
        {data.events.map((event, index) => (
          <WeekSection event={event} key={index} />
        ))}
      </div>
    </PageTransitionWrapper>
  );
}

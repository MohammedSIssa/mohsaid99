const GoalSection = ({ goal }) => {
  return (
    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 md:mb-5">{goal.name}</div>
  )
}

export default GoalSection
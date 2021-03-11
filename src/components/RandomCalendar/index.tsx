import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          gutterSize={3.5}
          values={genDate(startDate, endDate)}
          classForValue={(item: HeatmapValue) => {
            let count2 = 0;
            if (item !== null) {
              count2 = Math.max(item.count, 0);
              count2 = Math.min(item.count, 4);
            }

            return `scale-${count2}`;
          }}
          showWeekdayLabels
        />
      </div>
    </Container>
  );
};

const genDate = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let current = startDate;
  while (isBefore(current, endDate) || isSameDay(current, endDate)) {
    const count = Math.random() * 4;
    values.push({ date: current, count: Math.round(count) });
    current = addDays(current, 1);
  }

  return values;
};

export default RandomCalendar;

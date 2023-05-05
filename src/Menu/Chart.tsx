import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export function ChartComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let chartInstance: Chart;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Destroy previous chart instance, if any
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create new chart instance
      chartInstance = new Chart(canvas, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
      });
    }

    return () => {
      // Destroy chart instance on unmount
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

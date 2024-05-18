import {useState} from "react";

export function useTransactionHistory() {
  const [transactionHistory, setTransactionHistory] = useState([
      {
        "label": "Сделка за 12.01.2023 08:45",
        "value": 800.428,
        "dynamicValueSecond": +80.4,
        "dynamicValueFirst": +15.25
      },
      {
        "label": "Сделка за 18.03.2024 11:20",
        "value": 10950,
        "dynamicValueSecond": 10000,
        "dynamicValueFirst": 18.75
      },
      {
        "label": "Сделка за 22.02.2024 16:00",
        "value": -1100,
        "dynamicValueSecond": -70,
        "dynamicValueFirst": -12.5
      },
      {
        "label": "Сделка за 30.04.2024 09:10",
        "value": -1200,
        "dynamicValueSecond": -85,
        "dynamicValueFirst": -18.00
      },
      {
        "label": "Сделка за 05.05.2024 14:30",
        "value": 1000,
        "dynamicValueSecond": 55,
        "dynamicValueFirst": +10.00
      },
      {
        "label": "Сделка за 15.05.2025 13:45",
        "value": -900,
        "dynamicValueSecond": -40,
        "dynamicValueFirst": -9.50
      },
      {
        "label": "Сделка за 24.04.2025 17:20",
        "value": 1050,
        "dynamicValueSecond": 75,
        "dynamicValueFirst": +11.25
      }
    ]
  );

  return {
    transactionHistory,
  }
}

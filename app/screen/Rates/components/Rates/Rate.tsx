import { Padding } from "../../../../common";
import { Card } from "./components/Card";

export function Rate() {
  const data = {
    title: 'Premium',
    cost: 9000,
    description: [
      {
        text: 'Доступ ко всем цепочкам',
        isAvailability: true,
      },
      {
        text: 'Неограниченное количество избранных цепочек',
        isAvailability: true,
      },
      {
        text: 'Возможность ведения доходов',
        isAvailability: true,
      },
      {
        text: 'Возможность добавлять устройства',
        isAvailability: true,
      },
    ]
  }

  const data2 = {
    title: 'Medium',
    cost: 5000,
    description: [
      {
        text: 'Доступ ко всем цепочкам',
        isAvailability: true,
      },
      {
        text: 'Неограниченное количество избранных цепочек',
        isAvailability: true,
      },
      {
        text: 'Возможность ведения доходов',
        isAvailability: false,
      },
      {
        text: 'Возможность добавлять устройства',
        isAvailability: false,
      },
    ]
  }

  return(
    <Padding>
      <Card title={data.title} cost={data.cost} description={data.description}/>
      <Card title={data2.title} cost={data2.cost} description={data2.description}/>
    </Padding>
  );
}

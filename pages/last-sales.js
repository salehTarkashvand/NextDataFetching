import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    fetch("https://nextjs-course-b6a67-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        isLoading(false);
      });
  }, []);
  if (loading) {
    return <p>loading ...</p>;
  }
  if (!sales) {
    return <p>no sales yet</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}-${sale.volume}
        </li>
      ))}
    </ul>
  );
}

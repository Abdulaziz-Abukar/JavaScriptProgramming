const dates = [
    "2023-10-04",
    "2019-03-15",
    "2024-01-01",
    "2020-07-25",
    "2022-11-19"
  ];
  
  const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));
  
  console.log(sortedDates);
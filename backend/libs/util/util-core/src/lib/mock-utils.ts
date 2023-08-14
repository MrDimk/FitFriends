export function getEnumValues<T>(enumType: T): string[] {
  return Object.values(enumType).filter(v => typeof v === "string") as string[];
}

export function getRandomInt(n: number): number {
  return Math.floor(Math.random() * (n + 1));
}

export function getRandomElement<T>(array: T[]): T {
  return array[getRandomInt(array.length - 1)];
}

export function getRandomElements<T>(array: T[], count: number): T[] {
  const result: T[] = [];
  const tempArray = [...array];

  for (let i = 0; i < count && tempArray.length > 0; i++) {
    const index = getRandomInt(tempArray.length - 1);
    result.push(tempArray[index]);
    tempArray.splice(index, 1);
  }

  return result;
}

export function getRandomDateIn(startYear: number, endYear?: number): Date {
  const startDate = new Date(startYear, 0, 1).getTime(); // 1 января startYear
  const endDate = endYear
    ? new Date(endYear, 11, 31).getTime()  // 31 декабря endYear
    : new Date().getTime(); // текущая дата и время, если endYear не задан
  // Генерируем случайное число миллисекунд в заданном промежутке
  const randomTime = startDate + Math.random() * (endDate - startDate);

  return new Date(randomTime);
}


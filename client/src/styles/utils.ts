export const passToRem = (value: number): string => {
  const converted = value / 16

  return `${converted}rem`
}

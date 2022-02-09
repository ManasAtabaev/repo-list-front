const get = (size: number) => {
  const date = new Date();
  const time = date.getHours();
  const bandwidth = (10000 * (1 - Math.E * ((time * -1) / 3))) / 1000;
  return (size / bandwidth).toFixed(2) + 's';
};

export const estimatedDownloadTimeHelper = {
  get,
};

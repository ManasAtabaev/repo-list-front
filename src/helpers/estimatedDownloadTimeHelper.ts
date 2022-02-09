const get = (size: number) => {
  const date = new Date();
  const time = 1;
  const bandwidth = (10000 * (1 - Math.E * ((time * -1) / 3))) / 1000;
  console.log(bandwidth);
  return 2;
};

export const estimatedDownloadTimeHelper = {
  get,
};

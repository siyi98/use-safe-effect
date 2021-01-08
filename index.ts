import { useEffect } from 'react';

const useSafeEffect = (mount, ...args) => {
  if (args.length && args.length > 2) {
    console.error('此方法仅支持传入三个参数：1.mount函数 2.unMount函数 3.监听的入参');
  }
  const hasUnMount: boolean = typeof args[0] === 'function';

  useEffect(
    () => {
      Promise.resolve(mount)
        .then((value) => {
          return value;
        })
        .catch((error) => {
          return error;
        });

      if (hasUnMount) {
        return () => {
          args[0];
        };
      }
    },
    hasUnMount ? args[1] : args[0]
  );
};

export default useSafeEffect;

import { useEffect } from 'react';

const useSafeEffect = (mount: Function, ...rest: any[]) => {
  if (rest.length && rest.length > 2) {
    console.error('`use-safe-effect`仅支持传入三个参数：1.mount函数 2.unMount函数 3.入参');
    return false;
  }
  const hasUnMount: boolean = typeof rest[0] === 'function';
  useEffect(
    // componentDidMount
    () => {
      Promise.resolve(mount())
        .then((value) => {
          return value;
        })
        .catch((error) => {
          return error;
        });
      // componentWillUnMount
      if (hasUnMount) {
        return () => {
          rest[0]();
        };
      }
    },
    hasUnMount ? rest[1] : rest[0]
  );
};

export default useSafeEffect;

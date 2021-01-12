import { useEffect } from 'react';

export type argsType = Function | Array<any>;

const useSafeEffect = (mount: Function, ...args: argsType[]) => {
  if (args.length && args.length > 2) {
    console.error('`use-safe-effect`仅支持传入三个参数：1.mount函数 2.unMount函数 3.入参');
    return false;
  }
  const hasUnMount: boolean = typeof args[0] === 'function';
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
          args[0]();
        };
      }
    },
    hasUnMount ? args[1] : args[0]
  );
};

export default useSafeEffect;

import { useEffect } from 'react';

const useSafeEffect = (effect, destroy, inputs) => {
  const hasDestroy: boolean = typeof destroy === 'function';

  useEffect(
    () => {
      let result;
      let mounted: boolean = true;
      let maybePromise = effect(() => {
        return mounted;
      });

      Promise.resolve(maybePromise).then((value) => {
        result = value;
      });

      return () => {
        mounted = false;

        if (hasDestroy) {
          destroy(result);
        }
      };
    },
    hasDestroy ? inputs : destroy
  );
};

export default useSafeEffect;

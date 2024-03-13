import type { Ref } from "vue";
import { ref, watch } from "vue";

export function refToPromise<T>(
  x: Ref<T>,
  options: { isResolve: (x: T) => boolean; isReject: (x: T) => boolean }
) {
  return new Promise<T>((res, rej) => {
    watch(
      x,
      () => {
        if (options.isResolve(x.value)) {
          res(x.value);
        }
        if (options.isReject(x.value)) {
          rej(x.value);
        }
      },
      { deep: true, immediate: true }
    );
  });
}

export const useCreateToast = (text: string, toaster: HTMLElement) => {
  const toast: HTMLOutputElement = createToast(text);
  addToast(toast, toaster);

  return new Promise<void>(async (resolve, reject) => {
    console.log(toast.getAnimations());
    await Promise.allSettled(
      toast.getAnimations().map((animation) => animation.finished)
    );
    toaster.removeChild(toast);
    resolve();
  });
};

const createToast = (text: string) => {
  const node = document.createElement("output");

  node.innerText = text;
  node.classList.add("toast");
  node.setAttribute("role", "status");

  return node;
};

const addToast = (toast: HTMLOutputElement, toaster: HTMLElement) => {
  const { matches: motionAllowed } = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  toaster.children.length && motionAllowed
    ? moveToast(toast, toaster)
    : toaster.appendChild(toast);
};

const moveToast = (toast: HTMLOutputElement, toaster: HTMLElement) => {
  const first = toaster.offsetHeight;

  toaster.appendChild(toast);

  const last = toaster.offsetHeight;

  const invert = last - first;

  const animation = toaster.animate(
    [{ transform: `translateY(${invert}px)` }, { transform: "translateY(0)" }],
    {
      duration: 150,
      easing: "ease-out",
    }
  );

  animation.startTime = document.timeline.currentTime;
};

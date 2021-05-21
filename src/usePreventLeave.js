export const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; // only for Chrome. Deprecated.
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export const scrollToNewItems = (ref, count) => {
  const children = ref.current?.children;

  children[children.length - count]?.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
  });
};

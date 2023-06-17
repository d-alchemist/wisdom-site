export const handleClickScroll = (dest: string) => {
  const element = document.getElementById(dest);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
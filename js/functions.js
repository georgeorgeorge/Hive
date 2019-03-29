function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

if (!is_touch_device()) {
  document.body.classList.add('activate_hover');
} else {
  document.body.classList.add('no_hover');
}

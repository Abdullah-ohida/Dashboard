const toggleSwitch = document.querySelector('.slider input[type = "range"]');
// console.log(toggleSwitch);

function switchTheme(e) {
   val = toggleSwitch.value;
   console.log(val);
   if (val >= 1) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');

   } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
   }

}

toggleSwitch.addEventListener('change', switchTheme, false);
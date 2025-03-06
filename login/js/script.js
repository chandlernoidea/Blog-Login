const container = document.querySelector('.container')
const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')

// 注册按钮点击事件，添加active类
registerBtn.addEventListener('click', () => {
  container.classList.add('active')
})

// 登录按钮点击事件，移除active类
loginBtn.addEventListener('click', () => {
  container.classList.remove('active')
})
(function () {
  const redIndex = document.getElementById('redIndex')
  const greenIndex = document.getElementById('greenIndex')
  const blackIndex = document.getElementById('blackIndex')
  const convertBtn = document.getElementById('convertBtn')
  const colorResult = document.getElementById('colorResult')
  const colorBoard = document.getElementById('colorBoard')


  //listen to the click event of convert button
  convertBtn.addEventListener('click', function () {

    //check the input if between 0-255
    let redIndexvalue = checkNumber(redIndex)
    let greenIndexvalue = checkNumber(greenIndex)
    let blackIndexvalue = checkNumber(blackIndex)

    //make all input background color white
    redIndex.style.backgroundColor = 'white'
    greenIndex.style.backgroundColor = 'white'
    blackIndex.style.backgroundColor = 'white'


    if (redIndexvalue === "err" || greenIndexvalue === "err" || blackIndexvalue === "err") {
      colorResult.value = "#err"
      //if err happens, the input will become yellow
      if (redIndexvalue === "err") {
        redIndex.style.backgroundColor = 'yellow'
      }
      if (greenIndexvalue === "err") {
        greenIndex.style.backgroundColor = 'yellow'
      }
      if (blackIndexvalue === "err") {
        blackIndex.style.backgroundColor = 'yellow'
      }
      //warnning
      alert("Please Enter an Integer between 0-255")
    } else {
      colorResult.value = "#" + redIndexvalue + greenIndexvalue + blackIndexvalue
    }
    //replace the background color
    let htmlContent = ''
    htmlContent = `<div style="background-color: ${colorResult.value}; height:100%; border-radius:1em; border: solid gray 1px"></div>`
    colorBoard.innerHTML = htmlContent
  })

  //判斷是否有正確輸入0-255間的整數
  function checkNumber(colorValue) {
    let num = Number(colorValue.value)
    //if input is blank, error
    if (colorValue.value.length === 0) {
      return "err"
    }
    //if input is integer and also between 0-255
    //if number is less than 16, it must be showed with two digits with zero in front
    if (Number.isInteger(num)) {
      if (num >= 0 && num <= 255) {
        //let text = ""
        if (num < 9) {
          //自動轉字串
          let text = "0" + num
          return text
        }
        else if (num < 16) {
          let text = "0" + num.toString(16)
          return text
        }
        return num.toString(16)
      } else {
        //alert("Please Enter an Integer 0-255")
        return "err"
      }
    } else {
      //alert("Please Enter an Integer between 0-255 again")
      return "err"
    }
  }
})()
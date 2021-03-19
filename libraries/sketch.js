var btn1, btn2, btn3,btn4, btn5, btn6, btn7, btn8, btn9, btn0, btnDot;
var btnPlus, btnMinus, btnClear, btnBackspace;
var btnDivide, btnMultiply, btnEqualto;
var btnPercentage;
var inputBox;
var val  = "";
var prevalue = 0;
var btns = [];
var sbtns = [];
var result;
var input = "";
var preresult;

function setup() {
    createCanvas(windowWidth,windowHeight)
    inputBox = createInput("").position(width/2.8,80-50).style("width","380px").style("height","50px")
    .style("font-size","30px");

    btn1 = createButton("1").position(width/2.53,height/1.45).style("width: 50px").style("height","50px")
    btn2 = createButton("2").position(btn1.x+70,btn1.y).style("width: 50px").style("height","50px")
    btn3 = createButton("3").position(btn2.x+70,btn1.y).style("width: 50px").style("height","50px")
    btn4 = createButton("4").position(btn1.x,btn1.y-100).style("width: 50px").style("height","50px")
    btn5 = createButton("5").position(btn1.x+70,btn4.y).style("width: 50px").style("height","50px")
    btn6 = createButton("6").position(btn2.x+70,btn4.y).style("width: 50px").style("height","50px")
    btn7 = createButton("7").position(btn1.x,btn4.y-100).style("width: 50px").style("height","50px")
    btn8 = createButton("8").position(btn1.x+70,btn7.y).style("width: 50px").style("height","50px")
    btn9 = createButton("9").position(btn2.x+70,btn7.y).style("width: 50px").style("height","50px")
    btn0 = createButton("0").position(btn1.x+70,btn1.y+100).style("width: 50px").style("height","50px")
    btnDot = createButton(".").position(btn2.x+70,btn0.y).style("width: 50px").style("height","50px")

    btnPlus = createButton("+").position(btn3.x+70,btn1.y).style("width: 50px").style("height","50px")
    btnMinus = createButton("-").position(btn3.x+70,btn4.y).style("width: 50px").style("height","50px")
    btnDivide = createButton("÷").position(btn3.x+70,btn7.y-100).style("width: 50px").style("height","50px")
    btnMultiply = createButton("×").position(btn3.x+70,btn7.y).style("width: 50px").style("height","50px")
    btnEqualto = createButton("=").position(btn3.x+70,btn0.y).style("width: 50px").style("height","50px")
    btnPercentage = createButton("%").position(btn2.x+70,btnDivide.y).style("width: 50px").style("height","50px")

    btnClear = createButton("C").position(btn1.x,btnDivide.y).style("width: 50px").style("height","50px")
    btnBackspace = createButton("⌫").position(btn1.x+70,btnDivide.y).style("width: 50px").style("height","50px")

    result = createElement("h1").position(inputBox.x+400,inputBox.y-10).style("color","#404040");
    preresult = createElement("h3").position(inputBox.x+190,inputBox.y+40).style("color","grey")

    btns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btnPlus,btnMinus,btnMultiply,btnDivide,btnEqualto,
    btnClear,btnBackspace];
    sbtns = [btnPlus,btnMinus,btnMultiply,btnDivide,btnEqualto,btnPercentage,btnBackspace,btnClear];

    btnEqualto.style("color: white").style("fontSize: 22px").style("backgroundColor: orange")
    for(var i = 0; i < sbtns.length-4; i++) {
        sbtns[i].style("color: orange")
        sbtns[i].style("fontSize: 25px")
    }
    for(var i = 5; i < sbtns.length; i++) {
        sbtns[i].style("color: orange")
        sbtns[i].style("fontSize: 18px")
    }

    
}

function draw() {
    background(255);

    btnColor();
    btnPressed();
    opretor();

    //result.style("textAlign","left")
    if(prevalue === undefined) {
        prevalue = 0;
    }
    preresult.html("<center>"+prevalue).style("textAlign","center");

    if(keyCode === 13) {
        background(255);
        val= input;
        if(val !== "") {
            result.html(eval(input))
        } else if(val === "") {
            result.html("0");
        }
        background("white")
    }
    if(keyCode === 32) {
        inputBox.value("");
        input = ""
    }

    if(keyDown(CONTROL) && (keyDown("R") || keyDown("r"))) {
        window.location.reload();
    }

    // document.onkeydown = function (e) {
    //     return false;
    // }
}

function btnColor() {
    btn1.mouseOver(function(){
        btn1.style("backgroundColor","#E8E8E8")
    });
    btn1.mouseOut(function(){
        btn1.style("backgroundColor","#EFEFEF")
    });

    btn2.mouseOver(function(){
        btn2.style("backgroundColor","#E8E8E8")
    });
    btn2.mouseOut(function(){
        btn2.style("backgroundColor","#EFEFEF")
    });

    btn3.mouseOver(function(){
        btn3.style("backgroundColor","#E8E8E8")
    });
    btn3.mouseOut(function(){
        btn3.style("backgroundColor","#EFEFEF")
    });

    btn4.mouseOver(function(){
        btn4.style("backgroundColor","#E8E8E8")
    });
    btn4.mouseOut(function(){
        btn4.style("backgroundColor","#EFEFEF")
    });

    btn5.mouseOver(function(){
        btn5.style("backgroundColor","#E8E8E8")
    });
    btn5.mouseOut(function(){
        btn5.style("backgroundColor","#EFEFEF")
    });

    btn6.mouseOver(function(){
        btn6.style("backgroundColor","#E8E8E8")
    });
    btn6.mouseOut(function(){
        btn6.style("backgroundColor","#EFEFEF")
    });

    btn7.mouseOver(function(){
        btn7.style("backgroundColor","#E8E8E8")
    });
    btn7.mouseOut(function(){
        btn7.style("backgroundColor","#EFEFEF")
    });

    btn8.mouseOver(function(){
        btn8.style("backgroundColor","#E8E8E8")
    });
    btn8.mouseOut(function(){
        btn8.style("backgroundColor","#EFEFEF")
    });

    btn9.mouseOver(function(){
        btn9.style("backgroundColor","#E8E8E8")
    });
    btn9.mouseOut(function(){
        btn9.style("backgroundColor","#EFEFEF")
    });
    btnPlus.mouseOver(function(){
        btnPlus.style("backgroundColor","#E8E8E8")
    });
    btnPlus.mouseOut(function(){
        btnPlus.style("backgroundColor","#EFEFEF")
    })
    btnMinus.mouseOver(function(){
        btnMinus.style("backgroundColor","#E8E8E8")
    });
    btnMinus.mouseOut(function(){
        btnMinus.style("backgroundColor","#EFEFEF")
    })
    btnMultiply.mouseOver(function(){
        btnMultiply.style("backgroundColor","#E8E8E8")
    });
    btnMultiply.mouseOut(function(){
        btnMultiply.style("backgroundColor","#EFEFEF")
    })
    btnDivide.mouseOver(function(){
        btnDivide.style("backgroundColor","#E8E8E8")
    });
    btnDivide.mouseOut(function(){
        btnDivide.style("backgroundColor","#EFEFEF")
    })
    btnEqualto.mouseOver(function(){
        btnEqualto.style("backgroundColor","#FF7900")
    });
    btnEqualto.mouseOut(function(){
        btnEqualto.style("backgroundColor","orange")
    })
    btnClear.mouseOver(function(){
        btnClear.style("backgroundColor","#E8E8E8")
    });
    btnClear.mouseOut(function(){
        btnClear.style("backgroundColor","#EFEFEF");
    })
    btnBackspace.mouseOver(function(){
        btnBackspace.style("backgroundColor","#E8E8E8")
    });
    btnBackspace.mouseOut(function(){
        btnBackspace.style("backgroundColor","#EFEFEF")
    })
    btnPercentage.mouseOver(function(){
        btnPercentage.style("backgroundColor","#E8E8E8")
    });
    btnPercentage.mouseOut(function(){
        btnPercentage.style("backgroundColor","#EFEFEF")
    })
    btn0.mouseOver(function(){
        btn0.style("backgroundColor","#E8E8E8")
    });
    btn0.mouseOut(function(){
        btn0.style("backgroundColor","#EFEFEF")
    })
    btnDot.mouseOver(function(){
        btnDot.style("backgroundColor","#E8E8E8")
    });
    btnDot.mouseOut(function(){
        btnDot.style("backgroundColor","#EFEFEF")
    })
}

function btnPressed(){
    btn1.mousePressed(function(){
        inputBox.value(inputBox.value()+'1')
        input += "1";
        prevalue = eval(input)
    })
    btn2.mousePressed(function(){
        inputBox.value(inputBox.value()+'2')
        input += "2"
        prevalue = eval(input)
    })
    btn3.mousePressed(function(){
        inputBox.value(inputBox.value()+'3')
        input += "3"
        prevalue = eval(input)
    })
    btn4.mousePressed(function(){
        inputBox.value(inputBox.value()+'4')
        input += "4"
        prevalue = eval(input)
    })
    btn5.mousePressed(function(){
        inputBox.value(inputBox.value()+'5')
        input += "5"
        prevalue = eval(input)
    })
    btn6.mousePressed(function(){
        inputBox.value(inputBox.value()+'6')
        input += "6"
        prevalue = eval(input)
    })
    btn7.mousePressed(function(){
        inputBox.value(inputBox.value()+'7')
        input += "7"
        prevalue = eval(input)
    })
    btn8.mousePressed(function(){
        inputBox.value(inputBox.value()+"8")
        input += "8"
        prevalue = eval(input)
    })
    btn9.mousePressed(function(){
        inputBox.value(inputBox.value()+"9")
        input += "9"
        prevalue = eval(input)
    })
    btnBackspace.mousePressed(function(){
        inputBox.value((inputBox.value().substring(0, inputBox.value().length - 1)));
        input = input.substring(0, input.length - 1)


        if(input.charAt(input.length-1) === "0" &&
           input.charAt(input.length-2) === "0" && 
           input.charAt(input.length-3) === "1" &&
           input.charAt(input.length-4) === "/") {
                input = input.substring(0, input.length - 1)
                input = input.substring(0, input.length - 1)
                input = input.substring(0, input.length - 1)
                input = input.substring(0, input.length - 1)
           }

           if(input.charAt(input.length-1) !== "+" ||
                input.charAt(input.length-1) !== "-" || 
                input.charAt(input.length-1) !== "*" ||
                input.charAt(input.length-1) !== "/") 
        {
            prevalue = eval(input)
        }
    })
    btn0.mousePressed(function(){
        inputBox.value(inputBox.value()+ "0")
        input += "0"
        prevalue = eval(input)
    })
    btnDot.mousePressed(function(){
        inputBox.value(inputBox.value()+ ".")
        input += "."
    })
    if(inputBox.value().length>0) {
            btnPercentage.mousePressed(function(){
                inputBox.value(inputBox.value()+ "%")
                input += "/100*"
            })
            btnPlus.mousePressed(function(){
                inputBox.value(inputBox.value()+"+")
                input += "+"
            })
            btnMinus.mousePressed(function(){
                inputBox.value(inputBox.value()+"-")
                input += "-"
            })
            btnClear.mousePressed(function(){
                inputBox.value("");
                input = ""
            })
            btnDivide.mousePressed(function(){
                inputBox.value(inputBox.value()+"÷");
                input += "/"
            })
            btnMultiply.mousePressed(function(){
                inputBox.value(inputBox.value()+ "×")
                input += "*"
            })
        }
    btnEqualto.mousePressed(function(){
        val= input;
        if(val !== "") {
            result.html("<left>"+eval(input))
        } else if(val === "") {
            result.html("0");
        }
    })
}

function opretor(){
    var value = inputBox.value().length-1;
    if(inputBox.value().charAt(value) === "+" ||
    inputBox.value().charAt(value) === "-" ||
    inputBox.value().charAt(value) === "×" ||
    inputBox.value().charAt(value) === "÷"  ||
    inputBox.value().charAt(value) === "%"||
    inputBox.value().charAt(value) === "." ||
    inputBox.value().charAt(value) === "0") {
        
        btnPercentage.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
                input.charAt(input.length-2) === "0" && 
                input.charAt(input.length-3) === "0" &&
                input.charAt(input.length-4) === "1" &&
                input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }

           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+ "%")
            input += "/100*"

            prevalue = eval(input)
        })
        btnPlus.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }
           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+"+")
            input += "+"

            prevalue = eval(input)
        })
        btnMinus.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }
           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+"-")
            input += "-"

            prevalue = eval(input)
        })
        btnDivide.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }

           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))
            inputBox.value(inputBox.value()+"÷");
            input += "/"

            prevalue = eval(input)
        })
        btnMultiply.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }
           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+ "×")
            input += "*"

            prevalue = eval(input)
        })
        btnDot.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }
           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+ ".")
            input += "."

            prevalue = eval(input)
        })
        btn0.mousePressed(function(){
            if(input.charAt(input.length-1) === "*" &&
            input.charAt(input.length-2) === "0" && 
            input.charAt(input.length-3) === "0" &&
            input.charAt(input.length-4) === "1" &&
            input.charAt(input.length-5) === "/") {
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
                    input = input.substring(0, input.length - 1)
           } else {
               input = input.substring(0,input.length-1);
           }
           inputBox.value(inputBox.value().substring(0,inputBox.value().length-1))

            inputBox.value(inputBox.value()+ "0")
            input += "0"

            prevalue = eval(input)
        })
    }
}
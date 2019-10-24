let total = 0;
let chall = 0;
let win = 0;
let loss = 0;
let crysVal = 0;
let cArray = [];
//let gameEnded = false;

window.onload = function () {
    win = 0;
        $("#win").text(win);
    loss = 0; 
        $("#loss").text(loss); }; //why is there a semicolon here tho


$("#c1").on("click", function () {
            addValone();
                $("#total").text(total);
                            }
                );
                
$("#c2").on("click", function () {
            addValtwo();
                $("#total").text(total);
                            }
                );

$("#c3").on("click", function () {
            addValthree();
                $("#total").text(total);
                            }
                );

$("#c4").on("click", function () {
            addValfour();
                $("#total").text(total);
                            }
                );
                    function addValone() {
                            total = cArray[0] + total;
                                        if (total == chall) {
                                            won();
                                                        }
                                    
                                    else if (total > chall) {
                                            lost();
                                                            }
                            return total;
                                }

                    function addValtwo() {
                            total = cArray[1] + total;
                                        if (total == chall) {
                                            won();
                                                        }
                                    
                                    else if (total > chall) {
                                            lost();
                                                            }
                            return total;
                                }
                                
                    function addValthree() {
                            total = cArray[2] + total;
                                        if (total == chall) {
                                            won();
                                                        }
                                    
                                    else if (total > chall) {
                                            lost();
                                                            }
                            return total;
                                }

                    function addValfour() {
                            total = cArray[3] + total;
                                        if (total == chall) {
                                            won();
                                                        }
                                    
                                    else if (total > chall) {
                                            lost();
                                                            }
                            return total;
                                }
                                // cArray = [button1, button2, button3, button4]
                                
////////////////////////////////////////////////////////

                    function won(){
                            win ++;
                            $("#win").text(win);
                            alert("you won!");
                            change();
                                    }

                    function lost(){
                            loss++;
                            $("#loss").text(loss);
                            alert("you lost :(");
                            change();
                                    }

                    function change() {
                            newChall();
                                $("#chall").text(chall);
                            resetTotal();
                                $("#total").text(total);
                            mkVal();
                                        }

                                    

    //newChall() makes new challenge 
                function newChall() {
                        let min = Math.ceil(19);

                        let max = Math.floor(120);
                        
                        chall = Math.floor(Math.random() * (max - min + 1)) + min; 
                        $("#chall").text(chall);

                        return chall;
                                    }
     //resetTotal() reset the total score to zero
                function resetTotal() {
                        total = 0;
                        return total;
                                        }

    //mkVal() makes crystal button values
                function mkVal() {
                    for (let i =0; i < 4; i++) {                            
                        let min = Math.ceil(1);
                        let max = Math.floor(12);
                        crysVal = Math.floor(Math.random() * (max - min + 1)) + min; 
                        cArray[i] = crysVal;
                                                }
                        return cArray;
                                 }
            mkVal();
            console.log(cArray);
            newChall();
///////////////////////////////////////////////////////////////////////////////////


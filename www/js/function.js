let value = '';
let value2 = '';
let operand = '';
let operation_feed = '';

$(document).ready(function() {

    var socket = io("localhost:3000");
    socket.on('connect', function(data) {
        console.log('Connected to Server', data)
    });

    socket.on('broadcast', function(data) {
        console.log("broadcast message", data)
    })

    $("#calculator").click(function() {
        $("#calc_page").show();
        $("#project11").hide();
        $("#project22").hide();
        $("#project33").hide();
    });

    $("#project2").click(function() {
        $("#calc_page").hide();
        $("#project11").show();
        $("#project22").hide();
        $("#project33").hide();
    });

    $("#project3").click(function() {
        $("#calc_page").hide();
        $("#project11").hide();
        $("#project22").show();
        $("#project33").hide();
    });

    $("#project4").click(function() {
        $("#calc_page").hide();
        $("#project11").hide();
        $("#project22").hide();
        $("#project33").show();
    });

    11 // var displayValue = '0';
    // $('#result').text(displayValue);

    // $('.key').each(function(index, key) {
    //     $(this).click(function(e) {
    //         if (displayValue == '0') displayValue = '';
    //         if ($(this).text() == 'C') {
    //             displayValue = '0';
    //             $('#result').text(displayValue);
    //         } else if ($(this).text() == '=') {
    //             try {
    //                 displayValue = eval(displayValue);
    //                 $('#result').text(displayValue);
    //                 displayValue = '0';
    //             } catch (e) {
    //                 displayValue = '0';
    //                 $('#result').text('ERROR');
    //             }
    //         } else {
    //             displayValue += $(this).text();
    //             $('#result').text(displayValue);
    //         }
    //         e.preventDefault()
    //     })
    // })

    // $(".btn").click(function() {
    //     let inp_val = $(this).html();
    //     operation_feed = inp_val;
    //     if (inp_val === '*' || inp_val === '/' || inp_val === '+' || inp_val === '-') {
    //         if (value === '') {
    //             alert("Please enter the number to performance the operation");
    //         } else {
    //             value += (inp_val);
    //             $(".text_input").val('');
    //             value2 = value;
    //             // value = '';
    //             operand = inp_val;
    //         }

    //     } else {
    //         if (inp_val != "=") value += (inp_val); //parseInt
    //         console.log(value);
    //         $(".text_input").val(value);
    //     }
    //     $(".result").html(operation_feed);

    // });

    // $(".equals").click(function() {
    //     value = parseInt(value);
    //     value2 = parseInt(value2)
    //     switch (operand) {
    //         case '*':
    //             $(".text_input").val(value2 * value);
    //             break;

    //         case '/':
    //             $(".text_input").val(value2 / value);
    //             break;

    //         case '+':
    //             $(".text_input").val(value2 + value);
    //             break;

    //         case '-':
    //             $(".text_input").val(value2 - value);
    //             break;


    //     }

    // })

    // $(".equals").click(function() {
    // value = $(".text_input").val(compute(parseInt(value), parseInt(value2), operand));
    // operation_feed += $(".text_input").val() + '<br>';
    //     let result = eval(value)
    //     $(".result").html(result);

    // });



    //     $(".equals").click(function() {
    //         let data = {
    //             value: value,
    //         }
    //         $.ajax({
    //             url: 'calculate',
    //             type: 'POST',
    //             data: data,
    //             dataType: 'json',
    //             success: function(data) {
    //                 console.log(data);
    //                 // alert("The result is " + data.result)
    //                 $(".result").html(value + " = " + data.result);
    //             },
    //             error: function(data, status, xhr) { alert("error"); }
    //         });
    //     });
    // });






    $(".btn").click(function() {
        let inp_val = $(this).html();
        operation_feed = inp_val;
        if (inp_val === '*' || inp_val === '/' || inp_val === '+' || inp_val === '-') {
            if (value === '') {
                alert("Please enter the number to performance the operation");
            } else {
                $(".text_input").val('');
                value2 = value;
                value = '';
                operand = inp_val;
            }

        } else {
            if (inp_val !== '=') { 
                value += parseInt(inp_val) 
            };
            console.log(value);

            $(".text_input").val(value);
        }
        //$(".result").html(operation_feed);

    });

    $(".equals").click(function() {
        // alert("hii");
        console.log(value, value2);
        // socket.emit('kadgi', { value, value2, operand })
            // value = $(".text_input").val(compute(parseInt(value), parseInt(value2), operand));
            // operation_feed += $(".text_input").val() + '<br>';

        // $(".result").html(operation_feed);
        computeServerSide()

    });

    function computeServerSide() {

        let cal_c = {
            val1: parseInt(value),
            val2: parseInt(value2),
            operand: operand
        }
        console.log(cal_c);
        $.ajax({
            type: "POST",
            url: "/calculator",
            data: cal_c,
            dataType: 'json',
            success: function(response) {
                console.log(response);
                $(".result").html(value + operand + value2 + "=" + response);
            }
        })
    }

});

function compute(val1, val2, operand) {
    let res;
    switch (operand) {
        case '*':
            res = val1 * val2;
            return res;
        case '/':
            res = val1 / val2;
            return res;
        case '+':
            res = val1 + val2;
            return res;
        case '-':
            res = val1 - val2;
            return res;
    }
}
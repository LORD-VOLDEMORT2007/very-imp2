

$(function(){
    $("#predict_button_class1").click(function(){
        Collect_Button_pressed1  = {
            "buttonPressed1" : true
        }

        $.ajax({
            type: 'POST',
            url: "/image-collector1",
            data: JSON.stringify(Collect_Button_pressed1),
            dataType: "json",
            contentType: 'application/json',

            success: function (result) {
                
                images_captured1 = result.data
                
                if (images_captured1 === "True"){
                    //post images from the folder class1
                    for (var i = 0; i < 100; ++i){
                        $("#class1-images").prepend(
                            $('<img>',{id:'theImg',src:'training_images/class1/frame' + i + ".png"})
                            )
                    }
                }
            },
            error: function (result) {
                console.log(result.responseJSON.message)
            }
        });


    })

    $("#predict_button_class2").click(function(){
        Collect_Button_pressed1  = {
            "buttonPressed2" : true
        }

        $.ajax({
            type: 'POST',
            url: "/image-collector2",
            data: JSON.stringify(Collect_Button_pressed2),
            dataType: "json",
            contentType: 'application/json',

            success: function (result) {
                
                images_captured2 = result.data
                
                if (images_captured2 === "True"){
                    //post images from the folder class1
                    for (var i = 0; i < 100; ++i){
                        $("#class2-images").prepend(
                            $('<img>',{id:'theImg',src:'training_images/class2/frame' + i + ".png"})
                            )
                    }
                }
            },
            error: function (result) {
                console.log(result.responseJSON.message)
            }
        });


    })
})

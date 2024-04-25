 $(".askai").click(function(){
            prompt = $(this).attr("prompt")+ $(this).prev().text();
            var $temp = $('<input>');
             $("body").append($temp);
             $temp.val(prompt).select();
             document.execCommand("copy");
             $temp.remove();
        })
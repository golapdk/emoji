# emoji
emoji encode decode for web application
add the emojiWeb.js file in your project
for encode the emoji use the emoji_encode function and pass the parameter, it will return the utf format emoji.




example:



      /////////////////////// use utf-e encode decode ////////////////////////////
      
      //dummy data
      var data = hi this is golap. 😀 😀
      
      //call the emoji_encode function and pass the parameter.
      var emoji = emoji_encode(data)
      
      //emoji_encode function return the utf format result.
       var emoji = hi this is golap. \uD83D\uDE00 \uD83D\uDE00
       
       //call the emoji_decode function and pass the parameter.
       var emoji = emoji_decode(emoji)
       
      //emoji_decode function return the normal format result.
       var emoji = var data = hi this is golap. 😀 😀
       

      /////////////////////// use uri encode decode ////////////////////////////
      
      //dummy data
      var data = hi this is golap. 😀 😀 
      
      //call the encodereview function and pass the parameter.
      var emoji = encodereview(data)
      
      //encodereview function return the utf format result.
       var emoji = hi%20this%20is%20golap.%20%F0%9F%98%80%20%F0%9F%98%80
       
       //call the decodereview function and pass the parameter.
       var emoji = decodereview(emoji)
       
      //decodereview function return the normal format result.
       var emoji = var data = hi this is golap. 😀 😀
       
       
       
       
       
      
      
      
  
        

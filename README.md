# emoji
emoji encode decode for web application.

Add the emojiWeb.js file in your project.

For utf-8 encode use the emoji_encode and emoji_decode function and pass the parameter.

For uri encode use the encodeuri and decodeuri function and pass the parameter.




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
      
      //call the encodeuri function and pass the parameter.
      var emoji = encodeuri(data)
      
      //encodeuri function return the utf format result.
       var emoji = hi%20this%20is%20golap.%20%F0%9F%98%80%20%F0%9F%98%80
       
       //call the decodeuri function and pass the parameter.
       var emoji = decodeuri(emoji)
       
      //decodeuri function return the normal format result.
       var emoji = var data = hi this is golap. 😀 😀
       
       
       
       
       
      
      
      
  
        

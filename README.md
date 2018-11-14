# emoji
emoji encode decode for web application
add the emojiWeb.js file in your project
for encode the emoji use the emoji_encode function and pass the parameter, it will return the utf format emoji.




example:
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
       
       
       
       
       
      
      
      
  
        

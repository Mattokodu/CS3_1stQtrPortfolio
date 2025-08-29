process.stdin.on('data', input => {

    let greeting = input.toString().trim();
  
     // use the greeting variable in your code, and start it on the next line

        /* MABUHAY	 TAGALOG
        HOLA	SPANISH
        HALLO	GERMAN
        BONJOUR	FRENCH
        CIAO	ITALIAN
        ZDRAVSTUJTE	RUSSIAN */
     
     switch (greeting) {
        case "HELLO":
            console.log("English");
            break;
        case "MABUHAY":
            console.log("Tagalog");
            break;
        case "HOLA":
            console.log("Spanish");
            break;
        case "HALLO":
            console.log("German");
            break;
        case "BONJOUR":
            console.log("French");
            break;
        default:
          console.log("Database does not have word " + greeting);
      }
  
  
  
  
  
    // end of your code
    // do not remove the lines below
  
    process.exit();
  
});
  
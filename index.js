function printText( el ){

	let letterTimeout = 40;

	let text = el.innerHTML;
	let i = 1;

	let printLn = function(){

			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	printLn();
}

var el = document.getElementById('txt');
console.log(el);
printText(el);
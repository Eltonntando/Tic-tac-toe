@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
*{
	margin: 0;
	padding: 0;
	font-family: Arial Rounded MT;
}

img {
	 height: 150px;
     width: 300px;
}


h1 {
     font-family: fantasy;
     font-stretch: expanded;
     font-weight: 90;
}

h3 {
     font-family: fantasy;
     font-stretch: expanded;
     font-weight: 70;
}

body{
	display: flex;
	min-height: 100vh;
	justify-content: center;
	overflow: hidden;
	background: black;
}
 footer{
 	 position: relative;
 	 display: flex;
 	 text-align: center;
 	 margin-top: 1000px;
 	 margin-left: -530px;
 	 color: white;
 	 text-weight: bold;
 }

 .last-footer {
 	padding-bottom: -45px;
 }


.main{
	position: relative;
	width: 500px;
	height: 520px;
	text-align: center;
}
.header{

	list-style: none;
	margin-top: 70px;

}


.header.ul{
	 list-style: none;
	 text-decoration: none;
}
table{
	width: 100%;
	height: 100%;
	margin-top: 45px;
	border-collapse: collapse;
	box-shadow: 0px 20px 30px 10px rgba(0, 0, 0, 0.5);
	background-color: white;
	border-radius: 10%;
}


#title {
    height: 100px;
    width: 300px;
}

td{
	width: 100px;
	height: 100px;
	background-color: black;
	border: 4px solid #fff;
	border-radius: 30%;
}
.fa-solid{
	color: red;
	margin: 7px;
}
.fa-circle{
	color: green;
	margin: 7px;	
}


i{
	font-size: 2.8em;
	transition:  .5s;
	transform: scale(1);
	animation: anima .7s forwards;
}
@keyframes anima {
	0%{
		transform: scale(0);
	}
	50%{
		transform: scale(1.2);
	}
	100%{
		transform: scale(1);
	}
}
#winner{
	color: #fff
}
.pop-up{
	position: absolute;
	bottom: 5%;
	left: 530px;
	height: 20%;
	width: 300px;
	background-color: skyblue;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	display: flex;
	border-radius: 10px;
	box-shadow: 10px 40px 80px -40px #000 ;
	transition: 1s;
	transform: translateY(200px);
	animation: popUp_Ani .5s ;
}
.btn{
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 10px;
}
.play-again-btn{
	width: 100px;
	font-size: 16px;
	display: flex;
	justify-content: center;
	color: #fff;
	background-color: indigo;
	font-weight: 800;
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 10px 10px 10px -10px rgb(167, 167, 167);
}
.symbol{
	justify-content: center;
	display: inline-flex;
	text-decoration-color: white;
	margin: 10px;
}
span:first-child{
	position: absolute;
	top: 200px;
	left: -30%;
	margin-top: 75px;
	border: solid;
	border-color: white;
}
span:last-child{
	position: absolute;
	top: 200px;
	right: -30%;
	margin-top: 75px;
	border: solid;
	border-color: white;
}
span:last-child, span:first-child{
	width: 200px;
	height: 90px;
	padding: 10px;
	
	align-items: center;
	font-size: 20px;
	border-radius: 20px;
	box-shadow: 10px 10px 10px -10px rgb(167, 167, 167);
}
span h3{
	color: #fff
}



.widget.contact ul {
		list-style: none;
		padding-left: 0;
		overflow: hidden;
		position: relative;
		left: -4px;
		top: 4px;
		margin-bottom: 1.5em;
	}

		.widget.contact ul li {
			display: inline-block;
			margin-right: 0.25em;
			padding-left: 0;
		}

			.widget.contact ul li a {
				-moz-transition: background-color .25s ease-in-out;
				-webkit-transition: background-color .25s ease-in-out;
				-ms-transition: background-color .25s ease-in-out;
				transition: background-color .25s ease-in-out;
				display: inline-flex;
				width: 2.5em;
				height: 2.5em;
				text-align: center;
				line-height: 2.5em;
				border-radius: 0.35em;
				outline: 0;
				opacity: 0.75;
				text-decoration: none;
				background: white;
			}

				.widget.contact ul li a:before {
					color: white;
					font-size: 1.5em;
					line-height: inherit;
				}

				.widget.contact ul li a:hover {
					background: red;
				}

				.widget.contact ul li a:active {
					background: white;
				}

				.widget.links {
					list-style: none;

				}

				ul {
					text-decoration: none;
					list-style: none;
				}

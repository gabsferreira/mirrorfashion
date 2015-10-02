function validaBusca() {
	if(document.querySelector('#q').value == '') {
		alert('Não podeia ter deixado em branco a busca!');
		document.querySelector('#q').style.backgroundColor = '#FF0000';
		return false;
	}
}

function mudaPraBranco() {
	document.querySelector('#q').style.backgroundColor = '#FFFFFF';
}

document.querySelector('#form-busca').onsubmit = validaBusca;
document.querySelector('#q').onfocus = mudaPraBranco;

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);

function pausaBanner() {
	clearInterval(timer);
}

function restartaBanner() {
	setInterval(trocaBanner, 4000);
}

document.querySelector('#botaoPausa').onclick = pausaBanner;

document.querySelector('#botaoStarta').onclick = restartaBanner;
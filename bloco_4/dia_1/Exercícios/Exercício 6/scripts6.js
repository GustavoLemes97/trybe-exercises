let chessPiece = 'Bishop';
let normalizeChessPiece = chessPiece.toLowerCase();

switch (normalizeChessPiece) {
  case 'king':
    console.log('Se move na horizontal, vertical e diagonal, uma casa por vez.');
    break;

  case 'queen':
    console.log('Se move na horizontal, vertical e diagonal.');
    break;

  case 'bishop':
    console.log('Se move na diagonal.');
    break;

  case 'pawn':
    console.log('Se move para frente(duas casas se for primeiro movimento do jogo) e diagonal(se for capturar peça inimiga).');
    break;

  case 'knight':
    console.log('Se move em L.');
    break;

  case 'rook':
    console.log('Se move na horizontal e vertical.');
    break;

  default:
    console.log('erro');
}

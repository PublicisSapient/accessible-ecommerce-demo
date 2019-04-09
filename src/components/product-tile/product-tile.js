import productTileTemplate from './product-tile.hbs';
import { handlebarsPartial } from '../../js/utils';

function register(partialName) {
  handlebarsPartial(partialName, productTileTemplate);
}

export { register };
import {updateBasketItemQuantityRequest} from '../updateItem';

it('Builds corrects query', () => {
  expect(
    updateBasketItemQuantityRequest({
      basketKey: 'basket_1',
      itemKey: 'item_5',
      quantity: 10,
    }),
  ).toMatchInlineSnapshot(`
{
  "data": {
    "quantity": 10,
  },
  "endpoint": "baskets/basket_1/items/item_5",
  "method": "PATCH",
  "params": {},
}
`);

  expect(
    updateBasketItemQuantityRequest({
      basketKey: 'basket_1',
      itemKey: 'item_5',
      quantity: 10,
      with: {
        items: {
          product: {
            attributes: 'all',
            advancedAttributes: 'all',
          },
          variant: {attributes: 'all', advancedAttributes: 'all'},
        },
      },
    }),
  ).toMatchInlineSnapshot(`
{
  "data": {
    "quantity": 10,
  },
  "endpoint": "baskets/basket_1/items/item_5",
  "method": "PATCH",
  "params": {
    "with": "items.product.attributes,items.product.advancedAttributes,items.product.images.attributes:legacy(false),items.variant.attributes,items.variant.advancedAttributes",
  },
}
`);

  expect(
    updateBasketItemQuantityRequest({
      basketKey: 'basket_1',
      itemKey: 'item_5',
      quantity: 10,
      campaignKey: 'px',
    }),
  ).toMatchInlineSnapshot(`
{
  "data": {
    "quantity": 10,
  },
  "endpoint": "baskets/basket_1/items/item_5",
  "method": "PATCH",
  "params": {
    "campaignKey": "px",
  },
}
`);
});

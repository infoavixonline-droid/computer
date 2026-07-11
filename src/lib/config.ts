import { CartItem, Product } from '../types';

export const WHATSAPP_NUMBER = '94771234567'; // Sri Lankan Store Number (Digits only, no +, no spaces)

/**
 * Formats a number into LKR currency representation.
 * Example: 285000 -> Rs. 285,000
 */
export function formatLKR(amount: number): string {
  return 'Rs. ' + amount.toLocaleString('en-US');
}

/**
 * Generates a WhatsApp deep link for buying a single product immediately.
 */
export function getBuyNowLink(product: Product, quantity: number = 1): string {
  const itemTotal = product.price * quantity;
  const message = `Hi! I'd like to order:

- ${product.name} x${quantity} - ${formatLKR(product.price)}

Total: ${formatLKR(itemTotal)}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp deep link for buying all items in the cart.
 */
export function getBuyAllLink(cartItems: CartItem[]): string {
  if (cartItems.length === 0) return '';
  
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  let itemsList = '';
  cartItems.forEach((item) => {
    itemsList += `- ${item.name} x${item.quantity} - ${formatLKR(item.price * item.quantity)}\n`;
  });

  const message = `Hi! I'd like to order the following:

${itemsList}
Total: ${formatLKR(total)}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

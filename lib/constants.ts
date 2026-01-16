export const WHATSAPP_NUMBER = '393494493683'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = 'https://instagram.com/centro_riflessologia_sanbo'
export const EMAIL = 'paganottodanya@gmail.com'
export const PHONE = '+39 349 449 36 83'
export const ADDRESS = 'Via Tombole, 168 – San Bonifacio (VR)'

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}
